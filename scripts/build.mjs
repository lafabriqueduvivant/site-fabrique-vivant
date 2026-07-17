import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { pages } from "../src/pages.mjs";
import { publicationBlockers, site } from "../src/config.mjs";
import { renderLayout } from "../src/layout.mjs";

const scriptPath = fileURLToPath(import.meta.url);
const root = resolve(dirname(scriptPath), "..");
const sourceAssets = join(root, "src", "assets");
const output = join(root, "dist");

function outputFileFor(pagePath) {
  if (pagePath === "/") return join(output, "index.html");
  if (pagePath.endsWith(".html")) return join(output, pagePath.slice(1));
  return join(output, pagePath.slice(1), "index.html");
}

function assertUniquePages() {
  const paths = new Set();
  for (const page of pages) {
    if (paths.has(page.path)) throw new Error(`Adresse de page en double : ${page.path}`);
    paths.add(page.path);
  }
}

function releaseErrors() {
  const errors = [];
  const drafts = pages.filter((page) => !page.approved);
  const placeholders = pages.filter((page) => page.body.includes("data-placeholder-photo"));

  if (drafts.length) {
    errors.push(`${drafts.length} page(s) attendent encore une validation éditoriale.`);
  }
  if (placeholders.length) {
    errors.push(`${placeholders.length} page(s) contiennent encore au moins une photo provisoire.`);
  }
  if (!site.formProviderName) errors.push("Le nom du service de formulaire n'est pas renseigné dans la politique de confidentialité.");
  if (!site.publicEmail) errors.push("L'email public n'est pas renseigné.");
  for (const [key, value] of Object.entries(site.legal)) {
    if (!value) errors.push(`La donnée légale « ${key} » manque.`);
  }
  return errors;
}

// Points acceptés temporairement (décision Fabrice 2026-07-17) : signalés sans bloquer.
function releaseWarnings() {
  const warnings = [];
  if (!site.formEndpoint) {
    warnings.push("Formulaire non branché : la page contact n'envoie rien tant que formEndpoint est vide (systeme.io à brancher).");
  }
  if (!site.publicPhone || !site.publicPhoneHref) {
    warnings.push("Téléphone public non renseigné (affiché nulle part pour l'instant).");
  }
  return warnings;
}

function sitemapXml() {
  const urls = pages
    .filter((page) => !page.noindex && page.path !== "/404.html")
    .map((page) => `  <url><loc>${site.domain}${page.path}</loc></url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export async function buildSite({ production = false } = {}) {
  assertUniquePages();

  if (production) {
    const errors = releaseErrors();
    if (errors.length) {
      const details = [...errors, "", "Garde-barrières prévues :", ...publicationBlockers.map((item) => `- ${item}`)].join("\n");
      throw new Error(`Publication bloquée volontairement.\n${details}`);
    }
    for (const warning of releaseWarnings()) {
      console.warn(`⚠️  ${warning}`);
    }
  }

  await rm(output, { recursive: true, force: true });
  await mkdir(join(output, "assets"), { recursive: true });
  await cp(join(sourceAssets, "images"), join(output, "assets", "images"), { recursive: true });
  await cp(join(sourceAssets, "fonts"), join(output, "assets", "fonts"), { recursive: true });
  await cp(join(sourceAssets, "design-tokens.css"), join(output, "assets", "design-tokens.css"));
  await cp(join(sourceAssets, "styles.css"), join(output, "assets", "styles.css"));
  await cp(join(sourceAssets, "app.js"), join(output, "assets", "app.js"));
  await cp(join(sourceAssets, "favicon.svg"), join(output, "favicon.svg"));

  for (const page of pages) {
    const target = outputFileFor(page.path);
    await mkdir(dirname(target), { recursive: true });
    const html = renderLayout(page, page.body, { production });
    await writeFile(target, html, "utf8");
  }

  const robots = production
    ? `User-agent: *\nAllow: /\nSitemap: ${site.domain}/sitemap.xml\n`
    : "User-agent: *\nDisallow: /\n";
  await writeFile(join(output, "robots.txt"), robots, "utf8");
  await writeFile(join(output, "sitemap.xml"), sitemapXml(), "utf8");
  await writeFile(join(output, ".nojekyll"), "", "utf8");
  await writeFile(
    join(output, "site.webmanifest"),
    JSON.stringify(
      {
        name: site.name,
        short_name: "Fabrique du Vivant",
        start_url: "/",
        display: "standalone",
        background_color: "#FAF6EF",
        theme_color: "#FAF6EF",
        icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }]
      },
      null,
      2
    ),
    "utf8"
  );

  console.log(`${pages.length} pages fabriquées dans dist/ (${production ? "version publiable" : "aperçu privé"}).`);
  return { output, pages };
}

const calledDirectly = process.argv[1] && resolve(process.argv[1]) === scriptPath;
if (calledDirectly) {
  buildSite({ production: process.argv.includes("--production") }).catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}

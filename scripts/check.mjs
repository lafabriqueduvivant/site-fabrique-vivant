import { readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { pages } from "../src/pages.mjs";

const scriptPath = fileURLToPath(import.meta.url);
const root = resolve(dirname(scriptPath), "..");
const output = join(root, "dist");
const knownPages = new Set(pages.map((page) => page.path));

function outputFileFor(pagePath) {
  if (pagePath === "/") return join(output, "index.html");
  if (pagePath.endsWith(".html")) return join(output, pagePath.slice(1));
  return join(output, pagePath.slice(1), "index.html");
}

function occurrences(text, pattern) {
  return [...text.matchAll(pattern)];
}

function cleanInternalHref(href) {
  return href.split("#")[0].split("?")[0] || "/";
}

export async function runChecks({ production = false } = {}) {
  const errors = [];

  for (const page of pages) {
    const file = outputFileFor(page.path);
    let html;
    try {
      html = await readFile(file, "utf8");
    } catch {
      errors.push(`${page.path} : fichier HTML absent.`);
      continue;
    }

    const h1s = occurrences(html, /<h1(?:\s|>)/g).length;
    if (h1s !== 1) errors.push(`${page.path} : ${h1s} H1 au lieu d'un seul.`);
    if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${page.path} : titre de page absent.`);
    if (!/<meta name="description" content="[^"]+">/.test(html)) errors.push(`${page.path} : description absente.`);
    if (!/<link rel="canonical" href="[^"]+">/.test(html)) errors.push(`${page.path} : adresse canonique absente.`);
    if (html.includes('href="#"')) errors.push(`${page.path} : lien provisoire « # » détecté.`);
    if (/\b(undefined|null)\b/.test(html)) errors.push(`${page.path} : valeur technique indéfinie détectée.`);

    const ids = occurrences(html, /\sid="([^"]+)"/g).map((match) => match[1]);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    if (duplicates.length) errors.push(`${page.path} : identifiant HTML en double (${[...new Set(duplicates)].join(", ")}).`);

    for (const match of occurrences(html, /<img\b[^>]*>/g)) {
      if (!/\salt="[^"]*"/.test(match[0])) errors.push(`${page.path} : image sans texte alternatif.`);
    }

    for (const match of occurrences(html, /href="([^"]+)"/g)) {
      const href = match[1];
      if (/^(https?:|mailto:|tel:|#)/.test(href)) continue;
      if (!href.startsWith("/")) {
        errors.push(`${page.path} : lien relatif inattendu « ${href} ».`);
        continue;
      }
      const clean = cleanInternalHref(href);
      if (clean.startsWith("/assets/") || clean === "/favicon.svg" || clean === "/site.webmanifest") continue;
      if (!knownPages.has(clean)) errors.push(`${page.path} : lien interne cassé vers « ${clean} ».`);
    }

    if (production) {
      if (html.includes("review-banner") || html.includes("data-placeholder-photo") || html.includes("missing-value")) {
        errors.push(`${page.path} : élément de prévisualisation présent dans la version publiable.`);
      }
      if (html.includes('content="noindex, nofollow"') && !page.noindex) {
        errors.push(`${page.path} : page publique marquée noindex.`);
      }
    } else if (!html.includes('content="noindex, nofollow"')) {
      errors.push(`${page.path} : aperçu local indexable par erreur.`);
    }
  }

  if (errors.length) {
    throw new Error(`Contrôle échoué (${errors.length} problème(s)) :\n- ${errors.join("\n- ")}`);
  }

  console.log(`Contrôle réussi : ${pages.length} pages, liens internes, métadonnées et structure vérifiés.`);
  return true;
}

const calledDirectly = process.argv[1] && resolve(process.argv[1]) === scriptPath;
if (calledDirectly) {
  runChecks({ production: process.argv.includes("--production") }).catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}

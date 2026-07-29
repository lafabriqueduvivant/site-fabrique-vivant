import { site } from "./config.mjs";

const mainNavigation = [
  { label: "Animations", href: "/animations-nature-jardin/", group: "animations" },
  { label: "Accompagnement", href: "/accompagnement-projets-nature/", group: "accompagnement" },
  { label: "Formations pro", href: "/formations-professionnelles/", group: "formations" },
  { label: "Où j'interviens", href: "/zone-intervention/", group: "zone" },
  { label: "À propos", href: "/a-propos/", group: "a-propos" }
];

const animationLinks = [
  ["Toutes les animations", "/animations-nature-jardin/"],
  ["Atelier terre vivante", "/animations-nature-jardin/atelier-terre-vivante/"],
  ["Éveil nature 0-3 ans", "/animations-nature-jardin/eveil-nature-petite-enfance/"],
  ["Programme scolaire", "/animations-nature-jardin/programme-scolaire-decouverte-vivant/"],
  ["Balade lecture du vivant", "/animations-nature-jardin/balade-nature-lecture-du-vivant/"],
  ["Ateliers jardin seniors", "/animations-nature-jardin/atelier-jardinage-seniors/"]
];

const audienceLinks = [
  ["Tous les publics", "/pour-qui/"],
  ["Crèches & petite enfance", "/pour-qui/creches-petite-enfance/"],
  ["Écoles", "/pour-qui/ecoles/"],
  ["Maisons seniors & EHPAD", "/pour-qui/maisons-seniors-ehpad/"],
  ["Collectivités", "/pour-qui/collectivites-communautes-communes/"],
  ["Entreprises", "/pour-qui/entreprises/"]
];

function isActive(page, group) {
  if (group === "animations") return page.path.startsWith("/animations-nature-jardin/");
  if (group === "accompagnement") return page.path.startsWith("/accompagnement-projets-nature/");
  if (group === "formations") return page.path.startsWith("/formations-professionnelles/");
  if (group === "zone") return page.path === "/zone-intervention/";
  if (group === "a-propos") return page.path === "/a-propos/";
  if (group === "audiences") return page.path.startsWith("/pour-qui/");
  return false;
}

function dropdown(label, links, page, group) {
  return `<details class="nav-dropdown"${isActive(page, group) ? " data-active=\"true\"" : ""}>
    <summary>${label}<svg aria-hidden="true" viewBox="0 0 16 16"><path d="m4 6 4 4 4-4"></path></svg></summary>
    <div class="nav-dropdown__panel">
      ${links.map(([text, href]) => `<a href="${href}"${page.path === href ? ' aria-current="page"' : ""}>${text}</a>`).join("")}
    </div>
  </details>`;
}

function navigation(page) {
  return `<header class="site-header">
    <nav class="site-nav container" aria-label="Navigation principale">
      <a class="site-logo" href="/" aria-label="La Fabrique du Vivant, accueil">
        <svg aria-hidden="true" viewBox="0 0 32 32"><use href="#icon-logo"></use></svg>
        <span>La Fabrique du Vivant</span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu">
        <span class="sr-only">Ouvrir le menu</span><span></span><span></span><span></span>
      </button>
      <div class="site-nav__links" id="site-menu">
        ${dropdown("Animations", animationLinks, page, "animations")}
        ${mainNavigation
          .filter((item) => item.group !== "animations")
          .map((item) => `<a class="nav-link" href="${item.href}"${isActive(page, item.group) ? ' aria-current="page"' : ""}>${item.label}</a>`)
          .join("")}
        ${dropdown("Pour qui ?", audienceLinks, page, "audiences")}
        <a class="button button--nav" href="/contact/"${page.path === "/contact/" ? ' aria-current="page"' : ""}>Contact &amp; devis</a>
      </div>
    </nav>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="container site-footer__grid">
      <div>
        <a class="site-footer__brand" href="/">La Fabrique du Vivant</a>
        <p class="handwritten">~ le vivant, entre les mains ~</p>
        <p>Animations nature &amp; jardin<br>Mâcon, Beaujolais, Lyon</p>
      </div>
      <div>
        <h2>Explorer</h2>
        <a href="/animations-nature-jardin/">Animations</a>
        <a href="/accompagnement-projets-nature/">Accompagnement</a>
        <a href="/formations-professionnelles/">Formations pro</a>
        <a href="/a-propos/">À propos</a>
      </div>
      <div>
        <h2>Votre projet</h2>
        <a href="/zone-intervention/">Zone d'intervention</a>
        <a href="/contact/">Contact &amp; devis</a>
        <span>Membre du réseau GRAINE</span>
      </div>
      <div>
        <h2>Suivre l'actualité</h2>
        <a href="${site.social.instagram}">Instagram</a>
        <a href="${site.social.facebook}">Facebook</a>
      </div>
      <div>
        <h2>Informations</h2>
        <a href="/mentions-legales/">Mentions légales</a>
        <a href="/confidentialite/">Confidentialité</a>
        <span>© ${new Date().getFullYear()} ${site.legal.fullName} · La Fabrique du Vivant</span>
      </div>
    </div>
  </footer>`;
}

function breadcrumbs(page) {
  if (!page.breadcrumbs?.length) return "";
  const items = [["Accueil", "/"], ...page.breadcrumbs];
  return `<nav class="breadcrumbs container" aria-label="Fil d'Ariane"><ol>
    ${items
      .map(([label, href], index) => {
        const last = index === items.length - 1;
        return `<li>${last ? `<span aria-current="page">${label}</span>` : `<a href="${href}">${label}</a>`}</li>`;
      })
      .join("")}
  </ol></nav>`;
}

function breadcrumbSchema(page) {
  if (!page.breadcrumbs?.length) return null;
  const items = [["Accueil", "/"], ...page.breadcrumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${site.domain}${path}`
    }))
  };
}

function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.domain,
    image: `${site.domain}/assets/images/image-partage.jpg`,
    description: site.description,
    founder: { "@type": "Person", name: site.legal.fullName },
    sameAs: Object.values(site.social),
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    knowsAbout: [
      "Animation nature",
      "Jardin pédagogique",
      "Gestion différenciée des espaces verts",
      "Sol vivant"
    ]
  };
}

function svgSprite() {
  return `<svg class="svg-sprite" aria-hidden="true" width="0" height="0">
    <defs>
      <g id="icon-logo" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 27V16"></path><path d="M16 19c-7 0-11-4-12-10 7 0 11 4 12 10Z"></path><path d="M16 15c7 0 11-4 12-10-7 0-11 4-12 10Z"></path></g>
      <!-- Les pictogrammes décoratifs ont été retirés du site le 2026-07-29
           (décision Fabrice : rendu jugé peu soigné). Seuls restent le logo de
           marque, la pousse des blocs d'aperçu interne et le trait de terre. -->
      <g id="icon-sprout" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 31h20l-2 11H16z"></path><path d="M24 31V18"></path><path d="M24 21c-7 0-11-4-12-10 7 0 11 4 12 10Z"></path><path d="M24 17c7 0 11-4 12-10-7 0-11 4-12 10Z"></path></g>
      <g id="line-soil" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M0 39q150-5 300-1t300 0 300 1 300-2"></path><path d="M120 38c-1-8 0-13 4-18m3 18c0-6 2-10 6-13m-13 13c-1-4-4-7-8-9"></path><path d="M425 38c-2-7-2-12 0-17m7 17c1-6 4-10 8-12m-18 12c-2-4-5-6-9-7"></path><path d="M765 39c-1-9 1-14 5-19m4 19c0-6 3-10 7-13m-20 13c-2-5-5-8-9-10"></path><path d="M1055 37c-1-7 0-11 3-15m5 15c1-5 3-8 7-10"></path></g>
    </defs>
  </svg>`;
}

export function renderLayout(page, body, { production = false } = {}) {
  const canonical = `${site.domain}${page.path}`;
  const schemas = [breadcrumbSchema(page)];
  if (page.path === "/" || page.path === "/zone-intervention/") schemas.push(businessSchema());
  const robots = page.noindex || !production ? "noindex, nofollow" : "index, follow";
  const review = !production && page.review?.length
    ? `<aside class="review-banner" role="note"><div class="container"><strong>Aperçu de travail.</strong> ${page.review.join(" ")}</div></aside>`
    : "";

  return `<!doctype html>
<html lang="fr" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Politique de sécurité de contenu (audit 2026-07-25). Le site est hébergé
       sur des pages statiques : on ne peut pas envoyer d'en-tête HTTP, d'où la
       balise. Chaque origine listée correspond à un usage réel et vérifié :
       tout (styles, polices, images, script du site) vient du site lui-même ;
       seuls le guichet du formulaire de contact et celui de l'inscription à la
       fiche de départ sortent vers l'extérieur. Conséquence utile : si une page
       était un jour altérée, elle ne pourrait ni charger un script venu
       d'ailleurs, ni renvoyer un formulaire vers un autre domaine.
       'unsafe-inline' reste nécessaire : le gabarit porte un petit script en
       ligne et les pages 22 attributs de style. Les contenus étant écrits en
       dur dans les sources (aucune saisie de visiteur), il n'y a pas de porte
       d'injection à refermer de ce côté. -->
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' ${site.ficheFormAction ? new URL(site.ficheFormAction).origin : ""}; form-action 'self' ${site.formEndpoint ? new URL(site.formEndpoint).origin : ""}; base-uri 'self'; object-src 'none'; frame-src 'none'">
  <meta name="theme-color" content="#FAF6EF">
  <meta name="robots" content="${robots}">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <meta name="author" content="${site.legal.fullName}">
  <link rel="canonical" href="${canonical}">
  <link rel="manifest" href="/site.webmanifest">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="${site.locale}">
  <meta property="og:site_name" content="${site.name}">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:url" content="${canonical}">
  <!-- Vignette des partages (messageries, réseaux sociaux). En JPEG 1200x630 et
       non en WebP comme le reste du site : plusieurs plateformes ne savent pas
       lire le WebP et afficheraient le lien sans image. -->
  <meta property="og:image" content="${site.domain}/assets/images/image-partage.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Jardinière plantée avec des résidents, La Fabrique du Vivant">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <!-- La police du corps est réclamée dès la première ligne du HTML : sans ça,
       le titre s'affiche d'abord dans la police de secours puis change sous les
       yeux du visiteur. -->
  <link rel="preload" href="/assets/fonts/albert-sans-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/assets/styles.css">
  <script>document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');</script>
  ${schemas.filter(Boolean).map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join("\n  ")}
</head>
<body class="page-${page.kind || "standard"}">
  <a class="skip-link" href="#contenu">Aller au contenu</a>
  ${svgSprite()}
  ${navigation(page)}
  ${review}
  ${breadcrumbs(page)}
  <main id="contenu">${body}</main>
  ${footer()}
  <script src="/assets/app.js" defer></script>
</body>
</html>`;
}

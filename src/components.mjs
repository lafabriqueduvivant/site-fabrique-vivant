const imageSets = {
  jardiniere: {
    small: "/assets/images/photo-jardiniere-800.webp",
    smallWidth: 800,
    large: "/assets/images/photo-jardiniere-1400.webp",
    largeWidth: 1400
  },
  cedres: {
    small: "/assets/images/photo-cedres-800.webp",
    smallWidth: 800,
    large: "/assets/images/photo-cedres-1600.webp",
    largeWidth: 1600
  },
  saule: {
    small: "/assets/images/photo-saule-800.webp",
    smallWidth: 450,
    large: "/assets/images/photo-saule-1200.webp",
    largeWidth: 675
  },
  atelierTerre: {
    small: "/assets/images/photo-atelier-terre-800.webp",
    smallWidth: 800,
    large: "/assets/images/photo-atelier-terre-1400.webp",
    largeWidth: 1400
  },
  eveilNature: {
    small: "/assets/images/photo-eveil-nature-700.webp",
    smallWidth: 700,
    large: "/assets/images/photo-eveil-nature-1080.webp",
    largeWidth: 1080
  },
  scolaire: {
    small: "/assets/images/photo-scolaire-300.webp",
    smallWidth: 300,
    large: "/assets/images/photo-scolaire-423.webp",
    largeWidth: 423
  },
  fabricePortrait: {
    small: "/assets/images/photo-fabrice-portrait-800.webp",
    smallWidth: 800,
    large: "/assets/images/photo-fabrice-portrait-1400.webp",
    largeWidth: 1400
  },
  formationTerrain: {
    small: "/assets/images/photo-formation-terrain-800.webp",
    smallWidth: 800,
    large: "/assets/images/photo-formation-terrain-1000.webp",
    largeWidth: 1000
  },
  gestionDifferenciee: {
    small: "/assets/images/photo-gestion-differenciee-800.webp",
    smallWidth: 800,
    large: "/assets/images/photo-gestion-differenciee-1400.webp",
    largeWidth: 1400
  }
};

export function icon(name, className = "icon") {
  return `<svg class="${className}" aria-hidden="true" viewBox="0 0 48 48"><use href="#icon-${name}"></use></svg>`;
}

export function sectionHeading(title, eyebrow = "", align = "center") {
  return `<header class="section-heading section-heading--${align}">
    ${eyebrow ? `<p class="handwritten">${eyebrow}</p>` : ""}
    <h2>${title}</h2>
  </header>`;
}

export function woodTags(items, align = "center") {
  return `<ul class="wood-tags wood-tags--${align}" aria-label="Repères pratiques">
    ${items.map((item) => `<li class="wood-tag">${item}</li>`).join("")}
  </ul>`;
}

export function soilDivider(background = "ivory") {
  return `<div class="soil-divider soil-divider--${background}" aria-hidden="true">
    <svg viewBox="0 0 1200 48" preserveAspectRatio="none"><use href="#line-soil"></use></svg>
  </div>`;
}

export function pageHero({
  eyebrow,
  title,
  lead,
  tags = [],
  primary = true,
  secondary = null,
  compact = false
}) {
  return `<section class="page-hero${compact ? " page-hero--compact" : ""}">
    <div class="container page-hero__inner">
      ${eyebrow ? `<p class="handwritten page-hero__eyebrow">${eyebrow}</p>` : ""}
      <h1>${title}</h1>
      <p class="page-hero__lead">${lead}</p>
      ${primary ? `<div class="button-row"><a class="button" href="/contact/">Demander un devis</a>${secondary ? `<a class="button button--secondary" href="${secondary.href}">${secondary.label}</a>` : ""}</div>` : ""}
      ${tags.length ? woodTags(tags) : ""}
    </div>
  </section>`;
}

export function picture({
  name,
  alt,
  caption = "",
  position = "center",
  eager = false,
  grass = "top-right",
  className = ""
}) {
  if (!imageSets[name]) {
    return photoPlaceholder(name || "Photo de terrain à prévoir", className);
  }

  const set = imageSets[name];
  return `<figure class="field-photo ${className}">
    <div class="sketch-frame sketch-frame--${grass}">
      <img src="${set.large}" srcset="${set.small} ${set.smallWidth}w, ${set.large} ${set.largeWidth}w" sizes="(max-width: 760px) 92vw, 50vw" alt="${alt}" style="object-position:${position}" width="1600" height="900" ${eager ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'}>
    </div>
    ${caption ? `<figcaption class="handwritten">${caption}</figcaption>` : ""}
  </figure>`;
}

export function photoPlaceholder(label, className = "") {
  return `<figure class="field-photo field-photo--placeholder ${className}" data-placeholder-photo="true">
    <div class="sketch-frame sketch-frame--top-left">
      <div class="media-placeholder">${icon("sprout", "media-placeholder__icon")}<span>${label}</span></div>
    </div>
    <figcaption class="handwritten">~ photo de terrain à ajouter avant publication ~</figcaption>
  </figure>`;
}

export function featureGrid(items, options = {}) {
  const { columns = 3, className = "" } = options;
  return `<div class="feature-grid feature-grid--${columns} ${className}">
    ${items
      .map(
        (item) => `<article class="feature">
          ${item.icon ? `<div class="sketch-icon">${icon(item.icon)}</div>` : ""}
          ${item.eyebrow ? `<p class="handwritten feature__eyebrow">${item.eyebrow}</p>` : ""}
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>`
      )
      .join("")}
  </div>`;
}

export function cardGrid(items, options = {}) {
  const { columns = 3, className = "", labelledBy = "" } = options;
  return `<div class="card-grid card-grid--${columns} ${className}"${labelledBy ? ` aria-labelledby="${labelledBy}"` : ""}>
    ${items.map(renderCard).join("")}
  </div>`;
}

function renderCard(item) {
  const media = item.image
    ? `<div class="card__media"><img src="/assets/images/photo-${item.image}-800.webp" alt="${item.alt || ""}" style="object-position:${item.position || "center"}" loading="lazy" decoding="async"></div>`
    : item.placeholder
      ? `<div class="card__media card__media--placeholder" data-placeholder-photo="true">${icon(item.icon || "sprout")}<span>Photo à prévoir</span></div>`
      : `<div class="card__media card__media--illustration">${icon(item.icon || "sprout")}</div>`;

  const link = item.href
    ? `<a class="text-link" href="${item.href}">${item.linkLabel || "Découvrir"}<span aria-hidden="true"> →</span></a>`
    : "";

  return `<article class="card${item.featured ? " card--featured" : ""}${item.href ? "" : " card--static"}">
    ${media}
    <div class="card__body">
      ${item.badge ? `<span class="wood-label">${item.badge}</span>` : ""}
      ${item.eyebrow ? `<p class="handwritten card__eyebrow">${item.eyebrow}</p>` : ""}
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      ${link}
    </div>
  </article>`;
}

export function splitSection({
  heading,
  eyebrow = "",
  paragraphs = [],
  media,
  reverse = false,
  background = "sand",
  tags = [],
  id = ""
}) {
  return `<section class="section section--${background}"${id ? ` id="${id}"` : ""}>
    <div class="container split${reverse ? " split--reverse" : ""}">
      <div class="split__media">${media}</div>
      <div class="split__copy">
        ${eyebrow ? `<p class="handwritten">${eyebrow}</p>` : ""}
        <h2>${heading}</h2>
        ${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        ${tags.length ? woodTags(tags, "start") : ""}
      </div>
    </div>
  </section>`;
}

export function processSteps(items) {
  return `<ol class="steps">
    ${items
      .map(
        (item, index) => `<li class="step">
          <span class="step__number" aria-hidden="true">${index + 1}</span>
          <div><h3>${item.title}</h3><p>${item.text}</p></div>
        </li>`
      )
      .join("")}
  </ol>`;
}

export function faq(items) {
  return `<div class="faq">
    ${items
      .map(
        (item) => `<details class="faq__item">
          <summary>${item.question}</summary>
          <div class="faq__answer"><p>${item.answer}</p></div>
        </details>`
      )
      .join("")}
  </div>`;
}

export function audiencePills(items) {
  return `<div class="audience-pills">
    ${items.map((item) => `<a class="audience-pill" href="${item.href}">${icon(item.icon)}<span>${item.label}</span></a>`).join("")}
  </div>`;
}

export function practitionerCard(extraSentence = "") {
  return `<section class="section section--ivory practitioner-section">
    <div class="container">
      <article class="practitioner-card">
        <div class="practitioner-card__portrait">
          <img src="/assets/images/photo-fabrice-portrait-avatar.webp" alt="Portrait de Fabrice" width="150" height="150" loading="lazy" decoding="async">
        </div>
        <div>
          <p class="handwritten">~ qui anime ? ~</p>
          <h2>Fabrice Maira, jardinier passé de l'autre côté du guidon</h2>
          <p>Seize ans agent territorial dans un service espaces verts : je connais de l'intérieur le quotidien des équipes, les contraintes d'une structure et le langage du terrain. ${extraSentence}</p>
          ${woodTags(["16 ans de terrain public", "membre du réseau GRAINE"], "start")}
          <a class="text-link" href="/a-propos/">Découvrir le parcours <span aria-hidden="true">→</span></a>
        </div>
      </article>
    </div>
  </section>`;
}

export function finalCta({ title = "Parlons de votre projet", text, question = "ou posez-moi simplement votre question, sans devis, sans engagement", ficheLink = false }) {
  return `<section class="final-cta wood-texture">
    <div class="container final-cta__inner">
      <p class="handwritten">~ échange sans engagement, réponse sous 48 h ~</p>
      <h2>${title}</h2>
      <p>${text}</p>
      <a class="button" href="/contact/">Demander un devis</a>
      <a class="final-cta__soft-link" href="/contact/?intention=question">${question}</a>
      ${ficheLink ? `<a class="final-cta__soft-link" href="/fiche-depart/">Votre projet est encore flou ? Clarifiez-le en 15 minutes avec la Fiche de départ.</a>` : ""}
    </div>
  </section>`;
}

export function ficheDepartTeaser(background = "sage") {
  return `<section class="section section--${background}">
    <div class="container fiche-teaser">
      <p class="handwritten">~ votre projet est encore flou ? ~</p>
      <h2>Clarifiez votre projet nature en 15 minutes</h2>
      <p>La Fiche de départ vous aide à poser votre public, votre lieu, votre objectif et vos principales contraintes avant de demander un devis.</p>
      <a class="button button--secondary" href="/fiche-depart/">Découvrir la Fiche de départ</a>
    </div>
  </section>`;
}

export function previewOnly(message) {
  return `<aside class="preview-note" data-preview-only="true"><strong>À relire dans cet aperçu :</strong> ${message}</aside>`;
}

import {
  cardGrid,
  faq,
  featureGrid,
  ficheDepartTeaser,
  finalCta,
  pageHero,
  practitionerCard,
  sectionHeading,
  soilDivider,
  splitSection,
  spotlight
} from "./components.mjs";

// Gabarit d'un carnet de terrain : le récit d'une prestation réelle, rangé
// sous sa page d'offre. Contrairement à une page d'offre, il ne vend pas :
// il raconte, puis renvoie vers l'offre et vers le contact. Sans formule
// commerciale dans le hero, pour que la lecture reste un récit.
export function renderCarnetPage(data) {
  const sections = (data.sections || []).map(renderCarnetSection).join("");
  const offerBack = data.offerBack
    ? spotlight({
        eyebrow: data.offerBack.eyebrow,
        title: data.offerBack.title,
        text: data.offerBack.text,
        href: data.offerBack.href,
        linkLabel: data.offerBack.linkLabel
      })
    : "";

  return `${pageHero({
    eyebrow: data.hero.eyebrow,
    title: data.hero.title,
    lead: data.hero.lead,
    tags: data.hero.tags,
    primary: false,
    compact: true,
    media: data.hero.media
  })}
    ${sections}
    ${offerBack}
    ${finalCta(data.cta)}`;
}

function renderCarnetSection(section) {
  if (section.media) {
    return splitSection({
      heading: section.heading,
      eyebrow: section.eyebrow || "",
      paragraphs: section.paragraphs,
      media: section.media,
      reverse: section.reverse,
      background: section.background || "sand"
    });
  }

  return `<section class="section section--${section.background || "ivory"}">
    <div class="container reading-width">
      ${section.eyebrow ? `<p class="handwritten">${section.eyebrow}</p>` : ""}
      <h2>${section.heading}</h2>
      ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </div>
  </section>`;
}

export function renderOfferPage(data) {
  const variants = data.variants?.length
    ? `<section class="section section--sage">
        <div class="container">
          ${sectionHeading(data.variantsTitle, data.variantsEyebrow)}
          ${cardGrid(data.variants, { columns: data.variantColumns || 2 })}
        </div>
      </section>`
    : "";

  return `${pageHero(data.hero)}
    ${soilDivider("ivory")}
    ${splitSection({
      heading: data.principle.title,
      eyebrow: data.principle.eyebrow,
      paragraphs: data.principle.paragraphs,
      media: data.principle.media,
      background: "sand"
    })}
    <section class="section section--ivory">
      <div class="container">
        ${sectionHeading(data.benefitsTitle, data.benefitsEyebrow)}
        ${featureGrid(data.benefits)}
        <p class="section-intro" style="margin-top:52px"><span class="handwritten" style="display:block">~ et concrètement ? ~</span>${data.reassurance}</p>
      </div>
    </section>
    ${variants}
    ${data.extraSections?.join("") || ""}
    ${practitionerCard(data.practitionerSentence)}
    <section class="section section--white">
      <div class="container">
        ${sectionHeading("Questions pratiques", "~ pour préparer votre demande ~")}
        ${faq(data.faq)}
      </div>
    </section>
    ${data.fiche === "teaser" ? ficheDepartTeaser("sand") : ""}
    ${finalCta({ ...data.cta, ficheLink: data.fiche === "link" })}`;
}

export function renderAudiencePage(data) {
  return `${pageHero(data.hero)}
    ${soilDivider("ivory")}
    <section class="section section--sand">
      <div class="container">
        ${sectionHeading(data.benefitsTitle, data.benefitsEyebrow)}
        ${featureGrid(data.benefits)}
      </div>
    </section>
    <section class="section section--ivory">
      <div class="container">
        ${sectionHeading(data.offersTitle || "Les interventions pensées pour vous", data.offersEyebrow || "~ trois façons de commencer ~")}
        ${cardGrid(data.offers, { columns: data.offerColumns || 3 })}
      </div>
    </section>
    ${soilDivider("ivory")}
    <section class="section section--sage">
      <div class="container">
        ${sectionHeading(data.teamTitle, data.teamEyebrow)}
        ${featureGrid(data.teamPoints, { columns: data.teamColumns || 3 })}
      </div>
    </section>
    ${data.extraSections?.join("") || ""}
    ${data.fiche === false ? "" : ficheDepartTeaser("sand")}
    ${finalCta(data.cta)}`;
}

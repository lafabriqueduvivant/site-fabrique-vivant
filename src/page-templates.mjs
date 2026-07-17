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
  splitSection
} from "./components.mjs";

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
    ${ficheDepartTeaser("sand")}
    ${finalCta(data.cta)}`;
}

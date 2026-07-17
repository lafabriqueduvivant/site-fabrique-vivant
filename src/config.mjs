export const site = {
  name: "La Fabrique du Vivant",
  domain: "https://lafabriqueduvivant.fr",
  description:
    "Animations nature et jardin, accompagnement de projets et formations professionnelles à Mâcon, dans le Beaujolais et à Lyon.",
  locale: "fr_FR",
  areaServed: ["Mâcon", "Beaujolais", "Villefranche-sur-Saône", "Lyon"],
  formEndpoint: "https://api.web3forms.com/submit",
  formProviderName: "Web3Forms",
  // Clé publique Web3Forms (visible dans le HTML par conception) — associée à fab@lafabriqueduvivant.fr.
  formAccessKey: "b65cefcb-e97c-4c9e-aa43-1c93b679735f",
  // Guichet d'inscription du service d'emailing pour la Fiche de départ (étape « Formulaire inline » du tunnel).
  // L'envoi se fait en JSON via app.js ; le service valide l'email et déclenche la règle d'automatisation.
  ficheFormAction: "https://ed7d-fab.systeme.io/public/426764879e897ac72d3e85daf6a1af9fd76048df/show",
  publicEmail: "fab@lafabriqueduvivant.fr",
  publicPhone: "",
  publicPhoneHref: "",
  legal: {
    fullName: "Fabrice Maira",
    status: "Micro-entreprise",
    siret: "929 755 619 00020",
    hostName: "GitHub Pages",
    hostAddress: "GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis"
  }
};

// Textes, zone géographique, mentions légales et photos validés par Fabrice le 2026-07-17.
export const publicationBlockers = [];

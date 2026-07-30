import { site } from "./config.mjs";
import {
  audiencePills,
  cardGrid,
  featureGrid,
  ficheDepartTeaser,
  finalCta,
  pageHero,
  photoPlaceholder,
  picture,
  processSteps,
  sectionHeading,
  soilDivider,
  splitSection,
  spotlight,
  testimonial,
  trackStrip,
  woodTags,
  zoneReminder
} from "./components.mjs";

// Retour écrit reçu le 2026-04-24 après la sortie nature du 2026-04-20. La
// structure a donné son accord, mais l'attribution reste anonyme (décision
// Fabrice, 2026-07-29) : ni le nom de la personne, ni celui de la crèche, ni
// sa localisation. La coquille du message d'origine (« ne changer ») est
// rétablie en « ne changez » ; rien d'autre n'est modifié.
const temoignageCreche = {
  author: "Une directrice de crèche",
  context: "après une sortie nature avec les tout-petits, avril 2026"
};
import { renderAudiencePage, renderOfferPage } from "./page-templates.mjs";

const draftReview = ["Texte intégré pour relecture dans le site. Validation éditoriale encore requise avant publication."];

const audiences = [
  { label: "Crèches & petite enfance", href: "/pour-qui/creches-petite-enfance/", icon: "sprout" },
  { label: "Écoles & périscolaire", href: "/pour-qui/ecoles/", icon: "book" },
  { label: "Maisons seniors & EHPAD", href: "/pour-qui/maisons-seniors-ehpad/", icon: "watering" },
  { label: "Collectivités", href: "/pour-qui/collectivites-communautes-communes/", icon: "town" },
  { label: "Entreprises", href: "/pour-qui/entreprises/", icon: "leaves" }
];

const missing = (label) => `<span class="missing-value">${label} à compléter</span>`;

export const pages = [];

pages.push({
  path: "/",
  kind: "home",
  title: "Animations nature & jardin, accompagnement de projets — La Fabrique du Vivant",
  description:
    "Animations nature et jardin pour petits et grands, accompagnement de projets, formations. Mâcon, Beaujolais, Lyon. Par un jardinier avec 16 ans de terrain en collectivité.",
  approved: true,
  review: draftReview,
  body: `${pageHero({
    eyebrow: "~ animations nature & jardin, depuis le terrain ~",
    title: "Faire vivre la nature et le jardin dans votre structure",
    lead:
      "Ateliers, balades, projets de jardin et formations autour du vivant. Pour les crèches, les écoles, les maisons seniors, les collectivités et les entreprises, à Mâcon, dans le Beaujolais et à Lyon.",
    secondary: { href: "/animations-nature-jardin/", label: "Découvrir les animations" },
    media: picture({
      name: "jardiniere",
      alt: "Jardinière plantée avec les résidents d'une maison seniors",
      caption: "~ jardinière plantée avec les résidents d'une maison seniors, mai 2026 ~",
      grass: "top-left",
      eager: true
    })
  })}
  ${trackStrip(
    "Depuis avril 2026, j'ai animé pour des tout-petits en crèche, des résidents en maison seniors, des habitants sur un site naturel et une communauté de communes."
  )}
  ${soilDivider("ivory")}
  <section class="section section--sand">
    <div class="container">
      ${sectionHeading("Trois façons de travailler ensemble", "~ de l'atelier de 2 heures au projet qui dure ~")}
      ${cardGrid(
        [
          {
            image: "eveil-nature",
            alt: "Un temps d'éveil à la nature avec des enfants, matières naturelles",
            position: "center 30%",
            eyebrow: "~ le vivant entre les mains ~",
            title: "Animations nature & jardin",
            text: "Ateliers terre vivante, éveil nature des tout-petits, balades « lecture du vivant », jardin avec les aînés.",
            href: "/animations-nature-jardin/",
            linkLabel: "Voir les animations"
          },
          {
            image: "jardin-pedagogique",
            alt: "Jardin vivant avec serre et pergola, massifs fleuris",
            eyebrow: "~ de l'idée au lieu vivant ~",
            title: "Accompagnement de projets",
            text: "Jardin pédagogique, jardin partagé, espaces verts vivants : votre projet porté de la conception à l'autonomie.",
            href: "/accompagnement-projets-nature/",
            linkLabel: "Voir l'accompagnement"
          },
          {
            image: "gestion-differenciee",
            alt: "Chemin enherbé dans un espace vert en gestion différenciée",
            eyebrow: "~ par quelqu'un qui a fait le métier ~",
            title: "Formations professionnelles",
            text: "Gestion différenciée, compostage, biodiversité : former vos équipes depuis 16 ans d'expérience de terrain.",
            href: "/formations-professionnelles/",
            linkLabel: "Voir les formations"
          }
        ],
        { columns: 3 }
      )}
    </div>
  </section>
  ${spotlight({
    badge: "l'atelier phare",
    eyebrow: "~ l'atelier qui fait parler ~",
    title: "L'atelier terre vivante en pots",
    text: "Chacun assemble dans son pot les étages d'un sol vivant, à partir d'épluchures, de feuilles mortes et de compost, puis repart avec, sa graine semée dedans. De la crèche à l'entreprise, c'est l'atelier qui fait toucher du doigt ce qui se passe sous nos pieds.",
    tags: ["environ 2 h, adaptable", "en salle ou dehors", "tout le matériel est fourni"],
    href: "/animations-nature-jardin/atelier-terre-vivante/",
    linkLabel: "Découvrir l'atelier phare"
  })}
  <section class="section section--sand">
    <div class="container">
      ${sectionHeading("Pour qui ?", "~ chaque public a sa porte d'entrée ~")}
      ${audiencePills(audiences)}
    </div>
  </section>
  ${soilDivider("sand")}
  <section class="section section--sage">
    <div class="container proof-strip">
      ${picture({
        name: "fabricePortrait",
        alt: "Portrait de Fabrice Maira en extérieur",
        caption: "~ seize ans agent territorial, puis le choix de transmettre ~",
        position: "center 25%",
        grass: "top-left"
      })}
      <div class="proof-strip__copy">
        <p class="handwritten">~ seize ans les mains dans la terre ~</p>
        <h2>Un intervenant qui vient du terrain</h2>
        <p>Seize ans agent territorial dans un service espaces verts, puis le choix de transmettre. Je ne récite pas des noms d'espèces : j'apprends à lire le vivant et les lieux. Le sol, l'eau, les arbres, les usages et les histoires qui relient un paysage à celles et ceux qui l'habitent.</p>
        <p>Membre du réseau GRAINE, j'interviens dans votre structure, avec vos équipes, à votre rythme.</p>
        ${woodTags(["16 ans de terrain en collectivité", "Réseau GRAINE", "Mâcon · Beaujolais · Lyon"], "start")}
        <a class="text-link" href="/zone-intervention/">Voir la zone d'intervention <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </section>
  ${testimonial({
    ...temoignageCreche,
    quote: "Cette sortie a été une bulle d'oxygène pour l'équipe et les enfants.",
    background: "sand"
  })}
  ${ficheDepartTeaser("ivory")}
  ${finalCta({
    title: "Parlons de votre projet",
    text: "Une animation ponctuelle, un cycle, un jardin à faire naître ou une équipe à former : racontez-moi votre envie, je vous propose un format adapté."
  })}`
});

pages.push({
  path: "/animations-nature-jardin/",
  kind: "pillar",
  title: "Animations nature et jardin pour structures — La Fabrique du Vivant",
  description:
    "Ateliers et balades nature pour crèches, écoles, seniors, collectivités et entreprises. Interventions à Mâcon, dans le Beaujolais et à Lyon.",
  breadcrumbs: [["Animations nature & jardin", "/animations-nature-jardin/"]],
  approved: true,
  review: draftReview,
  body: `${pageHero({
    eyebrow: "~ le vivant entre les mains ~",
    title: "Des animations nature et jardin, pour petits et grands",
    lead:
      "De la crèche à l'entreprise, des ateliers et des balades où l'on touche, où l'on observe, où l'on comprend le vivant. Dans votre structure ou dehors, à Mâcon, dans le Beaujolais et à Lyon.",
    primary: false
  })}
  ${soilDivider("ivory")}
  <section class="section section--sand">
    <div class="container">
      ${sectionHeading("Une animation La Fabrique du Vivant, c'est…", "~ trois choses qu'on retrouve à chaque fois ~")}
      ${featureGrid([
        {
          icon: "sprout",
          title: "Du vivant, du vrai",
          text: "De la terre, des plantes, des petites bêtes. Jamais de fiches plastifiées à réciter : on rencontre le vivant, on ne l'apprend pas par cœur."
        },
        {
          icon: "hand",
          title: "Les mains d'abord",
          text: "On touche, on sent, on manipule. Chaque participant fait, à son rythme. C'est le sensoriel qui laisse la trace, pas le discours."
        },
        {
          icon: "watering",
          title: "Un animateur de terrain",
          text: "Seize ans de métier dans les espaces verts publics : les gestes viennent d'une pratique vécue, pas d'un classeur pédagogique."
        }
      ])}
    </div>
  </section>
  <section class="section section--ivory">
    <div class="container">
      ${sectionHeading("Les animations", "~ la phare d'abord, puis toute la famille ~")}
      ${cardGrid(
        [
          {
            featured: true,
            image: "atelier-terre",
            alt: "Un pot rempli couche après couche de terre vivante",
            badge: "l'atelier phare",
            eyebrow: "~ fabriquer la fertilité ~",
            title: "L'atelier terre vivante en pots",
            text: "Chacun assemble dans son pot les étages d'un sol vivant, et repart avec. De la crèche à l'entreprise, l'atelier qui fait toucher du doigt ce qui se passe sous nos pieds.",
            href: "/animations-nature-jardin/atelier-terre-vivante/",
            linkLabel: "Découvrir l'atelier"
          },
          {
            image: "eveil-nature",
            alt: "Un temps d'éveil à la nature en crèche, matières naturelles à portée de mains",
            eyebrow: "~ 0-3 ans ~",
            title: "Éveil à la nature en crèche",
            text: "Des sorties sensorielles pour les tout-petits : toucher, sentir, observer, dans le calme et en sécurité.",
            href: "/animations-nature-jardin/eveil-nature-petite-enfance/",
            linkLabel: "Voir l'animation"
          },
          {
            image: "scolaire",
            alt: "Découverte du vivant à l'école, observation et matières naturelles",
            eyebrow: "~ sur l'année ~",
            title: "Programme scolaire « découverte du vivant »",
            text: "Un fil rouge multi-séances pour la classe : sol, plantes, petites bêtes, saisons. Co-construit avec l'enseignant.",
            href: "/animations-nature-jardin/programme-scolaire-decouverte-vivant/",
            linkLabel: "Voir le programme"
          },
          {
            image: "cedres",
            alt: "Grands cèdres observés lors d'une balade nature",
            eyebrow: "~ 2 h dehors ~",
            title: "Balade « lecture du vivant »",
            text: "Apprendre à lire un paysage : traces, sols, liens invisibles. Sur votre site, dans un parc ou sur un sentier.",
            href: "/animations-nature-jardin/balade-nature-lecture-du-vivant/",
            linkLabel: "Voir la balade"
          },
          {
            image: "jardiniere",
            alt: "Jardinière plantée lors d'un atelier seniors",
            eyebrow: "~ rythme doux ~",
            title: "Ateliers jardin seniors",
            text: "La mémoire du jardin qui remonte par les mains : un cycle multi-séances adapté aux résidences et EHPAD.",
            href: "/animations-nature-jardin/atelier-jardinage-seniors/",
            linkLabel: "Voir les ateliers"
          }
        ],
        { columns: 4 }
      )}
    </div>
  </section>
  <section class="section section--sage">
    <div class="container">
      ${sectionHeading("Comment ça se passe", "~ de votre message au jour J ~")}
      ${processSteps([
        { title: "Vous me contactez", text: "Votre public, votre lieu, votre envie, même floue." },
        { title: "On échange", text: "Réponse sous 48 h, puis un échange pour cerner ce qui vous irait." },
        { title: "Vous recevez le devis", text: "Un format adapté, un devis clair, sans engagement." },
        { title: "J'interviens chez vous", text: "J'arrive avec tout le matériel, votre équipe profite du moment." }
      ])}
    </div>
  </section>
  <section class="section section--ivory">
    <div class="container">
      ${sectionHeading("Pour qui ?", "~ chaque public a sa page ~")}
      ${audiencePills(audiences)}
    </div>
  </section>
  ${ficheDepartTeaser("sand")}
  ${finalCta({
    title: "Une animation pour votre structure ?",
    text: "Dites-moi pour quel public et à quelle période. Je vous réponds sous 48 h, avec un format et un devis adaptés."
  })}`
});

pages.push({
  path: "/animations-nature-jardin/atelier-terre-vivante/",
  kind: "offer",
  title: "Atelier terre vivante en pots — animation sol vivant pour tous publics",
  description:
    "Un atelier où chacun fabrique un sol vivant dans un pot de fleurs. Tout public, de la crèche à l'entreprise. Mâcon, Beaujolais, Lyon.",
  breadcrumbs: [
    ["Animations nature & jardin", "/animations-nature-jardin/"],
    ["Atelier terre vivante", "/animations-nature-jardin/atelier-terre-vivante/"]
  ],
  approved: true,
  review: ["Texte validé. Le portrait terrain reste à fournir."],
  body: renderOfferPage({
    fiche: "link",
    hero: {
      eyebrow: "~ fabriquer la fertilité, de ses mains ~",
      title: "L'atelier terre vivante : le sol vivant entre les mains",
      lead:
        "Un atelier où chacun fabrique son propre terreau à partir de matière organique — épluchures, feuilles mortes, compost — assemblés couche après couche dans un pot de fleurs. Et repart avec, sa graine semée dedans. De la crèche à l'entreprise, on touche, on assemble, on comprend ce qui fait vivre la terre.",
      tags: ["environ 2 h, adaptable", "en salle ou dehors", "tout le matériel est fourni"]
    },
    principle: {
      eyebrow: "~ la terre est un monde habité ~",
      title: "Le principe",
      media: picture({
        name: "atelierTerre",
        alt: "Un pot rempli couche après couche de terre vivante, prêt à recevoir sa graine",
        caption: "L'atelier terre vivante, en cours de fabrication"
      }),
      paragraphs: [
        "Sous nos pieds, la terre grouille de vie. Des vers, des champignons, des milliards d'êtres minuscules qui travaillent sans relâche. C'est ce monde-là qui nourrit les plantes. Pas le sac de terreau du commerce : on fabrique le sien.",
        "Pendant l'atelier, chacun assemble dans son pot les étages d'un sol vivant, entièrement à partir de matière organique : épluchures et déchets de cuisine, feuilles mortes, compost, vers de terre. Les matières qui nourrissent, les habitants qui transforment, la graine qui couronne le tout. On touche, on sent, on comprend du bout des doigts.",
        "Et on repart avec son pot. La plante pousse, la vie continue, le regard sur la terre a changé."
      ]
    },
    benefitsTitle: "Ce que l'atelier apporte à votre structure",
    benefitsEyebrow: "~ bien plus qu'une activité de 2 heures ~",
    benefits: [
      {
        eyebrow: "~ le moment dont on reparle ~",
        title: "Un moment fort pour vos publics",
        text: "Toucher la terre, découvrir qu'elle est vivante : à tout âge, ça marque. Une expérience sensorielle dont vos publics reparlent longtemps après."
      },
      {
        eyebrow: "~ vous n'avez rien à porter ~",
        title: "Clé en main pour votre équipe",
        text: "J'arrive avec tout : pots, matières, graines, protections pour les tables. Votre équipe profite du moment au lieu de le gérer."
      },
      {
        eyebrow: "~ ça continue après ~",
        title: "Un effet qui dure",
        text: "Chaque participant repart avec son pot vivant. La plante grandit, l'expérience continue chez vous ou à la maison, et votre projet pédagogique tient un support concret."
      }
    ],
    reassurance:
      "Vous m'écrivez, on échange sur votre public et votre lieu, je vous propose un format et un devis. Le jour J, j'arrive avec tout le matériel.",
    variantsTitle: "Cet atelier devient…",
    variantsEyebrow: "~ même terre, mille façons de la toucher ~",
    variants: [
      {
        icon: "sprout",
        eyebrow: "~ 0-3 ans ~",
        title: "En crèche",
        text: "Une exploration sensorielle : les mains dans la terre, les matières, les petites bêtes observées dans le calme.",
        href: "/pour-qui/creches-petite-enfance/",
        linkLabel: "Voir la page crèches"
      },
      {
        icon: "book",
        eyebrow: "~ de la maternelle au collège ~",
        title: "À l'école",
        text: "Une vraie séance de sciences vivantes : le sol comme écosystème, chaque élève repart avec son expérience en pot.",
        href: "/pour-qui/ecoles/",
        linkLabel: "Voir la page écoles"
      },
      {
        icon: "watering",
        eyebrow: "~ rythme doux ~",
        title: "En maison seniors",
        text: "La mémoire du jardin qui remonte par les mains : gestes connus, odeur de terre, plantations à hauteur adaptée.",
        href: "/pour-qui/maisons-seniors-ehpad/",
        linkLabel: "Voir la page seniors"
      },
      {
        icon: "leaves",
        eyebrow: "~ équipe & QVCT ~",
        title: "En entreprise",
        text: "Une pause qui a du sens : fabriquer du vivant ensemble, repartir avec son pot sur le bureau.",
        href: "/pour-qui/entreprises/",
        linkLabel: "Voir la page entreprises"
      }
    ],
    practitionerSentence: "L'atelier terre vivante, c'est mon métier condensé en un pot de fleurs. J'ai testé cette technique neuf ans durant sur ma propre terrasse, avant de la partager avec vos publics.",
    faq: [
      { question: "Comment se déroule la séance ?", answer: "Selon le public, une courte présentation pour comprendre pourquoi et comment la terre vit, appuyée sur mon expérience de terrain — puis les mains dans la terre pour fabriquer son pot, et un temps de questions à la fin. En crèche, la présentation s'efface : on passe directement aux mains dans la terre." },
      { question: "Et s'il pleut ?", answer: "L'atelier se vit aussi bien en salle que dehors : des tables suffisent. La météo n'annule jamais la séance." },
      { question: "À partir de quel âge ?", answer: "Dès la crèche. Les gestes, la durée et les matières s'adaptent à chaque public, des tout-petits aux aînés." },
      { question: "Pour combien de participants ?", answer: "L'idéal : une dizaine de personnes à la fois, pour que chacun ait vraiment les mains dans la terre. Groupe plus grand ? Parlons-en, il existe des formats pour ça." },
      { question: "Faut-il préparer quelque chose ?", answer: "Rien. Des tables, un coin pour se laver les mains, et c'est tout : le reste arrive avec moi. Et si certains participants veulent apporter leur propre pot ou leurs déchets de cuisine pour se les approprier, l'atelier s'adapte très bien à ça aussi." },
      { question: "Combien de temps à l'avance réserver ?", answer: "Quelques semaines d'avance donnent le choix des dates. Mais écrivez-moi même si votre échéance est proche, on trouve souvent une solution." },
      { question: "Je suis particulier : puis-je apprendre cette méthode chez moi ?", answer: 'Oui. J\'ai créé une formation pas à pas pour <a href="https://lepotagerminimaliste.fr/terre-vivante-en-pots/">fabriquer une terre vivante dans un pot de fleurs</a>, avec des matières simples et sans dépendre des sacs de terreau.' }
    ],
    cta: {
      title: "Envie de cet atelier chez vous ?",
      text: "Dites-moi pour quel public et à quelle période. Je vous réponds sous 48 h, avec un format et un devis adaptés."
    }
  })
});

pages.push({
  path: "/animations-nature-jardin/eveil-nature-petite-enfance/",
  kind: "offer",
  title: "Éveil à la nature en crèche — sorties sensorielles 0-3 ans",
  description:
    "Sorties nature sensorielles pour les 0-3 ans en crèche : toucher, sentir, observer le vivant. Intervenant nature à Mâcon, Beaujolais, Lyon.",
  breadcrumbs: [
    ["Animations nature & jardin", "/animations-nature-jardin/"],
    ["Éveil nature 0-3 ans", "/animations-nature-jardin/eveil-nature-petite-enfance/"]
  ],
  approved: true,
  review: draftReview,
  body: renderOfferPage({
    fiche: "link",
    hero: {
      eyebrow: "~ dehors, dès les premiers pas ~",
      title: "L'éveil à la nature pour les tout-petits",
      lead:
        "Des sorties sensorielles pensées pour les 0-3 ans : toucher, sentir, observer le vivant, chacun à son rythme. Dans votre jardin ou dans un parc voisin.",
      tags: ["des séquences courtes, à leur rythme", "chez vous ou en sortie", "matériel fourni"]
    },
    principle: {
      eyebrow: "~ le vivant se découvre par le corps ~",
      title: "Une rencontre à hauteur d'enfant",
      media: picture({
        name: "eveilNature",
        alt: "Un temps d'éveil à la nature en crèche, matières naturelles à portée de mains",
        caption: "L'éveil à la nature, à hauteur d'enfant"
      }),
      paragraphs: [
        "Au printemps 2026, dans un parc, j'ai ouvert une boîte devant un petit groupe d'enfants de crèche. Dedans, des escargots de mon jardin. Ils ont regardé, fascinés. Puis chacun s'est approché à son rythme. À la fin de la matinée, tous l'avaient caressé, et nous sommes allés ensemble libérer les escargots au fond du parc.",
        "C'est ça, une sortie d'éveil à la nature : une rencontre avec le vivant, à hauteur d'enfant. On marche dans l'herbe, on cueille des feuilles et des fleurs, on garde une trace de ce qu'on a trouvé. Des séquences courtes, du temps libre, et des matières qu'on a le droit de toucher."
      ]
    },
    benefitsTitle: "Ce que la sortie apporte à votre structure",
    benefitsEyebrow: "~ bien plus qu'une sortie ~",
    benefits: [
      {
        eyebrow: "~ tous les sens en éveil ~",
        title: "Un vrai temps de développement",
        text: "Marcher dans l'herbe, toucher, sentir, nommer : à cet âge, chaque découverte nourrit la motricité, le langage et la curiosité."
      },
      {
        eyebrow: "~ l'équipe souffle ~",
        title: "Clé en main, en co-animation",
        text: "J'arrive avec tout le matériel et je mène le fil. Vos professionnelles restent l'ancrage affectif des enfants : c'est ce tandem qui rassure les petits."
      },
      {
        eyebrow: "~ les saisons reviennent ~",
        title: "Un fil qui se tisse sur l'année",
        text: "En sorties régulières, les enfants retrouvent les lieux et voient le vivant changer. La nature devient un repère, pas un événement."
      }
    ],
    reassurance:
      "Vous m'écrivez, on échange sur votre groupe et votre lieu, je vous propose un format et un devis. Le jour J, j'arrive avec tout le matériel.",
    variantsTitle: "Pour chaque structure, la sortie devient…",
    variantsEyebrow: "~ à chaque maison son format ~",
    variants: [
      {
        icon: "sprout",
        title: "En crèche",
        text: "Dans votre jardin ou au parc le plus proche, par petits groupes, calé sur les rythmes de la journée.",
        href: "/pour-qui/creches-petite-enfance/",
        linkLabel: "Voir les possibilités"
      },
      {
        icon: "group",
        title: "En RPE",
        text: "Un temps partagé assistantes maternelles et enfants, qui donne aussi des idées à refaire ensuite.",
        href: "/contact/?besoin=animation&objet=une sortie nature en RPE",
        linkLabel: "Parler de votre RPE"
      },
      {
        icon: "sprout",
        title: "En micro-crèche",
        text: "Le petit effectif est une chance : la sortie devient un moment presque sur mesure.",
        href: "/contact/?besoin=animation&objet=une sortie nature en micro-crèche",
        linkLabel: "Parler de votre groupe"
      }
    ],
    variantColumns: 3,
    extraSections: [
      testimonial({
        ...temoignageCreche,
        quote:
          "Cette sortie a été une bulle d'oxygène pour l'équipe et les enfants. Les professionnelles ont vraiment apprécié. Votre attitude avec les enfants a été parfaite ! […] Pour le reste, ne changez surtout rien !",
        background: "sand"
      })
    ],
    practitionerSentence: "Une pédagogie du vivant ancrée dans la pratique : je facilite des expériences, les enfants font les leurs.",
    faq: [
      { question: "Et s'il pleut ?", answer: "On reporte. Sortir dehors fait partie de l'expérience, surtout en crèche, et l'intérieur ne remplace pas ça." },
      { question: "Faut-il sortir de la structure ?", answer: "Non. Un bout de jardin ou une cour avec un coin d'herbe suffisent. Si un parc est accessible, la sortie devient une aventure." },
      { question: "À partir de quel âge ?", answer: "Dès que l'enfant explore, même avant la marche : les matières se découvrent aussi assis sur une couverture." },
      { question: "Pour combien d'enfants ?", answer: "Par petits groupes, avec un encadrement dimensionné pour l'extérieur. On cale les effectifs ensemble, selon votre organisation." },
      { question: "Faut-il préparer quelque chose ?", answer: "Rien. Prévenez juste les familles que les habits pourront rencontrer de la terre. C'est bon signe." }
    ],
    cta: {
      title: "Envie de sorties nature pour vos tout-petits ?",
      text: "Dites-moi combien d'enfants, quel lieu, quelle période. Je vous réponds sous 48 h, avec un format et un devis adaptés."
    }
  })
});

pages.push({
  path: "/animations-nature-jardin/programme-scolaire-decouverte-vivant/",
  kind: "offer",
  title: "Programme scolaire découverte du vivant — animations nature à l'école",
  description:
    "Un programme multi-séances pour faire découvrir le vivant aux élèves : sol, plantes, petites bêtes, saisons. École et périscolaire, Mâcon, Beaujolais, Lyon.",
  breadcrumbs: [
    ["Animations nature & jardin", "/animations-nature-jardin/"],
    ["Programme scolaire", "/animations-nature-jardin/programme-scolaire-decouverte-vivant/"]
  ],
  approved: true,
  review: [
    "Page de projection : aucun programme scolaire n'a encore été livré.",
    "Les exemples saisonniers et l'organisation d'une classe entière doivent être confirmés."
  ],
  body: renderOfferPage({
    fiche: "teaser",
    hero: {
      eyebrow: "~ un fil rouge sur l'année ~",
      title: "Découvrir le vivant à l'école, séance après séance",
      lead:
        "Pas une animation isolée qu'on oublie aux vacances : un programme multi-séances où la classe suit le vivant au fil des saisons. Le sol, les plantes, les petites bêtes, et ce qui les relie.",
      tags: ["de la maternelle au collège", "sur l'année ou le trimestre", "co-construit avec l'enseignant"]
    },
    principle: {
      eyebrow: "~ le vivant ne tient pas en une heure ~",
      title: "Le principe",
      media: picture({
        name: "scolaire",
        alt: "Découverte du vivant à l'école : observation et matières naturelles",
        caption: "Le vivant, découvert séance après séance"
      }),
      paragraphs: [
        "Une animation nature isolée, c'est un bon souvenir. Un programme, c'est autre chose : les élèves plantent en automne, observent en hiver, voient germer au printemps. Le vivant devient un feuilleton dont la classe connaît les personnages.",
        "Chaque séance alterne le dehors et le faire : on touche le sol, on cherche les petites bêtes, on garde une trace de ce qu'on a trouvé. D'une séance à l'autre, les élèves retrouvent ce qu'ils ont semé, au sens propre."
      ]
    },
    benefitsTitle: "Ce que le programme apporte à votre école",
    benefitsEyebrow: "~ bien plus qu'une sortie scolaire ~",
    benefits: [
      {
        eyebrow: "~ ils attendent la prochaine séance ~",
        title: "Une vraie progression pour les élèves",
        text: "Le format feuilleton crée l'attente et ancre les apprentissages. Les sciences du vivant deviennent une expérience vécue."
      },
      {
        eyebrow: "~ l'enseignant reste maître à bord ~",
        title: "Co-construit avec vous",
        text: "Le programme se cale sur votre projet de classe : vous connaissez vos élèves, j'apporte le vivant et le matériel."
      },
      {
        eyebrow: "~ ça peut laisser une trace durable ~",
        title: "Un tremplin vers un projet d'école",
        text: "Un programme réussi donne souvent envie d'un coin nature ou d'un jardin pédagogique. Le programme en est le meilleur point de départ."
      }
    ],
    reassurance:
      "Vous m'écrivez, on échange sur votre classe et votre projet, je vous propose un programme et un devis. À chaque séance, j'arrive avec tout le matériel.",
    extraSections: [
      `<section class="section section--sage">
        <div class="container">
          ${sectionHeading("À quoi ressemble une année", "~ exemple de fil, à composer ensemble ~")}
          ${featureGrid([
            { icon: "leaves", title: "Automne : le sol vivant", text: "Explorer la terre de la cour ou du jardin, comprendre qui l'habite et préparer les plantations." },
            { icon: "compass", title: "Hiver : le vivant qui attend", text: "Traces, bourgeons et petites bêtes cachées : la nature ne s'arrête pas." },
            { icon: "sprout", title: "Printemps : tout germe", text: "Semis, observation des levées et premières petites bêtes actives." },
            { icon: "watering", title: "Avant l'été : la trace", text: "Récolter ce qui a été semé et garder une mémoire du programme." }
          ], { columns: 4 })}
          <p class="section-intro" style="margin-top:46px">Ce fil est un exemple : le vôtre se compose selon votre niveau, votre cour et votre projet.</p>
        </div>
      </section>`
    ],
    practitionerSentence: "Une pédagogie du vivant ancrée dans la pratique : les élèves font de vraies expériences, pas des exercices.",
    faq: [
      { question: "Combien de séances ?", answer: "À composer ensemble : du trimestre, avec 3 ou 4 séances, à l'année complète. C'est la régularité qui fait la valeur du programme." },
      { question: "Pour quels niveaux ?", answer: "De la maternelle au collège, et le périscolaire. Le contenu s'adapte au niveau, le principe reste le même : faire d'abord, comprendre ensuite." },
      { question: "Il faut un jardin dans l'école ?", answer: "Non. Une cour avec un coin de terre, des bacs, ou même un parc proche suffisent pour démarrer." },
      { question: "Une classe entière, c'est possible ?", answer: "Oui, en s'organisant : demi-classe en alternance ou co-animation avec vous. On cale le format ensemble. Cette organisation reste à confirmer dans l'aperçu." },
      { question: "Comment ça se finance ?", answer: "Projet d'école, coopérative, mairie, parfois des aides dédiées aux projets nature. On en parle au devis, et je peux appuyer votre dossier." }
    ],
    cta: {
      title: "Envie d'un fil rouge vivant pour votre classe ?",
      text: "Dites-moi votre niveau et votre projet. Je vous réponds sous 48 h, avec une proposition de programme et un devis."
    }
  })
});

pages.push({
  path: "/animations-nature-jardin/balade-nature-lecture-du-vivant/",
  kind: "offer",
  title: "Balade nature animée « lecture du vivant » — groupes et structures",
  description:
    "Une balade animée de 2 h où le groupe apprend à lire le vivant : traces, sols, plantes, liens invisibles. Jusqu'à 15 personnes. Mâcon, Beaujolais, Lyon.",
  breadcrumbs: [
    ["Animations nature & jardin", "/animations-nature-jardin/"],
    ["Balade lecture du vivant", "/animations-nature-jardin/balade-nature-lecture-du-vivant/"]
  ],
  approved: true,
  review: draftReview,
  body: renderOfferPage({
    fiche: "link",
    hero: {
      eyebrow: "~ apprendre à lire dehors ~",
      title: "La balade qui apprend à lire un paysage vivant",
      lead:
        "Une balade animée où le groupe ne récite pas des noms d'espèces : il apprend à lire un lieu. L'eau, le sol, les plantes, les animaux, mais aussi les traces laissées par les usages et les histoires qui s'y rattachent.",
      tags: ["2 h à 2 h 30 de marche douce", "jusqu'à 15 personnes", "sur votre site ou un sentier"]
    },
    principle: {
      eyebrow: "~ un paysage, ça se lit ~",
      title: "Le principe",
      media: picture({
        name: "cedres",
        alt: "Plateforme de grands cèdres observée pendant une balade nature",
        caption: "~ lever les yeux, chercher les liens, laisser le paysage parler ~"
      }),
      paragraphs: [
        "Au printemps 2026, sur un site touristique de Saône-et-Loire, j'ai ouvert une balade en disant : « On ne vivait pas dans la grotte. La grotte, c'était l'abri. Le vrai supermarché, c'est ce qu'on va traverser. »",
        "Pendant la balade, on ne se contente pas d'écouter : on cherche, on touche, on sent. Chaque arrêt commence par un geste, l'explication vient après. Et à la fin, le paysage n'est plus le même : il raconte quelque chose.",
        "Chaque balade est construite après un repérage. Un vieil arbre, une ancienne photographie, un bâtiment ou une rivière peuvent devenir le point de départ d'une enquête : que s'est-il passé ici ? Quels indices en reste-t-il ? Et si cet arbre pouvait parler, que raconterait-il ? Les faits donnent des points d'appui, l'observation et l'imagination mettent le groupe en mouvement."
      ]
    },
    benefitsTitle: "Ce que la balade apporte à votre structure",
    benefitsEyebrow: "~ bien plus qu'une promenade ~",
    benefits: [
      {
        eyebrow: "~ on ne regarde plus pareil ~",
        title: "Un moment fort pour vos publics",
        text: "Chacun repart avec un regard neuf sur les lieux qu'il croyait connaître. C'est le genre de sortie dont on reparle à table le soir."
      },
      {
        eyebrow: "~ zéro logistique pour vous ~",
        title: "Clé en main pour votre structure",
        text: "Je repère le terrain en amont et je construis la balade sur ce que votre site offre vraiment. Vous n'avez qu'à réunir le groupe."
      },
      {
        eyebrow: "~ votre lieu prend de la valeur ~",
        title: "Un atout pour votre site",
        text: "La balade révèle ce que votre lieu a d'unique en reliant son vivant, ses usages et ses histoires. Vos publics redécouvrent un endroit qu'ils pensaient connaître."
      }
    ],
    reassurance:
      "Vous m'écrivez, on échange sur votre lieu et votre public, je viens repérer le terrain, je vous propose un format et un devis.",
    variantsTitle: "Sur quel terrain ?",
    variantsEyebrow: "~ le vivant est déjà chez vous ~",
    variants: [
      { icon: "map", title: "Votre site", text: "Parc, sentier, abords d'un monument, zone naturelle. Le repérage permet de construire la balade sur ce qui s'y trouve vraiment.", href: "/contact/?besoin=animation&objet=une balade sur notre site", linkLabel: "Parler du lieu" },
      { icon: "compass", title: "Un parc ou un sentier public", text: "Pour une structure sans terrain propre, on choisit ensemble un lieu accessible au groupe.", href: "/zone-intervention/", linkLabel: "Voir la zone" },
      { icon: "group", title: "Un événement", text: "Fête de la nature, journée du patrimoine, programmation estivale : la balade s'inscrit dans votre calendrier.", href: "/contact/?besoin=animation&objet=une balade pour un événement", linkLabel: "Parler de l'événement" }
    ],
    variantColumns: 3,
    extraSections: [
      `<section class="section section--ivory">
        <div class="container">
          ${sectionHeading("Pour quels publics ?", "~ même paysage, mille lectures ~")}
          ${featureGrid([
            { icon: "group", title: "Familles et visiteurs", text: "Une sortie qui plaît aux enfants comme aux grands-parents, chacun cherche à sa hauteur." },
            { icon: "town", title: "Habitants d'une commune", text: "Redécouvrir le paysage du quotidien, celui qu'on traverse sans le voir." },
            { icon: "leaves", title: "Équipes en entreprise", text: "Marcher, chercher et comprendre ensemble. Une pause qui a du sens, dehors." }
          ])}
        </div>
      </section>`
    ],
    practitionerSentence: "Je ne plaque pas une balade toute faite sur un paysage. Je pars de ce qui est là, de ce qui s'y est vécu et des questions que le lieu fait naître.",
    faq: [
      { question: "Et s'il pleut ?", answer: "Une pluie fine ne gêne pas la balade, elle la rend même plus vivante. En cas de vraie météo défavorable, on décale ou on adapte, décision prise ensemble quelques jours avant." },
      { question: "Quel niveau de marche ?", answer: "Une marche douce, avec des arrêts fréquents : c'est une balade d'observation, pas une randonnée. Le parcours s'adapte au groupe." },
      { question: "Combien de participants ?", answer: "Jusqu'à 15 personnes. Pour un événement plus grand, on programme plusieurs départs." },
      { question: "À partir de quel âge ?", answer: "La balade est familiale : les enfants cherchent, les adultes comprennent. Pour un groupe 100 % enfants, regardez plutôt le programme scolaire." },
      { question: "Faut-il préparer quelque chose ?", answer: "De bonnes chaussures pour le groupe, c'est tout. Le repérage, le contenu et le matériel, c'est mon affaire." }
    ],
    cta: {
      title: "Envie de révéler votre lieu à vos publics ?",
      text: "Dites-moi quel lieu et quel public. Je vous réponds sous 48 h, avec un format et un devis adaptés."
    }
  })
});

pages.push({
  path: "/animations-nature-jardin/atelier-jardinage-seniors/",
  kind: "offer",
  title: "Ateliers jardin en EHPAD et résidence seniors — mains dans la terre",
  description:
    "Ateliers jardin multi-séances pour EHPAD et résidences seniors : sensorialité, mémoire du jardin, lien au vivant. Mâcon, Beaujolais, Lyon.",
  breadcrumbs: [
    ["Animations nature & jardin", "/animations-nature-jardin/"],
    ["Ateliers jardin seniors", "/animations-nature-jardin/atelier-jardinage-seniors/"]
  ],
  approved: true,
  review: draftReview,
  body: renderOfferPage({
    fiche: "link",
    hero: {
      eyebrow: "~ la mémoire remonte par les mains ~",
      title: "Les mains dans la terre, la mémoire au jardin",
      lead:
        "Des ateliers jardin pensés pour les résidents d'EHPAD et de résidences seniors : gestes connus, odeur de terre, plantes qui restent et qu'on regarde grandir. Au rythme de chacun, fauteuil compris.",
      tags: ["rythme doux, adapté à chacun", "sur votre terrasse ou en salle", "matériel fourni"]
    },
    principle: {
      eyebrow: "~ il restera du vivant dans le service ~",
      title: "Le principe",
      media: picture({
        name: "jardiniere",
        alt: "Jardinière plantée pendant un atelier avec des résidents",
        caption: "~ la jardinière reste, l'atelier continue sans moi ~",
        grass: "top-left"
      }),
      paragraphs: [
        "En mai 2026, sur la terrasse d'un établissement pour personnes âgées, des résidents ont planté leurs jardinières. Chacun a adopté son plant, senti son feuillage, écrit ou dicté son étiquette. À la fin, tout le monde s'est retrouvé pour le premier arrosage, le bruit de l'eau et l'odeur de terre mouillée.",
        "Beaucoup de résidents ont jardiné toute leur vie. Ces gestes-là ne s'oublient pas : ils attendent. L'atelier les fait remonter, sans posture de soin, simplement en remettant du vivant entre les mains.",
        "Quand je repars, les plantes restent. Les résidents passent devant, lisent les étiquettes, arrosent. L'atelier continue sans moi."
      ]
    },
    benefitsTitle: "Ce que l'atelier apporte à votre établissement",
    benefitsEyebrow: "~ bien plus qu'une animation ~",
    benefits: [
      { eyebrow: "~ des gestes qui reviennent ~", title: "Un moment fort pour vos résidents", text: "L'odeur du terreau, la motte qu'on libère, le nom des plantes qu'on écrit : la mémoire du jardin remonte par les sens." },
      { eyebrow: "~ votre équipe reste au centre ~", title: "Clé en main, avec votre animatrice", text: "Je mène l'atelier et j'apporte tout le matériel. Votre animatrice, qui connaît les résidents, fait le lien et le prolonge." },
      { eyebrow: "~ ça continue après ~", title: "Un support d'animation qui dure", text: "Les jardinières restent dans le service : arrosage, observation et récolte deviennent des rendez-vous." }
    ],
    reassurance:
      "Vous m'écrivez, on échange sur vos résidents et votre lieu, je vous propose un format et un devis. Le jour J, j'arrive avec tout le matériel.",
    variantsTitle: "Chacun participe, quelle que soit son autonomie",
    variantsEyebrow: "~ personne ne reste spectateur malgré lui ~",
    variants: [
      { icon: "watering", title: "À hauteur de fauteuil", text: "Le travail de la terre se fait sur les tables. Personne ne se penche, personne ne lève les bras." },
      { icon: "hand", title: "Chaque geste a sa version douce", text: "Tenir un plant, sentir un feuillage, dicter une étiquette ou guider l'arrosoir : participer, ce n'est pas tout faire." },
      { icon: "group", title: "Ceux qui regardent comptent aussi", text: "L'odeur du terreau et la présence du vivant touchent aussi ceux qui restent en retrait. On ne force jamais." }
    ],
    variantColumns: 3,
    practitionerSentence: "Seize ans à cultiver pour les autres ; aujourd'hui je remets la terre entre les mains de ceux qui l'ont connue avant moi.",
    faq: [
      { question: "Nos résidents sont en fauteuil, c'est possible ?", answer: "Oui. Tout ce qui est participatif se passe à hauteur de table." },
      { question: "On n'a pas de jardin, seulement une terrasse ?", answer: "Une terrasse suffit largement. Des jardinières, quelques tables, et le tour est joué. En salle aussi, les jours froids." },
      { question: "Séance unique ou plusieurs ?", answer: "Les deux existent. Le cycle multi-séances est le format le plus riche : on plante, puis on retrouve les plantes, on les soigne, on récolte." },
      { question: "Combien de résidents ?", answer: "Un petit groupe donne les moments les plus forts. On cale l'effectif ensemble, selon les profils et l'accompagnement disponible." },
      { question: "Faut-il préparer quelque chose ?", answer: "Presque rien : un point d'eau à proximité et de quoi se laver les mains. J'apporte le reste, terre et plantes comprises." }
    ],
    cta: {
      title: "Envie de remettre du jardin dans la vie de vos résidents ?",
      text: "Dites-moi combien de résidents, quel lieu, quelle période. Je vous réponds sous 48 h, avec un format et un devis adaptés."
    }
  })
});

pages.push({
  path: "/accompagnement-projets-nature/",
  kind: "pillar",
  title: "Accompagnement de projets nature et jardin — de l'idée au lieu vivant",
  description:
    "Conception et accompagnement de projets nature et jardin : jardin pédagogique, jardin partagé, espace vert vivant. Mâcon, Beaujolais, Lyon.",
  breadcrumbs: [["Accompagnement de projets", "/accompagnement-projets-nature/"]],
  approved: true,
  review: draftReview,
  body: `${pageHero({
    eyebrow: "~ de l'idée au lieu vivant ~",
    title: "Votre projet nature, accompagné de l'idée au terrain",
    lead:
      "Vous avez un lieu et une envie : un jardin pédagogique, un jardin partagé, des espaces verts plus vivants. Ce qui manque, c'est le temps et la méthode. C'est exactement ce que j'apporte."
  })}
  ${soilDivider("ivory")}
  <section class="section section--sand">
    <div class="container">
      ${sectionHeading("Quand faire appel", "~ vous vous reconnaissez ? ~")}
      ${featureGrid([
        { icon: "map", eyebrow: "~ un lieu qui dort ~", title: "Le potentiel est là", text: "Une cour, un délaissé, un coin de parc : personne n'a le temps de révéler ce que le lieu peut devenir." },
        { icon: "watering", eyebrow: "~ ça s'essouffle ~", title: "Le projet a besoin d'un nouveau départ", text: "Le jardin lancé avec enthousiasme attend que quelqu'un relance la machine, autrement." },
        { icon: "compass", eyebrow: "~ par où commencer ? ~", title: "L'envie est claire, pas le chemin", text: "Moins d'arrosage, plus de vivant, des usagers impliqués : il manque une méthode pour passer au terrain." }
      ])}
    </div>
  </section>
  <section class="section section--sage">
    <div class="container">
      ${sectionHeading("La démarche", "~ quatre temps, un objectif : votre autonomie ~")}
      ${processSteps([
        { title: "Lire le lieu", text: "Le sol, l'eau, les usages, l'histoire et le vivant déjà présent. Comprendre ce qui fait déjà le lieu avant d'imaginer ce qu'il peut devenir." },
        { title: "Concevoir avec vous", text: "Des scénarios discutés avec ceux qui feront vivre le lieu, jamais un plan imposé." },
        { title: "Lancer ensemble", text: "Les premières plantations, les premiers ateliers et les premières habitudes." },
        { title: "Vous rendre autonomes", text: "Une équipe formée, des gestes transmis et un lieu qui tient sans moi." }
      ])}
    </div>
  </section>
  <section class="section section--ivory">
    <div class="container">
      ${sectionHeading("Trois types de projets", "~ trois portes, une même démarche ~")}
      ${cardGrid([
        {
          image: "jardin-pedagogique",
          alt: "Jardin vivant avec serre et pergola, massifs fleuris",
          eyebrow: "~ école, crèche ~",
          title: "Jardin pédagogique",
          text: "Un jardin qui vit plus d'un printemps : conçu pour durer, relié aux animations, porté par l'équipe."
        },
        {
          image: "jardin-partage",
          alt: "Panneau d'un jardin partagé, tableau d'organisation collective",
          eyebrow: "~ commune, quartier, résidence ~",
          title: "Jardin partagé",
          text: "Un jardin qui tient dans la durée, parce que le collectif se construit avant les plates-bandes."
        },
        {
          image: "conception-espaces",
          alt: "Panneau pédagogique de conception d'espaces comestibles en ville",
          eyebrow: "~ communes, entreprises ~",
          title: "Conseil & conception d'espaces",
          text: "Lire votre lieu, révéler ce qu'il peut devenir : diagnostic, scénarios et plan d'action."
        }
      ])}
      <div class="button-row"><a class="button button--secondary" href="/contact/?besoin=accompagnement">Parler de votre projet d'accompagnement</a></div>
    </div>
  </section>
  ${splitSection({
    heading: "Seize ans de l'autre côté",
    eyebrow: "~ je sais ce qu'un espace coûte à entretenir ~",
    media: picture({
      name: "gestionDifferenciee",
      alt: "Chemin enherbé dans un espace vert en gestion différenciée"
    }),
    background: "sage",
    paragraphs: [
      "Seize ans agent territorial dans un service espaces verts : je sais ce qu'un aménagement coûte en heures d'entretien, ce qui tient dans le temps et ce qui meurt au premier été. Un projet que je conçois est un projet que vos équipes peuvent suivre.",
      "Pour les jardins collectifs, j'ai vécu la chose de l'intérieur : plusieurs années à animer un jardin partagé, avec ses saisons humaines autant que végétales."
    ],
    tags: ["16 ans de terrain public", "réseau GRAINE"]
  })}
  ${ficheDepartTeaser("sand")}
  ${finalCta({
    title: "Un lieu, une envie ? Parlons-en.",
    text: "Décrivez-moi votre lieu et votre idée, même floue. Je vous réponds sous 48 h, et s'il le faut je viens voir le terrain."
  })}`
});

pages.push({
  path: "/formations-professionnelles/",
  kind: "pillar",
  title: "Formations professionnelles nature et jardin — agents et équipes",
  description:
    "Formations professionnelles pour agents de collectivités, bailleurs et associations : gestion différenciée, compostage, biodiversité. Formateur indépendant, 16 ans de terrain.",
  breadcrumbs: [["Formations professionnelles", "/formations-professionnelles/"]],
  approved: true,
  review: draftReview,
  body: `${pageHero({
    eyebrow: "~ par quelqu'un qui a fait le métier ~",
    title: "Former vos équipes au vivant, depuis le terrain",
    lead:
      "Des formations pour agents de collectivités, bailleurs et associations : gestion différenciée, compostage, biodiversité, adaptation au climat. Par un formateur qui a tenu la tondeuse et le plantoir pendant seize ans.",
    tags: ["en intra, sur votre site", "groupes de 12 max", "demi-journée, journée ou cycle"]
  })}
  ${soilDivider("ivory")}
  ${splitSection({
    heading: "Une légitimité de terrain",
    eyebrow: "~ pas un théoricien ~",
    media: picture({
      name: "formationTerrain",
      alt: "Fabrice devant un panneau pédagogique d'un espace naturel"
    }),
    background: "sand",
    paragraphs: [
      "Seize ans agent territorial dans un service espaces verts. J'ai vécu la bascule du zéro phyto, les plannings de tonte, les remarques des riverains, les étés de sécheresse. Quand je forme vos agents, je parle leur langue : celle du terrain, des contraintes réelles et du temps qui manque.",
      "Une formation réussie ne change pas seulement les pratiques. Elle redonne du sens au métier : on ne « fait plus les espaces verts », on travaille avec le vivant."
    ],
    tags: ["16 ans agent territorial", "formateur au catalogue du réseau GRAINE"]
  })}
  <section class="section section--ivory">
    <div class="container">
      ${sectionHeading("Le catalogue", "~ cinq formations, un fil : le vivant ~")}
      ${cardGrid([
        { image: "gestion-differenciee", alt: "Espace vert en gestion différenciée, entretien adapté", eyebrow: "~ la demande n°1 des communes ~", title: "Gestion différenciée des espaces verts", text: "Classer les espaces, adapter l'entretien, gagner du temps et de la biodiversité. Expliquée par un ancien agent.", href: "/contact/?besoin=formation&objet=la formation gestion différenciée des espaces verts", linkLabel: "Demander un devis" },
        { image: "compostage", alt: "Atelier de formation au compostage et au lombricompostage", eyebrow: "~ du geste au site qui tourne ~", title: "Compostage et lombricompostage", text: "Pour les équipes et relais de terrain : comprendre le vivant du compost et piloter un site qui fonctionne.", href: "/contact/?besoin=formation&objet=la formation compostage et lombricompostage", linkLabel: "Demander un devis" },
        { image: "biodiversite-ville", alt: "Espace de biodiversité et nature en ville", position: "center 10%", eyebrow: "~ faire de la place au vivant ~", title: "Biodiversité et nature en ville", text: "Comprendre, accueillir et faire accepter le vivant en milieu urbain, riverains compris.", href: "/contact/?besoin=formation&objet=la formation biodiversité et nature en ville", linkLabel: "Demander un devis" },
        { image: "adaptation-climat", alt: "Pergola en polyculture, ombrage et diversité végétale", eyebrow: "~ le climat qui vient ~", title: "Adaptation au changement climatique", text: "Sols vivants, eau, choix végétaux et micro-climats : des espaces verts qui tiennent les étés qui viennent.", href: "/contact/?besoin=formation&objet=la formation adaptation au changement climatique", linkLabel: "Demander un devis" },
        { image: "jardin-partage-forma", alt: "Courge récoltée dans un jardin partagé", eyebrow: "~ sans s'épuiser ~", title: "Créer et animer un jardin partagé", text: "Pour centres sociaux, MJC, associations et bailleurs : le collectif, le lieu et les saisons.", href: "/contact/?besoin=formation&objet=la formation créer et animer un jardin partagé", linkLabel: "Demander un devis" }
      ], { columns: 3 })}
      <div class="button-row"><a class="button button--secondary" href="/contact/?besoin=formation">Parler de la formation de votre équipe</a></div>
    </div>
  </section>
  <section class="section section--sage">
    <div class="container">
      ${sectionHeading("Les formats", "~ chez vous, sur vos espaces ~")}
      ${featureGrid([
        { icon: "map", title: "En intra, sur votre site", text: "La meilleure salle de formation, c'est vos propres espaces verts : on apprend sur les lieux que vos équipes entretiennent." },
        { icon: "compass", title: "Demi-journée, journée ou cycle", text: "Du module de sensibilisation au parcours complet, selon votre besoin et vos plannings." },
        { icon: "group", title: "Groupes de 12 maximum", text: "Au-delà, on écoute ; en dessous, on pratique. Mes formations se font les mains dedans." },
        { icon: "book", title: "Un devis simple", text: "Formateur indépendant, non assujetti à la TVA : une proposition claire, sans surprise." }
      ], { columns: 4 })}
    </div>
  </section>
  ${finalCta({
    title: "Une équipe à former ?",
    text: "Dites-moi votre service, votre effectif et le sujet qui vous occupe. Je vous réponds sous 48 h, avec une proposition de format et un devis.",
    ficheLink: true
  })}`
});

pages.push({
  path: "/pour-qui/",
  kind: "pillar",
  title: "Pour qui j'interviens — crèches, écoles, seniors, collectivités, entreprises",
  description:
    "Animations nature, accompagnement et formations pour crèches, écoles, maisons seniors, collectivités et entreprises. Mâcon, Beaujolais, Lyon.",
  breadcrumbs: [["Pour qui ?", "/pour-qui/"]],
  approved: true,
  review: ["Page carrefour créée le 2026-07-29 (l'adresse /pour-qui/ renvoyait une page introuvable). Textes à valider."],
  body: `${pageHero({
    eyebrow: "~ chaque public a sa porte d'entrée ~",
    title: "Pour qui j'interviens",
    lead:
      "Une crèche, une école, un EHPAD, une commune ou une entreprise : chacun a ses rythmes, ses contraintes et ses envies. Voici comment le vivant entre chez vous, public par public.",
    primary: false
  })}
  ${soilDivider("ivory")}
  <section class="section section--sand">
    <div class="container">
      ${sectionHeading("Cinq portes d'entrée", "~ trouvez la vôtre ~")}
      ${cardGrid(
        [
          {
            icon: "sprout",
            eyebrow: "~ 0-3 ans ~",
            title: "Crèches & petite enfance",
            text: "Éveil sensoriel et sorties nature calés sur les rythmes de la journée, en co-animation avec vos professionnelles.",
            href: "/pour-qui/creches-petite-enfance/",
            linkLabel: "Voir la page crèches"
          },
          {
            icon: "book",
            eyebrow: "~ de la maternelle au collège ~",
            title: "Écoles & périscolaire",
            text: "De l'animation ponctuelle au programme sur l'année, jusqu'au jardin pédagogique qui survit aux vacances.",
            href: "/pour-qui/ecoles/",
            linkLabel: "Voir la page écoles"
          },
          {
            icon: "watering",
            eyebrow: "~ rythme doux ~",
            title: "Maisons seniors & EHPAD",
            text: "Des ateliers jardin à hauteur de table, fauteuils compris, où la mémoire du jardin remonte par les mains.",
            href: "/pour-qui/maisons-seniors-ehpad/",
            linkLabel: "Voir la page seniors"
          },
          {
            icon: "town",
            eyebrow: "~ par un ancien agent ~",
            title: "Collectivités",
            text: "Animations pour vos habitants, formations pour vos agents, accompagnement de vos projets nature.",
            href: "/pour-qui/collectivites-communautes-communes/",
            linkLabel: "Voir la page collectivités"
          },
          {
            icon: "leaves",
            eyebrow: "~ équipe & QVCT ~",
            title: "Entreprises",
            text: "Ateliers et balades pour vos équipes, jusqu'à la végétalisation de votre site. Sur place ou dehors.",
            href: "/pour-qui/entreprises/",
            linkLabel: "Voir la page entreprises"
          }
        ],
        { columns: 3 }
      )}
      <p class="section-intro" style="margin-top:46px">Votre structure n'est dans aucune de ces cases ? Association, bailleur, site touristique, médiathèque : <a href="/contact/?intention=question">écrivez-moi</a>, on regarde ensemble.</p>
    </div>
  </section>
  ${ficheDepartTeaser("ivory")}
  ${finalCta({
    title: "Un public, une envie, une date ?",
    text: "Dites-moi qui sont vos publics et ce qui vous ferait plaisir. Je vous réponds sous 48 h, avec un format et un devis adaptés."
  })}`
});

pages.push({
  path: "/pour-qui/creches-petite-enfance/",
  kind: "audience",
  title: "Intervenant nature en crèche — éveil au vivant pour les 0-3 ans",
  description:
    "Intervenant nature pour crèches et RPE : éveil sensoriel, sorties nature, ateliers terre. Mâcon, Beaujolais, Lyon. Devis rapide.",
  breadcrumbs: [
    ["Pour qui ?", "/pour-qui/"],
    ["Crèches & petite enfance", "/pour-qui/creches-petite-enfance/"]
  ],
  approved: true,
  review: draftReview,
  body: renderAudiencePage({
    hero: {
      eyebrow: "~ le vivant à hauteur des tout-petits ~",
      title: "La nature entre à la crèche",
      lead:
        "Éveil sensoriel, sorties nature, ateliers terre : des interventions pensées pour les 0-3 ans, leurs rythmes et vos contraintes. Dans votre structure ou juste dehors.",
      tags: ["pensé pour les 0-3 ans", "chez vous ou dehors", "matériel fourni"]
    },
    benefitsTitle: "Ce que vos tout-petits y gagnent",
    benefitsEyebrow: "~ et votre équipe aussi ~",
    benefits: [
      { eyebrow: "~ tous les sens en éveil ~", title: "Une vraie rencontre sensorielle", text: "Toucher la terre, sentir les feuilles, écouter dehors : à cet âge, le vivant se découvre par le corps. Chaque sortie nourrit la motricité, le langage et la curiosité." },
      { eyebrow: "~ l'équipe souffle ~", title: "Clé en main pour votre structure", text: "Matériel fourni, séance menée en co-animation : vos professionnelles restent l'ancrage affectif des enfants, moi j'apporte le vivant." },
      { eyebrow: "~ un projet qui parle aux familles ~", title: "Un plus pour votre projet pédagogique", text: "L'éveil à la nature s'inscrit dans votre projet d'établissement et donne aux familles quelque chose de concret à raconter." }
    ],
    offers: [
      { image: "eveil-nature", alt: "Un temps d'éveil à la nature en crèche", badge: "pour commencer", eyebrow: "~ la porte d'entrée ~", title: "Éveil à la nature 0-3 ans", text: "Des sorties sensorielles régulières, adaptées aux rythmes des tout-petits : matières, saisons, petites découvertes dans le calme.", href: "/animations-nature-jardin/eveil-nature-petite-enfance/", linkLabel: "Voir l'animation" },
      { image: "atelier-terre", alt: "Un pot rempli de terre vivante", eyebrow: "~ version tout-petits ~", title: "L'atelier terre vivante, décliné 0-3 ans", text: "L'atelier phare adapté aux plus jeunes : toucher la terre, planter, observer. Une exploration à leur hauteur.", href: "/animations-nature-jardin/atelier-terre-vivante/", linkLabel: "Voir l'atelier" },
      { image: "jardin-pedagogique", alt: "Jardin vivant avec serre et pergola, massifs fleuris", eyebrow: "~ pour durer ~", title: "Un coin jardin dans votre crèche", text: "Un accompagnement pour créer un espace nature durable chez vous : bacs, plantations et parcours sensoriel que l'équipe fait vivre ensuite.", href: "/accompagnement-projets-nature/", linkLabel: "Voir l'accompagnement" }
    ],
    teamTitle: "Comment ça se passe avec votre équipe",
    teamEyebrow: "~ vos pros restent au centre ~",
    teamPoints: [
      { icon: "group", title: "Co-animation, pas remplacement", text: "Vos professionnelles connaissent les enfants et restent leur repère affectif. Moi, j'apporte le vivant et je mène le fil." },
      { icon: "compass", title: "Sécurité et rythmes respectés", text: "La zone est inspectée, les matières adaptées et l'encadrement dimensionné pour l'extérieur. Sieste et repas ne sont jamais bousculés." },
      { icon: "watering", title: "Zéro préparation pour vous", text: "J'arrive avec tout le matériel et je repars avec. Il ne vous faut qu'un bout de dehors, ou une salle les jours de pluie. Pas de coin extérieur chez vous ? On en trouve un ensemble : je vous fais des propositions de lieux à proximité." }
    ],
    extraSections: [
      testimonial({
        ...temoignageCreche,
        quote:
          "Cette sortie a été une bulle d'oxygène pour l'équipe et les enfants. Les professionnelles ont vraiment apprécié. Votre attitude avec les enfants a été parfaite ! […] Pour le reste, ne changez surtout rien !",
        background: "ivory"
      })
    ],
    cta: {
      title: "Et si la nature entrait dans votre crèche ?",
      text: "Dites-moi combien d'enfants, quel lieu, quelle période. Je vous réponds sous 48 h, avec un format et un devis adaptés."
    }
  })
});

pages.push({
  path: "/pour-qui/ecoles/",
  kind: "audience",
  title: "Intervenant nature à l'école — animations et jardin pédagogique",
  description:
    "Animations nature à l'école, programme découverte du vivant et création de jardin pédagogique. Intervenant à Mâcon, Beaujolais, Lyon.",
  breadcrumbs: [
    ["Pour qui ?", "/pour-qui/"],
    ["Écoles", "/pour-qui/ecoles/"]
  ],
  approved: true,
  review: ["Texte à valider. Cette page présente des formats scolaires encore non livrés."],
  body: renderAudiencePage({
    hero: {
      eyebrow: "~ apprendre dehors, pour de vrai ~",
      title: "Le vivant comme salle de classe",
      lead:
        "Des animations et des projets nature pour l'école et le périscolaire, de la maternelle au collège : le sol, les plantes, les petites bêtes deviennent le support des apprentissages. Dans la cour, au parc, ou en classe.",
      tags: ["de la maternelle au collège", "co-construit avec l'enseignant", "matériel fourni"]
    },
    benefitsTitle: "Ce que vos élèves y gagnent",
    benefitsEyebrow: "~ et vous aussi ~",
    benefits: [
      { eyebrow: "~ des sciences qu'on touche ~", title: "Des apprentissages incarnés", text: "Le programme parle du vivant ; ici, les élèves le rencontrent. Ce qu'une main a semé et vu germer, la mémoire le garde autrement qu'une leçon." },
      { eyebrow: "~ l'enseignant reste maître à bord ~", title: "Un intervenant qui se cale sur votre projet", text: "Vos objectifs, votre progression et vos contraintes : je m'y adapte. Vous connaissez vos élèves, j'apporte le vivant et le matériel." },
      { eyebrow: "~ du ponctuel au projet d'école ~", title: "Une porte vers plus grand", text: "Une animation peut devenir un programme, puis un coin nature ou un jardin pédagogique. Chaque étape prépare la suivante." }
    ],
    offers: [
      { image: "atelier-terre", alt: "Un pot rempli de terre vivante", eyebrow: "~ pour goûter ~", title: "Une animation ponctuelle", text: "L'atelier terre vivante en classe ou une balade lecture du vivant : une séance pour rencontrer le vivant et me rencontrer.", href: "/animations-nature-jardin/atelier-terre-vivante/", linkLabel: "Voir l'atelier" },
      { image: "scolaire", alt: "Découverte du vivant à l'école", badge: "le format riche", eyebrow: "~ sur l'année ~", title: "Le programme « découverte du vivant »", text: "Un fil rouge multi-séances où la classe suit le vivant au fil des saisons.", href: "/animations-nature-jardin/programme-scolaire-decouverte-vivant/", linkLabel: "Voir le programme" },
      { image: "jardin-pedagogique", alt: "Jardin vivant avec serre et pergola, massifs fleuris", eyebrow: "~ pour durer ~", title: "Un jardin pédagogique", text: "L'accompagnement pour créer un jardin d'école qui survit aux grandes vacances.", href: "/accompagnement-projets-nature/", linkLabel: "Voir l'accompagnement" }
    ],
    teamTitle: "Comment ça se passe avec vous",
    teamEyebrow: "~ l'enseignant au centre ~",
    teamPoints: [
      { icon: "book", title: "Co-construction", text: "Le contenu se cale sur votre niveau et votre projet de classe, en un échange avant la première séance. Pas de catalogue plaqué." },
      { icon: "group", title: "Vous restez le référent", text: "La gestion du groupe reste votre territoire ; j'apporte l'expérience du vivant. Chacun son métier, les élèves y gagnent." },
      { icon: "compass", title: "Le financement, parlons-en", text: "Coopérative, mairie, projet d'école, aides dédiées : je peux appuyer votre dossier. C'est souvent plus accessible qu'on ne croit." }
    ],
    cta: {
      title: "Et si votre classe apprenait dehors ?",
      text: "Dites-moi votre niveau, votre effectif et votre envie. Je vous réponds sous 48 h, avec une proposition et un devis."
    }
  })
});

pages.push({
  path: "/pour-qui/maisons-seniors-ehpad/",
  kind: "audience",
  title: "Animations jardin en EHPAD et résidence seniors — le vivant qui relie",
  description:
    "Ateliers jardin et nature pour EHPAD et résidences seniors : sensorialité, mémoire, lien social. Intervenant à Mâcon, Beaujolais, Lyon.",
  breadcrumbs: [
    ["Pour qui ?", "/pour-qui/"],
    ["Maisons seniors & EHPAD", "/pour-qui/maisons-seniors-ehpad/"]
  ],
  approved: true,
  review: draftReview,
  body: renderAudiencePage({
    hero: {
      eyebrow: "~ le vivant qui relie ~",
      title: "Remettre du jardin dans la vie de vos résidents",
      lead:
        "Ateliers jardin, plantations, moments nature : des interventions pensées pour les résidents d'EHPAD et de résidences seniors, quelle que soit leur autonomie. Sur votre terrasse, dans votre jardin ou en salle.",
      tags: ["adapté fauteuils et autonomie variable", "terrasse, jardin ou salle", "matériel fourni"]
    },
    benefitsTitle: "Ce que le jardin fait à vos résidents",
    benefitsEyebrow: "~ et à votre équipe ~",
    benefits: [
      { eyebrow: "~ des gestes qui reviennent ~", title: "La mémoire remonte par les mains", text: "Beaucoup de vos résidents ont jardiné toute leur vie. L'odeur du terreau, la motte qu'on libère : ces gestes attendent qu'on les rappelle." },
      { eyebrow: "~ votre animatrice n'est pas seule ~", title: "Un renfort pour l'équipe d'animation", text: "J'arrive avec l'atelier complet. Votre animatrice, qui connaît les résidents, fait circuler et prolonge : un vrai tandem." },
      { eyebrow: "~ il reste du vivant dans le service ~", title: "Un support qui dure après l'atelier", text: "Les jardinières restent : arrosage, observation et récolte deviennent des rendez-vous, et un sujet de conversation avec les familles." }
    ],
    offers: [
      { image: "jardiniere", alt: "Jardinière plantée avec des résidents", badge: "le format riche", eyebrow: "~ un cycle au fil des saisons ~", title: "Ateliers jardin multi-séances", text: "On plante, on retrouve les plantes, on les soigne, on récolte. Le format le plus riche pour vos résidents.", href: "/animations-nature-jardin/atelier-jardinage-seniors/", linkLabel: "Voir les ateliers" },
      { image: "atelier-terre", alt: "Un pot rempli de terre vivante", eyebrow: "~ pour commencer ~", title: "L'atelier terre vivante, version seniors", text: "Fabriquer un sol vivant en pot, à hauteur de table : une séance ponctuelle qui marque.", href: "/animations-nature-jardin/atelier-terre-vivante/", linkLabel: "Voir l'atelier" },
      { image: "cedres", alt: "Paysage boisé pour une balade douce", eyebrow: "~ si vous avez un parc ~", title: "La balade douce", text: "Une lecture du vivant au rythme des résidents, dans votre parc ou aux abords.", href: "/animations-nature-jardin/balade-nature-lecture-du-vivant/", linkLabel: "Voir la balade" }
    ],
    teamTitle: "Comment ça se passe avec votre équipe",
    teamEyebrow: "~ chacun son rôle ~",
    teamPoints: [
      { icon: "group", title: "Votre animatrice reste le repère", text: "Elle connaît les profils, les histoires et les fragilités. Je mène l'atelier, elle fait le lien." },
      { icon: "hand", title: "Chaque geste a sa version douce", text: "Tout se passe à hauteur de table, fauteuils compris. Participer, c'est faire quelque chose, pas tout faire." },
      { icon: "leaves", title: "On ne force jamais", text: "Ceux qui regardent comptent aussi : l'odeur de la terre et la présence du vivant touchent au-delà du geste." }
    ],
    cta: {
      title: "Envie de voir vos résidents les mains dans la terre ?",
      text: "Dites-moi votre établissement, vos résidents et la période. Je vous réponds sous 48 h, avec un format et un devis adaptés."
    }
  })
});

pages.push({
  path: "/pour-qui/collectivites-communautes-communes/",
  kind: "audience",
  title: "Animations nature et formations pour collectivités — par un ancien agent territorial",
  description:
    "Animations nature pour habitants, formations d'agents, accompagnement de projets : un prestataire qui a passé 16 ans en collectivité. Mâcon, Beaujolais, Lyon.",
  breadcrumbs: [
    ["Pour qui ?", "/pour-qui/"],
    ["Collectivités", "/pour-qui/collectivites-communautes-communes/"]
  ],
  approved: true,
  review: draftReview,
  body: `${pageHero({
    eyebrow: "~ seize ans dans vos services ~",
    title: "Un partenaire nature qui connaît votre maison",
    lead:
      "Animations pour vos habitants, formations pour vos agents, accompagnement de vos projets nature : par un prestataire qui a passé seize ans de l'autre côté, dans un service espaces verts.",
    tags: ["16 ans agent territorial", "réseau GRAINE", "Mâcon · Beaujolais · Lyon"]
  })}
  ${soilDivider("ivory")}
  ${splitSection({
    heading: "L'atout maître",
    eyebrow: "~ pas un prestataire hors-sol ~",
    media: picture({
      name: "formationTerrain",
      alt: "Fabrice devant un panneau pédagogique d'un espace naturel"
    }),
    background: "sand",
    paragraphs: [
      "J'ai été agent territorial pendant seize ans. Je connais vos plannings, vos budgets, vos riverains qui appellent quand l'herbe dépasse, vos étés à arroser ce qui grille. Quand je travaille pour une collectivité, je ne découvre pas votre monde : j'en viens.",
      "Concrètement, ça change tout : je parle le langage de vos services, je dimensionne mes propositions à vos contraintes réelles, et vos agents ne voient pas débarquer un donneur de leçons."
    ]
  })}
  <section class="section section--ivory">
    <div class="container">
      ${sectionHeading("Quatre portes d'entrée", "~ par où voulez-vous commencer ? ~")}
      ${cardGrid([
        { icon: "group", eyebrow: "~ animer le territoire ~", title: "Pour vos habitants", text: "Balades lecture du vivant, ateliers terre vivante, animations pour vos événements : du lien social autour du vivant, sur vos sites.", href: "/animations-nature-jardin/", linkLabel: "Voir les animations" },
        { icon: "tools", eyebrow: "~ former les équipes ~", title: "Pour vos agents", text: "Gestion différenciée, compostage, biodiversité, adaptation au climat : des formations sur vos espaces, par un ancien collègue.", href: "/formations-professionnelles/", linkLabel: "Voir les formations" },
        { icon: "map", eyebrow: "~ de l'idée au lieu ~", title: "Pour vos projets", text: "Jardin partagé, végétalisation, espaces verts plus sobres : lecture du site, de ses usages, de son histoire et du vivant déjà présent.", href: "/accompagnement-projets-nature/", linkLabel: "Voir l'accompagnement" },
        { icon: "book", eyebrow: "~ le service enfance aussi ~", title: "Pour vos écoles et crèches", text: "Les animations petite enfance et scolaires se programment aussi à l'échelle de la commune ou de la communauté de communes.", href: "/pour-qui/creches-petite-enfance/", linkLabel: "Voir les publics enfance" }
      ], { columns: 2 })}
    </div>
  </section>
  <section class="section section--sage">
    <div class="container">
      ${sectionHeading("Comment ça se passe", "~ simple, y compris administrativement ~")}
      ${featureGrid([
        { icon: "book", title: "Un interlocuteur unique", text: "De l'échange initial à la facturation, vous traitez avec moi directement. Devis clair et facturation dématérialisée." },
        { icon: "sprout", title: "Du ponctuel au programme", text: "Une animation test pour un événement, puis une programmation à l'année si ça prend : on commence à la taille qui vous va." },
        { icon: "map", title: "Sur vos sites", text: "Vos parcs, vos sentiers, vos écoles ou vos déchèteries s'il le faut : j'interviens là où sont vos publics." }
      ])}
    </div>
  </section>
  ${ficheDepartTeaser("sand")}
  ${finalCta({
    title: "Un projet nature sur votre territoire ?",
    text: "Dites-moi votre commune ou votre communauté de communes, et ce qui vous occupe. Je vous réponds sous 48 h, avec une proposition et un devis."
  })}`
});

pages.push({
  path: "/pour-qui/entreprises/",
  kind: "audience",
  title: "Ateliers nature en entreprise — team building végétal et QVCT",
  description:
    "Ateliers nature et jardin pour entreprises : team building végétal, pauses vertes, projets RSE. Lyon, Mâcon, Beaujolais. Sur votre site ou en extérieur.",
  breadcrumbs: [
    ["Pour qui ?", "/pour-qui/"],
    ["Entreprises", "/pour-qui/entreprises/"]
  ],
  approved: true,
  review: ["Texte à valider. Aucune prestation entreprise n'a encore été livrée ; aucun témoignage n'est affiché."],
  body: renderAudiencePage({
    hero: {
      eyebrow: "~ une pause qui a du sens ~",
      title: "Reconnecter vos équipes au vivant",
      lead:
        "Ateliers jardin, balades, projets de végétalisation : des interventions nature pour vos équipes, sur votre site ou dehors. Pas un gadget d'animation : une vraie rencontre avec le vivant.",
      tags: ["sur votre site ou en extérieur", "équipes jusqu'à 15 personnes", "matériel fourni"]
    },
    benefitsTitle: "Ce que le vivant fait à vos équipes",
    benefitsEyebrow: "~ et à votre entreprise ~",
    benefits: [
      { eyebrow: "~ les mains décrochent des écrans ~", title: "Une vraie coupure", text: "Toucher la terre, fabriquer quelque chose de vivant : le contact au vivant apaise et recentre. Deux heures les mains dans la terre reposent autrement qu'une pause café." },
      { eyebrow: "~ on se découvre autrement ~", title: "De la cohésion qui ne force personne", text: "Autour d'un pot de terre, la hiérarchie s'estompe et les langues se délient. Chacun participe à sa façon, sans épreuve sportive ni jeu de rôle." },
      { eyebrow: "~ un souvenir sur le bureau ~", title: "Un effet qui reste visible", text: "Chacun repart avec son pot vivant sur son bureau : la plante qui pousse prolonge le moment et le raconte aux visiteurs." }
    ],
    offersTitle: "Les formats pensés pour vous",
    offersEyebrow: "~ de la pause verte au projet de site ~",
    offers: [
      { image: "atelier-terre", alt: "Un pot rempli de terre vivante", badge: "pour commencer", eyebrow: "~ 2 h sur votre site ~", title: "L'atelier terre vivante, version équipe", text: "Chacun fabrique un sol vivant dans son pot et repart avec. Dans une salle de réunion ou dehors.", href: "/animations-nature-jardin/atelier-terre-vivante/", linkLabel: "Voir l'atelier" },
      { image: "cedres", alt: "Paysage boisé pour une balade d'équipe", eyebrow: "~ marcher et comprendre ~", title: "La balade lecture du vivant", text: "Une sortie où l'équipe apprend à lire un paysage. Marcher ensemble dehors change les conversations.", href: "/animations-nature-jardin/balade-nature-lecture-du-vivant/", linkLabel: "Voir la balade" },
      { image: "conception-espaces", alt: "Panneau pédagogique de conception d'espaces comestibles en ville", position: "center 45%", eyebrow: "~ au-delà de l'événement ~", title: "Le projet de site", text: "Végétaliser vos abords, créer un potager d'entreprise, former des référents : une démarche RSE visible depuis les bureaux.", href: "/accompagnement-projets-nature/", linkLabel: "Voir l'accompagnement" }
    ],
    teamTitle: "Pourquoi pas un simple team building ?",
    teamEyebrow: "~ le mot anti-gadget ~",
    teamColumns: 2,
    teamPoints: [
      { icon: "leaves", title: "Ce qui est planté continue", text: "Un événement bien-être qu'on oublie en une semaine, tout le monde en a connu. Ici, ce qu'on plante continue de pousser et ce qu'on comprend dehors revient en réunion." },
      { icon: "compass", title: "Un moment vrai qui laisse une trace", text: "Si vous cherchez une animation spectaculaire et vite consommée, je ne suis pas le bon prestataire. Si vous cherchez une rencontre qui reste, parlons-nous." }
    ],
    cta: {
      title: "Une équipe à reconnecter au vivant ?",
      text: "Dites-moi votre effectif, votre site et l'occasion : séminaire, QVCT, RSE ou juste une envie. Je vous réponds sous 48 h, avec un format et un devis."
    }
  })
});

pages.push({
  path: "/a-propos/",
  kind: "about",
  title: "Fabrice Maira — parcours et approche de La Fabrique du Vivant",
  description:
    "Découvrez Fabrice Maira : 16 ans agent territorial des espaces verts, jardinier-praticien du vivant et fondateur de La Fabrique du Vivant.",
  breadcrumbs: [["À propos", "/a-propos/"]],
  approved: true,
  review: ["Page identitaire à valider en priorité."],
  body: `${pageHero({
    eyebrow: "~ enchanté, moi c'est Fabrice Maira ~",
    title: "Un jardinier passé de l'autre côté du guidon",
    lead:
      "Seize ans à entretenir les espaces verts d'une collectivité. Puis un jour, l'envie de transmettre a pris le dessus sur l'envie de tondre. La Fabrique du Vivant, c'est la suite logique.",
    primary: false
  })}
  ${soilDivider("ivory")}
  ${splitSection({
    heading: "Le parcours",
    eyebrow: "~ 2004-2020 : les mains dans la terre publique ~",
    media: picture({
      name: "fabricePortrait",
      alt: "Portrait de Fabrice en extérieur",
      position: "center 25%"
    }),
    background: "sand",
    paragraphs: [
      "Pendant seize ans, j'ai été agent territorial dans un service espaces verts : production florale, plantations, entretien des espaces publics. Le métier appris par le terrain, saison après saison.",
      "En 2010, la réglementation sur les produits phytosanitaires change, et avec elle ma façon de voir le métier. Je me forme au jardinage raisonné, aux auxiliaires, aux sols vivants et aux micro-climats. Je découvre qu'on peut travailler avec le vivant au lieu de lutter contre lui.",
      "Puis la transmission a pris le dessus : ateliers compostage, balades nature, animations. En 2026, j'en ai fait mon métier à part entière, ici, entre Mâcon, le Beaujolais et Lyon."
    ]
  })}
  <section class="section section--ivory">
    <div class="container">
      ${sectionHeading("L'approche : la lecture du vivant", "~ comprendre, pas réciter ~")}
      <div class="reading-width">
        <p>Je ne suis pas un catalogue de noms d'espèces. Ce que je pratique et ce que je transmets, c'est la lecture du vivant : comprendre ce qui se passe dans un sol, une haie, une mare, mais aussi dans un lieu tout entier. Ce qui y vit aujourd'hui, ce qui s'y est vécu et ce qui relie les deux.</p>
        <p>Un vieil arbre, une ancienne photographie, une rivière ou un mur peuvent ouvrir une enquête. On observe les indices, on raconte ce que l'on sait et on imagine ce que le lieu pourrait nous dire. Les participants ne restent pas spectateurs : ils ajoutent leurs questions, leurs souvenirs et leur regard.</p>
        <p>Et je transmets par le geste : on touche, on cherche, on fabrique. Dans mes ateliers comme dans mes formations, on comprend avec les mains d'abord. C'est comme ça que j'ai appris, c'est comme ça que ça reste.</p>
      </div>
    </div>
  </section>
  ${splitSection({
    heading: "D'ici, pour ici",
    eyebrow: "~ l'ancrage ~",
    media: picture({
      name: "saule",
      alt: "Saule têtard chargé de gui dans le paysage du Val de Saône",
      caption: "~ le territoire pratiqué à pied, en toutes saisons ~",
      position: "center 55%"
    }),
    background: "sage",
    reverse: true,
    paragraphs: [
      "J'habite le Beaujolais et j'interviens sur le territoire que je pratique : Mâcon, le Beaujolais, Lyon et leurs alentours.",
      "Membre du réseau GRAINE, je travaille en lien avec les acteurs locaux : collectivités, structures d'accueil, sites naturels et touristiques."
    ],
    tags: ["16 ans agent territorial", "réseau GRAINE", "Mâcon · Beaujolais · Lyon"]
  })}
  ${finalCta({
    title: "Maintenant que vous savez qui je suis…",
    text: "Dites-moi qui vous êtes : votre structure, vos publics, votre envie. Je vous réponds sous 48 h."
  })}`
});

pages.push({
  path: "/zone-intervention/",
  kind: "zone",
  title: "Zone d'intervention — Mâcon, Beaujolais, Lyon et alentours",
  description:
    "Animations nature, accompagnements et formations à Mâcon, dans le Nord Beaujolais, à Villefranche-sur-Saône et Lyon. Déplacement dans votre structure.",
  breadcrumbs: [["Zone d'intervention", "/zone-intervention/"]],
  approved: true,
  review: [
    "La liste des villes citées doit confirmer le rayon de déplacement réel.",
    "La promesse « déplacement compris » doit être validée."
  ],
  body: `${pageHero({
    eyebrow: "~ j'arrive avec le matériel ~",
    title: "J'interviens chez vous : Mâcon, Beaujolais, Lyon",
    lead:
      "Toutes mes interventions se font sur place, dans votre structure ou sur le terrain de votre choix. Voici le territoire que je couvre, et ce qu'il faut savoir sur les déplacements.",
    primary: false
  })}
  ${soilDivider("ivory")}
  <section class="section section--sand">
    <div class="container split">
      <div class="zone-map" role="img" aria-label="Carte schématique de la zone d'intervention le long de la Saône, de Mâcon à Lyon">
        <div class="zone-map__places">
          <span class="zone-map__place">Mâcon</span>
          <span class="zone-map__place">Beaujolais</span>
          <span class="zone-map__place">Lyon</span>
        </div>
      </div>
      <div class="split__copy">
        <p class="handwritten">~ le long de la Saône, entre vignes et monts ~</p>
        <h2>Le territoire</h2>
        <p><strong>Le Mâconnais :</strong> Mâcon et ses alentours, Cluny, Tournus, la Bresse voisine. Le sud de la Saône-et-Loire est mon terrain le plus régulier.</p>
        <p><strong>Le Beaujolais :</strong> Beaujeu, Belleville-en-Beaujolais, Villefranche-sur-Saône et les villages des monts. C'est ici que j'habite : le cœur de la zone.</p>
        <p><strong>Lyon et alentours :</strong> Lyon, sa métropole et le Val de Saône, pour les entreprises, les structures et les événements.</p>
        <p>Vous êtes un peu plus loin ? Écrivez-moi quand même : les frontières sont souples, surtout pour les programmes multi-séances et les formations.</p>
      </div>
    </div>
  </section>
  <section class="section section--ivory">
    <div class="container">
      ${sectionHeading("Les déplacements, concrètement", "~ simple et sans surprise ~")}
      ${featureGrid([
        { icon: "tools", title: "J'apporte tout", text: "Matériel, terre, plantes, outils : mes interventions sont autonomes. Vous n'avez rien à fournir d'autre que le lieu." },
        { icon: "map", title: "Le déplacement s'intègre au devis", text: "Pas de frais surprise : le devis que vous recevez est complet, déplacement compris." },
        { icon: "compass", title: "Je connais le territoire", text: "Si votre structure n'a pas de terrain, je peux souvent proposer un lieu proche de chez vous." }
      ])}
    </div>
  </section>
  ${splitSection({
    heading: "Un intervenant d'ici",
    eyebrow: "~ l'ancrage ~",
    media: picture({
      name: "saule",
      alt: "Paysage du Val de Saône avec un saule têtard",
      caption: "~ entre la Saône, les vignes et les monts ~",
      position: "center 55%"
    }),
    background: "sage",
    reverse: true,
    paragraphs: [
      "Je ne traverse pas la France avec ma mallette : j'habite le Beaujolais et je travaille le territoire que je pratique à pied, en toutes saisons.",
      "C'est aussi ce qui nourrit mes animations : les paysages dont je parle, je les connais par leurs sols, leurs plantes et leurs bêtes."
    ]
  })}
  ${finalCta({
    title: "Votre structure est dans la zone ?",
    text: "Dites-moi votre commune et votre projet. Je vous réponds sous 48 h, avec une proposition et un devis."
  })}`
});

pages.push({
  path: "/contact/",
  kind: "contact",
  title: "Contact et demande de devis — La Fabrique du Vivant",
  description:
    "Demandez un devis pour une animation, un accompagnement ou une formation nature et jardin. Réponse rapide, échange sans engagement.",
  breadcrumbs: [["Contact & devis", "/contact/"]],
  approved: true,
  review: ["Le formulaire est complet mais son envoi reste neutralisé jusqu'au choix du service."],
  body: `${pageHero({
    eyebrow: "~ échange sans engagement ~",
    title: "Parlons de votre projet",
    lead:
      "Une animation, un accompagnement, une formation, ou juste une question. Dites-moi qui sont vos publics et ce qui vous ferait plaisir : je m'occupe du reste.",
    tags: ["réponse sous 48 h", "échange sans engagement"],
    primary: false,
    compact: true
  })}
  ${soilDivider("ivory")}
  <section class="section section--ivory">
    <div class="container contact-layout">
      <form class="contact-form" action="${site.formEndpoint && site.formAccessKey ? site.formEndpoint : "/contact/"}" method="post" data-contact-form data-preview="${site.formEndpoint && site.formAccessKey ? "false" : "true"}">
        <input type="hidden" name="access_key" value="${site.formAccessKey}">
        <input type="hidden" name="subject" value="Nouvelle demande depuis le site">
        <input type="hidden" name="from_name" value="Site La Fabrique du Vivant">
        <input type="hidden" name="redirect" value="${site.domain}/merci/">
        <div class="honeypot" aria-hidden="true">
          <label for="botcheck">Ne pas cocher cette case</label>
          <input type="checkbox" id="botcheck" name="botcheck" tabindex="-1" autocomplete="off">
        </div>
        <p class="form-intro">Tous les champs sont nécessaires, sauf ceux notés « facultatif ».</p>
        <div class="form-field">
          <label for="nom">Vos nom et prénom</label>
          <input type="text" id="nom" name="nom" placeholder="Ex. : Camille Dupont" required autocomplete="name">
        </div>
        <div class="form-field">
          <label for="structure">Votre structure <span class="form-help">— nom et commune</span></label>
          <input type="text" id="structure" name="structure" placeholder="Ex. : crèche municipale, Mâcon" required autocomplete="organization">
        </div>
        <div class="form-field">
          <label for="type-structure">Vous êtes…</label>
          <select id="type-structure" name="type_structure" required>
            <option value="">Choisir</option>
            <option value="petite-enfance">Crèche, RPE, petite enfance</option>
            <option value="scolaire">École, collège, périscolaire</option>
            <option value="seniors">Maison seniors, EHPAD, hôpital</option>
            <option value="collectivite">Mairie, communauté de communes</option>
            <option value="entreprise">Entreprise</option>
            <option value="association">Association</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div class="form-field">
          <label for="besoin">Votre besoin</label>
          <select id="besoin" name="besoin" required>
            <option value="">Choisir</option>
            <option value="animation">Une animation nature & jardin</option>
            <option value="accompagnement">Un accompagnement de projet</option>
            <option value="formation">Une formation professionnelle</option>
            <option value="indecis">Je ne sais pas encore, parlons-en</option>
          </select>
        </div>
        <div class="form-field">
          <label for="periode">Période envisagée <span class="form-help">— facultatif, même approximative</span></label>
          <input type="text" id="periode" name="periode" placeholder="Ex. : au printemps, pas encore fixé…">
        </div>
        <div class="form-field">
          <label for="message">Votre message <span class="form-help">— publics, lieu, envies, questions</span></label>
          <textarea id="message" name="message" placeholder="Racontez-moi votre contexte en quelques lignes." required></textarea>
        </div>
        <div class="form-field">
          <label for="email">Votre email <span class="form-help">— pour vous répondre</span></label>
          <input type="email" id="email" name="email" placeholder="prenom@votre-structure.fr" required autocomplete="email">
        </div>
        <div class="form-field">
          <label for="telephone">Votre téléphone <span class="form-help">— facultatif, si vous préférez qu'on se parle</span></label>
          <input type="tel" id="telephone" name="telephone" placeholder="Ex. : 06 39 98 12 34" autocomplete="tel">
        </div>
        <button class="button" type="submit">Envoyer ma demande</button>
        <p class="form-legal">Vos informations me servent uniquement à vous répondre. Elles ne sont ni revendues ni utilisées pour une newsletter. <a href="/confidentialite/">Politique de confidentialité</a>.</p>
        <p class="form-note"><span class="handwritten" style="display:block">~ pas encore prêt ? ~</span>Une simple question fait très bien l'affaire, le devis attendra que vous soyez prêt.</p>
        <p class="form-status" data-form-status tabindex="-1" role="status" aria-live="polite"></p>
      </form>
      <div class="contact-next">
        <p class="handwritten">~ et ensuite ? ~</p>
        <h2>Ce qui se passe après votre message</h2>
        ${processSteps([
          { title: "Je vous réponds sous 48 h", text: "Un vrai message de ma part, pas un accusé de réception automatique." },
          { title: "On échange sur votre contexte", text: "Par téléphone ou par écrit : vos publics, votre lieu, vos contraintes et vos envies." },
          { title: "Vous recevez une proposition et un devis", text: "Un format pensé pour vous, un devis clair, et tout le temps qu'il faut pour décider." }
        ])}
        ${zoneReminder()}
        <div class="contact-details">
          <p class="handwritten">~ vous préférez l'email ? ~</p>
          ${
            site.publicEmail
              ? `<span class="email-obfuscated" data-user="${site.publicEmail.split("@")[0]}" data-domain="${site.publicEmail.split("@")[1]}">${site.publicEmail.split("@")[0]} (at) ${site.publicEmail.split("@")[1].replace(".", " (point) ")}</span>
          <button class="button button--ghost" type="button" data-copy-email data-user="${site.publicEmail.split("@")[0]}" data-domain="${site.publicEmail.split("@")[1]}" hidden>Copier l'adresse</button>
          <span class="copy-status" data-copy-status role="status" aria-live="polite"></span>`
              : '<span class="missing-value">Coordonnées à ajouter avant publication</span>'
          }
        </div>
      </div>
    </div>
  </section>
  ${ficheDepartTeaser("sand")}`
});

pages.push({
  path: "/mentions-legales/",
  kind: "legal",
  title: "Mentions légales — La Fabrique du Vivant",
  description: "Mentions légales du site lafabriqueduvivant.fr.",
  breadcrumbs: [["Mentions légales", "/mentions-legales/"]],
  approved: true,
  review: ["Statut et SIRET complétés le 2026-07-17. Pas d'adresse professionnelle ni d'email public affichés (décision Fabrice) — le contact passe uniquement par la page contact."],
  body: `${pageHero({
    eyebrow: "~ informations obligatoires ~",
    title: "Mentions légales",
    lead: "Les informations sur l'éditeur, l'hébergement et les droits liés à ce site.",
    primary: false,
    compact: true
  })}
  <section class="section section--ivory">
    <div class="legal-copy">
      <h2>Éditeur du site</h2>
      <p>Le site lafabriqueduvivant.fr est édité par :</p>
      <ul>
        <li><strong>Nom :</strong> ${site.legal.fullName || missing("Nom complet")}</li>
        <li><strong>Statut :</strong> ${site.legal.status || missing("Statut juridique")}</li>
        <li><strong>SIRET :</strong> ${site.legal.siret || missing("SIRET")}</li>
        <li><strong>Contact :</strong> <a href="/contact/">Page contact</a></li>
      </ul>
      <h2>Hébergement</h2>
      <p>Le site est hébergé par <strong>${site.legal.hostName}</strong>, ${site.legal.hostAddress}.</p>
      <h2>Propriété intellectuelle</h2>
      <p>L'ensemble des contenus de ce site, notamment les textes, photographies, illustrations et éléments graphiques, est la propriété de l'éditeur sauf mention contraire. Toute reproduction, même partielle, est soumise à autorisation préalable.</p>
      <h2>Crédits photographiques</h2>
      <p>Les photographies présentes sur ce site sont prises par Fabrice Maira, sauf mention contraire à proximité de l'image.</p>
      <h2>Litiges</h2>
      <p>En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut d'accord, les tribunaux français seront seuls compétents.</p>
    </div>
  </section>`
});

pages.push({
  path: "/confidentialite/",
  kind: "legal",
  title: "Politique de confidentialité — La Fabrique du Vivant",
  description: "Comment lafabriqueduvivant.fr traite les données transmises via le formulaire de contact.",
  breadcrumbs: [["Confidentialité", "/confidentialite/"]],
  approved: true,
  review: ["Le service de formulaire et la durée précise de conservation devront être ajoutés avant publication."],
  body: `${pageHero({
    eyebrow: "~ vos informations restent les vôtres ~",
    title: "Politique de confidentialité",
    lead: "Cette page explique simplement ce que je fais des informations que vous me confiez via le formulaire de contact. Pas de jargon, pas de surprise.",
    primary: false,
    compact: true
  })}
  <section class="section section--ivory">
    <div class="legal-copy">
      <h2>Quelles données je collecte</h2>
      <p>Quand vous remplissez le formulaire de contact, je reçois le nom de votre structure, le type de structure, votre besoin, la période envisagée, votre message et votre email. Rien de plus : pas de traceur publicitaire, pas de revente de données.</p>
      <h2>Pourquoi je les collecte</h2>
      <p>Uniquement pour vous répondre : comprendre votre demande et vous proposer un format et un devis adaptés.</p>
      <h2>Combien de temps je les garde</h2>
      <p>Je conserve les échanges avec les structures qui deviennent clientes le temps de la relation commerciale, plus la durée légale de conservation des documents comptables. Pour une demande sans suite, les informations sont supprimées après un délai raisonnable si aucun échange ne se poursuit.</p>
      <h2>Qui a accès à ces données</h2>
      <p>Moi seul, ainsi que le prestataire technique chargé de transmettre le formulaire : ${site.formProviderName || missing("Service de formulaire")}.</p>
      <h2>Vos droits</h2>
      <p>Vous pouvez demander d'accéder à vos données, de les corriger ou de les supprimer. Il suffit de m'écrire depuis la <a href="/contact/">page contact</a>.</p>
      <h2>Cookies</h2>
      <p>Ce site n'utilise pas de cookies de suivi ou de publicité et n'embarque aucun outil de mesure d'audience au lancement.</p>
    </div>
  </section>`
});

pages.push({
  path: "/merci/",
  kind: "thanks",
  title: "Votre message est bien parti — La Fabrique du Vivant",
  description: "Confirmation d'envoi du formulaire de contact.",
  noindex: true,
  approved: true,
  review: ["Page de confirmation à valider et à tester lorsque le service de formulaire sera branché."],
  body: `<section class="not-found">
    <div class="container">
      <p class="handwritten">~ c'est envoyé ~</p>
      <h1>Merci, votre message est bien parti</h1>
      <p class="not-found__lead">Je vous réponds sous 48 h, avec un vrai message, pas un robot. En attendant, si une question vous traverse l'esprit, n'hésitez pas à m'écrire à nouveau.</p>
      <div class="button-row">
        <a class="button" href="/">Retour à l'accueil</a>
        <a class="button button--secondary" href="/animations-nature-jardin/atelier-terre-vivante/">Découvrir l'atelier terre vivante</a>
      </div>
    </div>
  </section>`
});

pages.push({
  path: "/fiche-depart/",
  kind: "fiche",
  title: "Clarifiez votre projet nature en 15 minutes — La Fabrique du Vivant",
  description: "Une fiche imprimable pour clarifier votre projet nature, choisir le format adapté et préparer un premier échange.",
  noindex: true,
  approved: true,
  review: ["Page hors menu et hors cocon SEO : porte de maturation vers la Fiche de départ (envoi via le service d'emailing)."],
  breadcrumbs: [["Fiche de départ", "/fiche-depart/"]],
  body: `${pageHero({
    eyebrow: "~ votre projet est encore flou ? ~",
    title: "Clarifiez votre projet nature en 15 minutes",
    lead: "Vous avez une envie, un public ou un lieu. Cette fiche imprimable vous aide à choisir le bon format, préparer une discussion avec votre équipe et poser votre prochaine étape.",
    primary: false,
    compact: true
  })}
  ${soilDivider("ivory")}
  <section class="section section--ivory">
    <div class="container contact-layout">
      <form class="contact-form" action="/fiche-depart/" method="post" data-fiche-form data-endpoint="${site.ficheFormAction}">
        <div class="form-field">
          <label for="email">Votre email professionnel <span class="form-help">— pour recevoir la fiche</span></label>
          <input type="email" id="email" name="email" placeholder="prenom@votre-structure.fr" required autocomplete="email">
        </div>
        <button class="button button--secondary" type="submit">Recevoir la Fiche de départ</button>
        <p class="form-note">Votre adresse sert uniquement à vous envoyer la fiche demandée. Vous ne serez pas inscrit à une newsletter.</p>
        <p class="form-status" data-form-status tabindex="-1" role="status" aria-live="polite"></p>
      </form>
      <div>
        ${sectionHeading("Ce que la fiche vous apporte", "~ quinze minutes, seul ou en équipe ~", "start")}
        ${processSteps([
          { title: "Choisir le bon format", text: "Une animation ponctuelle, un cycle, un accompagnement de projet ou une formation : la fiche vous aide à trouver votre porte d'entrée." },
          { title: "Mettre à plat votre projet", text: "Le public, le lieu, l'objectif et les contraintes, posés noir sur blanc." },
          { title: "Produire une phrase de synthèse", text: "Utilisable avec votre équipe ou pour un premier échange, sans engagement." }
        ])}
      </div>
    </div>
  </section>`
});

pages.push({
  path: "/fiche-depart/merci/",
  kind: "thanks",
  title: "Votre Fiche de départ est en route — La Fabrique du Vivant",
  description: "Confirmation d'envoi de la Fiche de départ.",
  noindex: true,
  approved: true,
  review: ["Page de confirmation propre au parcours Fiche de départ, séparée de la confirmation des demandes de devis."],
  body: `<section class="not-found">
    <div class="container">
      <p class="handwritten">~ c'est en route ~</p>
      <h1>Votre Fiche de départ est en route</h1>
      <p class="not-found__lead">Regardez votre boîte mail : vous y trouverez le lien de téléchargement. Vous pouvez la remplir seul ou avec votre équipe, puis répondre au message avec une photo de la fiche ou vos premières réponses.</p>
      <div class="button-row">
        <a class="button" href="/">Retour à l'accueil</a>
        <a class="button button--secondary" href="/animations-nature-jardin/">Découvrir les animations</a>
      </div>
    </div>
  </section>`
});

pages.push({
  path: "/404.html",
  kind: "not-found",
  title: "Page introuvable — La Fabrique du Vivant",
  description: "Cette page n'existe pas ou n'existe plus.",
  noindex: true,
  approved: true,
  body: `<section class="not-found">
    <div class="container">
      <p class="not-found__code" aria-hidden="true">404</p>
      <p class="handwritten">~ vous avez quitté le sentier balisé ~</p>
      <h1>Cette page n'existe pas, ou n'existe plus</h1>
      <p class="not-found__lead">Ça arrive aux meilleurs : on suit une piste, elle s'arrête dans les herbes hautes. Bonne nouvelle, tous les chemins du site ramènent quelque part.</p>
      <div class="button-row">
        <a class="button" href="/">Retour à l'accueil</a>
        <a class="button button--secondary" href="/animations-nature-jardin/">Voir les animations</a>
        <a class="text-link" href="/contact/?intention=question">Poser une question</a>
      </div>
      ${soilDivider("ivory")}
    </div>
  </section>`
});

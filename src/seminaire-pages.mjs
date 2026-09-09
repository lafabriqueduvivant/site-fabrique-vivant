import { site } from "./config.mjs";
import { featureGrid, pageHero, picture, processSteps, sectionHeading, soilDivider } from "./components.mjs";

const path = "/pour-qui/entreprises/seminaire-au-vert/";
const connected = Boolean(site.formEndpoint && site.formAccessKey);

export const seminairePages = [
  {
    path,
    kind: "seminaire",
    title: "Séminaire nature à Mâcon et Villefranche-sur-Saône",
    description: "Vous cherchez un cadre naturel pour un séminaire autour de Mâcon ou Villefranche-sur-Saône ? Clarifiez vos critères et décrivez votre projet.",
    approved: true,
    breadcrumbs: [["Entreprises", "/pour-qui/entreprises/"], ["Séminaire au vert", path]],
    body: `${pageHero({
      eyebrow: "~ trouver le cadre juste pour votre équipe ~",
      title: "Un séminaire dans un cadre naturel, autour de Mâcon et Villefranche-sur-Saône",
      lead: "Journée d'équipe, réunion au calme ou séjour avec nuitées : posez vos critères pour chercher un lieu adapté dans le Mâconnais ou le Beaujolais.",
      primary: false,
      compact: true,
      note: '<a class="button button--secondary" href="#projet-seminaire">Décrire mon projet</a>',
      media: picture({
        name: "seminaireBeaujolais",
        alt: "Vignes, bois et collines du Beaujolais au coucher du soleil",
        caption: "~ vignes et collines du Beaujolais à l'automne ~",
        eager: true
      })
    })}
    ${soilDivider("ivory")}
    <section class="section section--sand">
      <div class="container reading-width">
        <h2>Un beau paysage ne suffit pas</h2>
        <p>Le bon lieu doit aussi fonctionner pour votre équipe : temps de trajet réaliste, salle adaptée, repas, nuitées éventuelles et extérieur vraiment accessible.</p>
        <p>Le formulaire vous aide à mettre ces critères à plat. Vous pouvez répondre même si la date, le budget ou le nombre de participants restent approximatifs.</p>
        <p>Ce service local est en phase de lancement. Si une piste correspond à votre projet, je pourrai revenir vers vous par email. Cette demande ne vaut ni réservation ni devis.</p>
      </div>
    </section>
    <section class="section section--sage">
      <div class="container">
        ${sectionHeading("Trois repères avant de choisir un lieu", "~ au-delà d'une jolie vue ~")}
        ${featureGrid([
          { title: "Partir du trajet réel", text: "Précisez le point de départ des participants et le temps de trajet acceptable. Une proximité sur la carte ne garantit pas un accès simple depuis une gare ou sans voiture." },
          { title: "Séparer journée et séjour", text: "Une journée avec repas et un séminaire avec nuitées n'impliquent pas les mêmes besoins. Pensez aux chambres, aux horaires d'arrivée et aux équipements de réunion." },
          { title: "Définir la place du dehors", text: "Une vue sur les vignes, une pause dans un jardin ou une activité en pleine nature : ces attentes sont différentes. Prévoyez aussi une solution confortable en cas de pluie." }
        ])}
        <p class="section-intro" style="margin-top:32px">Commencez par vos trois indispensables. Ce sont eux qui permettent d'écarter rapidement les lieux mal adaptés.</p>
      </div>
    </section>
    <section class="section section--ivory" id="projet-seminaire">
      <div class="container">
        ${sectionHeading("Décrivez le séminaire que vous préparez", "~ même si tout n'est pas encore fixé ~")}
        <div class="contact-layout">
          <form class="contact-form" action="${connected ? site.formEndpoint : path}" method="post" data-contact-form data-preview="${!connected}" aria-label="Votre projet de séminaire">
            <input type="hidden" name="access_key" value="${site.formAccessKey}">
            <input type="hidden" name="subject" value="Projet séminaire - nouvelle demande">
            <input type="hidden" name="from_name" value="Site La Fabrique du Vivant">
            <input type="hidden" name="redirect" value="${site.domain}${path}merci/">
            <input type="hidden" name="origine_formulaire" value="seminaire-au-vert">
            <div class="honeypot" aria-hidden="true">
              <label for="botcheck">Ne pas cocher cette case</label>
              <input type="checkbox" id="botcheck" name="botcheck" tabindex="-1" autocomplete="off">
            </div>
            <p class="form-intro">Les champs notés « facultatif » peuvent rester vides. Une estimation suffit ; vous pouvez écrire « à préciser ».</p>
            <div class="form-field">
              <label for="attente-nature">Qu'espérez-vous trouver dans ce cadre naturel ?</label>
              <textarea id="attente-nature" name="attente_nature" placeholder="Avec vos mots : ce qui compte pour vous, ce que vous aimeriez vivre ou éviter." required maxlength="3000"></textarea>
            </div>
            <div class="form-field">
              <label for="besoin">Vous cherchez surtout…</label>
              <select id="besoin" name="besoin" required>
                <option value="">Choisir</option>
                <option>Un lieu seul</option>
                <option>Un lieu avec des prestations (repas, hébergement, activité…)</option>
                <option>Une organisation complète du séminaire</option>
                <option>Une activité seule, j'ai déjà un lieu</option>
                <option>Je ne sais pas encore / autre besoin</option>
              </select>
            </div>
            <div class="form-field">
              <label for="secteur">Quel secteur et quel trajet maximum ?</label>
              <input id="secteur" name="secteur_trajet" type="text" placeholder="Ex. : 30 minutes autour de Mâcon, départ de la gare" required maxlength="300">
            </div>
            <div class="form-field">
              <label for="effectif">Combien de personnes environ ?</label>
              <input id="effectif" name="effectif" type="text" placeholder="Ex. : entre 15 et 25 personnes, ou à préciser" required maxlength="100">
            </div>
            <div class="form-field">
              <label for="periode-duree">À quelle période et pour quelle durée ?</label>
              <input id="periode-duree" name="periode_duree" type="text" placeholder="Date ou mois et année, demi-journée, journée, nuitées…" required maxlength="300">
            </div>
            <div class="form-field">
              <label for="indispensables">Vos indispensables <span class="form-help">(facultatif)</span></label>
              <input id="indispensables" name="indispensables" type="text" placeholder="Salle équipée, repas, nuitées, accès sans marches, extérieur…" maxlength="600">
            </div>
            <div class="form-field">
              <label for="budget">Budget envisagé <span class="form-help">(facultatif)</span></label>
              <input id="budget" name="budget" type="text" placeholder="Total ou par personne, ce qu'il comprend, ou à définir" maxlength="300">
            </div>
            <div class="form-field">
              <label for="structure">Votre entreprise ou structure <span class="form-help">(facultatif)</span></label>
              <input id="structure" name="structure" type="text" autocomplete="organization" maxlength="200">
            </div>
            <div class="form-field">
              <label for="email">Votre email <span class="form-help">(pour un éventuel retour sur ce projet)</span></label>
              <input id="email" name="email" type="email" autocomplete="email" required maxlength="254">
            </div>
            <p class="form-legal">Ces informations servent à comprendre votre besoin et à vous recontacter au sujet de ce projet. Aucune inscription à une newsletter. Vos coordonnées ne sont transmises à aucun lieu sans votre accord préalable. <a href="/confidentialite/#seminaires">Utilisation de vos données</a>.</p>
            <p class="form-note">Ce service est en phase de lancement. Si une piste adaptée se présente, je vous recontacte par email.</p>
            <button class="button" type="submit"${connected ? "" : " disabled"}>Envoyer mon projet</button>
            ${connected ? "" : '<p class="form-note">Le formulaire est temporairement indisponible.</p>'}
            <p class="form-status" data-form-status tabindex="-1" role="status" aria-live="polite"></p>
          </form>
          <div class="contact-next">
            <p class="handwritten">~ le résultat en quelques minutes ~</p>
            <h2>Une recherche plus nette</h2>
            ${processSteps([
              { title: "Le bon périmètre", text: "Vous posez le secteur et le trajet acceptable depuis le point de départ réel de votre équipe." },
              { title: "Les vrais indispensables", text: "Vous distinguez ce qui est nécessaire de ce qui serait simplement agréable : repas, nuitées, salle, accès ou temps dehors." },
              { title: "Le format à rechercher", text: "Vous précisez s'il vous faut un lieu seul, des prestations sur place ou une organisation plus complète." }
            ])}
            <p class="zone-reminder"><span>Si une piste correspond à ces critères, je pourrai vous contacter par email. Vos coordonnées restent confidentielles et ne sont jamais transmises sans votre accord.</span></p>
            <p class="zone-reminder"><span>Vous avez déjà votre lieu et cherchez une animation ? <a href="/pour-qui/entreprises/">Voir les ateliers nature pour les équipes</a>.</span></p>
          </div>
        </div>
      </div>
    </section>`
  },
  {
    path: `${path}merci/`,
    kind: "thanks",
    title: "Votre projet de séminaire est envoyé",
    description: "Confirmation d'envoi de votre projet de séminaire au vert.",
    noindex: true,
    approved: true,
    body: `<section class="not-found">
      <div class="container">
        <p class="handwritten">~ merci pour ces précisions ~</p>
        <h1>Votre projet de séminaire est bien envoyé</h1>
        <p class="not-found__lead">Vous avez maintenant posé le secteur, le format et les critères essentiels de votre recherche.</p>
        <p class="not-found__lead">Ce service est en phase de lancement. Si une piste adaptée se présente, je pourrai revenir vers vous par email. Cette demande ne vaut ni réservation ni devis.</p>
        <p class="not-found__lead">Vos coordonnées restent confidentielles et ne seront jamais transmises sans votre accord. Vous n'êtes inscrit à aucune newsletter.</p>
        <div class="button-row"><a class="button button--secondary" href="/">Retour à l'accueil</a></div>
      </div>
    </section>`
  }
];

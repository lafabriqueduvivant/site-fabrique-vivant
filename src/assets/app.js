const navToggle = document.querySelector(".nav-toggle");
const siteMenu = document.querySelector("#site-menu");

function closeMenu() {
  if (!navToggle || !siteMenu) return;
  navToggle.setAttribute("aria-expanded", "false");
  siteMenu.dataset.open = "false";
}

if (navToggle && siteMenu) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    siteMenu.dataset.open = String(!open);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      navToggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-nav")) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
}

document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
  dropdown.addEventListener("toggle", () => {
    if (!dropdown.open || window.innerWidth <= 860) return;
    document.querySelectorAll(".nav-dropdown[open]").forEach((other) => {
      if (other !== dropdown) other.removeAttribute("open");
    });
  });
});

document.querySelectorAll(".email-obfuscated").forEach((span) => {
  const user = span.dataset.user;
  const domain = span.dataset.domain;
  if (!user || !domain) return;
  span.textContent = `${user} (at) ${domain.replace(".", " (point) ")}`;
});

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  const params = new URLSearchParams(window.location.search);
  const need = params.get("besoin");
  const subject = params.get("objet");
  const intention = params.get("intention");
  const needField = contactForm.querySelector("[name='besoin']");
  const messageField = contactForm.querySelector("[name='message']");

  if (need && needField) {
    const matchingOption = [...needField.options].find((option) => option.value === need);
    if (matchingOption) needField.value = need;
  }

  if ((subject || intention === "question") && messageField) {
    messageField.value = subject ? `Bonjour, je souhaite échanger au sujet de : ${subject}.\n\n` : "Bonjour, j'ai une question :\n\n";
  }

  contactForm.addEventListener("submit", (event) => {
    if (contactForm.dataset.preview !== "true") return;
    event.preventDefault();
    const status = contactForm.querySelector("[data-form-status]");
    if (status) {
      status.textContent = "L'envoi est volontairement désactivé : la clé du service de formulaire n'est pas encore renseignée.";
      status.focus();
    }
  });
}

const ficheForm = document.querySelector("[data-fiche-form]");

if (ficheForm) {
  const status = ficheForm.querySelector("[data-form-status]");
  const submitButton = ficheForm.querySelector("button[type='submit']");

  const showStatus = (message) => {
    if (status) {
      status.textContent = message;
      status.focus();
    }
  };

  ficheForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const endpoint = ficheForm.dataset.endpoint;

    if (!endpoint) {
      showStatus("L'envoi est volontairement désactivé : le service d'envoi n'est pas encore branché.");
      return;
    }

    const email = ficheForm.querySelector("[name='email']").value.trim();
    if (submitButton) submitButton.disabled = true;
    showStatus("Envoi en cours…");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          optin: {
            fields: { email },
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            isDesktop: true,
            checkBoxIds: [],
            surveysResults: []
          }
        })
      });

      if (response.ok) {
        window.location.assign("/fiche-depart/merci/");
        return;
      }

      const data = await response.json().catch(() => null);
      const fieldError = data && data.errors && data.errors.fields && data.errors.fields.email && data.errors.fields.email[0];
      showStatus(fieldError || "L'envoi n'a pas abouti. Vérifiez votre adresse email et réessayez dans un instant.");
    } catch {
      showStatus("L'envoi n'a pas abouti. Vérifiez votre connexion et réessayez.");
    }

    if (submitButton) submitButton.disabled = false;
  });
}

/*
  Portfolio rebuild
  - access gate (password OR restricted mode)
  - confidential blur: [data-confidential]
  - mobile nav
  - timeline: scroll activation + progress bar + dot navigation
*/

(() => {
  const STORAGE_KEY = "vb_portfolio_access";
  const ACCESS = {
    FULL: "full",
    RESTRICTED: "restricted",
  };

  // Change this password (simple demo).
  // If you want better security, replace with a SHA-256 hash and compare hashes.
  const ACCESS_PASSWORD = "0";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const THEME_KEY = "vb_portfolio_theme";
  const THEMES = { LIGHT: "light", DARK: "dark" };
  // ---------------------------------------------------------------------------
  // i18n (FR / EN) — minimal add-on, does not change content structure
  // ---------------------------------------------------------------------------
  const LANG_KEY = "vb_portfolio_lang";
  const LANGS = { FR: "fr", EN: "en" };





  function getSavedLang() {
    const l = localStorage.getItem(LANG_KEY);
    return l === LANGS.FR || l === LANGS.EN ? l : null;
  }

  function t(lang, key) {
    return (I18N[lang] && I18N[lang][key]) || (I18N.fr && I18N.fr[key]) || "";
  }

  function applyTranslations(lang) {
    applyI18nGeneric(lang);
    const navMenu = document.getElementById("navMenu");
    if (navMenu) {
      const links = navMenu.querySelectorAll("a.nav__link");
      links.forEach((a) => {
        const href = a.getAttribute("href") || "";
        if (href === "#about") a.textContent = t(lang, "nav.about");
        if (href === "#skills") a.textContent = t(lang, "nav.skills");
        if (href === "#projects") a.textContent = t(lang, "nav.projects");
        if (href === "#timeline") a.textContent = t(lang, "nav.timeline");
        if (href === "#contact") a.textContent = t(lang, "nav.contact");
        if (href === "#projects-personal") a.textContent = t(lang, "nav.projectsPersonal");
        if (href === "#engagements-asso") a.textContent = t(lang, "nav.engagements");
      });
    }
    const navMenuMobile = document.getElementById("navMenuMobile");
    if (navMenuMobile) {
      const links = navMenuMobile.querySelectorAll("a.sidebar__link");
      links.forEach((a) => {
        const href = a.getAttribute("href") || "";
        if (href === "#about") a.textContent = t(lang, "nav.about");
        if (href === "#skills") a.textContent = t(lang, "nav.skills");
        if (href === "#projects") a.textContent = t(lang, "nav.projects");
        if (href === "#timeline") a.textContent = t(lang, "nav.timeline");
        if (href === "#contact") a.textContent = t(lang, "nav.contact");
        if (href === "#projects-personal") a.textContent = t(lang, "nav.projectsPersonal");
        if (href === "#engagements-asso") a.textContent = t(lang, "nav.engagements");
      });
    }


    // Gate
    const gate = document.getElementById("accessGate");
    if (gate) {
      const badge = gate.querySelector(".gate__badge");
      if (badge) badge.textContent = t(lang, "gate.badge");

      const title = document.getElementById("gateTitle");
      if (title) title.textContent = t(lang, "gate.title");

      const subtitle = gate.querySelector(".gate__subtitle");
      if (subtitle) subtitle.textContent = t(lang, "gate.subtitle");

      const label = gate.querySelector('label[for="gatePassword"]');
      if (label) label.textContent = t(lang, "gate.label");

      const input = document.getElementById("gatePassword");
      if (input) input.setAttribute("placeholder", t(lang, "gate.placeholder"));

      const unlockBtn = gate.querySelector('#gateForm button[type="submit"]');
      if (unlockBtn) unlockBtn.textContent = t(lang, "gate.unlock");

      const btnRestricted = document.getElementById("btnRestricted");
      if (btnRestricted) btnRestricted.textContent = t(lang, "gate.restricted");

      const btnLearn = document.getElementById("btnLearn");
      if (btnLearn) btnLearn.textContent = t(lang, "gate.learn");

      const hint = document.getElementById("gateHint");
      if (hint) {
        const lis = hint.querySelectorAll("li");
        if (lis[0]) lis[0].textContent = t(lang, "gate.hint.1");
        if (lis[1]) lis[1].textContent = t(lang, "gate.hint.2");
        if (lis[2]) lis[2].textContent = t(lang, "gate.hint.3");
      }
    }

    // Hero
    const hero = document.querySelector(".hero");
    if (hero) {
      const kicker = hero.querySelector(".kicker");
      if (kicker) kicker.textContent = t(lang, "hero.kicker");

      const h1 = hero.querySelector(".hero__title");
      if (h1) {
        const accent = h1.querySelector(".accent");
        const name = accent ? accent.textContent : "Valentin Bacout";
        h1.innerHTML = t(lang, "hero.title").replace("Valentin Bacout", `<span class="accent">${name}</span>`);
      }

      const lead = hero.querySelector(".hero__lead");
      if (lead) lead.textContent = t(lang, "hero.lead");

      const ctas = hero.querySelectorAll(".hero__cta a.btn");
      ctas.forEach((a) => {
        const href = a.getAttribute("href") || "";
        if (href === "#projects") a.textContent = t(lang, "hero.cta.projects");
        if (href === "#about") a.textContent = t(lang, "hero.cta.about");
        if (href === "#contact") a.textContent = t(lang, "hero.cta.contact");
      });

      const pills = hero.querySelectorAll(".hero__links a.linkPill");
      pills.forEach((a) => {
        const label = (a.getAttribute("aria-label") || "").toLowerCase();
        if (label.includes("linkedin")) a.textContent = t(lang, "hero.link.linkedin");
        if (label.includes("cv")) a.textContent = t(lang, "hero.link.cv");
      });

      const metaCards = hero.querySelectorAll(".metaCard");
      metaCards.forEach((card) => {
        const lab = card.querySelector(".metaCard__label");
        const val = card.querySelector(".metaCard__value");
        if (!lab || !val) return;

        if (lab.textContent.trim() === "Spécialité" || lab.textContent.trim() === "Specialty") {
          lab.textContent = t(lang, "meta.specialty");
          val.textContent = t(lang, "meta.specialty.value");
        }
        if (lab.textContent.trim() === "Références" || lab.textContent.trim() === "References") {
          lab.textContent = t(lang, "meta.references");
          val.textContent = t(lang, "meta.references.value");
        }
        if (lab.textContent.trim() === "Localisation" || lab.textContent.trim() === "Location") {
          lab.textContent = t(lang, "meta.location");
          val.textContent = t(lang, "meta.location.value");
        }
      });
    }

    const setText = (sel, key) => {
      const el = document.querySelector(sel);
      if (el) el.textContent = t(lang, key);
    };

    // Generic i18n engine (scales with new content without editing this script)
    function applyI18nGeneric(lang) {
      // Text content
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (!key) return;
        el.textContent = t(lang, key);
      });

      // HTML content (when translations include markup)
      document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        const key = el.getAttribute("data-i18n-html");
        if (!key) return;
        el.innerHTML = t(lang, key);
      });

      // Attributes (placeholder, aria-label, title, ...)
      document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
        const raw = el.getAttribute("data-i18n-attr") || "";
        const [attr, key] = raw.split(":").map((s) => s.trim());
        if (!attr || !key) return;
        el.setAttribute(attr, t(lang, key));
      });
    }


    setText("#about .section__title", "about.title");
    setText("#about .section__subtitle", "about.subtitle");

    const aboutCards = document.querySelectorAll("#about .card");
    if (aboutCards[0]) {
      const h3 = aboutCards[0].querySelector("h3");
      const p = aboutCards[0].querySelectorAll("p");
      if (h3) h3.textContent = t(lang, "about.profile");
      if (p[0]) p[0].textContent = t(lang, "about.profile.p1");
      if (p[1]) p[1].textContent = t(lang, "about.profile.p2");
    }
    if (aboutCards[1]) {
      const h3 = aboutCards[1].querySelector("h3");
      const lis = aboutCards[1].querySelectorAll("li");
      if (h3) h3.textContent = t(lang, "about.find.title");
      if (lis[0]) lis[0].textContent = t(lang, "about.find.li1");
      if (lis[1]) lis[1].textContent = t(lang, "about.find.li2");
      if (lis[2]) lis[2].textContent = t(lang, "about.find.li3");
      if (lis[3]) lis[3].textContent = t(lang, "about.find.li4");
    }

    setText("#timeline .section__title", "timeline.title");
    setText("#timeline .section__subtitle", "timeline.subtitle");
    const zoomLabel = document.querySelector("#timeline .th-controls label");
    if (zoomLabel) {
      const input = zoomLabel.querySelector("input");
      zoomLabel.innerHTML = `${t(lang, "timeline.zoom")} `;
      if (input) zoomLabel.appendChild(input);
    }

    setText("#skills .section__title", "skills.title");
    setText("#skills .section__subtitle", "skills.subtitle");
    const skillsCards = document.querySelectorAll("#skills .skills .card");
    if (skillsCards[0]) skillsCards[0].querySelector("h3").textContent = t(lang, "skills.conception");
    if (skillsCards[1]) skillsCards[1].querySelector("h3").textContent = t(lang, "skills.proto");
    if (skillsCards[2]) skillsCards[2].querySelector("h3").textContent = t(lang, "skills.industrial");
    if (skillsCards[3]) skillsCards[3].querySelector("h3").textContent = t(lang, "skills.management");

    setText("#projects .section__title", "projects.title");
    setText("#projects .section__subtitle", "projects.subtitle");

    setText("#projects-personal .section__title", "projectsPersonal.title");

    setText("#engagements-asso .section__title", "engagements.title");
    setText("#engagements-asso .section__subtitle", "engagements.subtitle");

    setText("#contact .section__title", "contact.title");
    setText("#contact .section__subtitle", "contact.subtitle");

    const contactCards = document.querySelectorAll("#contact .card");
    if (contactCards[0]) {
      const h3 = contactCards[0].querySelector("h3");
      const p = contactCards[0].querySelector("p");
      if (h3) h3.textContent = t(lang, "contact.reach");
      if (p) p.textContent = t(lang, "contact.reach.p");
    }
    if (contactCards[1]) {
      const h3 = contactCards[1].querySelector("h3");
      const p = contactCards[1].querySelector("p");
      const btn = document.getElementById("scrollTop");
      if (h3) h3.textContent = t(lang, "contact.availability");
      if (p) p.textContent = t(lang, "contact.availability.p");
      if (btn) btn.textContent = t(lang, "contact.top");
    }

    const footerCopy = document.querySelector(".footer__copy");
    if (footerCopy) {
      const year = document.getElementById("year");
      const rights = t(lang, "footer.rights");
      footerCopy.innerHTML = `© <span id="year">${year ? year.textContent : ""}</span> Valentin Bacout — ${rights}`;
    }
    const footerNote = document.querySelector(".footer__note");
    if (footerNote) footerNote.childNodes[0].textContent = `${t(lang, "footer.mode")} `;
    const footerAccessBtn = document.getElementById("footerAccessBtn");
    if (footerAccessBtn) footerAccessBtn.textContent = t(lang, "footer.access");
  }

  function setLang(lang, persist = true) {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    if (persist) localStorage.setItem(LANG_KEY, lang);

    // Header lang buttons (desktop + mobile sidebar)
    const btnA = document.getElementById("langSwitch");
    const btnB = document.getElementById("langSwitchMobile");
    const txt = lang === LANGS.EN ? "EN" : "FR";
    if (btnA) btnA.textContent = `🌐 ${txt}`;
    if (btnB) btnB.textContent = `🌐 ${txt}`;

    applyTranslations(lang);

    // Refresh theme/access labels in current language
    const currentTheme = document.documentElement.dataset.theme || getSystemTheme();
    const themeLabel = document.getElementById("themeLabel");
    if (themeLabel) {
      themeLabel.textContent = currentTheme === THEMES.DARK ? "🌙" : "☀️";
    }
  }

  function initLang() {
    const saved = getSavedLang();
    setLang(saved || LANGS.FR, false);
  }


  function applyTheme(theme, persist = false) {
    document.documentElement.dataset.theme = theme;

    // Header theme buttons (desktop + mobile sidebar)
    const btnA = document.getElementById("themeSwitch");
    const btnB = document.getElementById("themeSwitchMobile");
    const icon = theme === THEMES.DARK ? "🌙" : "☀️";
    if (btnA) btnA.textContent = icon;
    if (btnB) btnB.textContent = icon;

    const label = $("#themeLabel");
    if (label) {
      label.textContent = icon;
    }

    if (persist) localStorage.setItem(THEME_KEY, theme);
  }

  function getSavedTheme() {
    const t = localStorage.getItem(THEME_KEY);
    return t === THEMES.LIGHT || t === THEMES.DARK ? t : null;
  }

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? THEMES.DARK : THEMES.LIGHT;
  }

  function initTheme() {
    const saved = getSavedTheme();
    applyTheme(saved || getSystemTheme(), false);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener?.("change", () => {
      if (!getSavedTheme()) applyTheme(getSystemTheme(), false);
    });
  }

  initTheme();
  initLang();

  // Expose helpers (optional)
  window.VBPortfolio = { setLang, applyTheme };

  function setAccess(mode) {
    const isRestricted = mode === ACCESS.RESTRICTED;
    document.body.classList.toggle("is-restricted", isRestricted);
    localStorage.setItem(STORAGE_KEY, mode);

    const label = $("#accessModeLabel");
    const footer = $("#modeFooter");

    const lang = document.documentElement.dataset.lang || getSavedLang() || LANGS.FR;
    const text = isRestricted ? t(lang, "chip.access.restricted") : t(lang, "chip.access.full");
    if (label) label.textContent = `${t(lang, "chip.access")} : ${text}`;
    if (footer) footer.textContent = text;
  }

  function getAccess() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === ACCESS.FULL || saved === ACCESS.RESTRICTED) return saved;
    return null;
  }

  function openGate() {
    const gate = $("#accessGate");
    if (!gate) return;

    gate.hidden = false;
    document.body.classList.add("gate-open");

    // Accessibility: prevent background from being read by screen readers
    const main = document.querySelector("main");
    if (main) main.setAttribute("aria-hidden", "true");

    const input = $("#gatePassword");
    if (input) input.focus();
  }

  function closeGate() {
    const gate = $("#accessGate");
    if (!gate) return;

    gate.hidden = true;
    document.body.classList.remove("gate-open");

    const main = document.querySelector("main");
    if (main) main.removeAttribute("aria-hidden");

  }


  // Init year
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());


  // Scroll top
  const scrollTopBtn = $("#scrollTop");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  // Access gate events

  // Requirement: ask the visitor *every page load*.
  // We still store the choice while the page is open, but we clear it on load.
  try { localStorage.removeItem(STORAGE_KEY); } catch (_) { }
  setAccess(ACCESS.RESTRICTED);

  const gateForm = $("#gateForm");
  const gateError = $("#gateError");
  const gateHint = $("#gateHint");

  if (gateForm) {
    gateForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = $("#gatePassword");
      const val = (input?.value || "").trim();

      if (!ACCESS_PASSWORD || ACCESS_PASSWORD === "CHANGE_ME") {
        if (gateError) {
          const lang = document.documentElement.dataset.lang || getSavedLang() || LANGS.FR;
          gateError.textContent = t(lang, "gate.error.not_configured");
        }
        return;
      }

      if (val === ACCESS_PASSWORD) {
        setAccess(ACCESS.FULL);
        if (gateError) gateError.textContent = "";
        closeGate();
      } else {
        if (gateError) {
          const lang = document.documentElement.dataset.lang || getSavedLang() || LANGS.FR;
          gateError.textContent = t(lang, "gate.error.wrong");
        }
      }
    });
  }

  const btnRestricted = $("#btnRestricted");
  if (btnRestricted) {
    btnRestricted.addEventListener("click", () => {
      setAccess(ACCESS.RESTRICTED);
      closeGate();
    });
  }

  const btnLearn = $("#btnLearn");
  if (btnLearn && gateHint) {
    btnLearn.addEventListener("click", () => {
      gateHint.hidden = !gateHint.hidden;
    });
  }
  const langSwitch = document.getElementById("langSwitch");
  const langSwitchMobile = document.getElementById("langSwitchMobile");

  const onLangClick = () => {
    const current = document.documentElement.dataset.lang || getSavedLang() || LANGS.FR;
    const next = current === LANGS.FR ? LANGS.EN : LANGS.FR;
    setLang(next, true);
  };
  if (langSwitch) langSwitch.addEventListener("click", onLangClick);
  if (langSwitchMobile) langSwitchMobile.addEventListener("click", onLangClick);
  const themeSwitch = document.getElementById("themeSwitch");
  const themeSwitchMobile = document.getElementById("themeSwitchMobile");

  const onThemeClick = () => {
    const current = document.documentElement.dataset.theme || getSystemTheme();
    const next = current === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    applyTheme(next, true);
  };
  if (themeSwitch) themeSwitch.addEventListener("click", onThemeClick);
  if (themeSwitchMobile) themeSwitchMobile.addEventListener("click", onThemeClick);

  const footerAccessBtn = $("#footerAccessBtn");
  if (footerAccessBtn) {
    footerAccessBtn.addEventListener("click", () => {
      openGate();
      const err = $("#gateError");
      if (err) err.textContent = "";
    });
  }

  // ESC closes gate
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const gate = $("#accessGate");
    if (gate && !gate.hidden) closeGate();
  });

  // Horizontal timeline module (replaces previous vertical timeline)
  const root = document.getElementById("timeline");
  if (root) {
    /* ==========================================================================
           DATA
           - type: "point"  => single date event
           - type: "range"  => start/end event (renders a segment)
           - time / start / end can be "YYYY-MM-DD" or "today"
           ========================================================================== */
    const events = [
      { id: "E1", type: "point", time: "2019-07-31", title: "Baccalauréat Scientifique - mention très bien", desc: "", color: "#73aff6" },
      { id: "E2", type: "range", start: "2019-09-01", end: "2021-08-15", title: "INSA Hauts-de-France - Classes préparatoires intégrées", desc: "", color: "#e31017" },
      { id: "E3", type: "range", start: "2021-09-01", end: "2024-07-19", title: "INSA Hauts-de-France - Cycle ingénieur", desc: "", color: "#e31017" },
      { id: "E4", type: "range", start: "2021-12-01", end: "2022-05-15", title: "Responsable communication - Liste Campagne BDE", desc: "", color: "#ffc0cb" },
      { id: "E5", type: "range", start: "2022-09-01", end: "2023-01-01", title: "Stage ingénieur R&D au Cerema de Bron", desc: "", color: "#E87900" },
      { id: "E6", type: "range", start: "2023-02-01", end: "2024-02-01", title: "Responsable du pôle communication BDE INSA HDF", desc: "", color: "#ffc0cb" },
      { id: "E7", type: "range", start: "2023-09-01", end: "2024-02-01", title: "PLP (Plateau Projet) - Projet de fin d'étude", desc: "", color: "#303086" },
      { id: "E8", type: "range", start: "2023-12-01", end: "2024-02-01", title: "Projet de parcours VINCI - Aide à la manutention de chariots médicaux", desc: "", color: "#303086" },
      { id: "E9", type: "range", start: "2024-03-05", end: "2024-07-19", title: "Stage ingénieur Process et Maintenance à Joubert", desc: "", color: "#0E5A88" },
      { id: "E10", type: "point", time: "2024-09-01", title: "Diplôme INSA Hauts-de-France - Ingénieur en mécanique énergétique", desc: "", color: "#e31017" },
      { id: "E11", type: "range", start: "2024-10-01", end: "today", title: "Secrétaire Général INSA Alumni Hauts-de-France", desc: "", color: "#ffc0cb" },
      { id: "E12", type: "range", start: "2025-03-01", end: "today", title: "Ingénieur en conception mécanique chez DELEO", desc: "", color: "#2a91dc" },


      /* A dedicated “Today” point (kept as in original) */
      { id: "TODAY", type: "point", time: "today", title: "Aujourd’hui", desc: "", color: "#ffffff" },
    ];

    /* ==========================================================================
       DOM ELEMENTS
       ========================================================================== */
    const stage = root.querySelector("#th-stage");
    const lanesEl = root.querySelector("#th-lanes");
    const zoomEl = root.querySelector("#th-zoom");



    const timelineEl = root.querySelector(".th-timeline");
    const scroller = root.querySelector(".th-scroller");

    // Fade gauche/droite seulement si scroll possible (et selon la position)
    function updateScrollerFade() {
      if (!scroller) return;

      const max = scroller.scrollWidth - scroller.clientWidth;

      // Pas d'overflow => pas de fade
      if (max <= 1) {
        scroller.classList.remove("th-can-scroll");
        scroller.style.removeProperty("--fadeL");
        scroller.style.removeProperty("--fadeR");
        return;
      }

      scroller.classList.add("th-can-scroll");

      const left = scroller.scrollLeft;
      const showLeft = left > 1;
      const showRight = left < max - 1;

      // 8% de fade quand nécessaire, sinon 0 (pas de fondu)
      scroller.style.setProperty("--fadeL", showLeft ? "8%" : "0%");
      scroller.style.setProperty("--fadeR", showRight ? "8%" : "0%");
    }

    if (scroller) {
      // Mettre à jour à chaque scroll horizontal
      scroller.addEventListener("scroll", updateScrollerFade, { passive: true });




      // Drag-to-scroll (click + drag like mobile)
      let isDragging = false;
      let dragStartX = 0;
      let dragStartScrollLeft = 0;
      let dragMoved = false;

      function isInteractiveTarget(el) {
        if (!el) return false;
        return (
          el.closest("input, textarea, select, button, a, label") !== null
        );
      }

      scroller.addEventListener("pointerdown", (e) => {
        // ✅ souris uniquement => mobile garde le scroll natif + inertie
        if (e.pointerType !== "mouse") return;

        // only left button (mouse)
        if (e.button !== 0) return;
        if (isInteractiveTarget(e.target)) return;

        isDragging = true;
        dragMoved = false;
        dragStartX = e.clientX;
        dragStartScrollLeft = scroller.scrollLeft;

        scroller.classList.add("is-dragging");
        scroller.setPointerCapture?.(e.pointerId);
      });

      scroller.addEventListener("pointermove", (e) => {
        if (!isDragging) return;

        const dx = e.clientX - dragStartX;
        if (!dragMoved && Math.abs(dx) > 3) dragMoved = true;

        scroller.scrollLeft = dragStartScrollLeft - dx;
        e.preventDefault();
      }, { passive: false });

      function endDrag(e) {
        if (!isDragging) return;
        isDragging = false;
        scroller.classList.remove("is-dragging");
        try { scroller.releasePointerCapture?.(e.pointerId); } catch (_) { }
      }

      scroller.addEventListener("pointerup", endDrag);
      scroller.addEventListener("pointercancel", endDrag);
      scroller.addEventListener("pointerleave", endDrag);

      // Prevent accidental clicks after dragging
      scroller.addEventListener("click", (e) => {
        if (!dragMoved) return;
        e.preventDefault();
        e.stopPropagation();
        dragMoved = false;
      }, true);

      // Mettre à jour quand la taille change (zoom / resize)
      window.addEventListener("resize", updateScrollerFade);
    }
    /* ==========================================================================
           CONSTANTS / LAYOUT CONFIG
           ========================================================================== */
    const PX_PER_UNIT_BASE = 0.8;

    // Range lanes: each lane is a horizontal line around the axis.
    const LANE_HEIGHT = 6;
    const LANE_GAP =
      parseInt(getComputedStyle(root).getPropertyValue("--lane-gap"), 10) || 10;

    // Card sizing helpers (read from CSS variables)
    const CARD_W = () =>
      parseFloat(getComputedStyle(root).getPropertyValue("--card-w")) || 260;

    const CARD_GAP = () =>
      parseFloat(getComputedStyle(root).getPropertyValue("--card-gap")) || 12;

    const CARD_MARGIN_X = 10;
    const CARD_SAFE_PAD = 6;

    const DAY_MS = 24 * 60 * 60 * 1000;

    /* ==========================================================================
       UTILITIES
       ========================================================================== */
    function autoColor(i) {
      const palette = [
        "#60a5fa",
        "#34d399",
        "#fbbf24",
        "#f472b6",
        "#a78bfa",
        "#fb7185",
        "#22c55e",
        "#38bdf8",
        "#f97316",
      ];
      return palette[i % palette.length];
    }

    function escapeHtml(s) {
      return String(s).replace(/[&<>"']/g, (c) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c]));
    }

    /**
     * Parses:
     * - Date instance
     * - timestamp number
     * - "YYYY-MM-DD"
     * - "today"
     */
    function toDate(val) {
      if (val instanceof Date) return val;
      if (typeof val === "number") return new Date(val);

      if (typeof val === "string") {
        const s = val.trim().toLowerCase();

        // Special keyword: today (midnight)
        if (s === "today") {
          const n = new Date();
          return new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0, 0);
        }

        // ISO-like YYYY-MM-DD
        const m = val.match(/^(\d{4})-(\d{2})-(\d{2})$/);
        if (m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 0, 0, 0, 0);

        // Fallback: let Date try
        return new Date(val);
      }

      throw new Error("Date invalide: " + val);
    }

    const toMs = (v) => toDate(v).getTime();

    function formatMonthYear(ms) {
      const d = new Date(ms);
      const s = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(d);
      return s.charAt(0).toUpperCase() + s.slice(1);
    }

    function formatMonthYearRange(a, b) {
      const A = formatMonthYear(a);
      const B = formatMonthYear(b);
      return A === B ? A : `${A} - ${B}`;
    }

    /* ==========================================================================
       EVENT NORMALIZATION
       - Adds startMs / endMs / timeMs
       - Ensures range start <= end
       - Ensures a color exists
       ========================================================================== */
    function normalizeEvents(evts) {
      return evts.map((e, i) => {
        const out = { ...e };

        if (e.type === "point") {
          out.timeMs = toMs(e.time);
          out.startMs = out.timeMs;
          out.endMs = out.timeMs;
        } else {
          out.startMs = toMs(e.start);
          out.endMs = toMs(e.end);

          // Swap if needed
          if (out.endMs < out.startMs) {
            const t = out.startMs;
            out.startMs = out.endMs;
            out.endMs = t;
          }
        }

        out.color = out.color || autoColor(i);
        return out;
      });
    }

    /* ==========================================================================
       LANE ASSIGNMENT
       - Only for "range" events (segments)
       - Greedy: place segments on first lane where they do not overlap
       ========================================================================== */
    function assignLanes(rangeEvents) {
      const sorted = [...rangeEvents].sort(
        (a, b) => a.startMs - b.startMs || a.endMs - b.endMs
      );

      const laneEnds = [];
      const laneOf = new Map();

      for (const e of sorted) {
        let placed = false;

        for (let l = 0; l < laneEnds.length; l++) {
          if (laneEnds[l] <= e.startMs) {
            laneEnds[l] = e.endMs;
            laneOf.set(e.id, l);
            placed = true;
            break;
          }
        }

        if (!placed) {
          laneEnds.push(e.endMs);
          laneOf.set(e.id, laneEnds.length - 1);
        }
      }

      return { laneOf, laneCount: laneEnds.length };
    }

    /**
     * Lane vertical offset around axis:
     * lane 0 = 0
     * lane 1 = +k
     * lane 2 = -k
     * lane 3 = +2k
     * lane 4 = -2k
     * ...
     */
    function laneOffset(laneIndex) {
      if (laneIndex === 0) return 0;

      const k = Math.ceil(laneIndex / 2);
      const sign = laneIndex % 2 === 1 ? +1 : -1;

      return sign * k * (LANE_HEIGHT + LANE_GAP);
    }

    /* ==========================================================================
       STAGE CLEANUP (keeps axis + lanes container)
       ========================================================================== */
    function clearStage() {
      const keep = new Set(["th-axis", "th-lanes"]);
      [...stage.children].forEach((ch) => {
        if (!keep.has(ch.className)) ch.remove();
      });
      lanesEl.innerHTML = "";
    }

    /* ==========================================================================
       ZOOM AUTO HELPERS (kept, even if not used)
       ========================================================================== */
    function assignRowsByLeftSim(items, cardW) {
      const rows = [];
      const sorted = [...items].sort((a, b) => a.xLeft - b.xLeft);

      for (const it of sorted) {
        const left = it.xLeft;
        const right = it.xLeft + cardW;

        let placed = false;
        for (let r = 0; r < rows.length; r++) {
          if (left > rows[r] + CARD_MARGIN_X) {
            rows[r] = right;
            placed = true;
            break;
          }
        }

        if (!placed) rows.push(right);
      }

      return rows.length;
    }

    function rowsNeededForZoom(zoom, ev, minMs) {
      const pxPerMs = (PX_PER_UNIT_BASE * zoom) / DAY_MS;
      const leftPad = 40;
      const cardW = CARD_W();

      const sorted = [...ev].sort((a, b) => a.startMs - b.startMs || a.endMs - b.endMs);

      const items = sorted.map((e, idx) => {
        const xAnchor = leftPad + (e.startMs - minMs) * pxPerMs;
        return { isTop: idx % 2 === 0, xLeft: Math.max(CARD_SAFE_PAD, xAnchor) };
      });

      const top = items.filter((x) => x.isTop);
      const bot = items.filter((x) => !x.isTop);

      const topRows = assignRowsByLeftSim(top, cardW);
      const botRows = assignRowsByLeftSim(bot, cardW);

      return { topRows, botRows, maxRows: Math.max(topRows, botRows) };
    }

    function computeAutoZoomValue(ev, minMs, maxMs) {
      const zMin = parseInt(zoomEl.min, 10) / 100;
      const zMax = parseInt(zoomEl.max, 10) / 100;

      let best = { zoom: zMin, maxRows: Infinity };

      for (let zi = Math.round(zMin * 100); zi <= Math.round(zMax * 100); zi += 1) {
        const z = zi / 100;
        const r = rowsNeededForZoom(z, ev, minMs);

        if (r.topRows === 1 && r.botRows === 1) return z;
        if (r.maxRows < best.maxRows) best = { zoom: z, maxRows: r.maxRows };
      }

      return best.zoom;
    }

    /* ==========================================================================
       RENDER
       ========================================================================== */
    function render() {
      clearStage();

      const zoom = parseInt(zoomEl.value, 10) / 100;
      const pxPerMs = (PX_PER_UNIT_BASE * zoom) / DAY_MS;

      const leftPad = 40;
      const rightPad = 40;

      const ev = normalizeEvents(events);

      // Compute timeline bounds (with padding)
      const minMsRaw = Math.min(...ev.map((x) => x.startMs));
      const maxMsRaw = Math.max(...ev.map((x) => x.endMs));
      const spanRaw = Math.max(1, maxMsRaw - minMsRaw);
      const pad = Math.max(DAY_MS, Math.round(spanRaw * 0.05));

      const minMs = minMsRaw - pad;
      const maxMs = maxMsRaw + pad;
      const span = Math.max(1, maxMs - minMs);

      // Update stage width for horizontal scrolling
      const width = Math.round(leftPad + span * pxPerMs + rightPad);
      stage.style.minWidth = width + "px";

      const axisY =
        parseFloat(getComputedStyle(root).getPropertyValue("--axis-y")) || 240;

      // Assign lanes (for range events only)
      const rangeEvents = ev.filter((x) => x.type === "range");
      const { laneOf, laneCount } = assignLanes(rangeEvents);

      // Draw lane guide lines
      for (let l = 0; l < laneCount; l++) {
        const guide = document.createElement("div");
        guide.style.position = "absolute";
        guide.style.left = "0";
        guide.style.right = "0";
        guide.style.top = "50%";
        guide.style.transform = `translateY(${laneOffset(l)}px)`;
        guide.style.height = "1px";
        guide.style.background = "color-mix(in oklab, var(--th-stroke) 55%, transparent)"; lanesEl.appendChild(guide);
      }

      // Sort events for consistent display order
      const sorted = [...ev].sort((a, b) => a.startMs - b.startMs || a.endMs - b.endMs);
      const built = [];

      // Build DOM for each event
      sorted.forEach((e, idx) => {
        const xStart = leftPad + (e.startMs - minMs) * pxPerMs;
        const xEnd = leftPad + (e.endMs - minMs) * pxPerMs;

        // Anchor X position (points use xStart == xEnd)
        const xAnchor = xStart;

        // For ranges only: lane Y offset around axis
        let yOff = 0;
        if (e.type === "range") yOff = laneOffset(laneOf.get(e.id) ?? 0);

        const evEl = document.createElement("div");
        evEl.className = "th-event";

        // Marker: segment or dot
        if (e.type === "range") {
          const seg = document.createElement("div");
          seg.className = "th-seg";
          seg.style.left = `${xStart}px`;
          seg.style.width = `${Math.max(2, xEnd - xStart)}px`;
          seg.style.background = e.color;
          evEl.appendChild(seg);
        } else {
          const dot = document.createElement("div");
          dot.className = "th-dot";
          dot.style.left = `${xAnchor}px`;
          dot.style.background = e.color;
          evEl.appendChild(dot);
        }

        // Connector + Card
        const connector = document.createElement("div");
        connector.className = "th-connector";
        evEl.appendChild(connector);

        const card = document.createElement("div");
        card.className = "th-card";
        card.style.borderLeft = `4px solid ${e.color}`;

        const isTodayEvent = e.id === "TODAY";

        if (isTodayEvent) card.classList.add("th-card--today");
        if (isTodayEvent) {
          // "Today" card = title only
          card.innerHTML = `
                <h3><span><b>${escapeHtml(e.title)}</b></span></h3>
              `;
        } else {
          // Normal events: show date range + title (+ optional desc)
          const dateTitle =
            e.type === "point"
              ? formatMonthYear(e.startMs)
              : formatMonthYearRange(e.startMs, e.endMs);

          card.innerHTML = `
                <h3><span>${escapeHtml(dateTitle)}</span></h3>
                <p><b>${escapeHtml(e.title)}</b></p>
                ${e.desc ? `<p>${escapeHtml(e.desc)}</p>` : ``}
              `;
        }

        evEl.appendChild(card);
        stage.appendChild(evEl);

        built.push({
          e,
          idx,
          xStart,
          xEnd,
          xAnchor,
          yOffset: yOff,
          evEl,
          connectorEl: connector,
          cardEl: card,
          isTop: idx % 2 === 0,
        });
      });

      /* ------------------------------------------------------------------------
         X anchoring:
         - Left edge of card = connector x
         ------------------------------------------------------------------------ */
      for (const it of built) {
        it.xLeft = Math.max(CARD_SAFE_PAD, it.xAnchor);
        it.cardEl.style.left = `${it.xLeft}px`;
        it.connectorEl.style.left = `${it.xLeft}px`;
      }

      /* ------------------------------------------------------------------------
         Card widths:
         - Each card width adapts so it does not overlap the next connector on the
           same side (top/bottom), but capped to CARD_W()
         ------------------------------------------------------------------------ */
      function applySideWidths(list) {
        const byX = [...list].sort((a, b) => a.xLeft - b.xLeft);

        for (let i = 0; i < byX.length; i++) {
          const it = byX[i];
          const next = byX[i + 1];

          if (!next) {
            it.cardEl.style.width = `${CARD_W()}px`;
            continue;
          }

          const maxW = Math.max(120, next.xLeft - it.xLeft - CARD_MARGIN_X);
          it.cardEl.style.width = `${Math.min(CARD_W(), maxW)}px`;
        }
      }

      applySideWidths(built.filter((it) => it.isTop));
      applySideWidths(built.filter((it) => !it.isTop));

      /* ------------------------------------------------------------------------
         Y positioning:
         - fixed top/bottom rows (no stacking)
         ------------------------------------------------------------------------ */
      const cardGap = CARD_GAP();
      const minConn = 70;

      // Ensure stage is tall enough
      stage.style.minHeight = `${axisY + minConn + cardGap + 200}px`;

      for (const it of built) {
        const yMark = axisY + it.yOffset;

        // Marker Y positions:
        if (it.e.type === "range") {
          const seg = it.evEl.querySelector(".th-seg");
          seg.style.top = `${yMark}px`;
          seg.style.transform = "translateY(-50%)";
        } else {
          const dot = it.evEl.querySelector(".th-dot");
          dot.style.top = `${axisY}px`;
        }

        // Cards are split between top & bottom (alternating)
        if (it.isTop) {
          const cardTop = axisY - minConn - cardGap - it.cardEl.offsetHeight;
          it.cardEl.style.top = `${cardTop}px`;

          const connTop = cardTop + it.cardEl.offsetHeight + cardGap;
          const connHeight = Math.max(6, yMark - connTop);
          it.connectorEl.style.top = `${connTop}px`;
          it.connectorEl.style.height = `${connHeight}px`;
        } else {
          const cardTop = axisY + minConn + cardGap;
          it.cardEl.style.top = `${cardTop}px`;

          const connTop = yMark;
          const connHeight = Math.max(6, cardTop - cardGap - connTop);
          it.connectorEl.style.top = `${connTop}px`;
          it.connectorEl.style.height = `${connHeight}px`;
        }
      }
    }

    /* ==========================================================================
       EVENTS
       ========================================================================== */
    zoomEl.addEventListener("input", render);
    window.addEventListener("resize", render);

    render();

    // Auto-scroll to the end at load (latest events)
    window.addEventListener("load", () => {
      const scroller = root.querySelector(".th-scroller");
      scroller.scrollLeft = scroller.scrollWidth;
      updateScrollerFade();
    });
  }



  // Projects + Engagements horizontal scroller (same feel as the timeline)
  (function initHorizontalCardScrollers() {
    const scrollers = Array.from(document.querySelectorAll(".projects, .engagements"))
      .filter((el) => el.querySelector(":scope > .project"));
    if (!scrollers.length) return;

    function attach(scroller) {
      // === Centered infinite carousel (all card scrollers) ===
      if (scroller.dataset.carouselInit === "1") return;
      scroller.dataset.carouselInit = "1";

      const baseCards = Array.from(scroller.querySelectorAll(":scope > .project"))
        .filter((c) => !c.hasAttribute("data-clone"));
      const realCount = baseCards.length;

      const enableStaticMode = () => {
        scroller.classList.add("is-static");
        scroller.classList.remove("pr-can-scroll", "is-dragging");

        // stop any horizontal scroll + reset position
        scroller.style.overflowX = "hidden";
        scroller.scrollLeft = 0;

        // clear fade vars
        scroller.style.removeProperty("--fadeL");
        scroller.style.removeProperty("--fadeR");
      };

      // … puis juste après ton bloc realCount (ou juste après l’avoir calculé) :
      if (realCount <= 2) {
        enableStaticMode();
        return; // important : on ne branche pas les listeners scroll/drag/fade
      }
      // Desktop: dots-only (pas de drag / pas de wheel/trackpad)
      // Desktop: dots-only = pas de drag souris, MAIS trackpad OK
      const isDesktop = window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches;
      if (isDesktop) {
        scroller.classList.add("dots-only");
        // ✅ on ne bloque plus le wheel/trackpad
        // ✅ on laisse le fade fonctionner normalement
      }

      // --- Dots (pagination) for infinite carousel (>= 3 real cards) ---
      let dotsWrap = null;
      let dotEls = [];
      let rafDots = null;

      const ensureDots = () => {
        if (realCount < 3) return;

        // Avoid duplicates if init runs again
        if (scroller.nextElementSibling?.classList?.contains("carousel-dots")) {
          dotsWrap = scroller.nextElementSibling;
          dotEls = Array.from(dotsWrap.querySelectorAll(".carousel-dot"));
          return;
        }

        dotsWrap = document.createElement("div");
        dotsWrap.className = "carousel-dots";
        dotsWrap.setAttribute("aria-label", "Carousel pagination");

        dotEls = Array.from({ length: realCount }).map((_, i) => {
          const b = document.createElement("button");
          b.type = "button";
          b.className = "carousel-dot";
          b.setAttribute("aria-label", `Aller à la carte ${i + 1}`);
          b.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const reals = Array.from(scroller.querySelectorAll(":scope > .project[data-real='1']"));
            if (!reals[i]) return;
            centerCard(reals[i], "smooth");
          });
          dotsWrap.appendChild(b);
          return b;
        });

        scroller.insertAdjacentElement("afterend", dotsWrap);
      };

      const setActiveDot = (idx) => {
        if (!dotEls.length) return;
        dotEls.forEach((d, i) => d.classList.toggle("is-active", i === idx));
      };

      const updateDotsFromScroll = () => {
        if (!dotsWrap) return;

        const centered = getClosestCentered();
        if (!centered) return;

        let idx = 0;

        if (centered.getAttribute("data-clone") === "last") {
          idx = realCount - 1;
        } else if (centered.getAttribute("data-clone") === "first") {
          idx = 0;
        } else {
          const reals = Array.from(scroller.querySelectorAll(":scope > .project[data-real='1']"));
          const found = reals.indexOf(centered);
          idx = found >= 0 ? found : 0;
        }

        setActiveDot(idx);
      };

      const setCarouselPadding = () => {
        const firstReal = scroller.querySelector(":scope > .project[data-real='1']") || scroller.querySelector(":scope > .project");
        if (!firstReal) return;

        const cardW = firstReal.getBoundingClientRect().width;
        const pad = Math.max(16, (scroller.clientWidth - cardW) / 2);
        scroller.style.setProperty("--carousel-pad", `${pad}px`);
      };

      const centerCard = (el, behavior = "auto") => {
        if (!el) return;
        const target = el.offsetLeft - (scroller.clientWidth - el.offsetWidth) / 2;
        scroller.scrollTo({ left: target, behavior });
      };

      const getClosestCentered = () => {
        const items = Array.from(scroller.querySelectorAll(":scope > .project"));
        const centerX = scroller.scrollLeft + scroller.clientWidth / 2;

        let best = null;
        let bestDist = Infinity;

        for (const it of items) {
          const itCenter = it.offsetLeft + it.offsetWidth / 2;
          const d = Math.abs(itCenter - centerX);
          if (d < bestDist) {
            bestDist = d;
            best = it;
          }
        }
        return best;
      };

      // --- Force snap to closest card when interaction ends (wheel/drag/inertia) ---
      let snapEndTimer = null;
      let isPointerDown = false;

      const prefersReducedMotion = () =>
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

      const snapToClosest = (behavior = "smooth") => {
        if (!scroller.classList.contains("is-carousel")) return;

        const closest = getClosestCentered();
        if (!closest) return;

        centerCard(closest, prefersReducedMotion() ? "auto" : behavior);

        // si clone -> jump sur le vrai
        normalizeIfOnClone();

        updateDotsFromScroll?.();
      };

      const scheduleSnapEnd = () => {
        if (!scroller.classList.contains("is-carousel")) return;
        if (isPointerDown) return;

        if (snapEndTimer) clearTimeout(snapEndTimer);
        snapEndTimer = setTimeout(() => snapToClosest("smooth"), 120);
      };

      scroller.addEventListener("scroll", () => {
        if (dotsWrap) {
          if (rafDots) cancelAnimationFrame(rafDots);
          rafDots = requestAnimationFrame(updateDotsFromScroll);
        }
        scheduleSnapEnd();
      }, { passive: true });

      scroller.addEventListener("pointerdown", () => { isPointerDown = true; }, { passive: true });
      scroller.addEventListener("pointerup", () => { isPointerDown = false; scheduleSnapEnd(); }, { passive: true });
      scroller.addEventListener("pointercancel", () => { isPointerDown = false; scheduleSnapEnd(); }, { passive: true });
      scroller.addEventListener("wheel", scheduleSnapEnd, { passive: true });


      // Wheel => snap après arrêt de la molette
      scroller.addEventListener("wheel", scheduleSnapEnd, { passive: true });

      // 1 card => centered
      // 2 cards => one left / one right
      // >= 3 cards => centered + infinite loop (clones)
      if (realCount === 1) {
        scroller.classList.remove("is-carousel");
        scroller.style.justifyContent = "center";
        scroller.style.removeProperty("--carousel-pad");
      } else if (realCount === 2) {
        scroller.classList.remove("is-carousel");
        scroller.style.justifyContent = "space-between";
        scroller.style.removeProperty("--carousel-pad");
      } else {
        scroller.classList.add("is-carousel");
        scroller.style.justifyContent = "flex-start";

        // Mark real cards
        baseCards.forEach((c) => c.setAttribute("data-real", "1"));

        // Add clones (last -> head, first -> tail)
        const first = baseCards[0];
        const last = baseCards[baseCards.length - 1];

        const cloneLast = last.cloneNode(true);
        cloneLast.setAttribute("data-clone", "last");
        cloneLast.removeAttribute("data-real");

        const cloneFirst = first.cloneNode(true);
        cloneFirst.setAttribute("data-clone", "first");
        cloneFirst.removeAttribute("data-real");

        scroller.insertBefore(cloneLast, first);
        scroller.appendChild(cloneFirst);

        // Padding + initial center on first real card
        setCarouselPadding();
        centerCard(first, "auto");

        ensureDots();
        updateDotsFromScroll();

        // Recompute padding on resize
        window.addEventListener("resize", () => {
          setCarouselPadding();
        });

        // Infinite loop jump when reaching clones (debounced)
        let snapTimer = null;

        const normalizeIfOnClone = () => {
          const centered = getClosestCentered();
          if (!centered || !centered.hasAttribute("data-clone")) return;

          const reals = Array.from(scroller.querySelectorAll(":scope > .project[data-real='1']"));
          if (!reals.length) return;

          if (centered.getAttribute("data-clone") === "last") {
            centerCard(reals[reals.length - 1], "auto");
          } else if (centered.getAttribute("data-clone") === "first") {
            centerCard(reals[0], "auto");
          }
        };

        scroller.addEventListener(
          "scroll",
          () => {
            if (dotsWrap) {
              if (rafDots) cancelAnimationFrame(rafDots);
              rafDots = requestAnimationFrame(updateDotsFromScroll);
            }
            if (snapTimer) clearTimeout(snapTimer);
            snapTimer = setTimeout(() => {
              normalizeIfOnClone();
              updateDotsFromScroll();
            }, 80);
          },
          { passive: true }
        );
      }


      function updateScrollerFade() {
        const max = scroller.scrollWidth - scroller.clientWidth;

        // No overflow => no fade
        if (max <= 1) {
          scroller.classList.remove("pr-can-scroll");
          scroller.style.removeProperty("--fadeL");
          scroller.style.removeProperty("--fadeR");
          return;
        }

        scroller.classList.add("pr-can-scroll");

        const left = scroller.scrollLeft;
        const showLeft = left > 1;
        const showRight = left < max - 1;

        scroller.style.setProperty("--fadeL", showLeft ? "8%" : "0%");
        scroller.style.setProperty("--fadeR", showRight ? "8%" : "0%");
      }

      // Update fade on scroll + resize
      scroller.addEventListener("scroll", updateScrollerFade, { passive: true });
      window.addEventListener("resize", updateScrollerFade);
      window.addEventListener("load", updateScrollerFade);


      // Drag-to-scroll
      let isDragging = false;
      let dragStartX = 0;
      let dragStartScrollLeft = 0;
      let dragMoved = false;

      function isInteractiveTarget(el) {
        if (!el) return false;
        return el.closest("input, textarea, select, button, a, label") !== null;
      }

      scroller.addEventListener("pointerdown", (e) => {
        if (scroller.classList.contains("dots-only")) return; // ✅ dots-only desktop
        if (e.pointerType === "mouse" && e.button !== 0) return;
        if (isInteractiveTarget(e.target)) return;

        isDragging = true;
        dragMoved = false;
        dragStartX = e.clientX;
        dragStartScrollLeft = scroller.scrollLeft;

        scroller.classList.add("is-dragging");
        scroller.setPointerCapture?.(e.pointerId);
      });

      scroller.addEventListener(
        "pointermove",
        (e) => {
          if (scroller.classList.contains("dots-only")) return;
          if (!isDragging) return;

          const dx = e.clientX - dragStartX;
          if (!dragMoved && Math.abs(dx) > 3) dragMoved = true;

          scroller.scrollLeft = dragStartScrollLeft - dx;
          e.preventDefault();
        },
        { passive: false }
      );

      function endDrag(e) {
        if (!isDragging) return;
        isDragging = false;
        scroller.classList.remove("is-dragging");
        try {
          scroller.releasePointerCapture?.(e.pointerId);
        } catch (_) { }
      }

      scroller.addEventListener("pointerup", endDrag);
      scroller.addEventListener("pointercancel", endDrag);
      scroller.addEventListener("pointerleave", endDrag);

      // Prevent accidental clicks after dragging
      scroller.addEventListener(
        "click",
        (e) => {
          if (!dragMoved) return;
          e.preventDefault();
          e.stopPropagation();
          dragMoved = false;
        },
        true
      );

      // Initial
      updateScrollerFade();
    }

    scrollers.forEach(attach);
  })();
})();

// ===== Header mobile sidebar toggle (burger) =====
(() => {
  const burgerBtn = document.getElementById("burgerBtn");
  const sidebar = document.getElementById("mobileSidebar");
  const overlay = document.getElementById("overlay");
  const sidebarClose = document.getElementById("sidebarClose");

  if (!burgerBtn || !sidebar || !overlay) return;

  function openSidebar() {
    sidebar.classList.add("is-open");
    overlay.hidden = false;
    burgerBtn.setAttribute("aria-expanded", "true");
    sidebar.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    sidebar.classList.remove("is-open");
    overlay.hidden = true;
    burgerBtn.setAttribute("aria-expanded", "false");
    sidebar.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  burgerBtn.addEventListener("click", openSidebar);
  sidebarClose?.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSidebar();
  });

  // Close sidebar when clicking a link
  sidebar.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeSidebar);
  });
})();


// ===== Smooth scroll for in-page anchors (safe) =====
(() => {
  function closeMobileSidebarIfOpen() {
    const burgerBtn = document.getElementById("burgerBtn");
    const sidebar = document.getElementById("mobileSidebar");
    const overlay = document.getElementById("overlay");
    if (!sidebar || !overlay || !burgerBtn) return;

    if (sidebar.classList.contains("is-open")) {
      sidebar.classList.remove("is-open");
      overlay.hidden = true;
      burgerBtn.setAttribute("aria-expanded", "false");
      sidebar.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }

  document.addEventListener("click", (e) => {
    const a = e.target?.closest?.('a[href^="#"]');
    if (!a) return;

    const href = a.getAttribute("href") || "";
    const id = href.slice(1); // "#about" -> "about"
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return; // IMPORTANT: if target doesn't exist, DO NOT prevent default

    // Now we are sure we can handle it
    e.preventDefault();

    closeMobileSidebarIfOpen();

    // Use native scrollIntoView; your CSS scroll-margin-top handles header offset
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    // Keep URL hash in sync
    history.pushState(null, "", `#${id}`);
  });

  // ===== Video carousels (inside project cards) =====
  (function initVideoCarousels() {
    const wrappers = document.querySelectorAll(".projects-wrapper");

    wrappers.forEach((wrapper) => {
      const strip = wrapper.querySelector(".video-strip");
      const left = wrapper.querySelector(".scroll-btn.left");
      const right = wrapper.querySelector(".scroll-btn.right");

      if (!strip || (!left && !right)) return;

      // Scroll by one "page" (1 iframe width)
      const step = () => strip.clientWidth;

      left?.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        strip.scrollBy({ left: -step(), behavior: "smooth" });
      });

      right?.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        strip.scrollBy({ left: step(), behavior: "smooth" });
      });

      // Optional: allow wheel horizontal inside the strip
      strip.addEventListener(
        "wheel",
        (e) => {
          // convert vertical wheel to horizontal scroll when hovering the strip
          if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            strip.scrollBy({ left: e.deltaY, behavior: "auto" });
            e.preventDefault();
          }
        },
        { passive: false }
      );
    });
  })();

})();

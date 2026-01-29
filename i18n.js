const I18N = {
    // ===========================================================================
    // 🇫🇷 FRANÇAIS
    // ===========================================================================
    fr: {
        // -------------------------------------------------------------------------
        // NAVIGATION (header + menu mobile)
        // -------------------------------------------------------------------------
        "nav.about": "À propos",
        "nav.timeline": "Parcours",
        "nav.projects": "Projets",
        "nav.projectsPersonal": "Extra",
        "nav.engagements": "Engagements associatifs",
        "nav.skills": "Compétences",
        "nav.contact": "Contact",

        // -------------------------------------------------------------------------
        // CHIPS / SWITCHES (petits boutons type "Thème", "Accès")
        // -------------------------------------------------------------------------
        "chip.access": "Accès",
        "chip.access.full": "Complet",
        "chip.access.restricted": "Restreint",

        "chip.theme": "Thème",
        "chip.theme.light": "Clair",
        "chip.theme.dark": "Sombre",

        // -------------------------------------------------------------------------
        // GATE (modale d'accès / mot de passe)
        // -------------------------------------------------------------------------
        "gate.badge": "Accès",
        "gate.title": "Bienvenue sur le portfolio",
        "gate.subtitle":
            "Certaines sections contiennent des informations confidentielles (clients, détails techniques, KPI…). Vous pouvez débloquer l’accès complet via mot de passe ou continuer en mode restreint.",
        "gate.label": "Mot de passe",
        "gate.placeholder": "••••••••",
        "gate.unlock": "Débloquer",
        "gate.restricted": "Accéder sans mot de passe (restreint)",
        "gate.learn": "Qu’est-ce qui est restreint ?",
        "gate.hint.1": "Les éléments marqués Confidentiel seront floutés.",
        "gate.hint.2":
            "Vous verrez toujours la structure complète du site (navigation, timeline, sections).",
        "gate.hint.3": "Vous pouvez débloquer plus tard via le menu “Accès”.",
        "gate.error.not_configured":
            "⚠️ Mot de passe non configuré : modifiez ACCESS_PASSWORD dans script.js.",
        "gate.error.wrong": "Mot de passe incorrect.",

        // -------------------------------------------------------------------------
        // HERO (haut de page)
        // -------------------------------------------------------------------------
        "hero.kicker": "Portfolio",
        "hero.title": "Bonjour, je m'appelle Valentin Bacout.",
        "hero.lead": "Je suis diplômé ingénieur en mécanique énergétique, spécialisé en conception.",
        "hero.cta.projects": "Projets",
        "hero.cta.about": "À propos",
        "hero.cta.contact": "Contacts",
        "hero.link.linkedin": "LinkedIn",
        "hero.link.cv": "CV",

        // -------------------------------------------------------------------------
        // META (cartes résumé sous le hero)
        // -------------------------------------------------------------------------
        "meta.specialty": "Spécialité",
        "meta.specialty.value": "Conception / CAO / prototypage",
        "meta.references": "Références",
        "meta.references.value": "(Confidentiel)",
        "meta.location": "Localisation",
        "meta.location.value": "France",

        // -------------------------------------------------------------------------
        // ABOUT (À propos)
        // -------------------------------------------------------------------------
        "about.title": "À propos",
        "about.subtitle": "",
        "about.profile": "Profil",
        "about.profile.p1":
            "Ingénieur orienté produit, avec une approche pragmatique : itération rapide, prototypage, validation, puis industrialisation. Je privilégie les solutions simples, réparables, et sûres.",
        "about.profile.p2":
            "Références, chiffres, et détails d’architecture peuvent être masqués en mode restreint.",
        "about.find.title": "Ce que vous trouverez",
        "about.find.li1": "Projets et réalisations (avec éléments floutés si nécessaire)",
        "about.find.li2": "Compétences (CAD, conception, essais, industrialisation)",
        "about.find.li3": "Timeline interactive (expérience / formation)",
        "about.find.li4": "Liens de contact",

        // -------------------------------------------------------------------------
        // TIMELINE
        // -------------------------------------------------------------------------
        "timeline.title": "Parcours",
        "timeline.zoom": "Zoom",

        // -------------------------------------------------------------------------
        // SKILLS
        // -------------------------------------------------------------------------
        "skills.title": "Compétences",
        "skills.subtitle": "Synthèse — outils et domaines (exemples).",
        "skills.conception": "Conception",
        "skills.proto": "Prototypage & essais",
        "skills.industrial": "Industrialisation",
        "skills.management": "Gestion",

        // -------------------------------------------------------------------------
        // PROJECTS (section principale)
        // -------------------------------------------------------------------------
        "projects.title": "Projets",
        "projects.subtitle":
            "Une sélection de projets représentatifs de mon parcours et des compétences que j’ai développées.",

        // --- Projet A (JOUBERT)
        "project.a.title": "Stage Ingénieur Process & Maintenance",
        "project.a.meta": "Joubert S.A.(M) Sdn Bhd (Malaisie) — 5 mois (2024)",
        "project.a.pill": "Industrie",
        "project.a.desc": `
  <ul>
    <li>Digitalisation maintenance & production dans un site industriel international.</li>
    <li>Création d’un catalogue CAO de pièces de rechange (plans + STEP), réduisant les délais fournisseurs de plusieurs semaines à quelques jours</li>
    <li>Formalisation des process via Working Instructions (WI).</li>
  </ul>
`,
        "project.a.role.k": "Rôle",
        "project.a.role.v": "Ingénieur conception & industrialisation",
        "project.a.details.k": "Enjeux",
        "project.a.details.v": "Amélioration des coûts et de l'efficacité",
        "project.a.deliverables.k": "Livrables",
        "project.a.deliverables.v": "Catalogue pièces + WI",
        "project.a.client.k": "Résultats",
        "project.a.client.v": "Maintenance standardisée & production optimisée",

        // --- Projet B (VINCI)
        "project.b.title": "Projet VINCI — Manutention de chariots médicaux",
        "project.b.meta": "INSA Hauts-de-France — 2 mois (2023–2024)",
        "project.b.pill": "Prototype",
        "project.b.desc":
            "Conception d’une solution d’aide à la manutention, orientée ergonomie et sécurité utilisateur, avec approche développement produit.",
        "project.b.tech.k": "Techno",
        "project.b.tech.v": "Conception + prototypage",
        "project.b.focus.k": "Focus",
        "project.b.focus.v": "Ergonomie / sécurité",
        "project.b.measures.k": "Livrables",
        "project.b.measures.v": "CAO, preuve de concept, prototype fonctionnel",
        "project.b.status.k": "Statut",
        "project.b.status.v": "Prototype finalisé",


        // --- Projet D (PLP)
        "project.d.title": "PLP (Plateau Projet) — PFE",
        "project.d.meta": "INSA Hauts-de-France & LAMIH — Septembre 2023 à Février 2024",
        "project.d.pill": "PFE",
        "project.d.desc":
            "Étude de la capacité d’absorption de différentes structures lattices hybrides avec des gradients de réseaux.",
        "project.d.work.k": "Travail",
        "project.d.work.v": "Amélioration et prototypage d’un puit de chute existant",
        "project.d.dev.k": "Développement",
        "project.d.dev.v": "Code Python pour générer des géométries lattices sous FreeCAD",
        "project.d.tools.k": "Outils",
        "project.d.tools.v": "Python, FreeCAD, Catia V5",
        "project.d.skills.k": "Compétences",
        "project.d.skills.v": "Prototypage, Impression 3D",

        // --- Projet E SUBLIM
        "project.e.title": "Amélioration continue - SUBLIM",
        "project.e.pill": "Industrie",
        "project.e.meta": "DELEO S.A.S. — Depuis 2025",
        "project.e.desc":
            " V&V et Amélioration continue de l'épilateur laser",
        "project.e.role.k": "Rôle",
        "project.e.role.v": "Chef de projet - Ingénieur Mécanique",
        "project.e.client.k": "Résultats",
        "project.e.client.v": "(Confidentiel)",
        "project.e.deliverables.k": "Livrables",
        "project.e.deliverables.v": "Méthodes, amélioration process",
        "project.e.details.k": "Enjeux",
        "project.e.details.v": "Fiabilité / Amélioration continue",

        // -------------------------------------------------------------------------
        // EXTRAS / ENGAGEMENTS (sections dédiées)
        // -------------------------------------------------------------------------
        "projectsPersonal.title": "Projets extras",
        "engagements.title": "Engagements associatifs",
        "engagements.subtitle":
            "Associatif, initiatives personnelles et développement continu.",

        // -------------------------------------------------------------------------
        // CONTACT
        // -------------------------------------------------------------------------
        "contact.title": "Contact",
        "contact.subtitle": "",
        "contact.reach": "Me joindre",
        "contact.reach.p": "Remplacez par vos liens (email, LinkedIn, GitHub…).",
        "contact.availability": "Disponibilité",
        "contact.availability.p": "Ouvert aux échanges. Dites-moi le contexte et l’objectif.",
        "contact.top": "Revenir en haut",

        // -------------------------------------------------------------------------
        // FOOTER
        // -------------------------------------------------------------------------
        "footer.rights": "Tous droits réservés.",
        "footer.mode": "Mode :",
        "footer.access": "Accès",
    },






    // ===========================================================================
    // 🇬🇧 ENGLISH
    // ===========================================================================
    en: {
        // -------------------------------------------------------------------------
        // NAVIGATION (header + mobile)
        // -------------------------------------------------------------------------
        "nav.about": "About",
        "nav.timeline": "Career",
        "nav.projects": "Projects",
        "nav.projectsPersonal": "Extra", // ✅ MODIF : affichage header "Extras"
        "nav.engagements": "Engagements associatifs",
        "nav.skills": "Skills",
        "nav.contact": "Contact",

        // -------------------------------------------------------------------------
        // CHIPS / SWITCHES
        // -------------------------------------------------------------------------
        "chip.access": "Access",
        "chip.access.full": "Full",
        "chip.access.restricted": "Restricted",

        "chip.theme": "Theme",
        "chip.theme.light": "Light",
        "chip.theme.dark": "Dark",

        // -------------------------------------------------------------------------
        // GATE (access modal)
        // -------------------------------------------------------------------------
        "gate.badge": "Access",
        "gate.title": "Welcome to the portfolio",
        "gate.subtitle":
            "Some sections contain confidential information (clients, technical details, KPIs…). You can unlock full access with a password or continue in restricted mode.",
        "gate.label": "Password",
        "gate.placeholder": "••••••••",
        "gate.unlock": "Unlock",
        "gate.restricted": "Continue without password (restricted)",
        "gate.learn": "What is restricted?",
        "gate.hint.1": "Items marked Confidential will be blurred.",
        "gate.hint.2":
            "You will still see the full website structure (navigation, timeline, sections).",
        "gate.hint.3": "You can unlock later via the “Access” menu.",
        "gate.error.not_configured":
            "⚠️ Password not configured: update ACCESS_PASSWORD in script.js.",
        "gate.error.wrong": "Wrong password.",

        // -------------------------------------------------------------------------
        // HERO
        // -------------------------------------------------------------------------
        "hero.kicker": "Portfolio",
        "hero.title": "Hi, I'm Valentin Bacout.",
        "hero.lead": "I graduated in Energy Mechanical Engineering, specialized in design.",
        "hero.cta.projects": "Projects",
        "hero.cta.about": "About",
        "hero.cta.contact": "Contact",
        "hero.link.linkedin": "LinkedIn",
        "hero.link.cv": "Resume",

        // -------------------------------------------------------------------------
        // META
        // -------------------------------------------------------------------------
        "meta.specialty": "Specialty",
        "meta.specialty.value": "Design / CAD / prototyping",
        "meta.references": "References",
        "meta.references.value": "(Confidential)",
        "meta.location": "Location",
        "meta.location.value": "France",

        // -------------------------------------------------------------------------
        // ABOUT
        // -------------------------------------------------------------------------
        "about.title": "About",
        "about.subtitle": "",
        "about.profile": "Profile",
        "about.profile.p1":
            "Product-oriented engineer with a pragmatic approach: fast iteration, prototyping, validation, then industrialization. I favor simple, repairable, safe solutions.",
        "about.profile.p2":
            "References, figures, and architecture details may be hidden in restricted mode.",
        "about.find.title": "What you'll find",
        "about.find.li1": "Projects and achievements (with blurred items if needed)",
        "about.find.li2": "Skills (CAD, design, testing, industrialization)",
        "about.find.li3": "Interactive timeline (experience / education)",
        "about.find.li4": "Contact links",

        // -------------------------------------------------------------------------
        // TIMELINE
        // -------------------------------------------------------------------------
        "timeline.title": "Career",
        "timeline.zoom": "Zoom",

        // -------------------------------------------------------------------------
        // SKILLS
        // -------------------------------------------------------------------------
        "skills.title": "Skills",
        "skills.subtitle": "Overview — tools and domains (examples).",
        "skills.conception": "Design",
        "skills.proto": "Prototyping & testing",
        "skills.industrial": "Industrialization",
        "skills.management": "Management",

        // -------------------------------------------------------------------------
        // PROJECTS (main section)
        // -------------------------------------------------------------------------
        "projects.title": "Projects",
        "projects.subtitle":
            "A selection of projects representative of my career and the skills I have developed.",

        // --- Project A (JOUBERT)
        "project.a.title": "Process & Maintenance Engineering Internship",
        "project.a.meta": "Joubert S.A.(M) Sdn Bhd (Malaysia) — 5 months (2024)",
        "project.a.pill": "Industry",
        "project.a.desc": `
  <ul>
    <li>Digitization of maintenance & production in an international industrial site.</li>
    <li>Created a CAD spare-parts catalog (drawings + STEP), cutting supplier lead times from several weeks to a few days.</li>
    <li>Formalized processes through Working Instructions (WI).</li>
  </ul>
`,
        "project.a.role.k": "Role",
        "project.a.role.v": "Design & industrialization engineer",
        "project.a.details.k": "Challenges",
        "project.a.details.v": "Cost and efficiency improvement",
        "project.a.deliverables.k": "Deliverables",
        "project.a.deliverables.v": "Spare-parts catalog + WI",
        "project.a.client.k": "Results",
        "project.a.client.v": "Standardized maintenance & optimized production",


        // --- Project B (VINCI)
        "project.b.title": "VINCI Project — Medical cart handling",
        "project.b.meta": "INSA Hauts-de-France — 2 months (2023–2024)",
        "project.b.pill": "Prototype",
        "project.b.desc":
            "Designed a handling-assist solution focused on ergonomics and user safety, using a product development approach.",
        "project.b.tech.k": "Tech",
        "project.b.tech.v": "Design + prototyping",
        "project.b.focus.k": "Focus",
        "project.b.focus.v": "Ergonomics / safety",
        "project.b.measures.k": "Deliverables",
        "project.b.measures.v": "CAD, proof of concept, functional prototype",
        "project.b.status.k": "Status",
        "project.b.status.v": "Completed prorotype",


        // --- Project D (PLP)
        "project.d.title": "PLP (Project Platform) — Final Year Project",
        "project.d.meta": "INSA Hauts-de-France & LAMIH — Sep 2023 to Feb 2024",
        "project.d.pill": "FYP",
        "project.d.desc":
            "Study of the energy absorption capacity of various hybrid lattice structures with network gradients.",
        "project.d.work.k": "Work",
        "project.d.work.v": "Improvement and prototyping of an existing drop-tower shaft",
        "project.d.dev.k": "Development",
        "project.d.dev.v": "Python code to generate lattice geometries in FreeCAD",
        "project.d.tools.k": "Tools",
        "project.d.tools.v": "Python, FreeCAD, CATIA V5",
        "project.d.skills.k": "Skills",
        "project.d.skills.v": "Prototyping, 3D printing",


        // --- Projet E SUBLIM
        "project.e.title": "Continuous Improvement - SUBLIM",
        "project.e.pill": "Industry",
        "project.e.meta": "DELEO S.A.S. — Since 2025",
        "project.e.desc":
            "V&V and Continuous Improvement of the Laser Hair Remover",
        "project.e.role.k": "Role",
        "project.e.role.v": "Project manager - Mechanical Engineer",
        "project.e.client.k": "Results",
        "project.e.client.v": "(Confidential)",
        "project.e.deliverables.k": "Deliverables",
        "project.e.deliverables.v": "Méthodes, amélioration process",
        "project.e.details.k": "Challenges",
        "project.e.details.v": "Reliability / Continuous Improvement",

        // -------------------------------------------------------------------------
        // EXTRAS / ENGAGEMENTS
        // -------------------------------------------------------------------------
        "projectsPersonal.title": "Projects extras",
        "engagements.title": "Personal and community projects",
        "engagements.subtitle":
            "Associations, personal initiatives and continuous improvement.",

        // -------------------------------------------------------------------------
        // CONTACT
        // -------------------------------------------------------------------------
        "contact.title": "Contact",
        "contact.subtitle": "",
        "contact.reach": "Get in touch",
        "contact.reach.p": "Replace with your links (email, LinkedIn, GitHub…).",
        "contact.availability": "Availability",
        "contact.availability.p": "Open to discussion. Tell me the context and the goal.",
        "contact.top": "Back to top",

        // -------------------------------------------------------------------------
        // FOOTER
        // -------------------------------------------------------------------------
        "footer.rights": "All rights reserved.",
        "footer.mode": "Mode:",
        "footer.access": "Access",
    },
};
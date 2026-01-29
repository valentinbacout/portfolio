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
        "nav.engagements": "Community",
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
        "hero.title.prefix": "Bonjour, je m\'appelle",
        "hero.title.suffix": ".",
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
        "timeline.event.e1": "Baccalauréat Scientifique - mention très bien",
        "timeline.event.e2": "INSA Hauts-de-France - Classes préparatoires intégrées",
        "timeline.event.e3": "INSA Hauts-de-France - Cycle ingénieur",
        "timeline.event.e4": "Responsable communication - Liste Campagne BDE",
        "timeline.event.e5": "Stage ingénieur R&D au Cerema de Bron",
        "timeline.event.e6": "Responsable du pôle communication BDE INSA HDF",
        "timeline.event.e7": "PLP (Plateau Projet) - Projet de fin d'étude",
        "timeline.event.e8": "Projet de parcours VINCI - Aide à la manutention de chariots médicaux",
        "timeline.event.e9": "Stage ingénieur Process et Maintenance à Joubert",
        "timeline.event.e10": "Diplôme INSA Hauts-de-France - Ingénieur en mécanique énergétique",
        "timeline.event.e11": "Secrétaire Général INSA Alumni Hauts-de-France",
        "timeline.event.e12": "Ingénieur en conception mécanique chez DELEO",
        "timeline.event.today": "Aujourd’hui",

        // -------------------------------------------------------------------------
        // SKILLS
        // -------------------------------------------------------------------------
        "skills.title": "Compétences",
        "skills.subtitle": "Synthèse — outils et domaines (exemples).",
        "skills.conception": "Conception",
        "skills.proto": "Prototypage & essais",
        "skills.industrial": "Industrialisation",
        "skills.management": "Gestion",

        // Tags (skills)
        "skills.tag.cad": "CAD / 3D",
        "skills.tag.dfm": "DFM / DFA",
        "skills.tag.materials": "Choix matériaux",
        "skills.tag.tolerancing": "Tolérancement",
        "skills.tag.printing": "Impression 3D",
        "skills.tag.testbenches": "Bancs d’essai",
        "skills.tag.validation": "Validation",
        "skills.tag.procedures": "Procédures internes",
        "skills.tag.injection": "Injection plastique",
        "skills.tag.sheetmetal": "Tôlerie",
        "skills.tag.assembly": "Assemblage",
        "skills.tag.suppliers": "Fournisseurs",
        "skills.tag.planning": "Planification",
        "skills.tag.milestones": "Revues jalons",
        "skills.tag.risk": "Risque",
        "skills.tag.budgets": "Budgets",

        // -------------------------------------------------------------------------
        // PROJECTS (section principale)
        // -------------------------------------------------------------------------
        "projects.title": "Projets",
        "projects.subtitle":
            "Cartes projets “modernisées” (conserve la logique de sections, et la possibilité de masquer des détails).",

        // --- Projet A
        //"project.a.title": "Stage Ingénieur Process & Maintenance",
        //"project.a.pill": "Industrie",
        //"project.a.desc":
        //    "Amélioration de la maintenance et optimisation de process en environnement industriel, avec approche terrain et support technique.",
        //"project.a.role.k": "Rôle",
        //"project.a.role.v": "Ingénieur support / amélioration continue",
        //"project.a.client.k": "Résultats",
        //"project.a.client.v": "(Confidentiel)",
        //"project.a.deliverables.k": "Livrables",
        //"project.a.deliverables.v": "Méthodes, amélioration process",
        //"project.a.details.k": "Focus",
        //"project.a.details.v": "Maintenance / fiabilité",

        // --- Projet B
        //"project.b.title": "Projet VINCI — Manutention de chariots médicaux",
        //"project.b.pill": "Prototype",
        //"project.b.desc":
        //    "Conception d’une solution d’aide à la manutention, orientée ergonomie et sécurité utilisateur, avec approche développement produit.",
        //"project.b.tech.k": "Techno",
        //"project.b.tech.v": "Conception + prototypage",
        //"project.b.focus.k": "Focus",
        //"project.b.focus.v": "Ergonomie / sécurité",
        //"project.b.measures.k": "Livrables",
        //"project.b.measures.v": "CAO, concepts, itérations",
        //"project.b.status.k": "Statut",
        //"project.b.status.v": "Finalisé",

        // --- Projet C
        //"project.c.title": "Stage R&D — Conception & étude (Cerema)",
        //"project.c.pill": "Confidentiel",
        //"project.c.desc":
        //    "Projet R&D avec éléments techniques et livrables soumis à confidentialité : en mode restreint, cette carte sera floutée.",
        //"project.c.sector.k": "Secteur",
        //"project.c.stack.k": "Travail",
        //"project.c.result.k": "Résultat",
        //"project.c.dates.k": "Dates",
        //"project.c.value.conf": "(Confidentiel)",

        // --- Projet D
        //"project.d.title": "PLP (Plateau Projet) — PFE",
        //"project.d.meta": "INSA Hauts-de-France & LAMIH — Septembre 2023 à Février 2024",
        //"project.d.pill": "PFE",
        //"project.d.desc":
        //    "Étude de la capacité d’absorption de différentes structures lattices hybrides avec des gradients de réseaux.",
        //"project.d.work.k": "Travail",
        //"project.d.work.v": "Amélioration et prototypage d’un puit de chute existant",
        //"project.d.dev.k": "Développement",
        //"project.d.dev.v": "Code Python pour générer des géométries lattices sous FreeCAD",
        //"project.d.tools.k": "Outils",
        //"project.d.tools.v": "Python, FreeCAD, Catia V5",
        //"project.d.skills.k": "Compétences",
        //"project.d.skills.v": "Prototypage, Impression 3D",

        // --- Projet E
        "project.a.title": "Chef de projet SUBLIM",
        "project.a.pill": "Industrie",
        "project.a.desc":
            "Amélioration de la maintenance et optimisation de process en environnement industriel, avec approche terrain et support technique.",
        "project.a.role.k": "Rôle",
        "project.a.role.v": "Ingénieur support / amélioration continue",
        "project.a.client.k": "Résultats",
        "project.a.client.v": "(Confidentiel)",
        "project.a.deliverables.k": "Livrables",
        "project.a.deliverables.v": "Méthodes, amélioration process",
        "project.a.details.k": "Focus",
        "project.a.details.v": "Maintenance / fiabilité",

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
        "nav.engagements": "Community",
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
        "hero.title.prefix": "Hi, I\'m",
        "hero.title.suffix": ".",
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
        "timeline.event.e1": "Scientific Baccalaureate — highest honors",
        "timeline.event.e2": "INSA Hauts-de-France — Integrated prep classes",
        "timeline.event.e3": "INSA Hauts-de-France — Engineering cycle",
        "timeline.event.e4": "Communication lead — Student union campaign list",
        "timeline.event.e5": "R&D engineering internship — Cerema (Bron)",
        "timeline.event.e6": "Communication department lead — INSA HDF student union",
        "timeline.event.e7": "PLP (Project platform) — Final year project",
        "timeline.event.e8": "VINCI project — Handling assistance for medical carts",
        "timeline.event.e9": "Process & Maintenance engineering internship — Joubert",
        "timeline.event.e10": "INSA Hauts-de-France degree — Energy Mechanical Engineer",
        "timeline.event.e11": "Secretary General — INSA Alumni Hauts-de-France",
        "timeline.event.e12": "Mechanical design engineer at DELEO",
        "timeline.event.today": "Today",

        // -------------------------------------------------------------------------
        // SKILLS
        // -------------------------------------------------------------------------
        "skills.title": "Skills",
        "skills.subtitle": "Overview — tools and domains (examples).",
        "skills.conception": "Design",
        "skills.proto": "Prototyping & testing",
        "skills.industrial": "Industrialization",
        "skills.management": "Management",

        // Tags (skills)
        "skills.tag.cad": "CAD / 3D",
        "skills.tag.dfm": "DFM / DFA",
        "skills.tag.materials": "Material selection",
        "skills.tag.tolerancing": "Tolerancing",
        "skills.tag.printing": "3D printing",
        "skills.tag.testbenches": "Test benches",
        "skills.tag.validation": "Validation",
        "skills.tag.procedures": "Internal procedures",
        "skills.tag.injection": "Plastic injection",
        "skills.tag.sheetmetal": "Sheet metal",
        "skills.tag.assembly": "Assembly",
        "skills.tag.suppliers": "Suppliers",
        "skills.tag.planning": "Planning",
        "skills.tag.milestones": "Milestone reviews",
        "skills.tag.risk": "Risk",
        "skills.tag.budgets": "Budgets",

        // -------------------------------------------------------------------------
        // PROJECTS (main section)
        // -------------------------------------------------------------------------
        "projects.title": "Projects",
        "projects.subtitle":
            "Modernized project cards (keeps the section logic and the ability to hide details).",

        // --- Project A
        //"project.a.title": "Process & Maintenance Engineering Internship",
        //"project.a.pill": "Industry",
        //"project.a.desc":
        //    "Maintenance improvement and process optimization in an industrial environment, with hands-on work and technical support.",
        //"project.a.role.k": "Role",
        //"project.a.role.v": "Support engineer / continuous improvement",
        //"project.a.client.k": "Results",
        //"project.a.client.v": "(Confidential)",
        //"project.a.deliverables.k": "Deliverables",
        //"project.a.deliverables.v": "Methods, process improvement",
        //"project.a.details.k": "Focus",
        //"project.a.details.v": "Maintenance / reliability",

        // --- Project B
        //"project.b.title": "VINCI Project — Medical cart handling",
        //"project.b.pill": "Prototype",
        //"project.b.desc":
        //    "Design of a handling-assistance solution focused on ergonomics and user safety, using a product development approach.",
        //"project.b.tech.k": "Tech",
        //"project.b.tech.v": "Design + prototyping",
        //"project.b.focus.k": "Focus",
        //"project.b.focus.v": "Ergonomics / safety",
        //"project.b.measures.k": "Deliverables",
        //"project.b.measures.v": "CAD, concepts, iterations",
        //"project.b.status.k": "Status",
        //"project.b.status.v": "Completed",

        // --- Project C
        //"project.c.title": "R&D Internship — Design & study (Cerema)",
        //"project.c.pill": "Confidential",
        //"project.c.desc":
        //    "R&D project with confidential technical elements and deliverables: in restricted mode, this card will be blurred.",
        //"project.c.sector.k": "Sector",
        //"project.c.stack.k": "Work",
        //"project.c.result.k": "Result",
        //"project.c.dates.k": "Dates",
        //"project.c.value.conf": "(Confidential)",

        // --- Project D
        //"project.d.title": "PLP (Project Platform) — Final Year Project",
        //"project.d.meta": "INSA Hauts-de-France & LAMIH — Sep 2023 to Feb 2024",
        //"project.d.pill": "FYP",
        //"project.d.desc":
        //    "Study of the energy absorption capacity of different hybrid lattice structures with graded networks.",
        //"project.d.work.k": "Work",
        //"project.d.work.v": "Improvement and prototyping of an existing drop tower",
        //"project.d.dev.k": "Development",
        //"project.d.dev.v": "Python code to generate lattice geometries in FreeCAD",
        //"project.d.tools.k": "Tools",
        //"project.d.tools.v": "Python, FreeCAD, Catia V5",
        //"project.d.skills.k": "Skills",
        //"project.d.skills.v": "Prototyping, 3D printing",

        // --- Projet E
        "project.a.title": "Project manager SUBLIM",
        "project.a.pill": "Industrie",
        "project.a.desc":
            "Amélioration de la maintenance et optimisation de process en environnement industriel, avec approche terrain et support technique.",
        "project.a.role.k": "Rôle",
        "project.a.role.v": "Ingénieur support / amélioration continue",
        "project.a.client.k": "Résultats",
        "project.a.client.v": "(Confidentiel)",
        "project.a.deliverables.k": "Livrables",
        "project.a.deliverables.v": "Méthodes, amélioration process",
        "project.a.details.k": "Focus",
        "project.a.details.v": "Maintenance / fiabilité",

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

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
        // -------------------------------------------------------------------------        "chip.theme": "Thème",
        "chip.theme.light": "Clair",
        "chip.theme.dark": "Sombre",

        // -------------------------------------------------------------------------
        // UI (boutons génériques)
        // -------------------------------------------------------------------------
        "ui.seeMore": "Voir plus",
        "ui.seeLess": "Voir moins",

        // -------------------------------------------------------------------------
        // GATE (modale d'accès / mot de passe)
        // -------------------------------------------------------------------------,,,,,,,,,,,,,
        "hero.title": "Bonjour, je m'appelle Valentin Bacout.",
        "hero.lead": "Je suis diplômé ingénieur en mécanique énergétique, spécialisé en conception.",
        "hero.cta.projects": "Projets",
        "hero.cta.about": "À propos",
        "hero.cta.contact": "Contact",
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
            "Ingénieur orienté produit, avec une approche pragmatique : itération rapide, prototypage, validation, puis industrialisation. Je privilégie les solutions simples, réparables, et sûres.", "about.find.title": "Ce que vous trouverez",
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
        "skills.subtitle": "",
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
            <li>Conception et mise en plan de 120 pièces détachées critiques sous SolidWorks, intégrées dans un catalogue maintenance (plans ISO + fichiers STEP), réduisant les délais de sourcing de plusieurs semaines à quelques jours.</li>
            <li>Formalisation des process via Working Instructions (WI).</li>
        </ul>
        `,

        "project.a.details.k": "Enjeux",
        "project.a.details.v": "Amélioration des coûts et de l'efficacité",
        "project.a.deliverables.k": "Livrables",
        "project.a.deliverables.v": "Catalogue pièces + WI",
        "project.a.client.k": "Résultats",
        "project.a.client.v": "Maintenance standardisée & production optimisée",
        "project.a.skills.k": "Compétences / Logiciels",
        "project.a.skills.v": "SolidWorks",

        // --- Projet B (VINCI)
        "project.b.title": "Projet VINCI — Manutention de chariots médicaux",
        "project.b.meta": "INSA Hauts-de-France — 2 mois (2023–2024)",
        "project.b.pill": "Prototype",
        "project.b.desc":
            "Conception et prototypage d’un système de couplage permettant de former un train de chariots médicaux (preuve de concept).",

        "project.b.details.k": "Enjeux",
        "project.b.details.v": "Faciliter le déplacement simultané de plusieurs chariots médicaux en milieu hospitalier grâce à un système de liaison détachable, sans modification du matériel existant.",
        "project.b.deliverables.k": "Livrables",
        "project.b.deliverables.v": "Conception CAO et prototype démonstrateur d’un dispositif amovible de couplage pour chariots médicaux.",
        "project.b.client.k": "Résultats",
        "project.b.client.v": "Réalisation d’un prototype fonctionnel validant la faisabilité du système de couplage détachable (preuve de concept).",
        "project.b.skills.k": "Compétences / Logiciels",
        "project.b.skills.v": "Conception - prototypage - Catia V5",

        // --- Projet D (PLP)
        "project.d.title": "PLP (Plateau Projet) — PFE",
        "project.d.meta": "INSA Hauts-de-France & LAMIH — Septembre 2023 à Février 2024",
        "project.d.pill": "PFE",
        "project.d.desc":
            "Étude de la capacité d’absorption de différentes structures lattices hybrides avec des gradients de réseaux.",

        "project.d.details.k": "Enjeux",
        "project.d.details.v": "Comprendre l’influence de la géométrie et des gradients lattice sur l’absorption d’énergie en impact dynamique.",
        "project.d.deliverables.k": "Livrables",
        "project.d.deliverables.v": "Développement d’un banc d’essai dynamique et d’un outil Python pour générer et comparer plusieurs géométries lattices",
        "project.d.client.k": "Résultats",
        "project.d.client.v": "Protocole expérimental validé et identification d’une géométrie lattice présentant les meilleures performances d’absorption dans le cadre de l’étude.",
        "project.d.skills.k": "Compétences / Logiciels",
        "project.d.skills.v": "Prototypage - Impression 3D - FreeCAD",

        // --- Projet E SUBLIM
        "project.e.title": "Amélioration continue - SUBLIM",
        "project.e.pill": "Industrie",
        "project.e.meta": "DELEO S.A.S. — Depuis 2025",
        "project.e.desc":
            " V&V et Amélioration continue de l'épilateur laser",

        "project.e.details.k": "Enjeux",
        "project.e.details.v": "(Confidentiel)",
        "project.e.deliverables.k": "Livrables",
        "project.e.deliverables.v": "Plans de validation, procédures d’essais, améliorations mécaniques et process industriels",
        "project.e.client.k": "Résultats",
        "project.e.client.v": "Amélioration de la fiabilité et support au maintien en conditions opérationnelles",
        "project.e.skills.k": "Compétences - Logiciels",
        "project.e.skills.v": "SolidWorks - Prototypage - Fournisseurs - V&V",

        // -------------------------------------------------------------------------
        // EXTRAS / ENGAGEMENTS (sections dédiées)
        // -------------------------------------------------------------------------
        "projectsPersonal.title": "Projets extras",
        "engagements.title": "Engagements associatifs",
        "engagements.subtitle":
            "",

        // -------------------------------------------------------------------------
        // CONTACT
        // -------------------------------------------------------------------------
        "contact.title": "Contact",
        "contact.subtitle": "",
        "contact.reach": "Me joindre",

        // -------------------------------------------------------------------------
        // FOOTER
        // -------------------------------------------------------------------------
        "footer.rights": "Tous droits réservés.",
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
        "nav.engagements": "Community work",
        "nav.skills": "Skills",
        "nav.contact": "Contact",

        // -------------------------------------------------------------------------
        // CHIPS / SWITCHES
        // -------------------------------------------------------------------------        "chip.theme": "Theme",
        "chip.theme.light": "Light",
        "chip.theme.dark": "Dark",

        // -------------------------------------------------------------------------
        // UI (generic)
        // -------------------------------------------------------------------------
        "ui.seeMore": "See more",
        "ui.seeLess": "See less",

        // -------------------------------------------------------------------------
        // GATE (access modal)
        // -------------------------------------------------------------------------,,,,,,,,,,,,,
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
            "Product-oriented engineer with a pragmatic approach: fast iteration, prototyping, validation, then industrialization. I favor simple, repairable, safe solutions.", "about.find.title": "What you'll find",
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
        "skills.subtitle": "",
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
    <li>Maintenance & production digitalization in an international industrial plant.</li>
    <li>Design and drafting of 120 critical spare parts in SolidWorks, integrated into a maintenance catalog (ISO drawings + STEP files), reducing sourcing time from several weeks to just a few days.</li>
    <li>Process formalization through Working Instructions (WI).</li>
</ul>
`,

        "project.a.details.k": "Challenges",
        "project.a.details.v": "Improving costs and efficiency",
        "project.a.deliverables.k": "Deliverables",
        "project.a.deliverables.v": "Spare parts catalog + WI",
        "project.a.client.k": "Results",
        "project.a.client.v": "Standardized maintenance & optimized production",
        "project.a.skills.k": "Skills / Software",
        "project.a.skills.v": "SolidWorks",

        // --- Project B (VINCI)
        "project.b.title": "VINCI Project — Medical Trolley Handling System",
        "project.b.meta": "INSA Hauts-de-France — 2 months (2023–2024)",
        "project.b.pill": "Prototype",
        "project.b.desc":
            "Design and prototyping of a coupling system allowing several medical trolleys to be connected together (proof of concept).",

        "project.b.details.k": "Challenges",
        "project.b.details.v":
            "Facilitating the simultaneous transport of several medical trolleys in hospital environments thanks to a detachable linking system, without modifying existing equipment.",
        "project.b.deliverables.k": "Deliverables",
        "project.b.deliverables.v":
            "CAD design and demonstrator prototype of a removable coupling device for medical trolleys.",
        "project.b.client.k": "Results",
        "project.b.client.v":
            "Development of a functional prototype validating the feasibility of the detachable coupling system (proof of concept).",
        "project.b.skills.k": "Skills / Software",
        "project.b.skills.v": "Design – prototyping – Catia V5",

        // --- Project D (PLP)
        "project.d.title": "PLP (Project Platform) — Final Year Project",
        "project.d.meta": "INSA Hauts-de-France & LAMIH — September 2023 to February 2024",
        "project.d.pill": "FYP",
        "project.d.desc":
            "Study of the energy absorption capacity of different hybrid lattice structures with network gradients.",

        "project.d.details.k": "Challenges",
        "project.d.details.v":
            "Understanding the influence of geometry and lattice gradients on energy absorption under dynamic impact.",
        "project.d.deliverables.k": "Deliverables",
        "project.d.deliverables.v":
            "Development of a dynamic test bench and a Python tool to generate and compare multiple lattice geometries.",
        "project.d.client.k": "Results",
        "project.d.client.v":
            "Validated experimental protocol and identification of the lattice geometry showing the best absorption performance within the study.",
        "project.d.skills.k": "Skills / Software",
        "project.d.skills.v": "Prototyping – 3D printing – FreeCAD",

        // --- Project E (SUBLIM)
        "project.e.title": "Continuous Improvement — SUBLIM",
        "project.e.pill": "Industry",
        "project.e.meta": "DELEO S.A.S. — Since 2025",
        "project.e.desc":
            "V&V and continuous improvement of the laser hair removal device.",

        "project.e.details.k": "Challenges",
        "project.e.details.v": "(Confidential)",
        "project.e.deliverables.k": "Deliverables",
        "project.e.deliverables.v":
            "Validation plans, test procedures, mechanical improvements, and industrial process optimization",
        "project.e.client.k": "Results",
        "project.e.client.v":
            "Improved reliability and support for operational maintenance",
        "project.e.skills.k": "Skills / Software",
        "project.e.skills.v":
            "SolidWorks – Prototyping – Suppliers – V&V",


        // -------------------------------------------------------------------------
        // EXTRAS / ENGAGEMENTS
        // -------------------------------------------------------------------------
        "projectsPersonal.title": "Extra projects",
        "engagements.title": "Personal and community projects",
        "engagements.subtitle":
            "",

        // -------------------------------------------------------------------------
        // CONTACT
        // -------------------------------------------------------------------------
        "contact.title": "Contact",
        "contact.subtitle": "",
        "contact.reach": "Get in touch",

        // -------------------------------------------------------------------------
        // FOOTER
        // -------------------------------------------------------------------------
        "footer.rights": "All rights reserved.",
    },
};

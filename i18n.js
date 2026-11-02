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
        "hero.link.cv": "Télécharger mon CV",

        // -------------------------------------------------------------------------
        // META (cartes résumé sous le hero)
        // -------------------------------------------------------------------------
        "meta.specialty": "Spécialité",
        "meta.specialty.value": "Conception / CAO / prototypage",
        "meta.school": "École / Université",
        "meta.school.value": "INSA HDF",
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
        "timeline.work": "Travail",
        "timeline.associative": "Associatif",

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

        // -------------------------------------------------------------------------
        // LEGAL (Mentions légales)
        // -------------------------------------------------------------------------
        "legal.pageTitle": "Mentions légales",
        "legal.back": "← Retour au portfolio",
        "legal.updated": "Dernière mise à jour :",
        "legal.content": `
<h3>Éditeur du site</h3>
<p><b>Nom :</b> Valentin Bacout<br/>
<b>Contact :</b> <a href="mailto:valentinbacout@gmail.com">valentinbacout@gmail.com</a></p>

<h3>Hébergement</h3>
<p>Site hébergé via <b>GitHub Pages</b> (GitHub, Inc.).</p>

<h3>Propriété intellectuelle</h3>
<p>
L’ensemble des contenus présents sur ce site (textes, images, projets, documents) est protégé par le droit d’auteur.
Les images utilisées sont, sauf mention contraire, des réalisations personnelles.
Les logos et marques affichés appartiennent à leurs propriétaires respectifs et sont utilisés uniquement à des fins d’illustration.
Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans autorisation préalable est interdite.
</p>

<h3>Responsabilité</h3>
<p>Les informations présentées sur ce site sont fournies à titre informatif. Malgré le soin apporté à leur mise à jour, l’éditeur ne saurait être tenu responsable des erreurs, omissions ou de l’indisponibilité de certaines informations.</p>

<h3>Données personnelles</h3>
<p>Ce site ne collecte pas de données personnelles à votre insu et n’utilise pas de cookies à des fins de suivi. En cas de contact par email, les informations transmises sont uniquement utilisées pour répondre à votre demande.</p>
<p>
Ce site peut contenir des liens vers des sites externes (réseaux sociaux, plateformes professionnelles, etc.).
En cliquant sur ces liens, l’utilisateur quitte ce site.
Ces sites tiers disposent de leurs propres politiques de confidentialité et règles de collecte de données personnelles, indépendantes de celles de ce site.
L’éditeur ne peut être tenu responsable de l’utilisation des données effectuée par ces services externes.
</p>

<h3>Contact</h3>
<p>Pour toute question, vous pouvez écrire à <a href="mailto:valentinbacout@gmail.com">valentinbacout@gmail.com</a>.</p>
`,
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
        "hero.link.cv": "Download Resume",

        // -------------------------------------------------------------------------
        // META
        // -------------------------------------------------------------------------
        "meta.specialty": "Specialty",
        "meta.specialty.value": "Design / CAD / prototyping",
        "meta.school": "School / University",
        "meta.school.value": "INSA HDF",
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
        "timeline.work": "Work",
        "timeline.associative": "Volunteering",

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

        // -------------------------------------------------------------------------
        // LEGAL (Legal notice)
        // -------------------------------------------------------------------------
        "legal.pageTitle": "Legal notice",
        "legal.back": "← Back to portfolio",
        "legal.updated": "Last updated:",
        "legal.content": `
<h3>Website owner</h3>
<p><b>Name:</b> Valentin Bacout<br/>
<b>Contact:</b> <a href="mailto:valentinbacout@gmail.com">valentinbacout@gmail.com</a></p>

<h3>Hosting</h3>
<p>This website is hosted via <b>GitHub Pages</b> (GitHub, Inc.).</p>

<h3>Intellectual property</h3>
<p>
All content on this website (texts, images, projects, documents) is protected by copyright.
Unless otherwise stated, the images shown are personal creations.
Logos and trademarks displayed remain the property of their respective owners and are used for illustrative purposes only.
Any reproduction, distribution, modification, or publication—whole or partial—without prior permission is prohibited.
</p>

<h3>Liability</h3>
<p>Information provided on this website is for informational purposes only. While care is taken to keep it up to date, the owner cannot be held liable for errors, omissions, or temporary unavailability.</p>

<h3>Personal data</h3>
<p>This website does not collect personal data without your knowledge and does not use tracking cookies. If you contact me by email, your information is only used to reply to your request.</p>
<p>
This website may contain links to external websites (social networks, professional platforms, etc.).
By clicking on these links, the user leaves this website.
Third-party websites have their own privacy policies and data collection rules, independent from this site.
The publisher cannot be held responsible for how these external services handle personal data.
</p>

<h3>Contact</h3>
<p>For any question, please email <a href="mailto:valentinbacout@gmail.com">valentinbacout@gmail.com</a>.</p>
`,
        "footer.rights": "All rights reserved.",
    },
};


// Additional shared UI, timeline and page translations.
Object.assign(I18N.fr, {
  "content.001": "html",
  "content.002": "Projects",
  "content.003": "Engagements asso",
  "content.004": "Skills",
  "content.005": "Menu",
  "content.006": "About",
  "content.007": "Bonjour, je m'appelle",
  "content.008": "Je suis Ingénieur en conception mécanique.",
  "content.009": "Je suis également passionné par le montage photos/vidéos et les LEGO. J'ai eu l'occasion de mettre à profit mes passions au sein de différents engagements associatifs ou de projets personnels",
  "content.010": "Réalisation de vidéos de présentation",
  "content.011": "INSA Alumni HDF — Septembre 2025 & 2026",
  "content.012": "‹",
  "content.013": "›",
  "content.014": "Réalisation de vidéos de présentation de l'association diffusées lors des rentrées 2025 et 2026 à l'INSA HDF.",
  "content.015": "Montage vidéo",
  "content.016": "Logicels et Outils",
  "content.017": "Davinci Resolve",
  "content.018": "Développement de sites web en front-end (HTML, CSS et JavaScript)",
  "content.019": "Personnel",
  "content.020": "Portfolio personnel :",
  "content.021": "Portfolio Lego :",
  "content.022": "Site INSA Alumni HDF :",
  "content.023": "HTML, CSS, JavaScript",
  "content.024": "Github, VS Code",
  "content.025": "Réalisation de vidéos rétrospectives",
  "content.026": "BDE INSA HDF — 2023 à 2024",
  "content.027": "Production, Tournage, Montage de films rétrospectifs d'évènements style \"Aftermovie\". (Vidéos ré-upload)",
  "content.028": "Adobe Premiere, Photoshop",
  "content.029": "INSA Alumni Hauts-de-France",
  "content.030": "Secrétaire & Responsable communication",
  "content.031": "Participation à la restructuration et à la redynamisation de l'association, avec une refonte des pratiques et des documents pour repartir sur de meilleures bases.",
  "content.032": "Rédaction de documents formels (courriers, procès-verbaux, rapports)",
  "content.033": "Création de contenus (posts pour les réseaux sociaux)",
  "content.034": "Périmètre",
  "content.035": "Réseau Alumni",
  "content.036": "Durée",
  "content.037": "Depuis Octobre 2024",
  "content.038": "BDE INSA Hauts-de-France",
  "content.039": "Responsable communication",
  "content.040": "Utilisation de logiciels de création graphique (Canva, Adobe Creative Suite)",
  "content.041": "Création de contenus (posts pour les réseaux sociaux, vidéos rétrospectives)",
  "content.042": "Gestion des réseaux sociaux (Instagram, Facebook, Linkedin, Site web)",
  "content.043": "Gestion de la communication (digitale et physique)",
  "content.044": "Public",
  "content.045": "Étudiants",
  "content.046": "2023 – 2024",
  "content.047": "CAO - 3D",
  "content.048": "Choix matériaux",
  "content.049": "Tolérances géométriques",
  "content.050": "Impression 3D",
  "content.051": "Bancs d’essai",
  "content.052": "Validation",
  "content.053": "Procédures internes",
  "content.054": "Injection plastique",
  "content.055": "Tôlerie",
  "content.056": "Assemblage",
  "content.057": "Fournisseurs",
  "content.058": "Planification",
  "content.059": "Revues jalons",
  "content.060": "Budgets",
  "content.061": "Normes (exemples)",
  "content.062": "IEC 60601-1",
  "content.063": "MDD - MDR",
  "content.064": "ISO 286 - ISO 2768",
  "content.065": "CV",
  "content.066": "Ingénieur conception mécanique",
  "content.067": "DELEO S.A.S - Créateur en médecine esthétique.",
  "content.068": "Navigation",
  "content.069": "Email",
  "content.070": "©",
  "content.071": "Valentin Bacout — Tous droits réservés.",
  "ui.goTop": "Go to top",
  "ui.logo": "Logo",
  "ui.primaryNavigation": "Primary navigation",
  "ui.switchLanguage": "Switch language",
  "ui.switchTheme": "Switch theme",
  "ui.openMenu": "Open menu",
  "ui.closeMenu": "Close menu",
  "ui.mobileNavigation": "Mobile navigation",
  "ui.quickLinks": "Liens rapides",
  "ui.resume": "CV",
  "ui.summary": "Résumé",
  "timeline.categories": "Catégories de la timeline",
  "ui.projectImage": "Illustration du projet",
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
  "timeline.event.e13": "Secrétaire Adjoint INSA Alumni Hauts-de-France",
  "timeline.event.e14": "V&V SUBLIM",
  "timeline.event.e15": "Développement Air Cooling",
  "timeline.event.e16": "Dossier MDR Origin & Sublim",
  "timeline.event.e17": "Transfert en Production Cristal RF",
  "timeline.event.e18": "Conception Pied Parasol Lumera",
  "timeline.event.today": "Aujourd’hui",
  "page.title": "Portfolio | Valentin Bacout",
  "page.description": "Portfolio de Valentin Bacout — projets, expérience, compétences."
});
Object.assign(I18N.en, {
  "content.001": "html",
  "content.002": "Projects",
  "content.003": "Volunteer activities",
  "content.004": "Skills",
  "content.005": "Menu",
  "content.006": "About",
  "content.007": "Hi, I'm",
  "content.008": "I am a mechanical design engineer.",
  "content.009": "I am also passionate about photo/video editing and LEGO. I have put these interests into practice through volunteer activities and personal projects.",
  "content.010": "Production of presentation videos",
  "content.011": "INSA Alumni HDF — September 2025 & 2026",
  "content.012": "‹",
  "content.013": "›",
  "content.014": "Created introductory videos for the association, shown at INSA HDF at the start of the 2025 and 2026 academic years.",
  "content.015": "Video editing",
  "content.016": "Software and tools",
  "content.017": "Davinci Resolve",
  "content.018": "Front-end website development (HTML, CSS and JavaScript)",
  "content.019": "Personal",
  "content.020": "Personal portfolio:",
  "content.021": "LEGO portfolio:",
  "content.022": "INSA Alumni HDF website:",
  "content.023": "HTML, CSS, JavaScript",
  "content.024": "Github, VS Code",
  "content.025": "Production of event recap videos",
  "content.026": "BDE INSA HDF — 2023 to 2024",
  "content.027": "Producing, filming and editing event recap videos (aftermovies). (Videos re-uploaded)",
  "content.028": "Adobe Premiere, Photoshop",
  "content.029": "INSA Alumni Hauts-de-France",
  "content.030": "Secretary & Communications Manager",
  "content.031": "Helped restructure and revitalize the association, revising practices and documents to build a stronger foundation.",
  "content.032": "Drafting formal documents (letters, minutes and reports)",
  "content.033": "Creating content (social media posts)",
  "content.034": "Scope",
  "content.035": "Alumni network",
  "content.036": "Duration",
  "content.037": "Since October 2024",
  "content.038": "BDE INSA Hauts-de-France",
  "content.039": "Communications Manager",
  "content.040": "Using graphic design software (Canva, Adobe Creative Suite)",
  "content.041": "Creating content (social media posts and recap videos)",
  "content.042": "Managing social channels (Instagram, Facebook, LinkedIn and website)",
  "content.043": "Managing digital and print communications",
  "content.044": "Audience",
  "content.045": "Students",
  "content.046": "2023 – 2024",
  "content.047": "3D CAD",
  "content.048": "Material selection",
  "content.049": "Geometric tolerances",
  "content.050": "3D printing",
  "content.051": "Test benches",
  "content.052": "Validation",
  "content.053": "Internal procedures",
  "content.054": "Plastic injection moulding",
  "content.055": "Sheet metal",
  "content.056": "Assembly",
  "content.057": "Suppliers",
  "content.058": "Planning",
  "content.059": "Milestone reviews",
  "content.060": "Budgets",
  "content.061": "Standards (examples)",
  "content.062": "IEC 60601-1",
  "content.063": "MDD - MDR",
  "content.064": "ISO 286 - ISO 2768",
  "content.065": "Resume",
  "content.066": "Mechanical design engineer",
  "content.067": "DELEO S.A.S - Aesthetic medical device manufacturer.",
  "content.068": "Navigation",
  "content.069": "Email",
  "content.070": "©",
  "content.071": "Valentin Bacout — All rights reserved.",
  "ui.goTop": "Go to top",
  "ui.logo": "Logo",
  "ui.primaryNavigation": "Primary navigation",
  "ui.switchLanguage": "Switch language",
  "ui.switchTheme": "Switch theme",
  "ui.openMenu": "Open menu",
  "ui.closeMenu": "Close menu",
  "ui.mobileNavigation": "Mobile navigation",
  "ui.quickLinks": "Quick links",
  "ui.resume": "Resume",
  "ui.summary": "Summary",
  "timeline.categories": "Timeline categories",
  "ui.projectImage": "Project illustration",
  "timeline.event.e1": "Science baccalaureate — highest honors",
  "timeline.event.e2": "INSA Hauts-de-France — integrated preparatory programme",
  "timeline.event.e3": "INSA Hauts-de-France — engineering degree programme",
  "timeline.event.e4": "Communications lead — student union election campaign",
  "timeline.event.e5": "R&D engineering internship at Cerema, Bron",
  "timeline.event.e6": "Communications department lead — INSA HDF student union",
  "timeline.event.e7": "PLP (Project Platform) — final-year project",
  "timeline.event.e8": "VINCI programme project — medical trolley handling assistance",
  "timeline.event.e9": "Process and maintenance engineering internship at Joubert",
  "timeline.event.e10": "INSA Hauts-de-France degree — energy and mechanical engineering",
  "timeline.event.e11": "General Secretary — INSA Alumni Hauts-de-France",
  "timeline.event.e12": "Mechanical design engineer at DELEO",
  "timeline.event.e13": "Deputy Secretary — INSA Alumni Hauts-de-France",
  "timeline.event.e14": "V&V SUBLIM",
  "timeline.event.e15": "Air Cooling development",
  "timeline.event.e16": "Origin & Sublim MDR technical files",
  "timeline.event.e17": "Cristal RF transfer to production",
  "timeline.event.e18": "Lumera parasol stand design",
  "timeline.event.today": "Today",
  "page.title": "Portfolio | Valentin Bacout",
  "page.description": "Valentin Bacout portfolio — projects, experience and skills."
});

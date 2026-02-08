import SiteChrome from "@/components/SiteChrome";

export default function HomePage() {
  return (
    <SiteChrome footerVariant="home">
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__content">
              <h1 className="hero__title">
                Bonjour, je m'appelle <span className="accent">Valentin Bacout</span>.
              </h1>
              <p className="hero__lead">Je suis Ingénieur en conception mécanique.</p>
              <div className="hero__cta">
                <a className="btn btn--primary" href="#timeline">
                  Parcours
                </a>
                <a className="btn btn--primary" href="#projects">
                  Projets
                </a>
                <a className="btn btn--primary" href="#skills">
                  Compétences
                </a>
              </div>
              <div aria-label="Liens rapides" className="hero__links">
                <a
                  aria-label="LinkedIn"
                  className="linkPill"
                  href="https://www.linkedin.com/in/valentin-bacout-a363611b1/"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
                <a
                  aria-label="CV"
                  className="linkPill"
                  href="/img/CV_Valentin_Bacout.pdf"
                  target="_blank"
                  draggable={false}
                ></a>
              </div>
              <div aria-label="Résumé" className="hero__meta">
                <div className="metaCard">
                  <div className="metaCard__label">Spécialité</div>
                  <div className="metaCard__value">Conception / CAO / prototypage</div>
                </div>
                <div className="metaCard">
                  <div className="metaCard__label">Références</div>
                  <div className="metaCard__value">(Confidentiel)</div>
                </div>
                <div className="metaCard">
                  <div className="metaCard__label">Localisation</div>
                  <div className="metaCard__value">France</div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="hero__bg"></div>
        </section>

        {/* A propos */}
        <section className="section" id="about">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">À propos</h2>
              <p className="section__subtitle"></p>
            </div>
            <div className="grid2">
              <div className="card">
                <h3>Profil</h3>
                <p>
                  Ingénieur orienté produit, avec une approche pragmatique : itération rapide, prototypage, validation,
                  puis industrialisation. Je privilégie les solutions simples, réparables, et sûres.
                </p>
                <p></p>
              </div>
              <div className="card">
                <h3>Ce que vous trouverez</h3>
                <ul className="list">
                  <li>Projets et réalisations (avec éléments floutés si nécessaire)</li>
                  <li>Compétences (CAD, conception, essais, industrialisation)</li>
                  <li>Timeline interactive (expérience / formation)</li>
                  <li>Liens de contact</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section section--alt" id="timeline">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Parcours</h2>
            </div>
            <div className="th-wrap">
              <div className="th-controls">
                <label>
                  Zoom
                  <input id="th-zoom" max="220" min="60" type="range" defaultValue="100" />
                </label>
              </div>
              <div className="th-timeline">
                <div className="th-scroller">
                  <div className="th-stage" id="th-stage">
                    <div className="th-axis"></div>
                    <div className="th-lanes" id="th-lanes"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projets */}
        <section className="section" id="projects">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title"></h2>
              <p className="section__subtitle"></p>
            </div>
            <div className="projects">
              {/* DELEO - SUBLIM */}
              <article className="project" data-project="e" data-timeline="E12">
                <div className="project__top">
                  <div className="project__head">
                    <h3 className="project__title" data-i18n="project.e.title"></h3>
                    <p className="project__meta" data-i18n="project.e.meta"></p>
                  </div>
                  <span className="project__pill" data-i18n="project.e.pill"></span>
                </div>
                <img
                  alt="Illustration du projet"
                  className="project__img"
                  src="/img/Sublim-1.png"
                  draggable={false}
                />
                <p className="project__desc" data-i18n="project.e.desc"></p>

                <div className="project__grid">
                  <div className="project__stat">
                    <div className="k" data-i18n="project.e.details.k"></div>
                    <div className="v" data-i18n="project.e.details.v"></div>
                  </div>

                  <div className="project__stat">
                    <div className="k" data-i18n="project.e.deliverables.k"></div>
                    <div className="v" data-i18n="project.e.deliverables.v"></div>
                  </div>

                  <div className="project__stat">
                    <div className="k" data-i18n="project.e.client.k"></div>
                    <div className="v" data-i18n="project.e.client.v"></div>
                  </div>

                  <div className="project__stat">
                    <div className="k" data-i18n="project.e.skills.k"></div>
                    <div className="v" data-i18n="project.e.skills.v"></div>
                  </div>
                </div>
              </article>

              {/* JOUBERT */}
              <article className="project" data-project="a" data-timeline="E9">
                <div className="project__top">
                  <div className="project__head">
                    <h3 className="project__title" data-i18n="project.a.title"></h3>
                    <p className="project__meta" data-i18n="project.a.meta"></p>
                  </div>
                  <span className="project__pill" data-i18n="project.a.pill"></span>
                </div>

                <div className="project__desc" data-i18n-html="project.a.desc"></div>

                <div className="project__grid">
                  <div className="project__stat">
                    <div className="k" data-i18n="project.a.details.k"></div>
                    <div className="v" data-i18n="project.a.details.v"></div>
                  </div>

                  <div className="project__stat">
                    <div className="k" data-i18n="project.a.deliverables.k"></div>
                    <div className="v" data-i18n="project.a.deliverables.v"></div>
                  </div>

                  <div className="project__stat">
                    <div className="k" data-i18n="project.a.client.k"></div>
                    <div className="v" data-i18n="project.a.client.v"></div>
                  </div>

                  <div className="project__stat">
                    <div className="k" data-i18n="project.a.skills.k"></div>
                    <div className="v" data-i18n="project.a.skills.v"></div>
                  </div>
                </div>
              </article>

              {/* PLP */}
              <article className="project" data-project="d" data-timeline="E7">
                <div className="project__top">
                  <div className="project__head">
                    <h3 className="project__title" data-i18n="project.d.title"></h3>
                    <p className="project__meta" data-i18n="project.d.meta"></p>
                  </div>
                  <span className="project__pill" data-i18n="project.d.pill"></span>
                </div>

                <p className="project__desc" data-i18n="project.d.desc"></p>

                <div className="project__grid">
                  <div className="project__stat">
                    <div className="k" data-i18n="project.d.details.k"></div>
                    <div className="v" data-i18n="project.d.details.v"></div>
                  </div>

                  <div className="project__stat">
                    <div className="k" data-i18n="project.d.deliverables.k"></div>
                    <div className="v" data-i18n="project.d.deliverables.v"></div>
                  </div>

                  <div className="project__stat">
                    <div className="k" data-i18n="project.d.client.k"></div>
                    <div className="v" data-i18n="project.d.client.v"></div>
                  </div>

                  <div className="project__stat">
                    <div className="k" data-i18n="project.d.skills.k"></div>
                    <div className="v" data-i18n="project.d.skills.v"></div>
                  </div>
                </div>
              </article>

              {/* VINCI */}
              <article className="project" data-project="b" data-timeline="E8">
                <div className="project__top">
                  <div className="project__head">
                    <h3 className="project__title" data-i18n="project.b.title"></h3>
                    <p className="project__meta" data-i18n="project.b.meta"></p>
                  </div>
                  <span className="project__pill" data-i18n="project.b.pill"></span>
                </div>

                <p className="project__desc" data-i18n="project.b.desc"></p>

                <div className="project__grid">
                  <div className="project__stat">
                    <div className="k" data-i18n="project.b.details.k"></div>
                    <div className="v" data-i18n="project.b.details.v"></div>
                  </div>

                  <div className="project__stat">
                    <div className="k" data-i18n="project.b.deliverables.k"></div>
                    <div className="v" data-i18n="project.b.deliverables.v"></div>
                  </div>

                  <div className="project__stat">
                    <div className="k" data-i18n="project.b.client.k"></div>
                    <div className="v" data-i18n="project.b.client.v"></div>
                  </div>

                  <div className="project__stat">
                    <div className="k" data-i18n="project.b.skills.k"></div>
                    <div className="v" data-i18n="project.b.skills.v"></div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Projets personnels et associatifs */}
        <section className="section section--alt" id="projects-personal">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Projets extras</h2>
              <p className="section__subtitle">
                Je suis également passionné par le montage photos/vidéos et les LEGO. J'ai eu l'occasion de mettre à
                profit mes passions au sein de différents engagements associatifs ou de projets personnels
              </p>
            </div>

            <div className="projects engagements">
              <article className="project" data-timeline="E11">
                <div className="project__top">
                  <div className="project__head">
                    <h3 className="project__title">Réalisation d'une vidéo de présentation</h3>
                    <p className="project__meta">INSA Alumni HDF — Septembre 2025</p>
                  </div>
                  <span className="project__pill">Associatif</span>
                </div>
                <div className="project__media">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/FfRxwOQFKSk?si=whUJ0ZzsB-k9WGQN"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                <p className="project__desc">
                  Réalisation d'une vidéo de présentation de l'association diffusée lors de la rentrée 2025 à l'INSA
                  HDF.
                </p>

                <div className="project__grid">
                  <div className="project__stat">
                    <div className="k">Compétences</div>
                    <div className="v">Montage vidéo</div>
                  </div>
                  <div className="project__stat">
                    <div className="k">Logicels et Outils</div>
                    <div className="v">Davinci Resolve</div>
                  </div>
                </div>
              </article>

              <article className="project" data-color="#ffffff">
                <div className="project__top">
                  <div className="project__head">
                    <h3 className="project__title">Développement de sites web en front-end (HTML, CSS et JavaScript)</h3>
                  </div>
                  <span className="project__pill">Personnel</span>
                </div>
                <div className="project__desc">
                  <ul>
                    <li>
                      Portfolio personnel :
                      <a href="https://valentinbacout.github.io/portfolio/" target="_blank" rel="noopener">
                        valentinbacout.github.io/portfolio
                      </a>
                    </li>
                    <li>
                      Portfolio Lego :
                      <a href="https://bricks44creations.github.io/website" target="_blank" rel="noopener">
                        bricks44creations.github.io/website
                      </a>
                    </li>
                    <li>
                      Site INSA Alumni HDF :
                      <a href="https://insaalumnihdf.github.io/site/" target="_blank" rel="noopener">
                        insaalumnihdf.github.io/site
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="project__grid">
                  <div className="project__stat">
                    <div className="k">Compétences</div>
                    <div className="v">HTML, CSS, JavaScript</div>
                  </div>
                  <div className="project__stat">
                    <div className="k">Logicels et Outils</div>
                    <div className="v">Github, VS Code</div>
                  </div>
                </div>
              </article>

              <article className="project" data-timeline="E6">
                <div className="project__top">
                  <div className="project__head">
                    <h3 className="project__title">Réalisation de vidéos rétrospectives</h3>
                    <p className="project__meta">BDE INSA HDF — 2023 à 2024</p>
                  </div>
                  <span className="project__pill">Associatif</span>
                </div>
                <div className="project__media">
                  <div className="projects-wrapper">
                    <button className="scroll-btn left" aria-label="Scroll left">
                      ‹
                    </button>

                    <div className="video-strip">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/-bzoR3Ta0uU?si=YhIVyrewC3CbvrHS"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/X0-CEotx8hI?si=Jvr5iaZIdMyuKBFh"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/UM52jmoDyJU?si=3XCfGrusQTvrouTO"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>

                    <button className="scroll-btn right" aria-label="Scroll right">
                      ›
                    </button>
                  </div>
                </div>

                <p className="project__desc">
                  Production, Tournage, Montage de films rétrospectifs d'évènements style "Aftermovie". (Vidéos
                  ré-upload)
                </p>

                <div className="project__grid">
                  <div className="project__stat">
                    <div className="k">Compétences</div>
                    <div className="v">Montage vidéo</div>
                  </div>
                  <div className="project__stat">
                    <div className="k">Logicels et Outils</div>
                    <div className="v">Adobe Premiere, Photoshop</div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Engagements associatifs */}
        <section className="section" id="engagements-asso">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Engagements associatifs</h2>
              <p className="section__subtitle"></p>
            </div>

            <div className="projects engagements">
              <article className="project" data-timeline="E11">
                <div className="project__top">
                  <img
                    src="/img/insa-alumni-hdf.png"
                    alt="Logo INSA Alumni"
                    className="project__logo"
                    draggable={false}
                  />

                  <div className="project__head">
                    <h3 className="project__title">INSA Alumni Hauts-de-France</h3>
                    <p className="project__meta">Secrétaire & Responsable communication</p>
                  </div>
                </div>
                <div className="project__grid">
                  <div className="project__stat">
                    <div className="k">Compétences</div>
                    <div className="v">
                      <ul>
                        <li>
                          Participation à la restructuration et à la redynamisation de l'association, avec une refonte
                          des pratiques et des documents pour repartir sur de meilleures bases.
                        </li>
                        <li>Rédaction de documents formels (courriers, procès-verbaux, rapports)</li>
                        <li>Création de contenus (posts pour les réseaux sociaux)</li>
                      </ul>{" "}
                      <br />
                      <br />
                    </div>
                  </div>
                  <div className="project__stat">
                    <div className="k">Périmètre</div>
                    <div className="v">Réseau Alumni</div>
                  </div>
                  <div className="project__stat">
                    <div className="k">Durée</div>
                    <div className="v">Depuis Octobre 2024</div>
                  </div>
                </div>
              </article>

              <article className="project" data-timeline="E6">
                <div className="project__top">
                  <img src="/img/bde.png" alt="Logo INSA Alumni" className="project__logo" draggable={false} />
                  <div className="project__head">
                    <h3 className="project__title">BDE INSA Hauts-de-France</h3>
                    <p className="project__meta">Responsable communication</p>
                  </div>
                </div>
                <div className="project__grid">
                  <div className="project__stat">
                    <div className="k">Compétences</div>
                    <div className="v">
                      <ul>
                        <li>Utilisation de logiciels de création graphique (Canva, Abode Creative Suite)</li>
                        <li>Création de contenus (posts pour les réseaux sociaux, vidéos rétrospectives)</li>
                        <li>Gestion des réseaux sociaux (Instagram, Facebook, Linkedin, Site web)</li>
                        <li>Gestion de la communication (digitale et physique)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="project__stat">
                    <div className="k">Public</div>
                    <div className="v">Étudiants</div>
                  </div>
                  <div className="project__stat">
                    <div className="k">Durée</div>
                    <div className="v">2023 – 2024</div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Compétences */}
        <section className="section section--alt" id="skills">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Compétences</h2>
              <p className="section__subtitle"></p>
            </div>
            <div className="skills">
              <article className="card">
                <h3>Conception</h3>
                <ul className="tags">
                  <li>CAO - 3D</li>
                  <li>Choix matériaux</li>
                  <li>Tolérances géométriques</li>
                </ul>
              </article>
              <article className="card">
                <h3>Prototypage &amp; essais</h3>
                <ul className="tags">
                  <li>Impression 3D</li>
                  <li>Bancs d’essai</li>
                  <li>Validation</li>
                  <li>Procédures internes</li>
                </ul>
              </article>
              <article className="card">
                <h3>Industrialisation</h3>
                <ul className="tags">
                  <li>Injection plastique</li>
                  <li>Tôlerie</li>
                  <li>Assemblage</li>
                  <li>Fournisseurs</li>
                </ul>
              </article>
              <article className="card">
                <h3>Gestion</h3>
                <ul className="tags">
                  <li>Planification</li>
                  <li>Revues jalons</li>
                  <li>Budgets</li>
                </ul>
              </article>
              <article className="card">
                <h3>Normes (exemples)</h3>
                <ul className="tags">
                  <li>IEC 60601-1</li>
                  <li>MDD - MDR</li>
                  <li>ISO 286 - ISO 2768</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section" id="contact">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Contact</h2>
              <p className="section__subtitle"></p>
            </div>
            <div className="grid2">
              <div className="card">
                <h3>Me joindre</h3>
                <div className="contact">
                  <a className="contact__link" href="#">
                    valentin.bacout@gmail.com
                  </a>
                  <a
                    className="contact__link"
                    href="https://www.linkedin.com/in/valentin-bacout-a363611b1/"
                    target="_blank"
                    rel="noopener"
                  >
                    LinkedIn
                  </a>
                  <a className="contact__link" href="/img/CV_Valentin_Bacout.pdf" target="_blank" rel="noopener">
                    CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}

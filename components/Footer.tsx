export default function Footer({ variant }: { variant: "home" | "legal" }) {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <h4>Valentin Bacout</h4>
          <p>
            Ingénieur conception mécanique <br /> DELEO S.A.S - Créateur en médecine esthétique.
          </p>
        </div>

        <div className="footer__col">
          <h4>Navigation</h4>
          {variant === "home" ? (
            <>
              <a href="#projects">Projets</a>
              <a href="#timeline">Parcours</a>
              <a href="#skills">Compétences</a>
              <a href="#contact">Contact</a>
            </>
          ) : (
            <>
              <a href="/\#projects">Projets</a>
              <a href="/\#timeline">Parcours</a>
              <a href="/\#skills">Compétences</a>
              <a href="/\#contact">Contact</a>
            </>
          )}
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href="mailto:valentinbacout@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/valentin-bacout-a363611b1/" target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a href="/img/CV_Valentin_Bacout.pdf" target="_blank" rel="noopener">
            CV
          </a>
        </div>

        <div className="footer__col">
          <h4{...(variant === "legal" ? { "data-i18n": "legal.pageTitle" } : {})}>Mentions légales</h4>
          <a href={variant === "home" ? "/mentions-legales" : "/mentions-legales"} data-i18n="legal.pageTitle">
            Mentions légales
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          © <span id="year"></span> Valentin Bacout — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

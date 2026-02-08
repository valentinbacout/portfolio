export default function Header() {
  return (
    <>
      {/* DESKTOP HEADER */}
      <header className="header header--desktop" id="headerDesktop">
        <div className="header__inner container">
          <div className="header__left">
            <a href="#top" className="brand" aria-label="Go to top">
              <img
                src="/img/valentin bacout.png"
                alt="Logo"
                className="brand__logo"
                draggable={false}
              />
              <span className="brand__name">Valentin Bacout</span>
            </a>
          </div>

          <nav className="header__center" id="navMenu" aria-label="Primary navigation">
            <a href="#timeline" className="nav__link">
              Parcours
            </a>
            <a href="#projects" className="nav__link">
              Projects
            </a>
            <a href="#projects-personal" className="nav__link">
              Extra
            </a>
            <a href="#engagements-asso" className="nav__link">
              Engagements asso
            </a>
            <a href="#skills" className="nav__link">
              Skills
            </a>
          </nav>

          <div className="header__right">
            <button className="chip" id="langSwitch" type="button" aria-label="Switch language">
              FR / EN
            </button>
            <button className="chip" id="themeSwitch" type="button" aria-label="Switch theme">
              🌙 / ☀️
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE HEADER */}
      <header className="header header--mobile" id="headerMobile">
        <button
          className="burger"
          id="burgerBtn"
          type="button"
          aria-label="Open menu"
          aria-controls="mobileSidebar"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <a href="#top" className="brand brand--mobile" aria-label="Go to top">
          <span className="brand__name">Valentin Bacout</span>
        </a>
      </header>
    </>
  );
}

export default function MobileSidebar() {
  return (
    <>
      {/* Sidebar overlay */}
      <div className="overlay" id="overlay" hidden></div>

      {/* Mobile sidebar */}
      <aside className="sidebar" id="mobileSidebar" aria-hidden="true">
        <div className="sidebar__top">
          <span className="sidebar__title">Menu</span>
          <button className="sidebar__close" id="sidebarClose" type="button" aria-label="Close menu">
            ✕
          </button>
        </div>

        <nav className="sidebar__nav" id="navMenuMobile" aria-label="Mobile navigation">
          <a href="#about" className="sidebar__link">
            About
          </a>
          <a href="#timeline" className="sidebar__link">
            Parcours
          </a>
          <a href="#projects" className="sidebar__link">
            Projects
          </a>
          <a href="#projects-personal" className="sidebar__link">
            Extra
          </a>
          <a href="#engagements-asso" className="sidebar__link">
            Engagements asso
          </a>
          <a href="#skills" className="sidebar__link">
            Skills
          </a>
          <a href="#contact" className="sidebar__link">
            Contact
          </a>
        </nav>

        <div className="sidebar__sep" aria-hidden="true"></div>

        <div className="sidebar__actions">
          <button className="chip chip--full" id="langSwitchMobile" type="button">
            FR / EN
          </button>
          <button className="chip chip--full" id="themeSwitchMobile" type="button">
            🌙 / ☀️
          </button>
        </div>
      </aside>
    </>
  );
}

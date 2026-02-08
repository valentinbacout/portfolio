import SiteChrome from "@/components/SiteChrome";

export default function MentionsLegalesPage() {
  return (
    <SiteChrome footerVariant="legal">
      <main>
        <section className="section">
          <div className="container">
            <div className="section__head">
              <h1 className="section__title" data-i18n="legal.pageTitle">
                Mentions légales
              </h1>
            </div>

            <div className="card">
              <p className="muted">
                <span data-i18n="legal.updated">Dernière mise à jour :</span> 03/02/2026
              </p>
              <div data-i18n-html="legal.content"></div>
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}

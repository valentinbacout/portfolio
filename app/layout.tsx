import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Valentin Bacout",
  description: "Portfolio de Valentin Bacout — projets, expérience, compétences."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />

        {/* Fonts (kept identical to original) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="16x16" href="/img/valentin bacout.png" />
      </head>

      <body>
        {/* i18n must be available before the main script */}
        <Script src="/i18n.js" strategy="beforeInteractive" />
        <Script src="/script.js" strategy="afterInteractive" />

        {children}
      </body>
    </html>
  );
}

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileSidebar from "@/components/MobileSidebar";

export default function SiteChrome({
  children,
  footerVariant = "home"
}: {
  children: React.ReactNode;
  footerVariant?: "home" | "legal";
}) {
  return (
    <>
      <div id="top"></div>

      <Header />
      <MobileSidebar />

      {/* Spacer to prevent content hidden behind fixed headers */}
      <div className="header-spacer" aria-hidden="true"></div>

      {children}

      <Footer variant={footerVariant} />
    </>
  );
}

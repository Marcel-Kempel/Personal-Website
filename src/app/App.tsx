import { useEffect, useState } from "react";
import { Footer } from "./components/site/Footer";
import { Navbar } from "./components/site/Navbar";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { LegalPage, legalPages } from "./pages/LegalPage";

function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setPathname(window.location.pathname);

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("pushstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("pushstate", handleLocationChange);
    };
  }, []);

  return pathname;
}

function useHashScroll(pathname: string) {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      window.requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(hash))?.scrollIntoView({ block: "start" });
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname]);
}

export default function App() {
  const pathname = usePathname();
  useHashScroll(pathname);
  const legalPage = legalPages[pathname as keyof typeof legalPages];
  const isContactPage = pathname === "/kontakt";

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main>{legalPage ? <LegalPage page={legalPage} /> : isContactPage ? <ContactPage /> : <HomePage />}</main>
      <Footer />
    </div>
  );
}

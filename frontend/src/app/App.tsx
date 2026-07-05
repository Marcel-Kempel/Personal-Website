import { useEffect, useState } from "react";
import { Footer } from "./components/site/Footer";
import { Navbar } from "./components/site/Navbar";
import { CertificateDetailPage } from "./pages/CertificateDetailPage";
import { CertificatesPage } from "./pages/CertificatesPage";
import { HomePage } from "./pages/HomePage";
import { LegalPage, legalPages } from "./pages/LegalPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { getCertificateBySlug } from "./content";
import { getProjectBySlug } from "./data/projects";

function usePathname() {
  const normalizePathname = (value: string) => (value.length > 1 ? value.replace(/\/+$/, "") : value);
  const [pathname, setPathname] = useState(() => normalizePathname(window.location.pathname));

  useEffect(() => {
    const handleLocationChange = () => setPathname(normalizePathname(window.location.pathname));

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
  useEffect(() => {
    if (pathname === "/kontakt") {
      window.location.replace("/#kontakt");
    }
  }, [pathname]);

  const legalPage = legalPages[pathname as keyof typeof legalPages];
  const projectSlug = pathname.match(/^\/projekte\/([^/]+)$/)?.[1];
  const project = projectSlug ? getProjectBySlug(decodeURIComponent(projectSlug)) : undefined;
  const certificateSlug = pathname.match(/^\/zertifikate\/([^/]+)$/)?.[1];
  const certificate = certificateSlug ? getCertificateBySlug(decodeURIComponent(certificateSlug)) : undefined;
  const isCertificatesRoute = pathname === "/zertifikate";
  const isKnownRoute =
    pathname === "/" || isCertificatesRoute || Boolean(certificate) || Boolean(legalPage) || Boolean(project);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <a className="skip-link" href="#main-content">
        Zum Inhalt springen
      </a>
      <Navbar />
      <main id="main-content">
        {legalPage ? (
          <LegalPage page={legalPage} />
        ) : certificate ? (
          <CertificateDetailPage certificate={certificate} />
        ) : isCertificatesRoute ? (
          <CertificatesPage />
        ) : project ? (
          <ProjectDetailPage project={project} />
        ) : isKnownRoute ? (
          <HomePage />
        ) : (
          <NotFoundPage />
        )}
      </main>
      <Footer />
    </div>
  );
}

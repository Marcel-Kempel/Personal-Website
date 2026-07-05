import { ArrowLeft } from "lucide-react";
import { certificates } from "../content";
import { CertificateCard } from "../components/site/CertificateCard";
import { FadeIn } from "../components/site/Reveal";
import { SectionHeader } from "../components/site/SectionHeader";

const categories = Array.from(new Set(certificates.map((certificate) => certificate.category)));

export function CertificatesPage() {
  return (
    <section className="pt-28 pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <a
          href="/#zertifikate"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-semibold text-foreground transition hover:border-[#3B5FDB]/35 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          Zurück zur Hauptseite
        </a>

        <div className="mt-12">
          <SectionHeader
            label="Nachweise"
            title="Alle Zertifikate"
            text="Alle Zertifikate und Kursnachweise, geordnet nach fachlichen Kategorien. Ein Klick auf ein Zertifikat öffnet die Bildansicht."
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${categoryToId(category)}`}
              className="rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[0.72rem] text-muted-foreground transition hover:border-[#3B5FDB]/35 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {category}
            </a>
          ))}
        </div>

        <div className="mt-14 space-y-16">
          {categories.map((category, categoryIndex) => {
            const categoryCertificates = certificates.filter(
              (certificate) => certificate.category === category
            );

            return (
              <section key={category} id={categoryToId(category)} className="scroll-mt-24">
                <FadeIn delay={categoryIndex * 0.04}>
                  <div className="flex flex-col gap-2 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#3B5FDB]">
                        Kategorie
                      </p>
                      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">
                        {category}
                      </h2>
                    </div>
                    <p className="font-mono text-[0.72rem] text-muted-foreground">
                      {categoryCertificates.length} Nachweise
                    </p>
                  </div>
                </FadeIn>

                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {categoryCertificates.map((certificate, index) => (
                    <FadeIn key={certificate.slug} delay={index * 0.06}>
                      <CertificateCard certificate={certificate} />
                    </FadeIn>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-16">
          <a
            href="/#zertifikate"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-semibold text-foreground transition hover:border-[#3B5FDB]/35 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Zurück zur Hauptseite
          </a>
        </div>
      </div>
    </section>
  );
}

function categoryToId(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

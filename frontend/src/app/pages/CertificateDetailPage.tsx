import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Certificate } from "../content";
import { ButtonLink } from "../components/site/ButtonLink";

export function CertificateDetailPage({ certificate }: { certificate: Certificate }) {
  return (
    <section className="pt-28 pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/#zertifikate"
            className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Zurück zur Hauptseite
          </a>

          <a
            href="/zertifikate"
            className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            Alle Zertifikate
          </a>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#3B5FDB]">
              {certificate.category}
            </p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
              {certificate.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
              {certificate.description}
            </p>
          </div>

          <aside className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#3B5FDB]">
              Details
            </p>
            <dl className="mt-5 divide-y divide-border">
              {[
                ["Anbieter", certificate.issuer],
                ["Datum", certificate.date],
                ["Kategorie", certificate.category],
              ].map(([label, value]) => (
                <div key={label} className="grid gap-1 py-4 first:pt-0 last:pb-0">
                  <dt className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="text-sm font-semibold leading-6 text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <figure className="mt-12 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
          <div className="border-b border-border bg-secondary/45 px-5 py-4">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
              Zertifikatbild
            </p>
          </div>
          <div className="bg-secondary/30 p-4 sm:p-6">
            <img
              src={certificate.imageUrl}
              alt={`Zertifikat: ${certificate.title}`}
              className="mx-auto max-h-[75vh] w-full rounded-md border border-border bg-background object-contain"
            />
          </div>
        </figure>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/#zertifikate" variant="secondary">
            Zurück zur Hauptseite
          </ButtonLink>
          <ButtonLink href="/zertifikate">
            Alle Zertifikate ansehen
          </ButtonLink>
          {certificate.credentialUrl ? (
            <ButtonLink
              href={certificate.credentialUrl}
              variant="secondary"
              icon={<ExternalLink size={15} aria-hidden="true" />}
            >
              Credential öffnen
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}

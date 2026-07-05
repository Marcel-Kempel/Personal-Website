import { Award, ExternalLink, ImageIcon } from "lucide-react";
import type { Certificate } from "../../content";

export function CertificateCard({
  certificate,
  compact = false,
}: {
  certificate: Certificate;
  compact?: boolean;
}) {
  return (
    <a
      id={certificate.slug}
      href={`/zertifikate/${certificate.slug}`}
      className="interactive-card group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-[0_16px_38px_rgba(13,21,32,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`Zertifikat ${certificate.title} öffnen`}
    >
      <div className="flex aspect-[4/3] items-center justify-center border-b border-border bg-secondary/45 p-4">
        <img
          src={certificate.imageUrl}
          alt=""
          className="h-full w-full rounded-md object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#F2F5FF] text-[#223FBA]">
            <Award size={19} aria-hidden="true" />
          </div>
          {certificate.featured ? (
            <span className="rounded bg-[#F2F5FF] px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#223FBA]">
              Top
            </span>
          ) : null}
        </div>

        <p className="mt-6 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {certificate.issuer}
        </p>
        <h3 className="mt-2 text-base font-bold text-foreground">{certificate.title}</h3>
        <p className="mt-1 font-mono text-[0.72rem] text-muted-foreground">{certificate.date}</p>
        <p className="mt-2 font-mono text-[0.72rem] text-[#3B5FDB]">{certificate.category}</p>

        {compact ? null : (
          <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
            {certificate.description}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4 text-sm font-semibold text-muted-foreground">
          <span className="inline-flex items-center gap-2 transition group-hover:text-foreground">
            <ImageIcon size={14} aria-hidden="true" />
            Bild ansehen
          </span>
          {certificate.credentialUrl ? (
            <span className="inline-flex items-center gap-2 transition group-hover:text-foreground">
              <ExternalLink size={14} aria-hidden="true" />
              Credential
            </span>
          ) : null}
        </div>
      </div>
    </a>
  );
}

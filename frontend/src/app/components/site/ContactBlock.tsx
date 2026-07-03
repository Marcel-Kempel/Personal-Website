import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../../content";
import { ButtonLink } from "./ButtonLink";
import { SectionHeader } from "./SectionHeader";

function getSafeProfileHref(value: string) {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

const contactItems = [
  {
    icon: Mail,
    label: "E-Mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: siteConfig.linkedinLabel,
    href: getSafeProfileHref(siteConfig.linkedinUrl),
  },
  {
    icon: Github,
    label: "GitHub",
    value: siteConfig.githubLabel,
    href: getSafeProfileHref(siteConfig.githubUrl),
  },
  {
    icon: MapPin,
    label: "Standort",
    value: siteConfig.location,
  },
];

export function ContactBlock({ standalone = false }: { standalone?: boolean }) {
  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-start">
      <div>
        <SectionHeader
          label="Kontakt"
          title={standalone ? "Kontakt aufnehmen" : "Kontakt"}
          text="Ob Austausch, Thesis-Thema, Projektidee oder berufliche Möglichkeit - ich freue mich über eine Nachricht."
        />
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
          Der Kontakt läuft bewusst über E-Mail statt über ein eigenes Formular. So werden auf der
          Website keine Nachrichten serverseitig gespeichert und die Datenschutzfläche bleibt klein.
        </p>
        <div className="mt-9">
          <ButtonLink href={`mailto:${siteConfig.email}`} icon={<Mail size={15} aria-hidden="true" />}>
            Nachricht schreiben
          </ButtonLink>
        </div>
      </div>

      <div className="grid gap-3">
        {contactItems.map(({ icon: Icon, label, value, href }) => {
          const content = (
            <>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted">
                <Icon size={16} className="text-muted-foreground" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 truncate text-sm font-semibold text-foreground">{value}</p>
              </div>
            </>
          );

          return href ? (
            <a
              key={label}
              href={href}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 shadow-sm transition hover:border-[#3B5FDB]/35 hover:shadow-[0_12px_30px_rgba(13,21,32,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {content}
            </a>
          ) : (
            <div
              key={label}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 shadow-sm"
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

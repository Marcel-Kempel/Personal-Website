import { siteConfig } from "../../content";

const footerLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-base font-extrabold text-foreground">{siteConfig.name}</p>
          <p className="mt-1 max-w-sm text-xs leading-5 text-muted-foreground">
            Portfolio für Wirtschaftsinformatik, Prozessautomatisierung und Datenanalyse
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Footer">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-sm text-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

type LegalPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{
    title: string;
    text: string;
  }>;
};

export const legalPages: Record<string, LegalPageContent> = {
  "/impressum": {
    eyebrow: "Rechtliches",
    title: "Impressum",
    intro:
      "Diese Seite ist als Platzhalter angelegt, damit der Link vorhanden ist. Die rechtlich korrekten Angaben müssen vor Veröffentlichung ergänzt werden.",
    sections: [
      {
        title: "Angaben gemäß § 5 TMG",
        text: "Marcel Kempel, Anschrift ergänzen, Deutschland.",
      },
      {
        title: "Kontakt",
        text: "E-Mail-Adresse ergänzen. Telefonnummer nur ergänzen, wenn sie veröffentlicht werden soll.",
      },
      {
        title: "Verantwortlich für den Inhalt",
        text: "Marcel Kempel. Die finalen Angaben bitte vor dem Livegang prüfen.",
      },
    ],
  },
  "/datenschutz": {
    eyebrow: "Rechtliches",
    title: "Datenschutz",
    intro:
      "Diese Datenschutzhinweise sind als klare Platzhalterseite vorbereitet. Vor Veröffentlichung sollten sie an Hosting, Tracking, Kontaktwege und eingebundene Dienste angepasst werden.",
    sections: [
      {
        title: "Allgemeine Hinweise",
        text: "Beim Besuch dieser Website können technische Zugriffsdaten durch den Hosting-Anbieter verarbeitet werden.",
      },
      {
        title: "Kontaktaufnahme",
        text: "Wenn eine Nachricht per E-Mail gesendet wird, werden die übermittelten Daten zur Bearbeitung der Anfrage genutzt.",
      },
      {
        title: "Externe Links",
        text: "Links zu LinkedIn und GitHub sollten ergänzt werden, sobald die finalen Profile feststehen.",
      },
    ],
  },
};

export function LegalPage({ page }: { page: LegalPageContent }) {
  return (
    <section className="pt-28 pb-24 lg:pb-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <a
          href="/"
          className="mb-10 inline-flex rounded-sm text-sm font-semibold text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          Zurück zum Portfolio
        </a>

        <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#3B5FDB]">
          {page.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground">{page.title}</h1>
        <p className="mt-6 text-base leading-8 text-muted-foreground">{page.intro}</p>

        <div className="mt-12 space-y-5">
          {page.sections.map((section) => (
            <article key={section.title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 className="text-base font-bold text-foreground">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{section.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

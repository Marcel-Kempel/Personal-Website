import { hasMissingLegalData, legalConfig, siteConfig } from "../content";

type LegalPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{
    title: string;
    text: string[];
  }>;
};

const address = `${legalConfig.addressLine1}, ${legalConfig.addressLine2}, ${legalConfig.country}`;
const phoneLine = legalConfig.phone ? `Telefon: ${legalConfig.phone}` : "Telefon: nicht veröffentlicht";

export const legalPages: Record<string, LegalPageContent> = {
  "/impressum": {
    eyebrow: "Rechtliches",
    title: "Impressum",
    intro:
      "Anbieterkennzeichnung für diese persönliche Portfolio-Website. Vor dem öffentlichen Livegang müssen die Platzhalter für Anschrift und Hosting vollständig ersetzt werden.",
    sections: [
      {
        title: "Angaben gemäß § 5 DDG",
        text: [legalConfig.ownerName, address],
      },
      {
        title: "Kontakt",
        text: [`E-Mail: ${legalConfig.email}`, phoneLine],
      },
      {
        title: "Verantwortlich für den Inhalt",
        text: [
          `${legalConfig.responsibleForContent}, Anschrift wie oben.`,
          "Diese Angabe ist vorsorglich für Inhalte mit möglichem redaktionellem Charakter nach § 18 Abs. 2 MStV vorbereitet.",
        ],
      },
      {
        title: "Haftung für Links",
        text: [
          "Diese Website kann Links zu externen Profilen enthalten. Für deren Inhalte sind ausschließlich die jeweiligen Betreiber verantwortlich.",
        ],
      },
    ],
  },
  "/datenschutz": {
    eyebrow: "Rechtliches",
    title: "Datenschutz",
    intro:
      "Diese Datenschutzerklärung ist für eine schlanke statische Portfolio-Website ohne eigenes Kontaktformular, ohne Tracking und ohne externe Webfonts vorbereitet.",
    sections: [
      {
        title: "Verantwortlicher",
        text: [`${legalConfig.ownerName}, ${address}`, `E-Mail: ${legalConfig.email}`],
      },
      {
        title: "Hosting und Server-Logfiles",
        text: [
          `Diese Website wird über ${legalConfig.hostingProvider} bereitgestellt. Beim Aufruf der Seiten können technisch notwendige Zugriffsdaten verarbeitet werden, insbesondere IP-Adresse, Datum und Uhrzeit des Abrufs, angeforderte Datei, Referrer-URL, Browser- und Betriebssysteminformationen sowie HTTP-Statuscodes.`,
          "Die Verarbeitung erfolgt, um die Website stabil, sicher und fehlerfrei auszuliefern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
        ],
      },
      {
        title: "Kontaktaufnahme per E-Mail",
        text: [
          "Wenn du per E-Mail Kontakt aufnimmst, werden die übermittelten Angaben zur Bearbeitung der Anfrage verarbeitet.",
          "Rechtsgrundlage ist je nach Inhalt der Anfrage Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.",
        ],
      },
      {
        title: "Cookies, Tracking und externe Schriftarten",
        text: [
          "Diese Website setzt aktuell keine Analyse- oder Marketing-Cookies ein und verwendet keine Tracking-Skripte.",
          "Die Schriftarten werden über lokale Systemfonts dargestellt. Es werden dadurch keine Schriftdateien von Google Fonts oder vergleichbaren externen Diensten geladen.",
        ],
      },
      {
        title: "Externe Profile",
        text: [
          "Links zu LinkedIn oder GitHub führen zu externen Angeboten. Erst beim Anklicken des jeweiligen Links gelten die Datenschutzbestimmungen des externen Anbieters.",
        ],
      },
      {
        title: "Deine Rechte",
        text: [
          "Du hast nach Maßgabe der DSGVO insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.",
          "Außerdem besteht ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde, insbesondere bei der Aufsichtsbehörde deines Aufenthaltsorts oder des Bundeslands Hessen.",
        ],
      },
      {
        title: "Stand",
        text: [legalConfig.lastUpdated],
      },
    ],
  },
};

export function LegalPage({ page }: { page: LegalPageContent }) {
  const missingLegalData = hasMissingLegalData();

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

        {missingLegalData ? (
          <aside className="mt-8 rounded-lg border border-[#D9A441]/35 bg-[#FFF8E8] p-5 text-sm leading-7 text-[#604713]">
            <strong className="block text-foreground">Nicht unverändert veröffentlichen.</strong>
            Es fehlen noch echte Pflichtangaben, vor allem ladungsfähige Anschrift und Hosting-Anbieter.
            Diese Platzhalter müssen vor dem Livegang ersetzt werden.
          </aside>
        ) : null}

        <div className="mt-12 space-y-5">
          {page.sections.map((section) => (
            <article key={section.title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 className="text-base font-bold text-foreground">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.text.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs leading-6 text-muted-foreground">
          Hinweis: Diese Seite ist technisch und inhaltlich vorbereitet, ersetzt aber keine individuelle
          Rechtsberatung. Die finalen Angaben müssen zu deinem tatsächlichen Hosting und deinen
          veröffentlichten Kontaktdaten passen. Kontakt für Rückfragen: {siteConfig.email}.
        </p>
      </div>
    </section>
  );
}

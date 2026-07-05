import {
  certificates,
  focusAreas,
  pillars,
  profileFacts,
  siteConfig,
  skillGroups,
} from "../content";
import { projects } from "../data/projects";
import { ButtonLink } from "../components/site/ButtonLink";
import { CertificateCard } from "../components/site/CertificateCard";
import { FocusCard, ProjectCard, SkillGroup } from "../components/site/Cards";
import { ContactBlock } from "../components/site/ContactBlock";
import { FadeIn } from "../components/site/Reveal";
import { SectionHeader, SectionLabel } from "../components/site/SectionHeader";

const featuredCertificates = certificates.filter((certificate) => certificate.featured);

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PositioningStrip />
      <AboutSection />
      <FocusAreasSection />
      <ProjectsSection />
      <CertificatesSection />
      <SkillsSection />
      <FutureDirectionSection />
      <ContactSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
        <div className="max-w-4xl">
          <div className="hero-reveal hero-delay-0">
            <SectionLabel>Persönliches Portfolio / Wirtschaftsinformatik</SectionLabel>
          </div>

          <h1 className="hero-reveal hero-delay-1 max-w-4xl text-balance text-[2.25rem] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl sm:leading-[1.06] lg:text-[4rem]">
            Hi, ich bin Marcel Kempel.
          </h1>

          <p className="hero-reveal hero-delay-2 mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
            Ich studiere Wirtschaftsinformatik und interessiere mich dafür, wie Prozesse, Daten und
            kleine digitale Lösungen im Alltag wirklich helfen können. Auf dieser Seite sammle ich
            Projekte, Erfahrungen und Zertifikate, die meine fachliche Richtung zeigen.
          </p>

          <div className="hero-reveal hero-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#projekte">Projekte ansehen</ButtonLink>
            <ButtonLink href="/zertifikate" variant="secondary">
              Zertifikate ansehen
            </ButtonLink>
          </div>
        </div>

        <div className="hero-reveal hero-delay-4 lg:justify-self-end">
          <HeroProfileImage />
        </div>

        <div className="hero-reveal hero-delay-4 grid gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
          {profileFacts.map((fact) => (
            <div key={fact.label} className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                {fact.label}
              </p>
              <p className="mt-2 text-sm font-bold leading-6 text-foreground">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroProfileImage() {
  return (
    <figure className="relative mx-auto w-full max-w-[22rem] lg:mx-0">
      <div className="aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card shadow-[0_20px_55px_rgba(13,21,32,0.08)]">
        {siteConfig.profileImageUrl ? (
          <img
            src={siteConfig.profileImageUrl}
            alt={`Profilbild von ${siteConfig.name}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-secondary/55 p-8 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-3xl font-extrabold text-primary-foreground shadow-[0_14px_32px_rgba(13,21,32,0.14)]">
              {siteConfig.initials}
            </div>
            <figcaption className="mt-6 text-sm font-semibold text-foreground">
              Profilbild
            </figcaption>
            <p className="mt-2 max-w-48 text-xs leading-5 text-muted-foreground">
              Bilddatei kann später ergänzt werden.
            </p>
          </div>
        )}
      </div>
    </figure>
  );
}

function PositioningStrip() {
  return (
    <section className="border-y border-border bg-secondary/60" aria-label="Positionierung">
      <div className="mx-auto grid max-w-6xl gap-7 px-5 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {pillars.map((pillar, index) => (
          <FadeIn key={pillar.title} delay={index * 0.06}>
            <article>
              <h2 className="text-sm font-bold text-foreground">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.description}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="ueber-mich" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-16">
        <FadeIn>
          <SectionHeader label="Über mich" title="Über mich" />
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            Ich studiere Wirtschaftsinformatik und arbeite als Werkstudent im Bereich Enterprise
            Architecture. Besonders interessiert mich die Frage, wie Unternehmen ihre gewachsenen
            Prozesse transparenter, einfacher und digitaler gestalten können. Mein Fokus liegt auf
            Lösungen, die nicht nur technisch funktionieren, sondern im Arbeitsalltag echten Nutzen
            schaffen.
          </p>

          <blockquote className="mt-8 border-l-2 border-[#3B5FDB] pl-5">
            <p className="text-base italic leading-8 text-foreground">
              "Mich interessiert nicht Digitalisierung um der Digitalisierung willen, sondern die
              Frage: Welche Lösung spart im Alltag wirklich Zeit, reduziert Fehler und schafft
              bessere Übersicht?"
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn delay={0.12}>
          <aside className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <div className="border-b border-border bg-secondary/50 px-6 py-4 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Auf einen Blick
            </div>
            <dl className="divide-y divide-border">
              {profileFacts.map((fact) => (
                <div key={fact.label} className="grid gap-1 px-6 py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="font-mono text-[0.75rem] text-muted-foreground">{fact.label}</dt>
                  <dd className="text-sm font-semibold text-foreground sm:text-right">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </FadeIn>
      </div>
    </section>
  );
}

function FocusAreasSection() {
  return (
    <section className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <FadeIn>
          <SectionHeader label="Schwerpunkte" title="Woran ich arbeite" />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, index) => (
            <FadeIn key={area.number} delay={index * 0.07}>
              <FocusCard number={area.number} title={area.title} text={area.text} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projekte" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <FadeIn>
          <SectionHeader
            label="Portfolio"
            title="Portfolio-Projekte"
            text="Praxisnahe Demo-Projekte mit Fokus auf typische Probleme in Unternehmen."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.07}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificatesSection() {
  return (
    <section id="zertifikate" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <FadeIn>
          <SectionHeader
            label="Nachweise"
            title="Top-Zertifikate"
            text="Eine kompakte Auswahl der wichtigsten Nachweise. Die vollständige Übersicht ist nach Kategorien sortiert."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredCertificates.map((certificate, index) => (
            <FadeIn key={`${certificate.title}-${index}`} delay={index * 0.07}>
              <CertificateCard certificate={certificate} compact />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10">
            <ButtonLink href="/zertifikate" variant="secondary">
              Alle Zertifikate ansehen
            </ButtonLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <FadeIn>
          <SectionHeader label="Kompetenzen" title="Skills & Werkzeuge" />
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 0.07}>
              <SkillGroup group={group} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FutureDirectionSection() {
  return (
    <section className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <FadeIn>
          <SectionHeader
            label="Ausblick"
            title="Meine Richtung"
            text="Langfristig möchte ich Unternehmen dabei unterstützen, Prozesse nicht nur zu dokumentieren, sondern messbar zu verbessern und praktisch zu automatisieren. Der Schwerpunkt liegt auf pragmatischen Lösungen, die zu den vorhandenen Strukturen eines Unternehmens passen."
          />
        </FadeIn>

        <div className="relative mt-14 grid gap-7 sm:grid-cols-3 sm:gap-8">
          <div
            className="absolute left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] top-4 hidden h-px bg-border sm:block"
            aria-hidden="true"
          />
          {[
            {
              label: "Heute",
              title: "Studium & Praxis",
              text: "Wirtschaftsinformatik, Enterprise Architecture und eigene Portfolio-Projekte",
            },
            {
              label: "Nächster Schritt",
              title: "Mehr echte Umsetzungen",
              text: "Projekte, Zertifikate und praktische Prototypen gezielt weiter ausbauen",
            },
            {
              label: "Langfristig",
              title: "Beratung & Umsetzung",
              text: "Digitale Prozesse verständlich planen und pragmatisch realisieren",
            },
          ].map((step, index) => (
            <FadeIn key={step.label} delay={index * 0.09}>
              <article className="relative flex gap-5 sm:block">
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <div className="sm:mt-6">
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#3B5FDB]">
                    {step.label}
                  </p>
                  <h3 className="mt-2 text-base font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="kontakt" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <FadeIn>
          <ContactBlock />
        </FadeIn>
      </div>
    </section>
  );
}

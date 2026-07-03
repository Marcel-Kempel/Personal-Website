import { Download } from "lucide-react";
import { motion } from "motion/react";
import {
  focusAreas,
  pillars,
  profileFacts,
  roadmapSteps,
  skillGroups,
  timelineItems,
} from "../content";
import { projects } from "../data/projects";
import { ButtonLink, PlaceholderButton } from "../components/site/ButtonLink";
import { FocusCard, ProjectCard, SkillGroup } from "../components/site/Cards";
import { ContactBlock } from "../components/site/ContactBlock";
import { ProcessFlow } from "../components/site/ProcessFlow";
import { FadeIn } from "../components/site/Reveal";
import { SectionHeader, SectionLabel } from "../components/site/SectionHeader";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PositioningStrip />
      <AboutSection />
      <FocusAreasSection />
      <ProjectsSection />
      <SkillsSection />
      <TimelineSection />
      <FutureDirectionSection />
      <ContactSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="flex min-h-[88svh] items-center pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-16 lg:pb-20">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>Portfolio / Wirtschaftsinformatik / Prozessautomatisierung</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl text-balance text-[2rem] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl sm:leading-[1.06] lg:text-[3.5rem]"
          >
            Wirtschaftsinformatik zwischen Prozessen, Daten und Umsetzung.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground"
          >
            Ich verbinde betriebswirtschaftliches Prozessverständnis mit technischer Umsetzung -
            mit Fokus auf Automatisierung, Digitalisierung und datenbasierte Verbesserung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="#projekte">Projekte ansehen</ButtonLink>
            <ButtonLink href="#lebenslauf" variant="secondary">
              Lebenslauf anzeigen
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProcessFlow />
        </motion.div>
      </div>
    </section>
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

function SkillsSection() {
  return (
    <section id="skills" className="bg-secondary/40 py-24 lg:py-32">
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

function TimelineSection() {
  return (
    <section id="lebenslauf" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-3xl">
          <FadeIn>
            <SectionHeader label="Werdegang" title="Lebenslauf" />
          </FadeIn>

          <div className="relative mt-12">
            <div className="absolute bottom-2 left-[5px] top-2 w-px bg-border" aria-hidden="true" />
            <div className="space-y-10">
              {timelineItems.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <article className="grid grid-cols-[0.75rem_1fr] gap-6">
                    <div className="relative z-10 mt-1.5 h-2.5 w-2.5 rounded-full bg-[#3B5FDB] ring-4 ring-background" />
                    <div>
                      <p className="font-mono text-xs text-muted-foreground">{item.date}</p>
                      <h3 className="mt-1 text-base font-bold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.32}>
            <div className="mt-12">
              {/* TODO: Replace this placeholder with a link to the real CV PDF path, e.g. /Marcel-Kempel-Lebenslauf.pdf. */}
              <PlaceholderButton icon={<Download size={15} aria-hidden="true" />}>
                Lebenslauf als PDF herunterladen
              </PlaceholderButton>
            </div>
          </FadeIn>
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
          {roadmapSteps.map((step, index) => (
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

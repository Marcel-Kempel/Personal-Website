import { ArrowLeft, CheckCircle2, ImageIcon } from "lucide-react";
import type { Project } from "../content";
import { projects } from "../content";

export function ProjectDetailPage({ project }: { project: Project }) {
  return (
    <section className="pt-28 pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <a
          href="/#projekte"
          className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          Zurück zu den Projekten
        </a>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-16 lg:items-start">
          <div>
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#3B5FDB]">
              {project.label} / Portfolio-Projekt
            </p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {project.detail.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[0.72rem] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#3B5FDB]">
              Projektprofil
            </p>
            <dl className="mt-5 divide-y divide-border">
              {[
                ["Typ", project.detail.type],
                ["Status", project.detail.status],
                ["Fokus", project.detail.focus],
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

        <div className="mt-16">
          <ProjectVisual project={project} />
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          <DetailTextCard title="Ausgangssituation" text={project.detail.challenge} />
          <DetailTextCard title="Umsetzungsidee" text={project.detail.approach} />
          <DetailTextCard title="Ergebnis / Nutzen" text={project.detail.outcome} />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
          <section>
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#3B5FDB]">
              Bestandteile
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground">
              Was das Projekt zeigt
            </h2>
            <ul className="mt-6 grid gap-3">
              {project.detail.bullets.map((item) => (
                <li key={item} className="flex gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#3B5FDB]" aria-hidden="true" />
                  <span className="text-sm leading-6 text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <aside className="rounded-lg border border-[#3B5FDB]/20 bg-[#F2F5FF] p-6">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#223FBA]">
              Hinweis
            </p>
            <p className="mt-3 text-sm leading-7 text-[#25345F]">
              Diese Seite beschreibt ein Demo- bzw. Prototyp-Projekt. Screenshots und Bilder können später durch echte Projektaufnahmen ersetzt werden, sobald konkrete Umsetzungen vorliegen.
            </p>
          </aside>
        </div>

        <section className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#3B5FDB]">
                Bilder & Mockups
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground">
                Platz für Projektansichten
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {project.detail.gallery.map((item, index) => (
              <GalleryPlaceholder key={item} label={item} index={index} />
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-lg border border-border bg-card p-6 shadow-sm">
          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#3B5FDB]">
            Weitere Projekte
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {projects
              .filter((item) => item.slug !== project.slug)
              .map((item) => (
                <a
                  key={item.slug}
                  href={`/projekte/${item.slug}`}
                  className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-[#3B5FDB]/35 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.title}
                </a>
              ))}
          </div>
        </section>
      </div>
    </section>
  );
}

function DetailTextCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <h2 className="text-base font-bold text-foreground">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
    </article>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-[0_20px_55px_rgba(13,21,32,0.08)]">
      <div className="border-b border-border bg-secondary/45 px-5 py-4">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
          Projektvisualisierung
        </p>
      </div>
      <div className="grid min-h-[24rem] gap-6 p-5 md:grid-cols-[16rem_minmax(0,1fr)] md:p-8">
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
            Ablauf
          </p>
          <div className="mt-5 space-y-3">
            {["Input", "Struktur", "Logik", "Auswertung"].map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[0.68rem] font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <span className="text-sm font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <VisualCanvas variant={project.detail.visualVariant} />
      </div>
    </figure>
  );
}

function VisualCanvas({ variant }: { variant: string }) {
  if (variant === "dashboard") {
    return (
      <div className="rounded-lg border border-border bg-background p-5">
        <div className="grid gap-4 sm:grid-cols-3">
          {["Anfragen", "Offen", "Quote"].map((item, index) => (
            <div key={item} className="rounded-md border border-border bg-card p-4">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">{item}</p>
              <p className="mt-3 text-2xl font-extrabold text-foreground">{[128, 24, "81%"][index]}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-md border border-border bg-card p-4">
          <div className="flex h-44 items-end gap-3">
            {[42, 74, 58, 88, 64, 96, 72].map((height, index) => (
              <span
                key={index}
                className="flex-1 rounded-t bg-[#3B5FDB]/80"
                style={{ height: `${height}%` }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "bpmn") {
    return (
      <div className="rounded-lg border border-border bg-background p-5">
        <div className="grid gap-4">
          {["Start", "Prüfung", "Entscheidung", "Umsetzung", "Abschluss"].map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <div className={index === 2 ? "h-12 w-12 rotate-45 border border-[#3B5FDB] bg-[#F2F5FF]" : "h-12 flex-1 rounded-md border border-border bg-card"} />
              <p className="w-28 text-sm font-semibold text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "tool") {
    return (
      <div className="rounded-lg border border-border bg-background p-5">
        <div className="rounded-md border border-border bg-card">
          {["Prio", "Aufgabe", "Status", "Owner"].map((item) => (
            <div key={item} className="grid grid-cols-[4rem_1fr_5rem_5rem] gap-3 border-b border-border px-4 py-3 last:border-b-0">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">{item}</span>
              <span className="h-2.5 rounded-full bg-muted" />
              <span className="h-2.5 rounded-full bg-[#3B5FDB]/30" />
              <span className="h-2.5 rounded-full bg-muted" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-background p-5">
      <div className="grid gap-4">
        {["Anfrage", "Erfassung", "Prüfung", "Aktion", "Reporting"].map((item, index) => (
          <div key={item} className="rounded-md border border-border bg-card p-4">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-bold text-foreground">{item}</p>
              <span className="font-mono text-[0.68rem] text-muted-foreground">0{index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GalleryPlaceholder({ label, index }: { label: string; index: number }) {
  return (
    <figure className="rounded-lg border border-border bg-card p-4 shadow-sm">
      <div className="flex aspect-[4/3] items-center justify-center rounded-md border border-dashed border-border bg-secondary/45">
        <div className="text-center">
          <ImageIcon className="mx-auto text-muted-foreground" size={22} aria-hidden="true" />
          <p className="mt-3 text-sm font-bold text-foreground">{label}</p>
          <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
            Mockup {index + 1}
          </p>
        </div>
      </div>
    </figure>
  );
}

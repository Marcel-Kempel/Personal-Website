import { ArrowLeft, SearchX } from "lucide-react";
import { projects } from "../data/projects";

export function NotFoundPage() {
  return (
    <section className="pt-28 pb-24 lg:pb-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-muted-foreground">
          <SearchX size={22} aria-hidden="true" />
        </div>

        <p className="mt-8 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#3B5FDB]">
          404 / Nicht gefunden
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground">
          Diese Seite gibt es nicht.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
          Der Link ist möglicherweise veraltet oder die Adresse wurde falsch eingegeben. Du kannst
          zurück zur Startseite springen oder direkt eines der Projekte öffnen.
        </p>

        <div className="mt-8">
          <a
            href="/"
            className="button-link inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_rgba(13,21,32,0.12)] transition hover:bg-[#243755] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Zur Startseite
          </a>
        </div>

        <nav className="mt-12 grid gap-3" aria-label="Projektseiten">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/projekte/${project.slug}`}
              className="interactive-card rounded-lg border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition hover:border-[#3B5FDB]/35 hover:shadow-[0_12px_30px_rgba(13,21,32,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {project.title}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

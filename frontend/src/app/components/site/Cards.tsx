import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { clsx } from "clsx";
import type { Project } from "../../data/projects";

export function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <motion.a
      href={`/projekte/${project.slug}`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 320, damping: 25 }}
      className={clsx(
        "group flex h-full flex-col rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-[0_16px_38px_rgba(13,21,32,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        project.featured ? "border-[#3B5FDB]/35 ring-1 ring-[#3B5FDB]/15" : "border-border"
      )}
      aria-label={`Projekt ${project.title} öffnen`}
    >
      <div className="mb-6 flex items-center justify-between gap-3">
        <span className="rounded bg-muted px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          {project.label}
        </span>
        {project.featured ? (
          <span className="rounded bg-[#F2F5FF] px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#223FBA]">
            Highlight
          </span>
        ) : null}
      </div>

      <h3 className="text-lg font-bold tracking-tight text-foreground">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1.5 font-mono text-[0.68rem] text-muted-foreground transition group-hover:border-[#3B5FDB]/35 group-hover:text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-7 flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-muted-foreground">
        Mehr zum Projekt
        <ExternalLink size={14} aria-hidden="true" />
      </div>
    </motion.a>
  );
}

export function FocusCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 320, damping: 25 }}
      className="h-full rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-[0_16px_38px_rgba(13,21,32,0.07)]"
    >
      <p className="mb-5 font-mono text-[0.68rem] font-semibold tracking-[0.18em] text-[#3B5FDB]">
        {number}
      </p>
      <h3 className="text-base font-bold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </motion.article>
  );
}

export function SkillGroup({
  group,
}: {
  group: {
    title: string;
    skills: string[];
  };
}) {
  return (
    <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <h3 className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#3B5FDB]">
        {group.title}
      </h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border/80 bg-muted/60 px-3 py-1.5 text-sm text-foreground transition hover:border-[#3B5FDB]/35 hover:bg-accent"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

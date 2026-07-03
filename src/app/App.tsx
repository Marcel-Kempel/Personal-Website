import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  Menu,
  X,
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Github,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { clsx } from "clsx";

// ─── Scroll-reveal hook ──────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Shared primitives ───────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="w-5 h-px bg-[#3B5FDB]" />
      <span
        className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#3B5FDB]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {children}
      </span>
    </div>
  );
}

// ─── Process Flow (Hero visual) ──────────────────────────────────────────────

const flowNodes = [
  { step: "01", label: "Manueller Prozess", sub: "Papier · E-Mail · Tabellen" },
  { step: "02", label: "Strukturierte Daten", sub: "Erfassung · Validierung · Struktur" },
  { step: "03", label: "Automatisierung", sub: "Workflow · Skripte · API" },
  { step: "04", label: "Dashboard", sub: "Reporting · Entscheidung · KPI", accent: true },
];

function ProcessFlow() {
  return (
    <div className="relative flex flex-col gap-1 w-full max-w-[300px] ml-auto select-none">
      {flowNodes.map((node, i) => (
        <div key={node.step} className="relative">
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.14, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={clsx(
              "rounded-lg border px-4 py-3.5 flex items-center gap-3",
              node.accent
                ? "border-[#3B5FDB]/35 bg-[#3B5FDB]/6 shadow-sm"
                : "border-border bg-card shadow-sm"
            )}
          >
            <span
              className={clsx(
                "text-[10px] font-medium tabular-nums flex-shrink-0",
                node.accent ? "text-[#3B5FDB]" : "text-muted-foreground"
              )}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {node.step}
            </span>
            <div className="min-w-0">
              <div
                className={clsx(
                  "text-sm font-semibold leading-tight",
                  node.accent ? "text-[#3B5FDB]" : "text-foreground"
                )}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {node.label}
              </div>
              <div
                className="text-[11px] text-muted-foreground mt-0.5 leading-tight"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {node.sub}
              </div>
            </div>
          </motion.div>

          {i < flowNodes.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 + i * 0.14 }}
              className="flex flex-col items-center py-0.5"
            >
              <div className="w-px h-3 bg-border" />
              <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-muted-foreground/40" />
            </motion.div>
          )}
        </div>
      ))}

      {/* Decorative data dots */}
      <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-30">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-[#3B5FDB]" />
        ))}
      </div>
    </div>
  );
}

// ─── Navigation ──────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Über mich", href: "#ueber-mich" },
    { label: "Projekte", href: "#projekte" },
    { label: "Skills", href: "#skills" },
    { label: "Lebenslauf", href: "#lebenslauf" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Marcel Kempel
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-88 transition-opacity"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Kontakt
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border px-6 pb-5 pt-2 flex flex-col gap-1"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2.5 border-b border-border last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-3 text-sm font-medium px-4 py-2.5 rounded-md bg-primary text-primary-foreground text-center hover:opacity-90 transition-opacity"
          >
            Kontakt
          </a>
        </motion.div>
      )}
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[60px] bg-background">
      <div className="max-w-6xl mx-auto px-6 w-full py-20 lg:py-28 grid lg:grid-cols-[1fr_320px] gap-14 lg:gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 mb-7"
          >
            <span className="w-5 h-px bg-[#3B5FDB]" />
            <span
              className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#3B5FDB]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Portfolio / Wirtschaftsinformatik / Prozessautomatisierung
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-[52px] xl:text-6xl font-bold tracking-tight text-foreground leading-[1.08] mb-7"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Wirtschaftsinformatik zwischen Prozessen, Daten und Umsetzung.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="text-[17px] text-muted-foreground leading-[1.7] mb-10 max-w-[500px]"
          >
            Ich verbinde betriebswirtschaftliches Prozessverständnis mit technischer Umsetzung — mit Fokus auf Automatisierung, Digitalisierung und datenbasierte Verbesserung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3"
          >
            <motion.a
              href="#projekte"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-[13px] font-medium hover:opacity-88 transition-opacity min-h-[44px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Projekte ansehen
              <ArrowRight size={15} />
            </motion.a>
            <motion.a
              href="#lebenslauf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-foreground text-[13px] font-medium hover:bg-muted transition-colors min-h-[44px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Lebenslauf anzeigen
            </motion.a>
          </motion.div>
        </div>

        <div className="hidden lg:block">
          <ProcessFlow />
        </div>
      </div>
    </section>
  );
}

// ─── Positioning Strip ───────────────────────────────────────────────────────

const pillars = [
  {
    title: "Prozessverständnis",
    desc: "Abläufe analysieren, Schwachstellen erkennen, Verbesserungen ableiten.",
  },
  {
    title: "Datenanalyse",
    desc: "Daten strukturieren, auswerten und verständlich visualisieren.",
  },
  {
    title: "Automatisierung",
    desc: "Manuelle Schritte mit passenden Tools und Skripten vereinfachen.",
  },
  {
    title: "Enterprise Architecture",
    desc: "Systeme und Prozesse ganzheitlich betrachten und dokumentieren.",
  },
];

function PositioningStrip() {
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.08}>
            <div>
              <div
                className="text-[13px] font-semibold text-foreground mb-1.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.title}
              </div>
              <div className="text-[12px] text-muted-foreground leading-[1.6]">{p.desc}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="ueber-mich" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <FadeIn>
          <div>
            <SectionLabel>Über mich</SectionLabel>
            <h2
              className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Wer ich bin
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.75] mb-8">
              Ich studiere Wirtschaftsinformatik und arbeite als Werkstudent im Bereich Enterprise Architecture. Besonders interessiert mich die Frage, wie Unternehmen ihre gewachsenen Prozesse transparenter, einfacher und digitaler gestalten können. Mein Fokus liegt auf Lösungen, die nicht nur technisch funktionieren, sondern im Arbeitsalltag echten Nutzen schaffen.
            </p>
            <blockquote className="relative pl-5 border-l-2 border-[#3B5FDB]">
              <p className="text-[15px] text-foreground leading-[1.75] italic">
                "Mich interessiert nicht Digitalisierung um der Digitalisierung willen, sondern die Frage: Welche Lösung spart im Alltag wirklich Zeit, reduziert Fehler und schafft bessere Übersicht?"
              </p>
            </blockquote>
          </div>
        </FadeIn>

        <FadeIn delay={0.14}>
          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            <div
              className="px-6 py-4 border-b border-border bg-secondary/50 text-[11px] font-medium tracking-widest uppercase text-muted-foreground"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Auf einen Blick
            </div>
            <div className="divide-y divide-border">
              {[
                { label: "Studium", value: "Wirtschaftsinformatik" },
                { label: "Tätigkeit", value: "Werkstudent Enterprise Architecture" },
                { label: "Fokus", value: "Prozessautomatisierung & Datenanalyse" },
                { label: "Standort", value: "Hessen, Deutschland" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-4 px-6 py-4">
                  <span
                    className="text-[11px] text-muted-foreground"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-[13px] text-foreground font-medium text-right"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Focus Areas ─────────────────────────────────────────────────────────────

const focusAreas = [
  {
    number: "01",
    title: "Prozessanalyse",
    text: "Manuelle Arbeit, Medienbrüche und unklare Verantwortlichkeiten sichtbar machen.",
  },
  {
    number: "02",
    title: "Automatisierung",
    text: "Wiederkehrende Aufgaben mit passenden Tools, Skripten oder kleinen Anwendungen vereinfachen.",
  },
  {
    number: "03",
    title: "Daten & Reporting",
    text: "Excel-, CSV- und Prozessdaten strukturieren, auswerten und verständlich darstellen.",
  },
  {
    number: "04",
    title: "Umsetzung",
    text: "Ideen nicht nur konzipieren, sondern als funktionierende Prototypen und Lösungen realisieren.",
  },
];

function FocusAreas() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>Schwerpunkte</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Woran ich arbeite
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {focusAreas.map((area, i) => (
            <FadeIn key={area.number} delay={i * 0.09}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(13,21,32,0.07)" }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="rounded-xl border border-border bg-card p-6 h-full"
              >
                <div
                  className="text-[10px] font-medium text-[#3B5FDB] mb-5 tracking-widest"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {area.number}
                </div>
                <h3
                  className="text-[15px] font-semibold text-foreground mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {area.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-[1.65]">{area.text}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects ────────────────────────────────────────────────────────────────

const projects = [
  {
    tag: "Demo",
    title: "Anfrageprozess digitalisieren",
    desc: "Ein strukturierter Workflow, der Anfragen erfasst, Daten speichert und Folgeaktionen vorbereitet.",
    chips: ["Workflow", "Formular", "Automatisierung", "Datenstruktur"],
    featured: false,
  },
  {
    tag: "Demo",
    title: "Excel-Daten zu Dashboard",
    desc: "Mehrere Dateien werden zusammengeführt, bereinigt und als übersichtliches Reporting dargestellt.",
    chips: ["Datenanalyse", "Reporting", "Python", "Dashboard"],
    featured: true,
  },
  {
    tag: "Prototyp",
    title: "BPMN zu digitalem Ablauf",
    desc: "Ein manueller Prozess wird modelliert, vereinfacht und in eine technische Umsetzung übersetzt.",
    chips: ["BPMN", "Prozessdesign", "Digitalisierung"],
    featured: false,
  },
  {
    tag: "Demo",
    title: "Internes Mini-Tool",
    desc: "Eine einfache Web-Anwendung ersetzt unübersichtliche Tabellen und macht Statusinformationen zentral sichtbar.",
    chips: ["Web-App", "Prozessübersicht", "Datenbank", "Umsetzung"],
    featured: false,
  },
];

function Projects() {
  return (
    <section id="projekte" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>Portfolio</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Portfolio-Projekte
          </h2>
          <p className="text-[15px] text-muted-foreground mb-12 max-w-md">
            Praxisnahe Demo-Projekte mit Fokus auf typische Probleme in Unternehmen.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.09}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(13,21,32,0.07)" }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={clsx(
                  "rounded-xl border bg-card p-6 flex flex-col h-full cursor-default transition-shadow",
                  p.featured
                    ? "border-[#3B5FDB]/30 ring-1 ring-[#3B5FDB]/15"
                    : "border-border"
                )}
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-[10px] font-medium px-2 py-1 rounded bg-muted text-muted-foreground tracking-wide"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {p.tag}
                  </span>
                  {p.featured && (
                    <span
                      className="text-[10px] font-medium px-2 py-1 rounded bg-[#3B5FDB]/10 text-[#3B5FDB] tracking-wide"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Highlight
                    </span>
                  )}
                </div>
                <h3
                  className="text-[15px] font-semibold text-foreground mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-[1.65] mb-6 flex-1">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.chips.map((chip) => (
                    <span
                      key={chip}
                      className="text-[11px] px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Skills ──────────────────────────────────────────────────────────────────

const skillGroups = [
  {
    title: "Business & Prozesse",
    skills: [
      "Prozessanalyse",
      "Prozessmodellierung",
      "Digitalisierung",
      "Anforderungen verstehen",
      "Enterprise Architecture Grundlagen",
    ],
  },
  {
    title: "Data & Automation",
    skills: ["Python", "Excel / CSV", "Datenaufbereitung", "Reporting", "APIs / Schnittstellenlogik"],
  },
  {
    title: "Web & Entwicklung",
    skills: ["React Grundlagen", "FastAPI Grundlagen", "GitHub", "PowerShell", "Prototyping"],
  },
  {
    title: "Arbeitsweise",
    skills: [
      "analytisch",
      "strukturiert",
      "umsetzungsorientiert",
      "lernstark",
      "verständliche Kommunikation",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>Kompetenzen</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Skills & Werkzeuge
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.title} delay={i * 0.09}>
              <div className="rounded-xl border border-border bg-card p-6">
                <div
                  className="text-[10px] font-medium text-[#3B5FDB] mb-4 tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[12px] px-3 py-1.5 rounded-full bg-muted text-foreground border border-border/70 hover:border-[#3B5FDB]/40 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Timeline ────────────────────────────────────────────────────────────────

const timelineItems = [
  {
    date: "2022 — heute",
    title: "Studium Wirtschaftsinformatik",
    desc: "Fokus auf Prozessmanagement, Datenanalyse, Softwareentwicklung und Enterprise Architecture.",
  },
  {
    date: "2023 — heute",
    title: "Werkstudent Enterprise Architecture",
    desc: "Praxiserfahrung in der Dokumentation und Analyse von Unternehmensarchitekturen und Geschäftsprozessen.",
  },
  {
    date: "2023 — heute",
    title: "Hochschulprojekte",
    desc: "Praktische Projekte mit Datenanalyse, Prozessautomatisierung und Web-Technologien.",
  },
  {
    date: "2024 — heute",
    title: "Portfolio-Aufbau",
    desc: "Entwicklung praxisnaher Demo-Projekte für Prozessautomatisierung und Digitalisierung.",
  },
];

function Timeline() {
  return (
    <section id="lebenslauf" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl">
          <FadeIn>
            <SectionLabel>Werdegang</SectionLabel>
            <h2
              className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-12"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Lebenslauf
            </h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-10">
              {timelineItems.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div className="flex gap-6">
                    <div className="mt-1 flex-shrink-0 relative z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#3B5FDB] ring-4 ring-background" />
                    </div>
                    <div>
                      <div
                        className="text-[11px] text-muted-foreground mb-1"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {item.date}
                      </div>
                      <div
                        className="text-[14px] font-semibold text-foreground mb-1"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.title}
                      </div>
                      <div className="text-[13px] text-muted-foreground leading-[1.65]">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.45}>
            <div className="mt-12">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-[13px] font-medium text-foreground hover:bg-muted transition-colors min-h-[44px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Download size={15} />
                Lebenslauf als PDF herunterladen
              </motion.button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Future Direction ────────────────────────────────────────────────────────

const roadmapSteps = [
  {
    label: "Heute",
    title: "Studium & Praxis",
    text: "Studium, Enterprise Architecture, Portfolio-Projekte",
  },
  {
    label: "Nächster Schritt",
    title: "Bachelorarbeit",
    text: "Bachelorarbeit und vertiefte Prozessautomatisierung",
  },
  {
    label: "Langfristig",
    title: "Beratung & Umsetzung",
    text: "Beratung und Umsetzung für digitale Prozesse im Mittelstand",
  },
];

function FutureDirection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>Ausblick</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Meine Richtung
          </h2>
          <p className="text-[15px] text-muted-foreground max-w-xl mb-14 leading-[1.75]">
            Langfristig möchte ich Unternehmen dabei unterstützen, Prozesse nicht nur zu dokumentieren, sondern messbar zu verbessern und praktisch zu automatisieren. Der Schwerpunkt liegt auf pragmatischen Lösungen, die zu den vorhandenen Strukturen eines Unternehmens passen.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-0 relative">
          {/* connector line for desktop */}
          <div className="hidden sm:block absolute top-4 left-[calc(16.666%+12px)] right-[calc(16.666%+12px)] h-px bg-border" />

          {roadmapSteps.map((step, i) => (
            <FadeIn key={step.label} delay={i * 0.14}>
              <div className="relative flex sm:flex-col gap-5 sm:gap-0 pb-8 sm:pb-0 pl-2 sm:pl-0">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[11px] font-bold">
                    {i + 1}
                  </div>
                </div>
                <div className="sm:mt-6">
                  <div
                    className="text-[10px] font-medium text-[#3B5FDB] mb-1 tracking-widest"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {step.label}
                  </div>
                  <div
                    className="text-[14px] font-semibold text-foreground mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </div>
                  <div className="text-[13px] text-muted-foreground leading-[1.6]">{step.text}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

const contactItems = [
  {
    Icon: Mail,
    label: "E-Mail",
    value: "kontakt@marcelkempel.de",
    href: "mailto:kontakt@marcelkempel.de",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/marcelkempel",
    href: "#",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/marcelkempel",
    href: "#",
  },
  {
    Icon: MapPin,
    label: "Standort",
    value: "Hessen, Deutschland",
    href: null,
  },
];

function Contact() {
  return (
    <section id="kontakt" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-lg">
          <FadeIn>
            <SectionLabel>Kontakt</SectionLabel>
            <h2
              className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Kontakt aufnehmen
            </h2>
            <p className="text-[15px] text-muted-foreground mb-10 leading-[1.75]">
              Ob Austausch, Thesis-Thema, Projektidee oder berufliche Möglichkeit — ich freue mich über eine Nachricht.
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="space-y-3 mb-8">
              {contactItems.map(({ Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card"
                >
                  <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-[10px] text-muted-foreground"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {label}
                    </div>
                    <div className="text-[13px] text-foreground font-medium truncate">{value}</div>
                  </div>
                  {href && (
                    <a
                      href={href}
                      className="text-[#3B5FDB] hover:opacity-65 transition-opacity flex-shrink-0"
                      aria-label={`${label} öffnen`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>

            <motion.a
              href="mailto:kontakt@marcelkempel.de"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-[13px] font-medium hover:opacity-88 transition-opacity min-h-[44px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Mail size={15} />
              Nachricht schreiben
            </motion.a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6 py-9">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <div
              className="text-[13px] font-semibold text-foreground mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Marcel Kempel
            </div>
            <div className="text-[11px] text-muted-foreground max-w-xs leading-[1.5]">
              Portfolio für Wirtschaftsinformatik, Prozessautomatisierung und Datenanalyse
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            {["Impressum", "Datenschutz", "LinkedIn", "GitHub"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[12px] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav />
      <main>
        <Hero />
        <PositioningStrip />
        <About />
        <FocusAreas />
        <Projects />
        <Skills />
        <Timeline />
        <FutureDirection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

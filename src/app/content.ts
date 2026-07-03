export const siteConfig = {
  name: "Marcel Kempel",
  initials: "MK",
  email: "kontakt@marcel-kempel.de",
  linkedinLabel: "LinkedIn Profil ergänzen",
  linkedinUrl: "",
  githubLabel: "GitHub Profil ergänzen",
  githubUrl: "",
  location: "Hessen, Deutschland",
};

export const legalConfig = {
  ownerName: "Marcel Kempel",
  addressLine1: "Straße und Hausnummer ergänzen",
  addressLine2: "PLZ Ort ergänzen",
  country: "Deutschland",
  email: siteConfig.email,
  phone: "",
  responsibleForContent: "Marcel Kempel",
  hostingProvider: "Hosting-Anbieter ergänzen",
  hostingProviderPrivacyUrl: "",
  lastUpdated: "Juli 2026",
};

export function hasMissingLegalData() {
  return [
    legalConfig.addressLine1,
    legalConfig.addressLine2,
    legalConfig.hostingProvider,
    siteConfig.email,
  ].some((value) => /ergänzen|example|deine-domain/i.test(value));
}

export const navLinks = [
  { label: "Über mich", href: "/#ueber-mich" },
  { label: "Projekte", href: "/#projekte" },
  { label: "Skills", href: "/#skills" },
  { label: "Lebenslauf", href: "/#lebenslauf" },
  { label: "Kontakt", href: "/#kontakt" },
];

export const pillars = [
  {
    title: "Prozessverständnis",
    description: "Abläufe analysieren, Schwachstellen erkennen, Verbesserungen ableiten.",
  },
  {
    title: "Datenanalyse",
    description: "Daten strukturieren, auswerten und verständlich visualisieren.",
  },
  {
    title: "Automatisierung",
    description: "Manuelle Schritte mit passenden Tools und Skripten vereinfachen.",
  },
  {
    title: "Enterprise Architecture",
    description: "Systeme und Prozesse ganzheitlich betrachten und dokumentieren.",
  },
];

export const profileFacts = [
  { label: "Studium", value: "Wirtschaftsinformatik" },
  { label: "Tätigkeit", value: "Werkstudent Enterprise Architecture" },
  { label: "Fokus", value: "Prozessautomatisierung & Datenanalyse" },
  { label: "Standort", value: siteConfig.location },
];

export const focusAreas = [
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

export const projects = [
  {
    slug: "anfrageprozess-digitalisieren",
    label: "Demo",
    title: "Anfrageprozess digitalisieren",
    description:
      "Ein strukturierter Workflow, der Anfragen erfasst, Daten speichert und Folgeaktionen vorbereitet.",
    tags: ["Workflow", "Formular", "Automatisierung", "Datenstruktur"],
    detail: {
      type: "Demo-Projekt",
      status: "Konzept & Prototyp-Struktur",
      focus: "Workflow-Erfassung und Übergabe an Folgeprozesse",
      visualVariant: "workflow",
      intro:
        "Dieses Demo-Projekt zeigt, wie ein unstrukturierter Anfrageprozess in einen klaren digitalen Ablauf übersetzt werden kann.",
      challenge:
        "Viele Anfragen starten über E-Mail, mündliche Abstimmungen oder lose Tabellen. Dadurch gehen Informationen verloren, Rückfragen entstehen spät und Verantwortlichkeiten bleiben unklar.",
      approach:
        "Der Prozess wird in einzelne Schritte zerlegt: Eingang, strukturierte Erfassung, Plausibilitätsprüfung, Priorisierung und Vorbereitung der nächsten Aktion. Im Mittelpunkt steht nicht ein großes System, sondern ein nachvollziehbarer Ablauf mit sauberer Datenstruktur.",
      outcome:
        "Das Ergebnis ist ein verständlicher Workflow-Prototyp, der zeigt, welche Informationen früh benötigt werden und wie Folgeaktionen besser vorbereitet werden können.",
      bullets: [
        "Formularstruktur für wiederkehrende Anfragearten",
        "Statuslogik für Eingang, Prüfung und Bearbeitung",
        "Datenfelder für Priorität, Verantwortlichkeit und Folgeaktion",
        "Vorbereitung für spätere Automatisierung oder Dashboard-Auswertung",
      ],
      gallery: ["Formularansicht", "Workflow-Status", "Datenstruktur"],
    },
  },
  {
    slug: "excel-daten-zu-dashboard",
    label: "Prototyp",
    title: "Excel-Daten zu Dashboard",
    description:
      "Mehrere Dateien werden zusammengeführt, bereinigt und als übersichtliches Reporting dargestellt.",
    tags: ["Datenanalyse", "Reporting", "Python", "Dashboard"],
    featured: true,
    detail: {
      type: "Prototyp",
      status: "Reporting-Konzept",
      focus: "Datenbereinigung, Kennzahlen und Visualisierung",
      visualVariant: "dashboard",
      intro:
        "Dieses Projekt zeigt, wie verstreute Excel- oder CSV-Daten in eine verständliche Reporting-Struktur überführt werden können.",
      challenge:
        "Wenn Daten in mehreren Dateien liegen, sind Auswertungen oft manuell, fehleranfällig und schwer wiederholbar. Unterschiede in Spaltennamen, Formaten oder Zeiträumen erschweren den Überblick.",
      approach:
        "Die Daten werden zusammengeführt, bereinigt und in ein gemeinsames Modell gebracht. Danach entstehen einfache Kennzahlen und Visualisierungen, die Trends, Auffälligkeiten und Bearbeitungsstände sichtbar machen.",
      outcome:
        "Der Prototyp macht sichtbar, wie aus Tabellen ein nutzbares Dashboard entstehen kann, ohne den Anspruch eines fertigen Enterprise-Systems zu erheben.",
      bullets: [
        "Import mehrerer Excel- oder CSV-Dateien",
        "Bereinigung und Vereinheitlichung von Spalten",
        "Kennzahlen für Volumen, Status und Entwicklung",
        "Dashboard-Ansicht für schnelle Orientierung",
      ],
      gallery: ["Datenimport", "Bereinigung", "Dashboard"],
    },
  },
  {
    slug: "bpmn-zu-digitalem-ablauf",
    label: "Konzept",
    title: "BPMN zu digitalem Ablauf",
    description:
      "Ein manueller Prozess wird modelliert, vereinfacht und in eine technische Umsetzung übersetzt.",
    tags: ["BPMN", "Prozessdesign", "Digitalisierung"],
    detail: {
      type: "Konzept",
      status: "Prozessmodell & Umsetzungsskizze",
      focus: "Vom Prozessmodell zur digitalen Logik",
      visualVariant: "bpmn",
      intro:
        "Dieses Konzept verbindet Prozessmodellierung mit der Frage, wie aus einem BPMN-Modell ein umsetzbarer digitaler Ablauf wird.",
      challenge:
        "Prozessmodelle bleiben häufig Dokumentation. Der praktische Wert entsteht erst, wenn Rollen, Entscheidungen und Datenobjekte so klar sind, dass daraus eine digitale Lösung abgeleitet werden kann.",
      approach:
        "Der Ablauf wird modelliert, vereinfacht und auf technische Bausteine übertragen: Eingaben, Entscheidungen, Zustände, Verantwortlichkeiten und Schnittstellen.",
      outcome:
        "Das Ergebnis ist eine Brücke zwischen fachlichem Prozessverständnis und technischer Umsetzungsidee.",
      bullets: [
        "BPMN-nahe Struktur mit Rollen und Entscheidungen",
        "Identifikation unnötiger Schleifen und Medienbrüche",
        "Ableitung von Statuslogik und Datenobjekten",
        "Vorbereitung für eine spätere Web-App oder Workflow-Automatisierung",
      ],
      gallery: ["Prozessmodell", "Entscheidungspunkte", "Umsetzungsskizze"],
    },
  },
  {
    slug: "internes-mini-tool",
    label: "Prototyp",
    title: "Internes Mini-Tool",
    description:
      "Eine einfache Web-Anwendung ersetzt unübersichtliche Tabellen und macht Statusinformationen zentral sichtbar.",
    tags: ["Web-App", "Prozessübersicht", "Datenbank", "Umsetzung"],
    detail: {
      type: "Prototyp",
      status: "Web-App-Struktur",
      focus: "Zentrale Übersicht statt verteilter Tabellen",
      visualVariant: "tool",
      intro:
        "Dieses Mini-Tool zeigt, wie eine kleine Web-Anwendung wiederkehrende Tabellenarbeit ersetzen kann.",
      challenge:
        "Statusinformationen liegen häufig in Dateien, Chatverläufen oder persönlichen Listen. Dadurch fehlt eine gemeinsame Sicht auf offene Aufgaben, Zustände und nächste Schritte.",
      approach:
        "Die Anwendung bündelt Datensätze in einer kompakten Übersicht mit Status, Verantwortlichkeit und einfachen Filtermöglichkeiten.",
      outcome:
        "Der Prototyp zeigt, wie auch kleine Tools Transparenz schaffen können, wenn sie nah am tatsächlichen Arbeitsablauf gebaut werden.",
      bullets: [
        "Tabellenähnliche Übersicht mit klaren Zuständen",
        "Filter nach Status, Priorität oder Verantwortlichkeit",
        "Vorbereitung für einfache Datenbank-Anbindung",
        "Fokus auf schnelle Erfassbarkeit statt Funktionsüberladung",
      ],
      gallery: ["Listenansicht", "Detailpanel", "Statusübersicht"],
    },
  },
];

export type Project = (typeof projects)[number];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const skillGroups = [
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

export const timelineItems = [
  {
    date: "2022 - heute",
    title: "Studium Wirtschaftsinformatik",
    description:
      "Fokus auf Prozessmanagement, Datenanalyse, Softwareentwicklung und Enterprise Architecture.",
  },
  {
    date: "2023 - heute",
    title: "Werkstudent Enterprise Architecture",
    description:
      "Praxiserfahrung in der Dokumentation und Analyse von Unternehmensarchitekturen und Geschäftsprozessen.",
  },
  {
    date: "2023 - heute",
    title: "Hochschulprojekte",
    description: "Praktische Projekte mit Datenanalyse, Prozessautomatisierung und Web-Technologien.",
  },
  {
    date: "2024 - heute",
    title: "Portfolio-Aufbau",
    description: "Entwicklung praxisnaher Demo-Projekte für Prozessautomatisierung und Digitalisierung.",
  },
];

export const roadmapSteps = [
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

export const processNodes = [
  { step: "01", label: "Manueller Prozess", sub: "Papier, E-Mail, Tabellen" },
  { step: "02", label: "Strukturierte Daten", sub: "Erfassung, Validierung, Struktur" },
  { step: "03", label: "Automatisierung", sub: "Workflow, Skripte, API" },
  { step: "04", label: "Dashboard", sub: "Reporting, Entscheidung, KPI", accent: true },
];

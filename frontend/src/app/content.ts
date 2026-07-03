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

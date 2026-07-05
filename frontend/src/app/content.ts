export const siteConfig = {
  name: "Marcel Kempel",
  initials: "MK",
  profileImageUrl: "",
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
  { label: "Zertifikate", href: "/zertifikate" },
  { label: "Skills", href: "/#skills" },
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

export type Certificate = {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: string;
  imageUrl: string;
  credentialUrl?: string;
  featured?: boolean;
};

export const certificates: Certificate[] = [
  {
    slug: "datenanalyse-zertifikat",
    title: "Datenanalyse-Zertifikat ergänzen",
    issuer: "Anbieter / Hochschule",
    date: "Jahr ergänzen",
    category: "Daten & Reporting",
    description:
      "Platz für ein relevantes Zertifikat aus Wirtschaftsinformatik, Datenanalyse, Prozessmanagement oder Softwareentwicklung.",
    imageUrl: "/certificates/certificate-placeholder.svg",
    featured: true,
  },
  {
    slug: "prozessmanagement-zertifikat",
    title: "Prozessmanagement-Zertifikat ergänzen",
    issuer: "Anbieter / Hochschule",
    date: "Jahr ergänzen",
    category: "Business & Prozesse",
    description:
      "Hier kann später ein Zertifikat mit PDF, Credential-Link oder kurzer Einordnung ergänzt werden.",
    imageUrl: "/certificates/certificate-placeholder.svg",
    featured: true,
  },
  {
    slug: "webentwicklung-zertifikat",
    title: "Webentwicklung-Zertifikat ergänzen",
    issuer: "Anbieter / Hochschule",
    date: "Jahr ergänzen",
    category: "Web & Entwicklung",
    description:
      "Ein weiterer Platzhalter für Qualifikationen, die den fachlichen Schwerpunkt des Portfolios unterstützen.",
    imageUrl: "/certificates/certificate-placeholder.svg",
  },
  {
    slug: "automation-zertifikat",
    title: "Automation-Zertifikat ergänzen",
    issuer: "Anbieter / Hochschule",
    date: "Jahr ergänzen",
    category: "Daten & Reporting",
    description:
      "Platz für einen Nachweis zu Automatisierung, Skripting, Schnittstellen oder praktischer Tool-Umsetzung.",
    imageUrl: "/certificates/certificate-placeholder.svg",
  },
];

export function getCertificateBySlug(slug: string) {
  return certificates.find((certificate) => certificate.slug === slug);
}

export const processNodes = [
  { step: "01", label: "Manueller Prozess", sub: "Papier, E-Mail, Tabellen" },
  { step: "02", label: "Strukturierte Daten", sub: "Erfassung, Validierung, Struktur" },
  { step: "03", label: "Automatisierung", sub: "Workflow, Skripte, API" },
  { step: "04", label: "Dashboard", sub: "Reporting, Entscheidung, KPI", accent: true },
];

export const projectVisualVariants = ["workflow", "dashboard", "bpmn", "tool"] as const;

export type ProjectVisualVariant = (typeof projectVisualVariants)[number];

export type Project = {
  slug: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  detail: {
    type: string;
    status: string;
    focus: string;
    visualVariant: ProjectVisualVariant;
    intro: string;
    challenge: string;
    approach: string;
    outcome: string;
    bullets: string[];
    gallery: string[];
  };
};

export const projects: Project[] = [
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

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

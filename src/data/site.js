/**
 * All site content lives here. Edit text, links and people in this file;
 * pages only read from it.
 *
 * A value wrapped in square brackets (e.g. "[GITHUB LINK]") is a placeholder
 * that still needs to be filled in.
 */

export const PLACEHOLDER = /^\[.*\]$/;
export function isPlaceholder(value) {
  return !value || PLACEHOLDER.test(String(value).trim());
}

// ---------------------------------------------------------------------------
// General
// ---------------------------------------------------------------------------

export const project = {
  name: "KINETIQ",
  fullTitle: "KINETIQ — micromobility fleet management, initially deployed with mariaBike",
  tagline: "An extensible fleet management platform for micromobility, built on real-time telemetry.",
  course: "Projeto em Engenharia Informática",
  university: "Universidade de Aveiro",
  academicYear: "2026/2027",
};

export const links = {
  github: "https://github.com/KinetiQ-PEI/kinetiq-site",
  mariaBike: "https://mariabike.com/en/",
};

// ---------------------------------------------------------------------------
// Home / overview text
// ---------------------------------------------------------------------------

export const overview = {
  context: "KINETIQ is a platform to monitor and manage corporate micromobility fleets, and it also serves personal vehicle owners. mariaBike already produces a continuous stream of data from embedded sensors, smartwatch connectivity, mobile interfaces and cloud telemetry, and is KINETIQ's first deployment target.",
  problem: "Existing micromobility platforms cover telemetry, analytics and lifecycle management, but none of the products we analysed combines all of these capabilities with a rider app, CO₂ footprint tracking and an open, extensible API, and none offers ML-based anomaly detection.",
  expectedResults: "A deployed event-driven platform (MQTT and Kafka) integrated with mariaBike, a web back-office for operators and a mobile app for riders, value-added modules (CO₂ estimate, BI reports and ML anomaly detection), and an evaluation of extensibility, latency and scalability.",
};

export const flow = [
  "Vehicle sensors",
  "MQTT broker",
  "Kafka",
  "Telemetry processing",
  "Fleet management and modules",
  "Web and mobile apps",
];

export const goals = [
  "Ingest real-time telemetry with an event-driven architecture, using MQTT at the edge and Apache Kafka as the event backbone, initially from the mariaBike fleet.",
  "Manage each bike's lifecycle (registration, maintenance, usage history) and aggregated fleet metrics.",
  "Expose extensible APIs through an API Gateway and a Core API, so value-added modules can be plugged in through Kafka.",
  "Deliver a web back-office for fleet operators, technicians and analysts, and a mobile app for riders.",
  "Validate extensibility with one BI reporting module and one Machine Learning module.",
];

export const modules = [
  { name: "Event backbone", tasks: "Broker setup, telemetry ingestion, event schemas" },
  { name: "Fleet management", tasks: "Bike lifecycle, usage history, fleet metrics API" },
  { name: "Service layer", tasks: "Extensible APIs, CO₂ footprint, usage analytics" },
  { name: "Dashboard", tasks: "Telemetry monitoring, lifecycle management, service KPIs" },
  { name: "BI and ML", tasks: "BI report module, anomaly detection or demand forecasting" },
];

// ---------------------------------------------------------------------------
// People
// ---------------------------------------------------------------------------

export const team = [
  { name: "João Pereira", role: "Student, project website", nmec: "125683", email: "jp.pereira@ua.pt", github: "https://github.com/uflist", linkedin: "" },
  { name: "João Tomásio", role: "Student, project plan", nmec: "120132", email: "joaotomasio05@ua.pt", github: "https://github.com/jpstomasio", linkedin: "" },
  { name: "Guilherme Gomes", role: "Student, reports and presentations", nmec: "125493", email: "gui.silva.gomes@ua.pt", github: "https://github.com/guigomes207", linkedin: "" },
  { name: "Santiago Gandarez", role: "Student, repository", nmec: "125436", email: "santiagogandarez@ua.pt", github: "https://github.com/SantyGandarez", linkedin: "" },
  { name: "Maria Mané", role: "Student, project calendar", nmec: "125102", email: "mariamoreiramane@ua.pt", github: "https://github.com/mariamane73", linkedin: "" },
];

export const advisors = ["José Maria Amaral Fernandes", "Ilídio Oliveira"];
export const partners = [
  { name: "José Paulo Santos", role: "Partner, DEM/UA" },
  { name: "Syed Tahir", role: "Partner, DEM/UA" },
];

// ---------------------------------------------------------------------------
// Milestones (course calendar, dates may change)
// ---------------------------------------------------------------------------

export const milestones = [
  {
    id: "MS1",
    title: "Lifecycle objectives",
    phase: "Inception",
    dates: ["2026-09-29"],
    label: "29 Sep 2026",
    text: "Presentation of the lifecycle objectives and the project calendar.",
    deliverable: "Project presentation, calendar and communication plan",
  },
  {
    id: "MS2",
    title: "Lifecycle architecture",
    phase: "Elaboration",
    dates: ["2026-10-13", "2026-10-20"],
    label: "13 to 20 Oct 2026",
    text: "Presentation of the architecture; achieved once the architecture is validated.",
    deliverable: "Architecture presentation, requirements and UI integration points",
  },
  {
    id: "MS3",
    title: "Legal requirements, technical risks and digital accessibility",
    phase: "Construction",
    dates: ["2026-11-03", "2026-11-10"],
    label: "3 to 10 Nov 2026",
    text: "GDPR and licensing requirements, technical risk analysis, and a WCAG 2.2 AA accessibility matrix of the main screens.",
    deliverable: "Legal, risk and accessibility analysis",
  },
  {
    id: "MS4",
    title: "MVP",
    phase: "Construction",
    dates: ["2026-12-15", "2026-12-16"],
    label: "15 to 16 Dec 2026",
    text: "MVP presented to the supervisors, with peer evaluation.",
    deliverable: "MVP demonstration and presentation",
  },
];

export const nearTermEvents = {
  "2026-09-15": [{ label: "Course kick-off", type: "meeting" }],
  "2026-09-22": [{ label: "Teams & project confirmed", type: "meeting" }],
  "2026-09-29": [
    { label: "MS1: lifecycle objectives", type: "deadline" },
    { label: "Tech stack sync", type: "meeting" },
  ],
  "2026-10-06": [{ label: "Seminar", type: "seminar" }],
  "2026-10-13": [{ label: "MS2 window opens", type: "deadline" }],
  "2026-10-20": [{ label: "MS2 deadline", type: "deadline" }],
  "2026-10-27": [{ label: "Seminar", type: "seminar" }],
  "2026-11-03": [{ label: "MS3 window opens", type: "deadline" }],
  "2026-11-10": [{ label: "MS3 deadline", type: "deadline" }],
  "2026-11-17": [{ label: "Seminar", type: "seminar" }],
  "2026-11-24": [{ label: "Check point", type: "meeting" }],
  "2026-12-01": [{ label: "Holiday", type: "seminar" }],
  "2026-12-08": [{ label: "Holiday", type: "seminar" }],
  "2026-12-15": [{ label: "MS4 window opens", type: "deadline" }],
  "2026-12-16": [{ label: "MS4: MVP deadline", type: "deadline" }],
  "2026-12-23": [{ label: "Christmas break begins", type: "seminar" }],

  // 2027 — second semester
  "2027-01-01": [{ label: "New Year's Day", type: "seminar" }],
  "2027-02-09": [{ label: "Exam period ends", type: "seminar" }],
  "2027-02-10": [{ label: "Extensible API & ML work begins", type: "meeting" }],
  "2027-02-23": [{ label: "Extensible API & ML sprint ends", type: "meeting" }],
  "2027-02-24": [{ label: "Operator dashboard sprint begins", type: "meeting" }],
  "2027-03-09": [{ label: "Operator dashboard sprint ends", type: "meeting" }],
  "2027-03-10": [{ label: "BI reporting module sprint begins", type: "meeting" }],
  "2027-03-23": [{ label: "BI reporting module sprint ends", type: "meeting" }],
  "2027-03-24": [{ label: "Easter holidays begin", type: "seminar" }],
  "2027-04-02": [{ label: "Easter holidays end", type: "seminar" }],
  "2027-04-05": [{ label: "Advanced analytics sprint begins", type: "meeting" }],
  "2027-04-18": [{ label: "Advanced analytics sprint ends", type: "meeting" }],
  "2027-04-19": [{ label: "Integration & bug fixing sprint begins", type: "meeting" }],
  "2027-04-25": [{ label: "Integration & bug fixing sprint ends", type: "meeting" }],
  "2027-04-26": [{ label: "Academic week", type: "seminar" }],
  "2027-04-30": [{ label: "Academic week ends", type: "seminar" }],
  "2027-05-03": [{ label: "User testing begins", type: "meeting" }],
  "2027-05-16": [{ label: "User testing ends", type: "meeting" }],
  "2027-05-17": [{ label: "Data collection & stabilisation begins", type: "meeting" }],
  "2027-05-30": [{ label: "Product stabilised", type: "meeting" }],
  "2027-05-31": [{ label: "Documentation & report sprint begins", type: "meeting" }],
  "2027-06-03": [{ label: "Final report deadline", type: "deadline" }],
  "2027-06-04": [{ label: "STUDENTS@DETI — demo & defence", type: "deadline" }],
};


// Start date of each project phase. The Calendar marks the phase that contains
// today as "Current Phase" and the earlier ones as "Completed".
export const phases = [
  { name: "Inception", start: "2026-09-15" },
  { name: "Elaboration", start: "2026-09-30" },
  { name: "Construction", start: "2026-10-21" },
  { name: "Transition", start: "2027-05-03" },
];

// Full lifecycle roadmap, from the team's own plan (Inception -> Transition)
export const roadmap = [
  {
    phase: "Inception", items: [
      {
        when: "22–29 Sep 2026",
        block: "Setup & kick-off",
        text: "Project website and visual identity, GitHub organisation, Jira project setup, project calendar and planning, state-of-the-art and MariaBike platform audit, and preparation of the MS1 presentation.",
      },
      {
        when: "29 Sep 2026 · MS1",
        block: "Milestone 1 — Lifecycle objectives",
        text: "Official course milestone: presentation of lifecycle objectives, calendar and project plan.",
      },
    ],
  },
  {
    phase: "Elaboration", items: [
      {
        when: "30 Sep – 6 Oct 2026",
        block: "Requirements & actors",
        text: "Requirements gathering and scope definition, actors, personas and use cases, and initial event-driven architecture design.",
      },
      {
        when: "7–13 Oct 2026",
        block: "Architecture design",
        text: "Event-driven architecture detailed design, Kafka/MQTT setup, non-functional requirements documentation, and preparation of the lifecycle architecture presentation.",
      },
      {
        when: "13–20 Oct 2026 · MS2",
        block: "Milestone 2 — Lifecycle architecture",
        text: "Official course milestone: presentation and technical validation of the architecture with the advisors.",
      },
    ],
  },
  {
    phase: "Construction", items: [
      {
        when: "14–20 Oct 2026",
        block: "UI concepts",
        text: "Initial mockups and dashboard UI concepts, and definition of main user flows for fleet operators.",
      },
      {
        when: "21 Oct – 3 Nov 2026",
        block: "Prototype & telemetry validation",
        text: "Interactive prototype and design system. Validation of the telemetry data ingestion pipeline.",
      },
      {
        when: "3–10 Nov 2026 · MS3",
        block: "Milestone 3 — Legal, risks & accessibility",
        text: "GDPR and licensing requirements, technical risk analysis, and a WCAG 2.2 AA accessibility matrix of the main screens.",
      },
      {
        when: "4–24 Nov 2026",
        block: "Core backbone & MVP build",
        text: "Real-time telemetry ingestion pipeline, event store and database setup, individual bike registration and lifecycle state management, and aggregated fleet metrics API.",
      },
      {
        when: "25 Nov – 15 Dec 2026",
        block: "MVP completion & integration",
        text: "CO₂ footprint tracking module, usage and rider analytics module, integration and end-to-end testing, and preparation of the MVP presentation.",
      },
      {
        when: "15–16 Dec 2026 · MS4",
        block: "Milestone 4 — MVP",
        text: "Official course milestone: MVP demonstrated to supervisors, with peer evaluation.",
      },
      {
        when: "16–22 Dec 2026",
        block: "Stabilisation & planning",
        text: "MVP stabilisation, review of first semester, and second-semester planning.",
      },
      {
        when: "23 Dec – 9 Feb 2027",
        block: "Christmas break & exam period",
        text: "Development suspension.",
      },
      {
        when: "10–23 Feb 2027",
        block: "Extensible API & ML integration",
        text: "Extensible API framework and ML module integration: demand forecasting and/or anomaly detection.",
      },
      {
        when: "24 Feb – 9 Mar 2027",
        block: "Operator backoffice dashboard",
        text: "Operator backoffice dashboard UI: telemetry monitoring and service KPIs.",
      },
      {
        when: "10–23 Mar 2027",
        block: "BI reporting module",
        text: "Integration of the BI reporting module.",
      },
      {
        when: "24 Mar – 2 Apr 2027",
        block: "Easter holidays",
        text: "Development suspension.",
      },
      {
        when: "5–18 Apr 2027",
        block: "Advanced analytics & ML refinement",
        text: "Advanced analytics and refinement of ML models.",
      },
      {
        when: "19–25 Apr 2027",
        block: "Integration & bug fixing",
        text: "Full integration pass, testing and bug fixing.",
      },
      {
        when: "26–30 Apr 2027",
        block: "Academic week",
        text: "Development suspension.",
      },
    ],
  },
  {
    phase: "Transition", items: [
      {
        when: "3–16 May 2027",
        block: "User testing & improvements",
        text: "User testing sessions and application of improvements based on feedback.",
      },
      {
        when: "17–30 May 2027",
        block: "Data collection & stabilisation",
        text: "Final data collection, evaluation and stabilisation of the product.",
      },
      {
        when: "31 May – 3 Jun 2027",
        block: "Documentation & report",
        text: "Technical documentation and final technical report. Preparation of the final presentation and defence.",
      },
      {
        when: "4 Jun 2027",
        block: "STUDENTS@DETI",
        text: "Public demo, poster, video and final technical report delivery.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Documentation page
// ---------------------------------------------------------------------------

// Groups shown on the Documentation page, in order. `id` matches a document's
// `milestone` and is used (lower-cased) as the anchor, e.g. /docs?ms=ms2.
export const documentGroups = [
  {
    id: "MS1",
    label: "Lifecycle objectives",
    phase: "Inception",
    dates: "29 Sep 2026",
    status: "delivered",
  },
  {
    id: "MS2",
    label: "Lifecycle architecture",
    phase: "Elaboration",
    dates: "13–20 Oct 2026",
    status: "delivered",
    note: "The architecture diagram was revised on 31 Oct 2026, after the presentation (the Reverse Proxy now sits between the frontend and the API Gateway). The current version is the Architecture Diagram below.",
  },
  {
    id: "MS3",
    label: "Legal requirements, technical risks and digital accessibility",
    phase: "Construction",
    dates: "3–10 Nov 2026",
    status: "upcoming",
  },
  {
    id: "MS4",
    label: "MVP",
    phase: "Construction",
    dates: "15–16 Dec 2026",
    status: "upcoming",
  },
  {
    id: "FINAL",
    label: "Final report & STUDENTS@DETI",
    phase: "Transition",
    dates: "4 Jun 2027",
    status: "upcoming",
  },
];

// Every document listed on the site. `file` is relative to src/content
// (null while there is no file yet). status: "available" | "in-revision" | "upcoming".
export const documents = [
  // MS1
  {
    id: "proposal",
    milestone: "MS1",
    title: "Project Proposal",
    description: "Official PEI 2026/2027 project brief, the mariaBike use case that originated KinetiQ.",
    file: "documentation/2027PEI_MariaBike_Proposal.pdf",
    downloadName: "2027PEI_MariaBike_Proposal.pdf",
    type: "PDF",
    size: "77 KB",
    pages: 2,
    status: "available",
  },
  {
    id: "ms1-presentation",
    milestone: "MS1",
    title: "MS1 Presentation",
    description: "Lifecycle objectives, project schedule, communication plan, state of the art and deliverables.",
    file: "ms1/presentation.pdf",
    downloadName: "KinetiQ_MS1_Presentation.pdf",
    type: "PDF",
    size: "9.0 MB",
    pages: 17,
    status: "available",
    links: [{ label: "Canva", href: "https://canva.link/e717fmo77xzgope" }],
  },

  // MS2
  {
    id: "ms2-presentation",
    milestone: "MS2",
    title: "MS2 Presentation",
    description: "State of the art, actors and use cases, requirements, event-driven architecture, domain model, telemetry flows and calendar.",
    file: "ms2/presentation.pdf",
    downloadName: "KinetiQ_MS2_Presentation.pdf",
    type: "PDF",
    size: "13.4 MB",
    pages: 34,
    status: "available",
    links: [{ label: "Canva", href: "[https://canva.link/deemwp1k1k3v41q]" }],
  },
  {
    id: "functional-requirements",
    milestone: "MS2",
    title: "Functional Requirements",
    description: "FR01–FR26 grouped by package: telemetry, fleet lifecycle, alerts, analytics, back-office, rider app and access control.",
    file: "ms2/functional-requirements.pdf",
    downloadName: "KinetiQ_MS2_Functional_Requirements.pdf",
    type: "PDF",
    size: "95 KB",
    pages: 3,
    status: "available",
  },
  {
    id: "non-functional-requirements",
    milestone: "MS2",
    title: "Non-Functional Requirements",
    description: "NFR01–NFR24: usability and accessibility, interface constraints, performance, scalability, security and maintainability.",
    file: "ms2/non-functional-requirements.pdf",
    downloadName: "KinetiQ_MS2_Non_Functional_Requirements.pdf",
    type: "PDF",
    size: "76 KB",
    pages: 3,
    status: "available",
  },
  {
    id: "ui-integration-points",
    milestone: "MS2",
    title: "UI Integration Points",
    description: "How the React and Flutter apps reach the backend through the Reverse Proxy and API Gateway (HTTPS and WSS), per actor.",
    file: "ms2/ui-integration-points.pdf",
    downloadName: "KinetiQ_MS2_UI_Integration_Points.pdf",
    type: "PDF",
    size: "52 KB",
    pages: 2,
    status: "available",
  },
  {
    id: "architecture-diagram",
    milestone: "MS2",
    title: "Architecture Diagram",
    description: "Final event-driven architecture: MQTT edge, Kafka backbone, real-time and operational paths, data layer (rev. 31 Oct 2026).",
    file: "diagrams/architecture.png",
    downloadName: "KinetiQ_Architecture_Diagram.png",
    type: "PNG",
    size: "5.2 MB",
    pages: null,
    status: "available",
  },
  {
    id: "actors-use-cases",
    milestone: "MS2",
    title: "Actors, Personas & Use Cases",
    description: "Fleet Operator, Maintenance Technician, Fleet Analyst and Rider, with personas and use cases.",
    file: null,
    downloadName: null,
    type: "PDF",
    size: null,
    pages: null,
    status: "in-revision",
  },

  // MS3
  {
    id: "legal-requirements",
    milestone: "MS3",
    title: "Legal Requirements (GDPR & Licensing)",
    file: null,
    type: null,
    status: "upcoming",
  },
  {
    id: "technical-risks",
    milestone: "MS3",
    title: "Technical Risks",
    file: null,
    type: null,
    status: "upcoming",
  },
  {
    id: "accessibility-matrix",
    milestone: "MS3",
    title: "Digital Accessibility Matrix (WCAG 2.2 AA)",
    file: null,
    type: null,
    status: "upcoming",
  },

  // MS4
  {
    id: "mvp-demo",
    milestone: "MS4",
    title: "MVP Demonstration & Peer Evaluation",
    file: null,
    type: null,
    status: "upcoming",
  },

  // Final
  {
    id: "final-report",
    milestone: "FINAL",
    title: "Final Technical Report, Poster & Demo Video",
    file: null,
    type: null,
    status: "upcoming",
  },
];

export const commPlan = [
  { meeting: "Advisor sync slot", when: "Thursdays, 16:00 (as needed / on request)", who: "Team and advisor" },
  { meeting: "Weekly team meeting", when: "Tuesdays, after the PEI class", who: "Team" },
  { meeting: "Presentation briefing", when: "Mondays before each presentation", who: "Team" },
];

export const resources = [
  { name: "Git repository", link: links.github },
  { name: "Project calendar", link: "/calendar", linkLabel: "Calendar" },
];

export const roles = [
  { member: "João Tomásio", role: "Project plan", activities: "Task management in Jira" },
  { member: "João Pereira", role: "Project website", activities: "Team info, project goal and description" },
  { member: "Guilherme Gomes", role: "Reports and presentations", activities: "Project reports and presentations" },
  { member: "Santiago Gandarez", role: "Repository", activities: "Git organisation and repository" },
  { member: "Maria Mané", role: "Project calendar", activities: "Schedule, milestones and deliverables" },
  { member: "Everyone", role: "State of the art", activities: "Market study" },
];

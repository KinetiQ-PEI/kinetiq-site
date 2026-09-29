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
  context: "mariaBike is a micromobility platform that already produces a continuous stream of data from embedded sensors, smartwatch connectivity, mobile interfaces and cloud telemetry. KINETIQ uses mariaBike as its first deployment target.",
  problem: "Existing fleet management platforms are designed for cars, trucks and large vehicle fleets. For micromobility — eBikes, scooters and light electric vehicles — available solutions stop at basic GPS tracking and battery monitoring, with no integrated approach to lifecycle management, usage analytics or extensible data services.",
  expectedResults: "A deployed event-driven back office initially integrated with mariaBike, a service layer with CO₂ footprint and usage analytics modules, an operator dashboard, and an evaluation of extensibility, latency and scalability.",
};

export const flow = ["Vehicle sensors", "Event broker", "Fleet management", "Services and APIs", "Dashboard"];

export const goals = [
  "Ingest real-time telemetry with an event-driven architecture (Kafka or MQTT), initially from the mariaBike fleet.",
  "Manage each bike's lifecycle (registration, maintenance, usage history) and aggregated fleet metrics.",
  "Expose extensible APIs for value-added services, with at least two concrete implementations.",
  "Deliver a back-office dashboard for operators to monitor telemetry, lifecycle and service KPIs.",
  "Validate extensibility with one BI reporting module and one Machine Learning module.",
];

export const modules = [
  { name: "Event backbone", tasks: "Broker setup, telemetry ingestion, event schemas", icon: "⚡" },
  { name: "Fleet management", tasks: "Bike lifecycle, usage history, fleet metrics API", icon: "🚲" },
  { name: "Service layer", tasks: "Extensible APIs, CO₂ footprint, usage analytics", icon: "🔌" },
  { name: "Dashboard", tasks: "Telemetry monitoring, lifecycle management, service KPIs", icon: "📊" },
  { name: "BI and ML", tasks: "BI report module, anomaly detection or demand forecasting", icon: "🤖" },
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
    deliverableLink: null,
  },
  {
    id: "MS2",
    title: "Lifecycle architecture",
    phase: "Elaboration",
    dates: ["2026-10-13", "2026-10-20"],
    label: "13 to 20 Oct 2026",
    text: "Presentation of the architecture; achieved once the architecture is validated.",
    deliverable: "Architecture presentation and validation",
    deliverableLink: null,
  },
  {
    id: "MS3",
    title: "Accessibility and usability",
    phase: "Construction",
    dates: ["2026-11-03", "2026-11-10"],
    label: "3 to 10 Nov 2026",
    text: "Digital accessibility and usability of the system.",
    deliverable: "Accessibility and usability evaluation",
    deliverableLink: null,
  },
  {
    id: "MS4",
    title: "MVP",
    phase: "Construction",
    dates: ["2026-12-15", "2026-12-16"],
    label: "15 to 16 Dec 2026",
    text: "MVP presented to the supervisors, with peer evaluation.",
    deliverable: "MVP demonstration and presentation",
    deliverableLink: null,
  },
];

export const nearTermEvents = {
  "2026-09-15": [{ label: "Course kick-off", type: "meeting" }],
  "2026-09-22": [{ label: "Teams & project confirmed", type: "meeting" }],
  "2026-09-29": [{ label: "MS1: lifecycle objectives", type: "deadline" }],
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
        block: "Milestone 3 — Accessibility & usability",
        text: "Official course milestone: accessibility and usability evaluation of the system.",
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

export const commPlan = [
  { meeting: "Weekly meeting with the advisor", when: "Thursdays, 16:00", who: "Team and advisor" },
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

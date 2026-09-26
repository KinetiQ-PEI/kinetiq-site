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
  fullTitle: "KINETIQ — fleet management for the mariaBike platform",
  tagline: "A fleet management system for individual vehicles and micromobility, built on real-time telemetry.",
  course: "Projeto em Engenharia Informática",
  university: "Universidade de Aveiro",
  academicYear: "2026/2027",
};

export const links = {
  github: "https://github.com/KinetiQ-PEI/kinetiq-site",
  jira: "[JIRA LINK]",
  mariaBike: "https://mariabike.com/en/",
};

// ---------------------------------------------------------------------------
// Home / overview text
// ---------------------------------------------------------------------------

export const overview = {
  context: "The mariaBike platform already produces a continuous stream of data from embedded sensors, smartwatch connectivity, mobile interfaces and cloud telemetry.",
  problem: "As fleets grow, that data goes untreated. Current eBike fleet solutions stop at basic GPS tracking and battery monitoring, with no foundation for lifecycle management, usage analytics or extensible data services.",
  problemDraft: true,
  expectedResults: "A deployed event-driven back office for mariaBike, a service layer with CO₂ footprint and usage analytics modules, an operator dashboard, and an evaluation of extensibility, latency and scalability.",
  relatedWork: "To be written during the state-of-the-art phase: fleet management systems, event-driven architectures and the mariaBike platform audit.",
  relatedWorkDraft: true,
};

export const flow = ["mariaBike sensors", "Event broker", "Fleet management", "Services and APIs", "Dashboard"];

export const goals = [
  "Ingest mariaBike telemetry in real time with an event-driven architecture (Kafka or MQTT).",
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
};

// Full lifecycle roadmap, from the team's own plan (Inception -> Transition)
export const roadmap = [
  {
    phase: "Inception", items: [
      { when: "15 Sep 2026 (week 1)", block: "Course kick-off", text: "Presentation of the course and the project proposals." },
      { when: "22 Sep 2026 (week 2)", block: "Team & setup", text: "Team confirmed on mariaBike. Initial Git and Jira setup." },
      { when: "29 Sep 2026 (week 3)", block: "Milestone 1", text: "Lifecycle objectives, calendar, site structure and presentation." },
      { when: "6 to 20 Oct 2026", block: "Analysis & requirements", text: "Market study and audit of the mariaBike platform." },
    ]
  },
  {
    phase: "Elaboration", items: [
      { when: "13 to 27 Oct 2026", block: "System architecture", text: "Event-driven architecture design (Kafka/MQTT) and telemetry schemas. Clarify ESP32 questions with the advisors." },
      { when: "Around 13 Nov 2026 (week 9)", block: "Milestone 2", text: "Presentation and technical validation of the architecture with the advisors." },
      { when: "Weeks 9 to 13", block: "Prototyping & CI/CD", text: "Initial real-time ingestion pipeline. CI/CD set up from the start." },
    ]
  },
  {
    phase: "Construction", items: [
      { when: "Jan - Feb 2027", block: "Fleet management", text: "Bike lifecycle, registration, status and fleet metrics APIs. Cross code review and refactor between teammates." },
      { when: "Mar - Apr 2027", block: "Service layer", text: "Chosen modules (e.g. CO2 estimate, usage analytics / demand forecasting) and an extensible API framework." },
      { when: "1 May 2027", block: "Dashboard & BI/ML", text: "Operator dashboard, BI and Machine Learning module integration, MVP check point." },
    ]
  },
  {
    phase: "Transition", items: [
      { when: "Late May - Jun 2027", block: "Testing & validation", text: "Load, latency and scalability testing under realistic fleet conditions. Strong passwords on the VMs." },
      { when: "1 Jun 2027", block: "Release / defence", text: "Final code delivery, final report and public defence presentation." },
    ]
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
  { name: "Project plan (Jira)", owner: "João Tomásio", link: links.jira },
  { name: "Git repository", owner: "Santiago Gandarez", link: links.github },
  { name: "Project calendar", owner: "Maria Mané", link: "/calendar", linkLabel: "Calendar" },
];

export const roles = [
  { member: "João Tomásio", role: "Project plan", activities: "Task management in Jira" },
  { member: "João Pereira", role: "Project website", activities: "Team info, project goal and description" },
  { member: "Guilherme Gomes", role: "Reports and presentations", activities: "Project reports and presentations" },
  { member: "Santiago Gandarez", role: "Repository", activities: "Git organisation and repository" },
  { member: "Maria Mané", role: "Project calendar", activities: "Schedule, milestones and deliverables" },
  { member: "Everyone", role: "State of the art", activities: "Market study" },
];

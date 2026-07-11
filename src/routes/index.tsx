import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

type AgendaRow = { time: string; topic: string; presenter: string };
type Webinar = {
  id: string;
  label: string;
  title: string;
  objective: string;
  participants: string[];
  agenda: AgendaRow[];
  outputs: string[];
  followUp?: string;
};

const phases = [
  {
    id: "phase-1",
    tag: "Phase 1",
    week: "Week 1–2",
    title: "Pre-Implementation Planning",
    blurb:
      "Two CARPHA-branded webinars per CMS to align governance, user access, and technical data flows before configuration begins.",
  },
  {
    id: "phase-2",
    tag: "Phase 2",
    week: "Week 4",
    title: "Joint Surveillance–IT Demonstration",
    blurb:
      "A 60–90 minute demo for the CMO and National Epidemiologist to validate the configured RIEWSS environment and approve the country mission.",
  },
  {
    id: "phase-3",
    tag: "Phase 3",
    week: "Week 5–6",
    title: "In-Country Mission",
    blurb:
      "3–5 days of leadership engagement, user activation, training on RIEWSS and Tingua, system optimization, and a formal national launch.",
  },
  {
    id: "phase-4",
    tag: "Phase 4",
    week: "Week 7–12",
    title: "Six-Week Post-Mission Follow-Up",
    blurb:
      "Structured checkpoints at Weeks 2, 4, and 6 tracking adoption, data quality, technical performance, and sustainability.",
  },
] as const;

const webinars: Webinar[] = [
  {
    id: "w1",
    label: "Webinar 1 · Week 1",
    title: "Defining Governance, User Access & Surveillance Requirements",
    objective:
      "Establish surveillance ownership, user roles, viewing permissions, and stakeholder expectations.",
    participants: [
      "Chief Medical Officer",
      "National Epidemiologist(s)",
      "Laboratory Director",
      "Environmental Health / VBD Lead",
      "Port Health Officials",
      "Veterinary / Public Health Representatives",
      "Communications / Infodemic Team",
      "Ministry IT Representatives",
      "DHIS2 Administrators",
      "CARPHA RIEWSS Team",
      "CARPHA CMS Focal Point",
    ],
    agenda: [
      { time: "0–10", topic: "Introduction to RIEWSS architecture and implementation roadmap", presenter: "Brian Armour" },
      { time: "10–20", topic: "Demo overview of surveillance domains (Syndromic, Lab, AMR, VBD, Tourism & Health, One Health, Infodemic)", presenter: "Brendon Bhagwandeen" },
      { time: "20–30", topic: "User Access Matrix development — national stakeholders, role-based access, alert distribution", presenter: "Brian Armour" },
      { time: "30–35", topic: "Dashboard visibility requirements", presenter: "Gabriel Garcia" },
      { time: "35–45", topic: "Ministry & agency responsibilities: Health, Tourism, Environment, Agriculture, National Security", presenter: "Brian Armour" },
      { time: "45–55", topic: "IT interoperability: browsers, connectivity, security, DHIS2 familiarity", presenter: "Gabriel Garcia" },
      { time: "55–60", topic: "Action items and focal-point assignments", presenter: "Kern Rocke" },
    ],
    outputs: [
      "Draft User Access Matrix",
      "Preliminary Role Mapping",
      "List of Approved Users",
      "Surveillance Governance Structure",
    ],
    followUp: "Document follow-up: Heidi-Ann Boxer",
  },
  {
    id: "w2",
    label: "Webinar 2 · Week 2",
    title: "Surveillance Data Flows & Technical Integration Planning",
    objective:
      "Determine where data enter national systems and how information will be imported into RIEWSS.",
    participants: [
      "National Epidemiology Unit",
      "Surveillance Officers",
      "Laboratory Managers",
      "DHIS2 Administrators",
      "Health Information Unit",
      "Ministry IT Team",
      "CARPHA RIEWSS Team",
      "CARPHA HIC Representative",
      "CARPHA CMML Representative",
    ],
    agenda: [
      { time: "0–10", topic: "Review outputs from Webinar 1", presenter: "Brian Armour" },
      { time: "10–20", topic: "Syndromic surveillance data workflow — facility, district, national, DHIS2", presenter: "Brian Armour & Gabriel Garcia" },
      { time: "20–30", topic: "Laboratory & AMR workflow — requisition, instruments, LIMS, DHIS2", presenter: "Brian Armour & Gabriel Garcia" },
      { time: "30–40", topic: "Tourism & Health + Infodemic monitoring: video overviews", presenter: "Brian Armour" },
      { time: "45–55", topic: "Metadata & interoperability readiness — org hierarchy, national-to-regional metadata", presenter: "Gabriel Garcia" },
      { time: "55–60", topic: "Agreement on implementation approach", presenter: "Gabriel Garcia" },
    ],
    outputs: [
      "Data-entry digital workflow — access point for RIEWSS",
      "Metadata readiness assessment at that access point",
      "Written import strategy for RIEWSS at metadata-compliant access point",
    ],
    followUp: "Document follow-up: Kern Rocke",
  },
];

const demoComponents = [
  "Syndromic surveillance dashboard",
  "Laboratory and AMR dashboard",
  "Vector-borne disease dashboard",
  "Tourism and Health surveillance dashboard",
  "One Health dashboard",
  "Infodemic monitoring dashboard",
  "Alert and notification functionality",
  "Geographic mapping capability",
  "Trend analysis and visualization tools",
];

const demoObjectives = [
  "Demonstrate the CMS-specific configured RIEWSS environment",
  "Validate surveillance dashboards",
  "Review user accounts and permissions",
  "Demonstrate alert generation and notification pathways",
  "Review mapping and visualization functions",
  "Confirm interoperability arrangements",
  "Obtain approval for the country rollout mission agenda",
];

const demoDeliverables = [
  "User account approval",
  "Dashboard sign-off",
  "Alert workflow approval",
  "Authorization for CARPHA deployment mission",
  "In-country mission agenda",
];

type MissionDay = { label: string; heading: string; items: { title: string; body: string[] }[] };
const missionDays: MissionDay[] = [
  {
    label: "Day 1",
    heading: "Leadership Engagement & Final Validation",
    items: [
      {
        title: "Ministry engagement",
        body: [
          "Courtesy call with Ministry leadership",
          "Review implementation objectives",
          "Confirm user matrix & governance structure",
        ],
      },
      {
        title: "With CMS",
        body: [
          "User account activation",
          "Organizational hierarchy verification",
          "Historical data import validation",
          "Dashboard testing",
        ],
      },
    ],
  },
  {
    label: "Day 2–4",
    heading: "User Training & System Optimization",
    items: [
      {
        title: "Mission-branded training",
        body: [
          "National epidemiology team",
          "Surveillance officers",
          "Laboratory personnel",
          "Environmental health officers",
          "Port health personnel",
          "Communications officers",
        ],
      },
      {
        title: "System optimization",
        body: ["Address technical issues", "Final refinements"],
      },
    ],
  },
  {
    label: "Day 5",
    heading: "Handover",
    items: [
      {
        title: "Formal national launch",
        body: [
          "Operational RIEWSS platform",
          "Trained national users",
          "Approved governance structure",
          "Functional alerting mechanism",
          "Completed simulation exercise",
          "Duty Travel Report",
        ],
      },
    ],
  },
];

type Checkpoint = {
  label: string;
  owner: string;
  groups: { title: string; owner?: string; markers: string[] }[];
};

const checkpoints: Checkpoint[] = [
  {
    label: "Week 2 Post-Mission",
    owner: "Gabriel Garcia",
    groups: [
      {
        title: "Success markers",
        markers: [
          "≥80% of approved users activated",
          "Users successfully accessing dashboards",
          "Alert notifications functioning",
          "No major technical issues identified",
        ],
      },
    ],
  },
  {
    label: "Week 4 Post-Mission",
    owner: "Kern Rocke",
    groups: [
      {
        title: "Success markers",
        markers: [
          "Regular dashboard utilization",
          "Surveillance data flowing into RIEWSS",
          "At least one alert review conducted",
          "Evidence of multi-sector participation",
        ],
      },
    ],
  },
  {
    label: "Week 6 Sustainability Review",
    owner: "Multi-lead",
    groups: [
      {
        title: "Governance",
        owner: "Kern Rocke",
        markers: [
          "Approved national focal points actively engaged",
          "User access matrix finalized and maintained",
        ],
      },
      {
        title: "Data Quality",
        owner: "Brendon Bhagwandeen",
        markers: [
          "≥90% completeness of priority surveillance data streams",
          "Timely reporting from participating sectors",
        ],
      },
      {
        title: "Technical Performance",
        owner: "Gabriel Garcia",
        markers: [
          "Stable platform availability",
          "Successful interoperability with national systems",
          "Organizational hierarchy functioning correctly",
        ],
      },
      {
        title: "Surveillance Performance",
        owner: "Kern Rocke",
        markers: [
          "Early warning signals detected and reviewed",
          "Trend analyses routinely utilized",
          "Maps and visualizations supporting decision-making",
        ],
      },
      {
        title: "Capacity Building",
        owner: "Gabriel Garcia",
        markers: [
          "Trained users independently operating the platform",
          "National administrators managing user accounts",
          "National team capable of onboarding new users",
        ],
      },
      {
        title: "Sustainability",
        owner: "Brian Armour",
        markers: [
          "National implementation roadmap approved",
          "Expansion plan developed for additional surveillance domains next quarter",
          "Routine monthly review meetings established",
        ],
      },
    ],
  },
];

const team = [
  { name: "Brian Armour", role: "Mission Team Lead · RIEWSS architecture & governance" },
  { name: "Brendon Bhagwandeen", role: "Surveillance domains & data quality" },
  { name: "Gabriel Garcia", role: "IT interoperability & technical performance" },
  { name: "Kern Rocke", role: "Follow-up, sustainability & documentation" },
  { name: "Heidi-Ann Boxer", role: "Operations, logistics & document follow-up" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <PhaseNav />
      <PhaseOne />
      <PhaseTwo />
      <PhaseThree />
      <PhaseFour />
      <TeamSection />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-display text-sm font-semibold">
            R
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            RIEWSS Rollout
          </span>
        </a>
        <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
          <a href="#phase-1" className="transition-colors hover:text-foreground">Planning</a>
          <a href="#phase-2" className="transition-colors hover:text-foreground">Demonstration</a>
          <a href="#phase-3" className="transition-colors hover:text-foreground">Mission</a>
          <a href="#phase-4" className="transition-colors hover:text-foreground">Follow-Up</a>
          <a href="#team" className="transition-colors hover:text-foreground">Team</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, color-mix(in oklab, var(--teal) 30%, transparent), transparent 55%), radial-gradient(circle at 80% 30%, color-mix(in oklab, var(--amber) 25%, transparent), transparent 55%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.3fr_1fr] md:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            CARPHA · Integrated Surveillance–IT Framework
          </div>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] md:text-6xl">
            Rolling out <span className="italic text-teal-deep">RIEWSS</span> across
            CARPHA Member States — one country at a time.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            An interactive twelve-week framework spanning governance planning,
            joint surveillance–IT demonstrations, in-country deployment, and
            structured post-mission follow-up.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#phase-1"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Begin the rollout →
            </a>
            <a
              href="#phase-4"
              className="inline-flex items-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
            >
              Jump to success markers
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Timeline at a glance
            </div>
            <ol className="mt-4 space-y-4">
              {phases.map((p, i) => (
                <li key={p.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-display text-sm">
                      {i + 1}
                    </span>
                    {i < phases.length - 1 && (
                      <span className="mt-1 h-8 w-px bg-border" />
                    )}
                  </div>
                  <div className="pb-1">
                    <div className="text-xs font-medium uppercase tracking-wider text-accent-foreground/80">
                      {p.week}
                    </div>
                    <div className="font-display text-base font-semibold">
                      {p.title}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhaseNav() {
  return (
    <section className="border-b border-border/60 bg-surface/60">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="grid gap-4 md:grid-cols-4">
          {phases.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="group rounded-lg border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
                <span>{p.tag}</span>
                <span>{p.week}</span>
              </div>
              <div className="mt-2 font-display text-lg font-semibold group-hover:text-primary">
                {p.title}
              </div>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                {p.blurb}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  tag,
  title,
  week,
  children,
}: {
  tag: string;
  title: string;
  week: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="rounded-full bg-accent/25 px-2.5 py-1 text-accent-foreground">
          {tag}
        </span>
        <span>{week}</span>
      </div>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mt-4 text-lg text-muted-foreground">{children}</p>
      )}
    </div>
  );
}

function PhaseOne() {
  const [active, setActive] = useState<string>(webinars[0].id);
  const current = useMemo(
    () => webinars.find((w) => w.id === active) ?? webinars[0],
    [active],
  );

  return (
    <section id="phase-1" className="scroll-mt-20 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader tag="Phase 1" title="Pre-Implementation Planning" week="Week 1–2">
          Two CARPHA-branded webinars per Member State establish governance,
          user access, and technical data flows before any configuration begins.
        </SectionHeader>

        <div className="flex gap-2 rounded-lg border border-border bg-card p-1">
          {webinars.map((w) => (
            <button
              key={w.id}
              onClick={() => setActive(w.id)}
              className={`flex-1 rounded-md px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                active === w.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-surface"
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h3 className="font-display text-2xl font-semibold">{current.title}</h3>
            <p className="mt-2 text-muted-foreground">{current.objective}</p>

            <div className="mt-6 overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-surface text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 font-medium">Time (min)</th>
                    <th className="px-4 py-3 font-medium">Topic</th>
                    <th className="px-4 py-3 font-medium">Presenter</th>
                  </tr>
                </thead>
                <tbody>
                  {current.agenda.map((row, i) => (
                    <tr
                      key={i}
                      className="border-t border-border/70 transition-colors hover:bg-surface/60"
                    >
                      <td className="px-4 py-3 font-mono text-xs text-primary">
                        {row.time}
                      </td>
                      <td className="px-4 py-3">{row.topic}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {row.presenter}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Participants
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {current.participants.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Expected outputs
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                {current.outputs.map((o) => (
                  <li key={o} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {o}
                  </li>
                ))}
              </ul>
              {current.followUp && (
                <div className="mt-4 rounded-md bg-surface px-3 py-2 text-xs text-muted-foreground">
                  {current.followUp}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhaseTwo() {
  return (
    <section id="phase-2" className="scroll-mt-20 border-b border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader
          tag="Phase 2"
          title="Joint Surveillance–IT Demonstration"
          week="Week 4 · 60–90 min"
        >
          A dedicated demonstration to the CMO and National Epidemiologist to
          validate the CMS-specific configured RIEWSS environment and secure
          authorization for the country mission.
        </SectionHeader>

        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Objectives" items={demoObjectives} />
          <Card title="Demonstration components" items={demoComponents} accent />
          <Card title="Deliverables" items={demoDeliverables} />
        </div>

        <div className="mt-8 rounded-xl border border-border bg-card p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Discussion
          </div>
          <p className="mt-2">
            Agenda, roles and responsibilities for the CMS Mission.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">NB:</span> Agenda always
            contains RIEWSS and a 3-day Tingua block. Additional modules are
            trained based on the CMS priorities for the given quarter.
          </p>
        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  items,
  accent = false,
}: {
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </div>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((it) => (
          <li key={it} className="flex gap-2">
            <span
              className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                accent ? "bg-accent" : "bg-primary"
              }`}
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PhaseThree() {
  const [active, setActive] = useState(0);
  const day = missionDays[active];
  return (
    <section id="phase-3" className="scroll-mt-20 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader tag="Phase 3" title="In-Country Mission" week="Week 5–6 · 3–5 days">
          Mission Team Lead <strong className="text-foreground">Brian Armour</strong>{" "}
          with operations & logistics by{" "}
          <strong className="text-foreground">Heidi-Ann Boxer</strong>.
        </SectionHeader>

        <div className="grid gap-8 md:grid-cols-[240px_1fr]">
          <div className="flex flex-row gap-2 overflow-x-auto md:flex-col">
            {missionDays.map((d, i) => (
              <button
                key={d.label}
                onClick={() => setActive(i)}
                className={`shrink-0 rounded-lg border px-4 py-3 text-left transition-colors ${
                  active === i
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <div className="font-display text-lg font-semibold">{d.label}</div>
                <div className="text-xs">
                  {d.items.length} focus area{d.items.length > 1 ? "s" : ""}
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h3 className="font-display text-2xl font-semibold">{day.heading}</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {day.items.map((it) => (
                <div key={it.title} className="rounded-lg border border-border bg-surface/50 p-4">
                  <div className="text-sm font-semibold">{it.title}</div>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {it.body.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhaseFour() {
  const [openIdx, setOpenIdx] = useState<number>(0);
  return (
    <section id="phase-4" className="scroll-mt-20 border-b border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader
          tag="Phase 4"
          title="Six-Week Post-Mission Follow-Up"
          week="Week 7–12"
        >
          Structured checkpoints track adoption, data quality, technical
          performance, and sustainability — culminating in a 6-Week
          Post-Implementation Assessment Report.
        </SectionHeader>

        <div className="space-y-3">
          {checkpoints.map((cp, i) => {
            const open = openIdx === i;
            return (
              <div
                key={cp.label}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <button
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface/60"
                >
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Checkpoint
                    </div>
                    <div className="mt-1 font-display text-xl font-semibold">
                      {cp.label}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden text-sm text-muted-foreground md:inline">
                      Lead · {cp.owner}
                    </span>
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-full border border-border text-sm transition-transform ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                </button>
                {open && (
                  <div className="border-t border-border px-6 py-6">
                    <div className="grid gap-5 md:grid-cols-2">
                      {cp.groups.map((g) => (
                        <div
                          key={g.title}
                          className="rounded-lg border border-border bg-surface/50 p-4"
                        >
                          <div className="flex items-baseline justify-between gap-2">
                            <div className="font-display text-base font-semibold">
                              {g.title}
                            </div>
                            {g.owner && (
                              <span className="text-xs text-muted-foreground">
                                {g.owner}
                              </span>
                            )}
                          </div>
                          <ul className="mt-3 space-y-2 text-sm">
                            {g.markers.map((m) => (
                              <li key={m} className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                {m}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-xl border border-primary/30 bg-primary text-primary-foreground p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
            Final deliverable
          </div>
          <h3 className="mt-2 font-display text-2xl font-semibold">
            6-Week Post-Implementation Assessment Report
          </h3>
          <p className="mt-2 opacity-90">
            Documenting user adoption, data quality, alert performance,
            interoperability status, training outcomes, and recommendations for
            scale-up and long-term sustainability.
          </p>
          <p className="mt-3 text-sm opacity-80">
            Owners: Kern Rocke & Brendon Bhagwandeen
          </p>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section id="team" className="scroll-mt-20 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader tag="Team" title="RIEWSS Implementation Committee" week="Roles" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {team.map((t) => (
            <div key={t.name} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-accent/25 font-display text-sm font-semibold text-accent-foreground">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="font-display text-base font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display text-base font-semibold text-foreground">
            Integrated RIEWSS Surveillance–IT Rollout Framework
          </div>
          <div>CARPHA · Regional Integrated Early Warning Surveillance System</div>
        </div>
        <a href="#top" className="hover:text-foreground">Back to top ↑</a>
      </div>
    </footer>
  );
}

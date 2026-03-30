import {
  Blocks,
  CloudCog,
  Code2,
  Database,
  Layers3,
  Mail,
  Linkedin,
  Github,
  Phone,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export const navigation = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "architecture", label: "Architecture" },
  { id: "contact", label: "Contact" },
];

export const rotatingPhrases = [
  "scalable fintech and enterprise systems",
  "reliable backend services with polished frontends",
  "digital banking products built end to end",
];

export const heroSignals = [
  {
    label: "Experience",
    value: "4 years across fintech, products, and internal tools.",
  },
  {
    label: "Core Stack",
    value: "Java, Spring Boot, React, Next.js, Vue.js, TypeScript.",
  },
  {
    label: "Systems Focus",
    value: "Payments, onboarding, internal systems, and APIs.",
  },
];

export const aboutPrinciples = [
  {
    title: "End-to-end product delivery",
    description: "I build the interface and the system together.",
    icon: ServerCog,
  },
  {
    title: "Banking and enterprise discipline",
    description:
      "Most of my recent work sits in banking, payments, and internal tools.",
    icon: ShieldCheck,
  },
  {
    title: "Frontend quality that serves the product",
    description: "I care about clean UX, clear flows, and reliable execution.",
    icon: Sparkles,
  },
];

export const stackColumns = [
  {
    title: "Frontend Engineering",
    summary: "Frontend systems built to feel sharp and dependable.",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Sass",
      "Bootstrap",
      "Styled Components",
      "Redux",
      "Zustand",
    ],
  },
  {
    title: "Backend & Integration",
    summary: "Services, APIs, and workflows behind real products.",
    items: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "GraphQL",
      "OAuth",
      "RabbitMQ",
      "Kafka",
      "Redis",
    ],
  },
  {
    title: "Data, Ops & Delivery",
    summary: "Data, ops, and delivery habits that keep things stable.",
    items: [
      "Oracle",
      "PostgreSQL",
      "PostGIS",
      "Docker",
      "Git",
      "GitLab",
      "Bitbucket",
      "Monitoring Systems",
    ],
  },
];

export const engineeringLenses = [
  "OWASP-aware secure coding",
  "Reliable API integrations",
  "Operational tooling over manual work",
  "Clear docs and handoffs",
];

export const caseStudies = [
  {
    id: "01",
    title: "NRBVN Account Opening Platform",
    company: "Nova Bank",
    sector: "Digital Banking",
    summary: "Diaspora account opening for Nova Bank.",
    problem: "Remote onboarding had to feel clear and trustworthy.",
    solution: "I built the frontend flow and guided step logic.",
    depth: "State, validation, API steps, and responsive UX.",
    impact: "A cleaner remote onboarding path for diaspora customers.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Form Validation",
      "Responsive UI",
    ],
    highlights: [
      "Diaspora onboarding",
      "Trust-led UX",
      "Step orchestration",
      "Production banking flow",
    ],
  },
  {
    id: "02",
    title: "Merchant & Payments Operations Suite",
    company: "Nova Bank",
    sector: "Payments Infrastructure",
    summary: "Merchant onboarding, terminals, and bill payments.",
    problem: "Manual steps and fragile integrations slowed operations.",
    solution:
      "I built merchant and terminal portals plus bill payment flows with NIBSS and external APIs.",
    depth: "Secure transactions, workflow automation, and middleware work.",
    impact: "Faster onboarding and better payment visibility.",
    technologies: ["Java", "Spring Boot", "React"],
    highlights: [
      "Merchant onboarding automation",
      "Terminal registration workflows",
      "Real-time bill payment status",
      "TellerWorld middleware support",
    ],
  },
  {
    id: "03",
    title: "Yellowdot Learning Platform",
    company: "CyberFleet Integrated Limited",
    sector: "EdTech",
    summary:
      "A learning platform with subscriptions, chat, and recommendations.",
    problem: "The product needed monetisation and engagement without clutter.",
    solution:
      "I led the build of subscriptions, payments, chat, and recommendation flows.",
    depth: "Real-time UX, access control, and close product collaboration.",
    impact: "Stronger engagement and a clearer business model.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Zustand",
      "Payments",
      "Realtime UX",
    ],
    highlights: [
      "Subscription access",
      "Mentor chat",
      "Course recommendations",
      "Cross-functional delivery",
    ],
  },
];

export const supportingProjects = [
  "Banking operations tools: monitoring, assets, referrals, visitor management, and levy collection.",
  "Japaanow: real-time interaction and UX improvements.",
  "Mango App / Music DB: early full-stack work with Vue, Phoenix, and PostgreSQL.",
];

export const experienceTimeline = [
  {
    period: "Mar 2025 - Present",
    title: "Full Stack Developer",
    company: "Nova Bank",
    summary:
      "Building onboarding, payments, merchant tools, and internal banking systems.",
  },
  {
    period: "Dec 2023 - Jan 2025",
    title: "Full Stack Developer",
    company: "CyberFleet Integrated Limited",
    summary: "Led Yellowdot and shipped real-time product work on Japaanow.",
  },
  {
    period: "Jan 2023 - Sep 2023",
    title: "Application Developer Intern",
    company: "Lopworks Limited",
    summary: "Worked with Vue, Phoenix, PostgreSQL, and responsive product UI.",
  },
];

export const experienceSignals = [
  {
    title: "What I do",
    items: [
      "Full-stack product delivery",
      "Payments, APIs, and internal platforms",
      "Frontend clarity with backend discipline",
    ],
  },
  {
    title: "Education",
    items: [
      "B.Eng. Mechanical Engineering, Chukwuemeka Odumegwu Ojukwu University, Second Class Upper",
      "Johns Hopkins University (Coursera): HTML, CSS, JavaScript, and Advanced React",
      "OWASP-guided secure coding training",
    ],
  },
];

export const architectureFlow = [
  {
    title: "Experience Layer",
    copy: "React, Next.js, Vue, TypeScript, and clear product flows.",
    icon: Layers3,
  },
  {
    title: "Service Layer",
    copy: "Java and Spring Boot services for product and payment logic.",
    icon: Code2,
  },
  {
    title: "Integrations & Messaging",
    copy: "NIBSS, payment APIs, REST, GraphQL, and messaging.",
    icon: Workflow,
  },
  {
    title: "Data & Operations",
    copy: "Oracle, PostgreSQL, Docker, monitoring, and internal tools.",
    icon: Database,
  },
];

export const architecturePrinciples = [
  {
    title: "Reduce friction without hiding the rules",
    description: "Make complex flows feel simple without losing control.",
  },
  {
    title: "Automate the manual path",
    description: "Good systems remove repeated manual work.",
  },
  {
    title: "Security and clarity travel together",
    description: "Clear systems are usually safer systems too.",
  },
];

export const contactChannels = [
  {
    label: "Email",
    value: "adabanyaprince@gmail.com",
    href: "mailto:adabanyaprince@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+234 810 851 4620",
    href: "tel:+2348108514620",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/princewilladabanya",
    href: "https://www.linkedin.com/in/princewilladabanya",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Adabanya-princewill",
    href: "https://github.com/Adabanya-princewill",
    icon: Github,
  },
];

export const contactHighlights = [
  {
    title: "Full-stack delivery",
    icon: Rocket,
  },
  {
    title: "Banking systems",
    icon: CloudCog,
  },
  {
    title: "Frontend quality",
    icon: Blocks,
  },
];

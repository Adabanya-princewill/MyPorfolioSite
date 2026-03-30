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
    value:
      "4 years building fintech and enterprise applications across onboarding, payments, and internal tooling.",
  },
  {
    label: "Core Stack",
    value:
      "Java, Spring Boot, React, Next.js, Vue.js, TypeScript, Oracle, PostgreSQL, Docker.",
  },
  {
    label: "Systems Focus",
    value:
      "Financial APIs, secure workflows, operational platforms, monitoring, and product reliability.",
  },
];

export const aboutPrinciples = [
  {
    title: "End-to-end product delivery",
    description:
      "I work across interface design, service integration, data flow, and product logic, which lets me shape the experience and the system together.",
    icon: ServerCog,
  },
  {
    title: "Banking and enterprise discipline",
    description:
      "My recent work spans account opening, merchant onboarding, bill payments, middleware, and internal platforms where trust, speed, and accuracy all matter.",
    icon: ShieldCheck,
  },
  {
    title: "Frontend quality that serves the product",
    description:
      "I care about hierarchy, motion, and visual clarity, but always in service of completion, usability, and confidence in the product.",
    icon: Sparkles,
  },
];

export const stackColumns = [
  {
    title: "Interface Engineering",
    summary:
      "Modern product interfaces built to feel intuitive, responsive, and production-ready.",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
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
    summary:
      "Services and integrations that support secure workflows, messaging, payments, and internal operations.",
    items: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "GraphQL",
      "OAuth",
      "RabbitMQ",
      "Kafka",
      "Redis",
      "NIBSS API",
      "Payment APIs",
      "Biller APIs",
      "Secure API Design",
    ],
  },
  {
    title: "Data, Ops & Delivery",
    summary:
      "Persistence, infrastructure, monitoring, and engineering habits that keep products maintainable.",
    items: [
      "Oracle",
      "PostgreSQL",
      "PostGIS",
      "Docker",
      "Git",
      "GitLab",
      "Bitbucket",
      "Monitoring Systems",
      "Documentation",
      "OWASP Practices",
      "Operational Tooling",
      "Team Handoffs",
    ],
  },
];

export const engineeringLenses = [
  "Secure coding guided by OWASP Top 10 principles",
  "Financial and enterprise API integrations built for reliability",
  "Monitoring, recovery, and operational tooling that remove manual work",
  "Clear documentation and handoff discipline for team continuity",
];

export const caseStudies = [
  {
    id: "01",
    title: "NRBVN Account Opening Platform",
    company: "Nova Bank",
    sector: "Digital Banking",
    summary:
      "A remote banking onboarding experience built for Nigerians in the diaspora opening accounts with Nova Bank.",
    problem:
      "Remote account opening in banking is trust-sensitive and form-heavy. The product needed to make identity capture and step progression feel clear instead of intimidating.",
    solution:
      "I built the frontend for the NRBVN Account Opening platform, shaping an intuitive and efficient interface for guided onboarding and smoother completion across devices.",
    depth:
      "The work required structured state handling, validation-aware forms, API-connected onboarding steps, and UX decisions tuned for a regulated product journey.",
    impact:
      "The platform gave the bank a cleaner remote acquisition surface and helped diaspora customers move through account opening with more confidence and less friction.",
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
    summary:
      "A group of banking products covering merchant onboarding, terminal registration, bill payments, and middleware-backed transaction workflows.",
    problem:
      "Merchant registration, POS deployment, and payment processing involved manual steps, external dependencies, and operational risk whenever systems did not connect cleanly.",
    solution:
      "I designed and developed the POS Merchant Portal and Terminal Registration Portal, integrated with NIBSS, and implemented bill payment features on the Retail Internet Banking platform with real-time transaction updates.",
    depth:
      "This work spanned secure transaction handling, financial API integrations, workflow automation, external biller and payment services, and contribution to the TellerWorld middleware API.",
    impact:
      "The result was faster merchant onboarding, streamlined POS deployment, clearer payment status visibility, and reduced platform licensing pressure for the bank.",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "NIBSS API",
      "Payment APIs",
      "Middleware",
    ],
    highlights: [
      "Merchant onboarding automation",
      "Terminal registration workflows",
      "Real-time bill payment status",
      "TellerWorld middleware support",
    ],
  },
  {
    id: "03",
    title: "Banking Operations Platform Suite",
    company: "Nova Bank",
    sector: "Internal Platforms",
    summary:
      "Internal systems built to improve monitoring, asset visibility, referral workflows, visitor management, and levy collection across operational teams.",
    problem:
      "Bank operations teams were dealing with manual steps, fragmented visibility, and repeated admin effort across support and internal service workflows.",
    solution:
      "I built and contributed to a Windows Service Monitoring system, AlphaBeta Levy Collection Portal, Asset Management Portal, Referral Management Portal, and E-Visitor Management Application.",
    depth:
      "The work combined dashboard thinking, workflow modelling, multi-server monitoring, auto-recovery behaviour, escalation alerts, and tooling designed around how teams actually operate.",
    impact:
      "These systems improved operational efficiency, reduced downtime, automated revenue collection workflows, and gave departments better control over internal processes.",
    technologies: [
      "Java",
      "Spring Boot",
      "Oracle",
      "PostgreSQL",
      "Monitoring",
      "Internal Tooling",
    ],
    highlights: [
      "Service health monitoring",
      "Auto-restart and escalation alerts",
      "Asset and visitor management",
      "Government levy workflow support",
    ],
  },
  {
    id: "04",
    title: "Yellowdot Learning Platform",
    company: "CyberFleet Integrated Limited",
    sector: "EdTech",
    summary:
      "An education platform built around subscriptions, payments, mentor interaction, and recommendation-driven engagement.",
    problem:
      "Yellowdot needed to balance monetisation, mentorship, discovery, and retention without making the product feel fragmented.",
    solution:
      "I led end-to-end development of Yellowdot, integrating subscription-based access and payment flows while building real-time mentor chat and a smart course recommendation system.",
    depth:
      "The product combined real-time features, stateful UX, recommendation logic, payment-aware access control, and close collaboration across engineering and design.",
    impact:
      "The platform became more commercially grounded while significantly improving user engagement and personalisation.",
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
  "Japaanow: collaborated with engineering and design to improve real-time interactions and overall user experience.",
  "Mango App: gained hands-on experience building a mini ecommerce product with Vue.js, Elixir (Phoenix), PostgreSQL, and Tailwind CSS.",
  "Music DB: worked on a relational database application that strengthened backend efficiency, data modelling, and documentation habits.",
];

export const experienceTimeline = [
  {
    period: "Mar 2025 - Present",
    title: "Full Stack Developer",
    company: "Nova Bank",
    summary:
      "Building digital banking products across NRBVN onboarding, payments, merchant tooling, middleware integrations, monitoring systems, and internal operational platforms.",
  },
  {
    period: "Dec 2023 - Jan 2025",
    title: "Full Stack Developer",
    company: "CyberFleet Integrated Limited",
    summary:
      "Led end-to-end development on Yellowdot and contributed to Japaanow, combining subscription and payment workflows, real-time product features, and close collaboration across design and engineering.",
  },
  {
    period: "Jan 2023 - Sep 2023",
    title: "Application Developer Intern",
    company: "Lopworks Limited",
    summary:
      "Built hands-on experience with Vue.js, Elixir (Phoenix), PostgreSQL, Tailwind CSS, responsive interfaces, and project documentation while contributing to Mango App, Music DB, and internal products.",
  },
];

export const experienceSignals = [
  {
    title: "What I bring",
    items: [
      "Full-stack delivery across React, Next.js, and Vue frontends plus Java and Spring Boot services",
      "Experience with financial APIs, payment flows, secure transaction handling, and internal platforms",
      "A product mindset that values intuitive UX, operational clarity, and long-term maintainability",
    ],
  },
  {
    title: "Education & certification",
    items: [
      "B.Eng. Mechanical Engineering, Chukwuemeka Odumegwu Ojukwu University, Second Class Upper",
      "Johns Hopkins University (Coursera): HTML, CSS, and JavaScript for Web Developers, and Advanced React",
      "Secure coding training guided by OWASP Top 10 principles",
      "Focus areas: input validation, authentication security, injection prevention, and secure API design",
    ],
  },
];

export const architectureFlow = [
  {
    title: "Experience Layer",
    copy: "React, Next.js, Vue.js, TypeScript, Tailwind CSS, and product flows designed to feel clear and responsive.",
    icon: Layers3,
  },
  {
    title: "Service Layer",
    copy: "Java and Spring Boot services handling business rules, secure workflows, auth concerns, and transaction logic.",
    icon: Code2,
  },
  {
    title: "Integrations & Messaging",
    copy: "NIBSS, external biller and payment APIs, REST and GraphQL contracts, plus event-driven messaging where needed.",
    icon: Workflow,
  },
  {
    title: "Data & Operations",
    copy: "Oracle, PostgreSQL, PostGIS, Redis, Docker, monitoring, and internal tools that keep operations stable.",
    icon: Database,
  },
];

export const architecturePrinciples = [
  {
    title: "Reduce friction without hiding the rules",
    description:
      "Especially in banking products, the interface should simplify the journey while still respecting compliance, validation, and transaction accuracy.",
  },
  {
    title: "Automate the manual path",
    description:
      "A lot of the highest-leverage systems I have built removed repeated manual onboarding, deployment, monitoring, or internal operations work.",
  },
  {
    title: "Security and clarity travel together",
    description:
      "OWASP-guided practices, clean contracts, and explicit failure handling help products feel safer for both users and teams.",
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

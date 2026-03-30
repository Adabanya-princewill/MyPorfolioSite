import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const skills = [
  {
    title: "Frontend",
    items:
      "React, Next.js, Vue.js, TypeScript, Tailwind CSS, Material UI, Sass, Bootstrap, Styled Components, Redux, Zustand",
  },
  {
    title: "Backend",
    items:
      "Java, Spring Boot, REST APIs, GraphQL, OAuth, RabbitMQ, Kafka, Redis",
  },
  {
    title: "Data & Delivery",
    items:
      "Oracle, PostgreSQL, PostGIS, Docker, Git, GitLab, Bitbucket, OWASP-guided secure coding",
  },
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "Nova Bank",
    period: "Mar 2025 - Present",
    bullets: [
      "Built the frontend for the NRBVN Account Opening platform, enabling Nigerians in the diaspora to open bank accounts through a clear and efficient onboarding flow.",
      "Designed and developed the POS Merchant Portal for direct merchant and POS terminal registration with NIBSS, removing manual onboarding steps.",
      "Implemented bill payment features on the Retail Internet Banking platform with secure transaction handling, external biller and payment API integration, and real-time status updates.",
      "Developed the Terminal Registration Portal and integrated with the NIBSS API to automate merchant terminal registration and streamline POS deployment.",
      "Contributed to the TellerWorld middleware API and helped reduce platform licensing pressure for the bank.",
      "Built internal systems including a Windows Service Monitoring platform, AlphaBeta Levy Collection Portal, Asset Management Portal, Referral Management Portal, and E-Visitor Management Application.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "CyberFleet Integrated Limited",
    period: "Dec 2023 - Jan 2025",
    bullets: [
      "Led end-to-end development of Yellowdot, including subscription-based access and payment flows.",
      "Built key features such as real-time mentor chat and a smart course recommendation system that improved engagement and personalisation.",
      "Collaborated with engineering and design teams on Japaanow, optimising real-time interactions and overall user experience.",
    ],
  },
  {
    role: "Application Developer Intern",
    company: "Lopworks Limited",
    period: "Jan 2023 - Sep 2023",
    bullets: [
      "Worked with Vue.js, Elixir (Phoenix), PostgreSQL, and Tailwind CSS on products including Mango App and Music DB.",
      "Created responsive interfaces for product catalogues, landing pages, and quiz applications.",
      "Documented internal projects to support collaboration, handovers, and long-term development continuity.",
    ],
  },
];

const education = [
  {
    title: "B.Eng. Mechanical Engineering",
    subtitle:
      "Chukwuemeka Odumegwu Ojukwu University, Uli, Anambra State, Nigeria",
    meta: "Second Class Upper",
  },
  {
    title: "HTML, CSS, and JavaScript for Web Developers / Advanced React",
    subtitle: "Johns Hopkins University (Coursera)",
    meta: "Online coursework",
  },
  {
    title: "Secure Coding Guided by OWASP Principles",
    subtitle:
      "Training focused on OWASP Top 10 risks, input validation, authentication security, injection prevention, and secure API design.",
    meta: "Security training",
  },
];

const Resume = () => {
  const location = useLocation();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Princewill Adabanya | Resume";

    const searchParams = new URLSearchParams(location.search);

    if (searchParams.get("print") === "1") {
      const timeoutId = window.setTimeout(() => {
        window.print();
      }, 450);

      return () => {
        document.title = previousTitle;
        window.clearTimeout(timeoutId);
      };
    }

    return () => {
      document.title = previousTitle;
    };
  }, [location.search]);

  return (
    <div className="resume-page min-h-screen bg-black px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="resume-toolbar mx-auto mb-6 flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          variant="outline"
          asChild
          className="w-full rounded-full border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08] hover:text-white sm:w-auto"
        >
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
        </Button>

        <Button
          onClick={() => window.print()}
          className="w-full rounded-full border border-[#C3E41D]/20 bg-[#C3E41D] text-black hover:bg-[#d4f14c] sm:w-auto"
        >
          <Download className="h-4 w-4" />
          Print / Save PDF
        </Button>
      </div>

      <main className="resume-sheet mx-auto max-w-5xl rounded-[2rem] bg-[#f4f0e8] px-6 py-8 text-[#111111] shadow-[0_40px_120px_-50px_rgba(0,0,0,0.95)] sm:px-10 sm:py-10">
        <header className="border-b border-black/10 pb-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.42em] text-[#6d7b18]">
                Resume
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.8rem,7vw,5.4rem)] font-bold uppercase leading-[0.9] tracking-[-0.08em] text-black">
                Princewill Adabanya
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-black/75 sm:text-lg">
                Full stack software developer with experience building scalable
                fintech and enterprise applications using Java, Spring Boot,
                React, and modern web technologies. I care about reliable
                backend services, intuitive user interfaces, and systems that
                improve how teams and customers actually operate.
              </p>
            </div>

            <div className="grid gap-3 text-sm text-black/70 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href="mailto:adabanyaprince@gmail.com"
                className="flex items-center gap-3 rounded-[1rem] bg-black/[0.04] px-4 py-3 transition-colors hover:bg-black/[0.06]"
              >
                <Mail className="h-4 w-4 text-[#6d7b18]" />
                adabanyaprince@gmail.com
              </a>
              <a
                href="tel:+2348108514620"
                className="flex items-center gap-3 rounded-[1rem] bg-black/[0.04] px-4 py-3 transition-colors hover:bg-black/[0.06]"
              >
                <Phone className="h-4 w-4 text-[#6d7b18]" />
                +234 810 851 4620
              </a>
              <div className="flex items-center gap-3 rounded-[1rem] bg-black/[0.04] px-4 py-3">
                <MapPin className="h-4 w-4 text-[#6d7b18]" />
                Lekki, Lagos State, Nigeria
              </div>
              <a
                href="https://www.linkedin.com/in/princewilladabanya"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-[1rem] bg-black/[0.04] px-4 py-3 transition-colors hover:bg-black/[0.06]"
              >
                <Linkedin className="h-4 w-4 text-[#6d7b18]" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Adabanya-princewill"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-[1rem] bg-black/[0.04] px-4 py-3 transition-colors hover:bg-black/[0.06]"
              >
                <Github className="h-4 w-4 text-[#6d7b18]" />
                GitHub
              </a>
            </div>
          </div>
        </header>

        <section className="resume-section mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-[#6d7b18]">
              Experience
            </p>
            <div className="mt-5 space-y-7">
              {experience.map((item) => (
                <article key={`${item.company}-${item.role}`}>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="font-display text-[1.55rem] font-bold uppercase leading-none tracking-[-0.05em] text-black">
                        {item.role}
                      </h2>
                      <p className="mt-2 text-sm uppercase tracking-[0.24em] text-black/50">
                        {item.company}
                      </p>
                    </div>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                      {item.period}
                    </p>
                  </div>
                  <ul className="mt-4 grid gap-3 text-sm leading-7 text-black/72 sm:text-[15px]">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="resume-bullet pl-5">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-8">
            <section>
              <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-[#6d7b18]">
                Core Skills
              </p>
              <div className="mt-5 grid gap-4">
                {skills.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-[1.25rem] bg-black/[0.04] px-5 py-5"
                  >
                    <p className="font-display text-[1.1rem] font-bold uppercase tracking-[-0.04em] text-black">
                      {group.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-black/72">
                      {group.items}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-[#6d7b18]">
                Education & Training
              </p>
              <div className="mt-5 grid gap-4">
                {education.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.25rem] bg-black/[0.04] px-5 py-5"
                  >
                    <p className="font-display text-[1.1rem] font-bold uppercase tracking-[-0.04em] text-black">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-black/72">
                      {item.subtitle}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-black/45">
                      {item.meta}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;

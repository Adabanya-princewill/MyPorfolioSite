import { type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CloudCog,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import PortfolioHero from "@/components/ui/portfolio-hero";
import { cn } from "@/lib/utils";

import {
  aboutPrinciples,
  architectureFlow,
  architecturePrinciples,
  caseStudies,
  contactChannels,
  engineeringLenses,
  experienceSignals,
  experienceTimeline,
  heroSignals,
  stackColumns,
  supportingProjects,
} from "./portfolioData";

const revealTransition = {
  duration: 0.75,
  ease: [0.16, 1, 0.3, 1] as const,
};

type RevealVariant =
  | "rise"
  | "glideLeft"
  | "glideRight"
  | "softScale"
  | "lift";

const getRevealFrames = (variant: RevealVariant) => {
  switch (variant) {
    case "glideLeft":
      return {
        hidden: { opacity: 0, x: -34, y: 10 },
        visible: { opacity: 1, x: 0, y: 0 },
      };
    case "glideRight":
      return {
        hidden: { opacity: 0, x: 34, y: 10 },
        visible: { opacity: 1, x: 0, y: 0 },
      };
    case "softScale":
      return {
        hidden: { opacity: 0, y: 18, scale: 0.975 },
        visible: { opacity: 1, y: 0, scale: 1 },
      };
    case "lift":
      return {
        hidden: { opacity: 0, y: 34, scale: 0.99 },
        visible: { opacity: 1, y: 0, scale: 1 },
      };
    case "rise":
    default:
      return {
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0 },
      };
  }
};

const Reveal = ({
  children,
  className,
  delay = 0,
  variant = "rise",
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  amount?: number;
}) => (
  <RevealInner
    className={className}
    delay={delay}
    variant={variant}
    amount={amount}
  >
    {children}
  </RevealInner>
);

const RevealInner = ({
  children,
  className,
  delay,
  variant,
  amount,
}: {
  children: ReactNode;
  className?: string;
  delay: number;
  variant: RevealVariant;
  amount: number;
}) => {
  const shouldReduceMotion = useReducedMotion();
  const frames = getRevealFrames(variant);

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : frames.hidden}
      whileInView={frames.visible}
      viewport={{ once: false, amount }}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => (
  <div className="max-w-5xl">
    <p className="font-mono text-[11px] uppercase tracking-[0.46em] text-[#C3E41D]">
      {eyebrow}
    </p>
    <h2 className="mt-5 max-w-5xl font-display text-[clamp(2.2rem,6vw,4.8rem)] font-bold uppercase leading-[0.92] tracking-[-0.08em] text-white">
      {title}
    </h2>
    <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-400 sm:text-lg">
      {description}
    </p>
  </div>
);

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.24,
  });

  const downloadCV = () => {
    import("@/utils/pdfGenerator").then(({ generateCV }) => generateCV());
  };

  return (
    <div className="relative overflow-hidden bg-black pb-24 text-white">
      <motion.div
        className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-[#C3E41D]"
        style={{ scaleX: progress }}
      />

      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-18rem] top-[18rem] h-[34rem] w-[34rem] rounded-full bg-[#C3E41D]/10 blur-3xl" />
        <div className="absolute right-[-14rem] top-[45rem] h-[28rem] w-[28rem] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[8rem] left-1/2 h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-[#C3E41D]/6 blur-3xl" />
      </div>

      <main className="relative z-10">
        <section id="hero" className="scroll-mt-24">
          <PortfolioHero onDownloadResume={downloadCV} />
        </section>

        <section className="relative -mt-8 pb-10 sm:-mt-12 sm:pb-16">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <Reveal variant="softScale" amount={0.35}>
              <div className="premium-card rounded-[2rem] px-6 py-7 sm:px-8 sm:py-8">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.42em] text-[#C3E41D]">
                      Profile
                    </p>
                    <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.7rem)] font-bold uppercase leading-[0.94] tracking-[-0.08em] text-white">
                      Full-stack work for banking and product teams.
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-8 text-neutral-400">
                      I build interfaces, services, and internal tools with a
                      focus on clarity and reliability.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {heroSignals.map((signal, index) => (
                      <motion.div
                        key={signal.label}
                        initial={{ opacity: 0, y: 18, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.35 }}
                        transition={{
                          ...revealTransition,
                          delay: 0.1 + index * 0.08,
                        }}
                        className="soft-panel rounded-[1.5rem] px-4 py-5"
                      >
                        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#C3E41D]">
                          {signal.label}
                        </p>
                        <p className="mt-4 text-sm leading-7 text-neutral-300">
                          {signal.value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-24 sm:py-28">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <Reveal variant="glideLeft">
              <SectionHeading
                eyebrow="About"
                title="Full-stack delivery with a strong product eye."
                description="Frontend taste, backend depth, and real product delivery."
              />
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
              <Reveal
                className="premium-card rounded-[2rem] px-6 py-7 sm:px-8 sm:py-9"
                variant="glideLeft"
                amount={0.28}
              >
                <p className="font-display text-[clamp(1.6rem,3vw,2.6rem)] font-bold uppercase leading-[1.02] tracking-[-0.06em] text-white">
                  I build clean interfaces backed by solid systems.
                </p>

                <div className="story-divider mt-8" />

                <div className="mt-8 space-y-6 text-base leading-8 text-neutral-400">
                  <p>
                    Most of my recent work sits in banking, payments, internal
                    platforms, and education products.
                  </p>
                  <p>
                    I work comfortably across Java, Spring Boot, React, Next.js,
                    Vue, TypeScript, Oracle, and PostgreSQL.
                  </p>
                  <p>
                    The goal is simple: clear UX, reliable systems, and clean
                    delivery.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    "Frontend quality that serves the product.",
                    "Engineering that holds up after launch.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="soft-panel-muted rounded-[1.4rem] px-4 py-5 text-sm leading-7 text-neutral-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>

              <div className="grid gap-4">
                {aboutPrinciples.map((principle, index) => {
                  const Icon = principle.icon;

                  return (
                    <Reveal
                      key={principle.title}
                      delay={index * 0.08}
                      variant="glideRight"
                      amount={0.28}
                    >
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="premium-card rounded-[1.7rem] px-5 py-6 sm:px-6"
                      >
                        <div className="flex items-start gap-4">
                          <div className="icon-well flex h-12 w-12 items-center justify-center rounded-2xl text-[#C3E41D]">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-display text-xl font-bold uppercase tracking-[-0.05em] text-white">
                              {principle.title}
                            </p>
                            <p className="mt-3 text-sm leading-7 text-neutral-400 sm:text-base">
                              {principle.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="scroll-mt-24 py-24 sm:py-28">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <Reveal variant="rise">
              <SectionHeading
                eyebrow="Tech Stack"
                title="The stack behind the work."
                description="The tools I use most across frontend, backend, and delivery."
              />
            </Reveal>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {stackColumns.map((column, index) => (
                <Reveal
                  key={column.title}
                  delay={index * 0.08}
                  variant="softScale"
                  amount={0.28}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="premium-card rounded-[1.8rem] px-6 py-7"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.42em] text-[#C3E41D]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-4 font-display text-[1.8rem] font-bold uppercase leading-[1] tracking-[-0.06em] text-white">
                      {column.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">
                      {column.summary}
                    </p>

                    <div className="story-divider mt-7" />

                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {column.items.map((item) => (
                        <span key={item} className="stack-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal
              className="mt-6 premium-card rounded-[1.8rem] px-6 py-7 sm:px-8"
              variant="softScale"
              amount={0.3}
            >
              <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.42em] text-[#C3E41D]">
                    Quality Filters
                  </p>
                  <h3 className="mt-4 font-display text-[2rem] font-bold uppercase leading-[0.98] tracking-[-0.06em] text-white">
                    Standards over stack.
                  </h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {engineeringLenses.map((lens) => (
                    <div
                      key={lens}
                      className="soft-panel-muted rounded-[1.35rem] px-4 py-4 text-sm leading-7 text-neutral-300"
                    >
                      {lens}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 py-24 sm:py-28">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <Reveal variant="glideLeft">
              <SectionHeading
                eyebrow="Experience"
                title="Real teams. Real systems. Real delivery."
                description="A quick look at the teams and products I have worked on."
              />
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
              <Reveal
                className="premium-card rounded-[2rem] px-6 py-7 sm:px-8"
                variant="glideLeft"
                amount={0.28}
              >
                <div className="relative pl-6">
                  <div className="absolute bottom-2 left-[0.55rem] top-2 w-px bg-white/10" />
                  <div className="space-y-9">
                    {experienceTimeline.map((entry) => (
                      <div key={entry.title} className="relative">
                        <div className="absolute -left-6 top-1.5 h-3 w-3 rounded-full bg-[#C3E41D]" />
                        <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-[#C3E41D]">
                          {entry.period}
                        </p>
                        <h3 className="mt-4 font-display text-[1.8rem] font-bold uppercase leading-[1] tracking-[-0.05em] text-white">
                          {entry.title}
                        </h3>
                        <p className="mt-2 text-sm uppercase tracking-[0.28em] text-neutral-500">
                          {entry.company}
                        </p>
                        <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">
                          {entry.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-4">
                {experienceSignals.map((signal, index) => (
                  <Reveal
                    key={signal.title}
                    delay={index * 0.08}
                    variant="glideRight"
                    amount={0.28}
                  >
                    <div className="premium-card rounded-[1.7rem] px-6 py-6">
                      <p className="font-display text-[1.7rem] font-bold uppercase leading-[1] tracking-[-0.05em] text-white">
                        {signal.title}
                      </p>
                      <div className="mt-6 grid gap-3">
                        {signal.items.map((item) => (
                          <div
                            key={item}
                            className="soft-panel-muted rounded-[1.25rem] px-4 py-4 text-sm leading-7 text-neutral-300"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}

                <Reveal delay={0.18} variant="softScale" amount={0.35}>
                  <div className="premium-card rounded-[1.7rem] px-6 py-6">
                    <div className="flex flex-wrap items-center gap-5 text-sm uppercase tracking-[0.22em] text-neutral-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#C3E41D]" />
                        Lekki, Lagos State, Nigeria
                      </div>
                      <div className="flex items-center gap-2">
                        <BriefcaseBusiness className="h-4 w-4 text-[#C3E41D]" />
                        Full-stack product and platform delivery
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-24 sm:py-28">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <Reveal
              className="premium-card rounded-[2.2rem] px-6 py-8 sm:px-10 sm:py-10"
              variant="lift"
              amount={0.22}
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.46em] text-[#C3E41D]">
                    Contact
                  </p>
                  <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.2rem,6vw,5rem)] font-bold uppercase leading-[0.92] tracking-[-0.08em] text-white">
                    Let&apos;s build something.
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
                    Open to full-stack and frontend-leaning product roles.
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Button
                      size="lg"
                      className="rounded-full border border-[#C3E41D]/20 bg-[#C3E41D] px-7 text-black hover:bg-[#d4f14c]"
                      asChild
                    >
                      <a href="mailto:adabanyaprince@gmail.com">
                        Send an email
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full border-white/10 bg-transparent px-7 text-white hover:bg-white/[0.05] hover:text-white"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/princewilladabanya"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.22em] text-neutral-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#C3E41D]" />
                      Lekki, Lagos State, Nigeria
                    </div>
                    <div className="flex items-center gap-2">
                      <BriefcaseBusiness className="h-4 w-4 text-[#C3E41D]" />
                      Open to full-stack product roles
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {contactChannels.map((channel, index) => {
                    const Icon = channel.icon;

                    return (
                      <motion.a
                        key={channel.label}
                        href={channel.href}
                        target={
                          channel.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          channel.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                        initial={{
                          opacity: 0,
                          y: 22,
                          scale: 0.985,
                          x: index % 2 === 0 ? -12 : 12,
                        }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                          ...revealTransition,
                          delay: 0.1 + index * 0.08,
                        }}
                        whileHover={{ y: -4 }}
                        className="soft-panel hover-outline rounded-[1.6rem] px-5 py-5 transition-colors hover:border-[#C3E41D]/35 hover:bg-[#C3E41D]/[0.07]"
                      >
                        <div className="soft-panel-muted flex h-12 w-12 items-center justify-center rounded-2xl text-[#C3E41D]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.3em] text-[#C3E41D]">
                          {channel.label}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-neutral-300">
                          {channel.value}
                        </p>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;

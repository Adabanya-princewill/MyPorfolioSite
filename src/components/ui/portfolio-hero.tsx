import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Download, Menu, X } from "lucide-react";
import profileImage from "@/assets/port_pic.png";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

interface PortfolioHeroProps {
  onDownloadResume?: () => void;
}

interface MenuItem {
  label: string;
  href: string;
  highlight?: boolean;
}

const menuItems: MenuItem[] = [
  { label: "HOME", href: "#hero", highlight: true },
  { label: "ABOUT", href: "#about" },
  { label: "STACK", href: "#stack" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => observer.disconnect();
  }, []);

  const segments = useMemo(
    () => (animateBy === "words" ? text.split(" ") : text.split("")),
    [text, animateBy],
  );

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, index) => (
        <span
          key={`${segment}-${index}`}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView
              ? "translateY(0)"
              : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${index * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && index < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

export default function PortfolioHero({
  onDownloadResume,
}: PortfolioHeroProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeaderBorder, setShowHeaderBorder] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const updateHeaderBorder = () => {
      const heroBottom =
        heroRef.current?.getBoundingClientRect().bottom ?? window.innerHeight;
      const shouldShowBorder = heroBottom <= 96;

      setShowHeaderBorder((current) =>
        current === shouldShowBorder ? current : shouldShowBorder,
      );
    };

    updateHeaderBorder();

    window.addEventListener("scroll", updateHeaderBorder, { passive: true });
    window.addEventListener("resize", updateHeaderBorder);

    return () => {
      window.removeEventListener("scroll", updateHeaderBorder);
      window.removeEventListener("resize", updateHeaderBorder);
    };
  }, []);

  const navigateTo = (href: string) => {
    setIsMenuOpen(false);

    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(195,228,29,0.18),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]"
      />

      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-5 sm:px-6">
        <nav
          className={`mx-auto flex max-w-screen-2xl items-center justify-between rounded-full border px-2 py-2 backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-300 sm:px-4 ${
            showHeaderBorder
              ? "border-white/10 bg-black/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              : "border-transparent bg-black/30"
          }`}
        >
          <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              className="rounded-full p-2 text-neutral-500 transition-colors duration-300 hover:text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              {isMenuOpen ? (
                <X className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2} />
              ) : (
                <Menu className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2} />
              )}
            </button>

            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute left-0 top-full z-[100] mt-3 w-[210px] rounded-[1.5rem] bg-black/90 p-4 shadow-[0_28px_80px_-42px_rgba(0,0,0,0.98),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-2xl md:w-[250px]"
              >
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className="block w-full cursor-pointer px-2 py-2 text-left text-lg font-bold tracking-tight text-white transition-colors duration-300 md:text-xl"
                    style={{
                      color: item.highlight ? "#C3E41D" : "hsl(0 0% 100%)",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.color = "#C3E41D";
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.color = item.highlight
                        ? "#C3E41D"
                        : "hsl(0 0% 100%)";
                    }}
                    onClick={() => navigateTo(item.href)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => navigateTo("#hero")}
            className="text-3xl text-white transition-opacity hover:opacity-80 sm:text-4xl"
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive",
            }}
            aria-label="Return to top"
          >
            P
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white/10 sm:px-4"
          >
            <span className="hidden sm:inline text-black">.</span>
          </button>
        </nav>
      </header>

      <main className="relative flex min-h-screen flex-col">
        <div className="absolute left-1/2 top-[15%] w-full max-w-5xl -translate-x-1/2 px-6 text-center">
          <p
            className="text-[11px] uppercase tracking-[0.5em] text-neutral-500 sm:text-xs"
            style={{ fontFamily: "'Antic', sans-serif" }}
          >
            Full stack developer based in Lagos, Nigeria
          </p>
        </div>

        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4">
          <div className="relative text-center">
            <div>
              <BlurText
                text="PRINCEWILL"
                delay={90}
                animateBy="letters"
                direction="top"
                className="justify-center whitespace-nowrap font-bold uppercase leading-[0.78] tracking-[-0.08em] text-[clamp(3.25rem,13vw,10rem)]"
                style={{
                  color: "#C3E41D",
                  fontFamily: "'Fira Code', monospace",
                }}
              />
            </div>
            <div>
              <BlurText
                text="ADABANYA"
                delay={90}
                animateBy="letters"
                direction="top"
                className="justify-center whitespace-nowrap font-bold uppercase leading-[0.78] tracking-[-0.08em] text-[clamp(3.25rem,13vw,10rem)]"
                style={{
                  color: "#C3E41D",
                  fontFamily: "'Fira Code', monospace",
                }}
              />
            </div>

            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="h-[118px] w-[72px] overflow-hidden rounded-full bg-white/[0.03] shadow-[0_30px_80px_-34px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.08)] transition-transform duration-300 hover:scale-110 sm:h-[156px] sm:w-[94px] md:h-[188px] md:w-[116px] lg:h-[228px] lg:w-[138px]">
                <img
                  src={profileImage}
                  alt="Princewill Adabanya portrait"
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 w-full max-w-4xl -translate-x-1/2 px-6 sm:bottom-20 md:bottom-24 lg:bottom-28">
          <div className="flex flex-col items-center justify-center gap-3">
            <BlurText
              text="Reliable backend services. Intuitive interfaces. Real-world product systems."
              delay={130}
              animateBy="words"
              direction="top"
              className="text-center text-[15px] text-neutral-500 transition-colors duration-300 hover:text-white sm:text-[18px] md:text-[20px] lg:text-[22px]"
              style={{ fontFamily: "'Antic', sans-serif" }}
            />
            <p className="max-w-2xl text-center text-xs uppercase tracking-[0.3em] text-neutral-600 sm:text-sm">
              Java, Spring Boot, React, Next.js, Vue.js, TypeScript, Oracle,
              PostgreSQL
            </p>
          </div>
        </div>

        <button
          type="button"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-500 transition-colors duration-300 hover:text-white md:bottom-8"
          aria-label="Scroll down"
          onClick={scrollDown}
        >
          <ChevronDown className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </main>
    </div>
  );
}

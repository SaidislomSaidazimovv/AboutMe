import { useEffect, useRef } from "react";
import {
  SiVisualstudiocode,
  SiVercel,
  SiNetlify,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiFramer,
  SiGit,
  SiGithub,
  SiAnthropic,
  SiOpenai,
} from "react-icons/si";
import { TbBrandNextjs, TbPointer } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { DiJsBadge } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

// Grouped by discipline instead of arbitrary percentage bars.
const groups = [
  {
    key: "frontend",
    items: [
      { icon: GrReactjs, name: "React" },
      { icon: TbBrandNextjs, name: "Next.js" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: DiJsBadge, name: "JavaScript" },
    ],
  },
  {
    key: "craft",
    items: [
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: IoLogoCss3, name: "CSS3" },
      { icon: AiFillHtml5, name: "HTML5" },
      { icon: SiFramer, name: "Framer Motion" },
    ],
  },
  {
    key: "platform",
    items: [
      { icon: SiSupabase, name: "Supabase" },
      { icon: SiAnthropic, name: "AI Integration" },
    ],
  },
];

const tools = [
  { icon: SiVisualstudiocode, name: "VS Code", link: "https://code.visualstudio.com/" },
  { icon: SiVercel, name: "Vercel", link: "https://vercel.com/" },
  { icon: SiNetlify, name: "Netlify", link: "https://www.netlify.com/" },
  { icon: SiGit, name: "Git", link: "https://git-scm.com/" },
  { icon: SiGithub, name: "GitHub", link: "https://github.com/" },
  { icon: SiAnthropic, name: "Claude Code", link: "https://claude.com/claude-code" },
  { icon: TbPointer, name: "Cursor", link: "https://cursor.com/" },
  { icon: SiOpenai, name: "Codex", link: "https://openai.com/codex/" },
];

const Skillset = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const rowsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (rowsRef.current) {
        gsap.fromTo(
          rowsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const toolLoop = [...tools, ...tools];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--color-bg-2)" }}
    >
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: "56px", maxWidth: "16ch" }}>
          {t.skills.title[0]} <em>{t.skills.title[1]}</em>
        </h2>

        {/* Grouped skill rows — label | items, hairline separated */}
        <div ref={rowsRef} style={{ borderTop: "1px solid var(--color-border-strong)" }}>
          {groups.map((group) => (
            <div
              key={group.key}
              className="skill-row"
              style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr",
                gap: "32px",
                alignItems: "center",
                padding: "28px 0",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "var(--color-muted)",
                }}
              >
                {t.skills.categories[group.key]}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {group.items.map(({ icon: Icon, name }) => (
                  <span
                    key={name}
                    className="chip"
                    style={{ gap: "9px", padding: "9px 16px", fontSize: "14px" }}
                  >
                    <Icon size={18} style={{ color: "var(--color-accent)" }} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools — a single restrained marquee for breadth */}
        <div style={{ marginTop: "48px" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "13px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "var(--color-muted)",
              marginBottom: "20px",
            }}
          >
            {t.skills.toolsTitle}
          </div>
          <div className="tool-marquee">
            <div className="tool-track">
              {toolLoop.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <a
                    key={`${tool.name}-${i}`}
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-hidden={i >= tools.length ? "true" : undefined}
                    tabIndex={i >= tools.length ? -1 : undefined}
                    className="tool-item"
                  >
                    <Icon size={20} />
                    {tool.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .tool-marquee {
          overflow: hidden;
          position: relative;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        .tool-track {
          display: flex;
          gap: 14px;
          width: max-content;
          animation: toolScroll 32s linear infinite;
        }
        .tool-marquee:hover .tool-track { animation-play-state: paused; }
        .tool-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          padding: 12px 20px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          color: var(--color-text);
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.25s ease, border-color 0.25s ease;
        }
        .tool-item:hover { color: var(--color-accent); border-color: var(--color-accent-mid); }
        @keyframes toolScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .tool-track { animation: none !important; flex-wrap: wrap; }
        }
        @media (max-width: 640px) {
          .skill-row { grid-template-columns: 1fr !important; gap: 14px !important; }
        }
      `}</style>
    </section>
  );
};

export default Skillset;

import { useEffect, useRef } from "react";
import {
  SiVisualstudiocode,
  SiVercel,
  SiNetlify,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { DiJsBadge } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: AiFillHtml5, name: "HTML5", percent: 95 },
  { icon: IoLogoCss3, name: "CSS3", percent: 90 },
  { icon: FaSass, name: "Sass", percent: 75 },
  { icon: SiBootstrap, name: "Bootstrap", percent: 80 },
  { icon: SiTailwindcss, name: "Tailwind", percent: 90 },
  { icon: DiJsBadge, name: "JavaScript", percent: 85 },
  { icon: SiTypescript, name: "TypeScript", percent: 65 },
  { icon: GrReactjs, name: "React", percent: 90 },
  { icon: SiRedux, name: "Redux", percent: 70 },
  { icon: TbBrandNextjs, name: "Next.js", percent: 60 },
];

const tools = [
  {
    icon: SiVisualstudiocode,
    name: "VS Code",
    link: "https://code.visualstudio.com/",
  },
  { icon: SiVercel, name: "Vercel", link: "https://vercel.com/" },
  { icon: SiNetlify, name: "Netlify", link: "https://www.netlify.com/" },
  { icon: SiGit, name: "Git", link: "https://git-scm.com/" },
];

const Skillset = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }
      barsRef.current.forEach((bar, i) => {
        if (!bar) return;
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${skills[i].percent}%`,
            duration: 1,
            delay: i * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const cardStyle = {
    background: "var(--color-bg-2)",
    border: "1px solid var(--color-border)",
    borderRadius: "4px",
    padding: "24px 16px",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "default",
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{ padding: "80px 48px", background: "var(--color-bg)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p className="eyebrow" style={{ marginBottom: "16px" }}>
          {t.skills.eyebrow}
        </p>
        <h2 className="section-title" style={{ marginBottom: "48px" }}>
          {t.skills.title[0]}
          <br />
          <em>{t.skills.title[1]}</em>
        </h2>

        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "16px",
            marginBottom: "48px",
          }}
          className="skills-grid"
        >
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-gold-mid)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Icon
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "var(--color-text)",
                    margin: "0 auto 12px",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    fontSize: "14px",
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                    color: "var(--color-text)",
                    marginBottom: "12px",
                  }}
                >
                  {skill.name}
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "2px",
                    background: "rgba(201,168,76,0.1)",
                    borderRadius: "1px",
                    marginBottom: "6px",
                  }}
                >
                  <div
                    ref={(el) => (barsRef.current[i] = el)}
                    style={{
                      height: "100%",
                      background: "var(--color-gold)",
                      borderRadius: "1px",
                      width: "0%",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--color-gold)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {skill.percent}%
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 300,
            color: "var(--color-text)",
            marginBottom: "24px",
          }}
        >
          <em style={{ color: "var(--color-gold)" }}>{t.skills.toolsTitle}</em>
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            maxWidth: "600px",
          }}
          className="tools-grid"
        >
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <a
                key={tool.name}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...cardStyle,
                  textDecoration: "none",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-gold-mid)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Icon
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "var(--color-text)",
                    margin: "0 auto 12px",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    fontSize: "14px",
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                    color: "var(--color-text)",
                  }}
                >
                  {tool.name}
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          #skills { padding: 60px 24px !important; }
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .tools-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};

export default Skillset;

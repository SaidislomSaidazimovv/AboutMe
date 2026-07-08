/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

// Pulled from the resume. Add `deployLink` once live URLs are ready.
const projects = [
  {
    id: 1,
    title: "One Night One Humanity",
    initials: "ON",
    year: "2026",
    gradient: "linear-gradient(135deg, #0f9d6e 0%, #0b6e6e 100%)",
    description:
      "Luxury event landing site for a 501(c)(3) nonprofit, built in Framer. Parallax video, scroll-triggered animation, a 23+ speaker showcase, multi-page architecture, and a custom invitation form. Featured in Daily Mail, People, and Business Insider.",
    technologies: ["Framer", "Animation", "Multi-page"],
    deployLink: "https://onenightonehumanity.com/",
    featured: true,
  },
  {
    id: 2,
    title: "The Butterfly Challenge",
    initials: "TB",
    year: "2026",
    gradient: "linear-gradient(135deg, #1f9d55 0%, #0f7a8a 100%)",
    description:
      "Viral mental-health awareness platform for a 501(c)(3) nonprofit. A 40+ component SPA with an interactive 4-step protocol, crossfading carousel, email, analytics, and error tracking.",
    technologies: ["React", "TypeScript", "Supabase", "Vercel"],
    deployLink: "https://thebutterflychallenge.com/",
    featured: true,
  },
  {
    id: 3,
    title: "Vizionize AI",
    initials: "VA",
    year: "2025",
    gradient: "linear-gradient(135deg, #10b981 0%, #0f9d6e 100%)",
    description:
      "Product landing page for Vizionize AI, a smart-glasses and optics-cleaner brand. Built in Framer with smooth scroll animation, an interactive FAQ, product detail tables, multi-page routing, and Stripe payments.",
    technologies: ["Framer", "Stripe", "Landing Page"],
    deployLink: "https://shaggy-darlings-165755.framer.app/",
    featured: true,
  },
];

const Monogram = ({ project, tall }) => (
  <div
    className="proj-visual"
    style={{
      position: "relative",
      minHeight: tall ? "300px" : "170px",
      height: "100%",
      background: project.gradient,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}
  >
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.14,
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    />
    <span
      style={{
        position: "absolute",
        top: "16px",
        left: "18px",
        color: "rgba(255,255,255,0.85)",
        fontFamily: "var(--font-display)",
        fontVariantNumeric: "tabular-nums",
        fontSize: "13px",
        fontWeight: 500,
        letterSpacing: "0.05em",
      }}
    >
      {project.year}
    </span>
    <span
      style={{
        fontFamily: "var(--font-display)",
        fontSize: tall ? "104px" : "56px",
        fontWeight: 700,
        letterSpacing: "-0.03em",
        color: "#ffffff",
        textShadow: "0 8px 30px rgba(0,0,0,0.18)",
      }}
    >
      {project.initials}
    </span>
  </div>
);

const TechTags = ({ list }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
    {list.map((tech) => (
      <span
        key={tech}
        style={{
          border: "1px solid var(--color-accent-dim)",
          background: "var(--color-accent-soft)",
          padding: "5px 13px",
          borderRadius: "var(--radius-pill)",
          fontSize: "12px",
          color: "var(--color-accent-strong)",
          fontFamily: "var(--font-body)",
          fontWeight: 500,
        }}
      >
        {tech}
      </span>
    ))}
  </div>
);

const LiveButton = ({ project, t }) =>
  project.deployLink ? (
    <a
      href={project.deployLink}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-ghost magnetic"
      style={{ marginTop: "auto", alignSelf: "flex-start", padding: "11px 22px" }}
    >
      {t.projects.liveDemo}
      <FiArrowUpRight size={16} />
    </a>
  ) : (
    <span
      style={{
        marginTop: "auto",
        fontSize: "12.5px",
        color: "var(--color-faint)",
        fontFamily: "var(--font-body)",
      }}
    >
      {t.projects.soonLink}
    </span>
  );

const hoverIn = (e) => {
  e.currentTarget.style.borderColor = "var(--color-accent-mid)";
  e.currentTarget.style.boxShadow = "var(--shadow-accent)";
  e.currentTarget.style.transform = "translateY(-4px)";
};
const hoverOut = (e) => {
  e.currentTarget.style.borderColor = "var(--color-border)";
  e.currentTarget.style.boxShadow = "none";
  e.currentTarget.style.transform = "translateY(0)";
};

const cardBase = {
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-lg)",
  overflow: "hidden",
  transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
};

const Projects = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const [lead, ...rest] = projects;

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.querySelectorAll(".proj-card"),
          { opacity: 0, y: 44 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section">
      <div className="container">
        <p className="eyebrow" style={{ marginBottom: "18px" }}>
          {t.projects.eyebrow}
        </p>
        <h2 className="section-title" style={{ marginBottom: "56px" }}>
          {t.projects.title[0]} <em>{t.projects.title[1]}</em>
        </h2>

        {projects.length === 0 ? (
          <div
            style={{
              border: "1px dashed var(--color-border)",
              borderRadius: "var(--radius)",
              padding: "72px 32px",
              textAlign: "center",
              color: "var(--color-muted)",
              fontFamily: "var(--font-body)",
              fontSize: "15px",
            }}
          >
            {t.projects.soon}
          </div>
        ) : (
          <div ref={gridRef} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Lead project — asymmetric split */}
            <article
              className="proj-card proj-lead"
              style={{ ...cardBase, display: "grid", gridTemplateColumns: "1fr 1fr" }}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <div
                style={{
                  padding: "40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "var(--color-accent)",
                    fontWeight: 600,
                  }}
                >
                  {t.projects.featured}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "var(--color-heading)",
                    lineHeight: 1.1,
                  }}
                >
                  {lead.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14.5px",
                    color: "var(--color-muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {lead.description}
                </p>
                <TechTags list={lead.technologies} />
                <LiveButton project={lead} t={t} />
              </div>
              <Monogram project={lead} tall />
            </article>

            {/* Remaining — 2-col row */}
            <div
              className="proj-row"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}
            >
              {rest.map((project) => (
                <article
                  key={project.id}
                  className="proj-card"
                  style={{ ...cardBase, display: "flex", flexDirection: "column" }}
                  onMouseEnter={hoverIn}
                  onMouseLeave={hoverOut}
                >
                  <Monogram project={project} />
                  <div
                    style={{
                      padding: "26px 28px 28px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "20px",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        color: "var(--color-heading)",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "13.5px",
                        color: "var(--color-muted)",
                        lineHeight: 1.65,
                      }}
                    >
                      {project.description}
                    </p>
                    <TechTags list={project.technologies} />
                    <LiveButton project={project} t={t} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 860px) {
          .proj-lead { grid-template-columns: 1fr !important; }
          .proj-lead .proj-visual { order: -1; min-height: 220px !important; }
          .proj-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;

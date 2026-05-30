import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

// Pulled from the resume. Add `deployLink` (and optional `image`) once live URLs are ready.
const projects = [
  {
    id: 1,
    title: "One Night One Humanity",
    initials: "ON",
    year: "2026",
    gradient: "linear-gradient(135deg, #0f9d6e 0%, #0b6e6e 100%)",
    description:
      "Luxury event landing site for a 501(c)(3) nonprofit, built in Framer. Parallax video, scroll-triggered animations, a 23+ speaker showcase, multi-page architecture, and a custom invitation form. Featured in Daily Mail, People & Business Insider.",
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
      "Viral mental-health awareness platform for a 501(c)(3) nonprofit — “60 Seconds. 3 Names. 24 Hours.” A 40+ component SPA with an interactive 4-step protocol, crossfading carousel, email, analytics, and error tracking.",
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
      "Product landing page for Vizionize AI — a smart-glasses & optics-cleaner brand. Built in Framer with smooth scroll animations, an interactive FAQ, product detail tables, multi-page routing, and Stripe payments.",
    technologies: ["Framer", "Stripe", "Landing Page"],
    deployLink: "https://shaggy-darlings-165755.framer.app/",
    featured: true,
  },
];

const Projects = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ padding: "80px 48px", background: "var(--color-bg)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p className="eyebrow" style={{ marginBottom: "16px" }}>
          {t.projects.eyebrow}
        </p>
        <h2 className="section-title" style={{ marginBottom: "48px" }}>
          {t.projects.title[0]}
          <br />
          <em>{t.projects.title[1]}</em>
        </h2>

        {projects.length === 0 ? (
          <div
            style={{
              border: "1px dashed var(--color-border)",
              borderRadius: "8px",
              padding: "64px 32px",
              textAlign: "center",
              color: "var(--color-muted)",
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              letterSpacing: "0.01em",
            }}
          >
            {t.projects.soon}
          </div>
        ) : (
          <div
            ref={cardsRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
            className="projects-grid"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--color-bg-2)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent-mid)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(15,157,110,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Monogram panel (placeholder until a screenshot is added) */}
                <div
                  style={{
                    height: "160px",
                    position: "relative",
                    background: project.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {project.featured && (
                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: "rgba(255,255,255,0.92)",
                        color: "#0b6e4f",
                        fontSize: "10px",
                        fontWeight: 600,
                        padding: "4px 10px",
                        borderRadius: "100px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {t.projects.featured}
                    </span>
                  )}
                  <span
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "16px",
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "12px",
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {project.year}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "52px",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "#ffffff",
                    }}
                  >
                    {project.initials}
                  </span>
                </div>

                {/* Body */}
                <div
                  style={{
                    padding: "20px 24px 24px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "18px",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: "var(--color-text)",
                      marginBottom: "10px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "var(--color-muted)",
                      lineHeight: 1.65,
                      marginBottom: "16px",
                    }}
                  >
                    {project.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "20px",
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          border: "1px solid var(--color-accent-dim)",
                          background: "var(--color-accent-soft)",
                          padding: "4px 12px",
                          borderRadius: "100px",
                          fontSize: "11px",
                          color: "var(--color-accent-strong)",
                          letterSpacing: "0.03em",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.deployLink ? (
                    <a
                      href={project.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginTop: "auto",
                        display: "block",
                        textAlign: "center",
                        padding: "10px",
                        border: "1px solid var(--color-accent-mid)",
                        borderRadius: "6px",
                        color: "var(--color-accent-strong)",
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        fontWeight: 500,
                        letterSpacing: "0.04em",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "var(--color-accent-soft)";
                        e.currentTarget.style.borderColor =
                          "var(--color-accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.borderColor =
                          "var(--color-accent-mid)";
                      }}
                    >
                      {t.projects.liveDemo}
                    </a>
                  ) : (
                    <span
                      style={{
                        marginTop: "auto",
                        display: "block",
                        textAlign: "center",
                        padding: "10px",
                        border: "1px dashed var(--color-border)",
                        borderRadius: "6px",
                        color: "var(--color-muted)",
                        fontFamily: "var(--font-body)",
                        fontSize: "12px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {t.projects.soonLink}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          #projects { padding: 60px 24px !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;

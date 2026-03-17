import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";
import makeUpStore from "../../assets/makeUpStore.webp";
import weather from "../../assets/weather.webp";
import paymentMethod from "../../assets/payment-method-icon-simple-element-from-economic-vector-34717818.avif";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "MakeUpStore",
    description:
      "Modern e-commerce platform for makeup products with advanced filtering and cart functionality.",
    image: makeUpStore,
    technologies: ["React", "Tailwind CSS", "Redux", "API"],
    deployLink: "https://make-up-store-ruby.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Payment Method",
    description:
      "A modern payment method UI for fintech products, focusing on clean layout and smooth UX.",
    image: paymentMethod,
    technologies: ["React", "TailwindCSS", "JavaScript"],
    deployLink: "https://payment-method-lake.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A sleek weather application with city search, daily forecast, and modern visual design.",
    image: weather,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    deployLink: "https://weather-chi-woad.vercel.app/",
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
                background: "var(--color-bg-2)",
                border: "1px solid var(--color-border)",
                borderRadius: "4px",
                overflow: "hidden",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--color-gold-mid)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--color-border)")
              }
            >
              {/* Image */}
              <div
                style={{
                  height: "200px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {project.featured && (
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      zIndex: 2,
                      background: "var(--color-gold)",
                      color: "var(--color-bg)",
                      fontSize: "11px",
                      fontWeight: 500,
                      padding: "4px 12px",
                      borderRadius: "2px",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {t.projects.featured}
                  </span>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>

              {/* Body */}
              <div style={{ padding: "20px 24px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "var(--color-text)",
                    marginBottom: "8px",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "var(--color-muted)",
                    lineHeight: 1.6,
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
                    marginBottom: "16px",
                  }}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        border: "1px solid rgba(201,168,76,0.2)",
                        padding: "4px 12px",
                        borderRadius: "2px",
                        fontSize: "11px",
                        color: "var(--color-gold)",
                        letterSpacing: "0.03em",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "10px",
                    border: "1px solid rgba(201,168,76,0.3)",
                    borderRadius: "2px",
                    color: "var(--color-gold)",
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                    e.currentTarget.style.borderColor = "var(--color-gold)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor =
                      "rgba(201,168,76,0.3)";
                  }}
                >
                  {t.projects.liveDemo}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #projects { padding: 60px 24px !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;

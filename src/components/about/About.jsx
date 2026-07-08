import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        }
      );
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const highlightBio = (bio, highlights) => {
    let result = bio;
    highlights.forEach((word) => {
      result = result.replace(
        word,
        `<span style="color:var(--color-heading);font-weight:500">${word}</span>`
      );
    });
    return result;
  };

  const details = [
    { label: t.about.labels.focus, value: t.about.focus, accent: true },
    { label: t.about.labels.location, value: t.about.location },
    { label: t.about.labels.status, value: t.about.status, accent: true },
  ];

  return (
    <section id="about" ref={sectionRef} className="section">
      <div
        className="container about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: "72px",
          alignItems: "start",
        }}
      >
        {/* Left — statement + bio + stack */}
        <div ref={leftRef} style={{ opacity: 0 }}>
          <h2 className="section-title" style={{ marginBottom: "36px" }}>
            {t.about.title[0]} <em>{t.about.title[1]}</em>
          </h2>
          <p
            className="lead"
            style={{ marginBottom: "40px", fontWeight: 300 }}
            dangerouslySetInnerHTML={{
              __html: highlightBio(t.about.bio, t.about.bioHighlights),
            }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {t.about.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right — detail rows, hairline-separated */}
        <div
          ref={rightRef}
          style={{
            opacity: 0,
            borderTop: "1px solid var(--color-border-strong)",
          }}
        >
          {details.map((d) => (
            <div
              key={d.label}
              style={{
                padding: "22px 4px",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "var(--color-faint)",
                  marginBottom: "8px",
                }}
              >
                {d.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: d.accent ? "var(--color-accent)" : "var(--color-heading)",
                }}
              >
                {d.value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
        }
      `}</style>
    </section>
  );
};

export default About;

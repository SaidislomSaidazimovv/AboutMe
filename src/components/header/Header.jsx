import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FiArrowDownRight, FiDownload } from "react-icons/fi";
import Aurora from "./Aurora.jsx";
import { useLanguage } from "../../context/LanguageContext";
import cv from "../../assets/Saidislom_Saidazimov_Modern_Resume.pdf";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Header = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const stats = [t.hero.stat1, t.hero.stat2, t.hero.stat3];

  return (
    <section
      id="home"
      className="section"
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "96px",
      }}
    >
      <Aurora />

      <div
        className="container hero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1.55fr 1fr",
          gap: "56px",
          alignItems: "center",
        }}
      >
        {/* Left — the statement */}
        <div>
          <motion.p {...fadeUp(0.1)} className="eyebrow" style={{ marginBottom: "28px" }}>
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 7.5vw, 5.75rem)",
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 0.98,
              color: "var(--color-heading)",
            }}
          >
            Saidislom
            <br />
            <span style={{ color: "var(--color-accent)" }}>Saidazimov</span>
          </motion.h1>

          <motion.div
            {...fadeUp(0.4)}
            className="mono-label"
            style={{
              marginTop: "22px",
              fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
              fontWeight: 500,
              color: "var(--color-muted)",
              height: "1.6em",
            }}
          >
            <span style={{ color: "var(--color-accent)", marginRight: "10px" }}>/</span>
            <Typewriter
              words={t.hero.roles}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </motion.div>

          <motion.div
            {...fadeUp(0.58)}
            style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "40px" }}
          >
            <a href={cv} download="Saidislom-Saidazimov-CV.pdf" className="btn btn-primary magnetic">
              <FiDownload size={16} />
              {t.hero.btn1}
            </a>
            <button onClick={scrollToProjects} className="btn btn-ghost magnetic">
              {t.hero.btn2}
              <FiArrowDownRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Right — status + stats, grouped by hairlines (no card boxes) */}
        <motion.div
          {...fadeUp(0.7)}
          className="hero-side"
          style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              alignSelf: "flex-start",
              padding: "8px 16px",
              borderRadius: "var(--radius-pill)",
              border: "1px solid var(--color-border)",
              background: "var(--color-surface)",
              marginBottom: "28px",
            }}
          >
            <span className="pulse-dot" />
            <span
              style={{
                fontSize: "12.5px",
                fontWeight: 500,
                color: "var(--color-text)",
                letterSpacing: "0.01em",
              }}
            >
              {t.about.status}
            </span>
          </div>

          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: "16px",
                padding: "18px 0",
                borderTop: "1px solid var(--color-border)",
              }}
            >
              <span
                className="mono-label"
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3rem)",
                  fontWeight: 600,
                  color: "var(--color-heading)",
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--color-muted)",
                  textAlign: "right",
                  maxWidth: "10ch",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-accent);
          box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0.5);
          animation: pulseDot 2.2s ease-out infinite;
        }
        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0.5); }
          70% { box-shadow: 0 0 0 8px rgba(var(--accent-rgb), 0); }
          100% { box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pulse-dot { animation: none !important; }
        }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-side { max-width: 420px; }
        }
        @media (max-width: 768px) {
          #home { min-height: auto !important; padding-top: 120px !important; }
        }
      `}</style>
    </section>
  );
};

export default Header;

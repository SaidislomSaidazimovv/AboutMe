import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import ConnectedDots from "./ConnectedDots.jsx";
import { useLanguage } from "../../context/LanguageContext";
import cv from "../../assets/Saidislom_Saidazimov_Modern_Resume.pdf";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
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
      style={{
        position: "relative",
        minHeight: "95vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "80px 48px",
      }}
    >
      <ConnectedDots />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left column */}
        <div>
          <motion.p
            {...fadeUp(0.1)}
            className="eyebrow"
            style={{ marginBottom: "24px" }}
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--color-text)",
              marginBottom: "8px",
            }}
          >
            Saidazimov
          </motion.h1>
          <motion.h1
            {...fadeUp(0.35)}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.05,
              color: "var(--color-gold)",
              marginBottom: "24px",
            }}
          >
            Saidislom
          </motion.h1>

          <motion.div
            {...fadeUp(0.5)}
            style={{
              fontSize: "16px",
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              color: "var(--color-muted)",
              height: "28px",
              marginBottom: "40px",
            }}
          >
            <Typewriter
              words={t.hero.roles}
              loop
              cursor
              cursorStyle="|"
              cursorColor="var(--color-gold)"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </motion.div>

          <motion.div
            {...fadeUp(0.7)}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <a
              href={cv}
              download="Saidazimov-Saidislom.pdf"
              className="magnetic"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                background: "var(--color-gold)",
                color: "var(--color-bg)",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                border: "none",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {t.hero.btn1}
            </a>
            <button
              onClick={scrollToProjects}
              className="magnetic"
              style={{
                padding: "14px 32px",
                background: "transparent",
                color: "var(--color-gold)",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderRadius: "2px",
                border: "1px solid var(--color-gold-mid)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                e.currentTarget.style.borderColor = "var(--color-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "var(--color-gold-mid)";
              }}
            >
              {t.hero.btn2}
            </button>
          </motion.div>
        </div>

        {/* Right column — stats */}
        <div
          className="hero-stats"
          style={{
            borderLeft: "1px solid rgba(201,168,76,0.15)",
            paddingLeft: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                border: "1px solid var(--color-border)",
                background: "rgba(201,168,76,0.03)",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "48px",
                  fontWeight: 300,
                  color: "var(--color-gold)",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "var(--color-muted)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #home { padding: 60px 24px !important; min-height: auto !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hero-stats { border-left: none !important; padding-left: 0 !important; }
        }
      `}</style>
    </section>
  );
};

export default Header;

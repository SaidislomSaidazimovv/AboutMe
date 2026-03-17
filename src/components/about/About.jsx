import { useEffect, useRef } from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiTelegram } from "react-icons/si";
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
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
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
        `<span style="color:var(--color-text);font-weight:400">${word}</span>`
      );
    });
    return result;
  };

  const socials = [
    {
      icon: BsLinkedin,
      href: "https://www.linkedin.com/in/saidislom-saidazimov-48b9a3302/",
      label: "LinkedIn",
    },
    {
      icon: SiTelegram,
      href: "https://t.me/arisu_stt",
      label: "Telegram",
    },
  ];

  const infoCards = [
    { label: "Focus", value: t.about.focus, accent: true },
    { label: "Location", value: t.about.location, accent: false },
    { label: "Status", value: t.about.status, accent: false, gold: true },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ padding: "80px 48px", background: "var(--color-bg)" }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <p className="eyebrow" style={{ marginBottom: "16px" }}>
          {t.about.eyebrow}
        </p>
        <h2 className="section-title" style={{ marginBottom: "48px" }}>
          {t.about.title[0]}
          <br />
          <em>{t.about.title[1]}</em>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
          }}
          className="about-grid"
        >
          {/* Left */}
          <div ref={leftRef} style={{ opacity: 0 }}>
            <p
              style={{
                fontSize: "16px",
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "var(--color-muted)",
                marginBottom: "32px",
              }}
              dangerouslySetInnerHTML={{
                __html: highlightBio(t.about.bio, t.about.bioHighlights),
              }}
            />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {t.about.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    border: "1px solid rgba(201,168,76,0.2)",
                    padding: "8px 20px",
                    borderRadius: "2px",
                    fontSize: "13px",
                    color: "var(--color-gold)",
                    letterSpacing: "0.05em",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef} style={{ opacity: 0 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "32px",
              }}
            >
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  style={{
                    borderLeft: card.accent
                      ? "2px solid var(--color-gold)"
                      : "2px solid var(--color-gold-mid)",
                    paddingLeft: "16px",
                    padding: "12px 16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      color: "var(--color-muted)",
                      marginBottom: "4px",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {card.label}
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      color: card.gold
                        ? "var(--color-gold)"
                        : "var(--color-text)",
                      fontFamily: "var(--font-body)",
                      fontWeight: 400,
                    }}
                  >
                    {card.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: "12px" }}>
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: "44px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(201,168,76,0.2)",
                      borderRadius: "2px",
                      color: "var(--color-gold)",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-gold)";
                      e.currentTarget.style.background =
                        "rgba(201,168,76,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(201,168,76,0.2)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #about { padding: 60px 24px !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
};

export default About;

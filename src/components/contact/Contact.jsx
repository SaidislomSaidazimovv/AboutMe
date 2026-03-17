import { useEffect, useRef } from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiTelegram } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

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

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: "80px 48px",
        background: "var(--color-bg)",
        textAlign: "center",
      }}
    >
      <div
        ref={contentRef}
        style={{ maxWidth: "700px", margin: "0 auto", opacity: 0 }}
      >
        <p className="eyebrow" style={{ marginBottom: "16px" }}>
          {t.contact.eyebrow}
        </p>
        <h2 className="section-title" style={{ marginBottom: "24px" }}>
          {t.contact.title[0]}
          <br />
          <em>{t.contact.title[1]}</em>
        </h2>
        <p
          style={{
            fontSize: "14px",
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            color: "var(--color-muted)",
            lineHeight: 1.7,
            marginBottom: "40px",
          }}
        >
          {t.contact.sub}
        </p>

        <a
          href="mailto:saidislomsaidazimov@gmail.com"
          className="gold-underline magnetic"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontStyle: "italic",
            color: "var(--color-gold)",
            textDecoration: "none",
            paddingBottom: "4px",
          }}
        >
          saidislomsaidazimov@gmail.com
        </a>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "32px",
          }}
        >
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
                  e.currentTarget.style.background = "rgba(201,168,76,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #contact { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;

import { useEffect, useRef } from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiTelegram } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const EMAIL = "saidazimovsaidislom97@gmail.com";

const Contact = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 56 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
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
    { icon: SiTelegram, href: "https://t.me/arisu_stt", label: "Telegram" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--color-bg-2)", overflow: "hidden" }}
    >
      <div
        ref={contentRef}
        className="container"
        style={{ opacity: 0, textAlign: "center", position: "relative" }}
      >
        <h2
          className="section-title"
          style={{ fontSize: "clamp(2.4rem, 7vw, 4.5rem)", marginBottom: "24px" }}
        >
          {t.contact.title[0]} <em>{t.contact.title[1]}</em>
        </h2>
        <p
          className="lead"
          style={{ margin: "0 auto 44px", fontWeight: 300, textAlign: "center" }}
        >
          {t.contact.sub}
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="email-link magnetic"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 3.4vw, 2.4rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "var(--color-heading)",
            textDecoration: "none",
          }}
        >
          {EMAIL}
          <FiArrowUpRight className="email-arrow" size={28} style={{ color: "var(--color-accent)" }} />
        </a>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "48px",
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
                className="chip magnetic"
                style={{ gap: "9px", padding: "10px 20px", fontSize: "14px" }}
              >
                <Icon size={16} />
                {s.label}
              </a>
            );
          })}
        </div>
      </div>
      <style>{`
        .email-link { position: relative; }
        .email-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 100%;
          height: 1.5px;
          background: var(--color-accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .email-link:hover::after { transform: scaleX(1); }
        .email-link:hover .email-arrow { transform: translate(3px, -3px); }
        .email-arrow { transition: transform 0.3s ease; }
      `}</style>
    </section>
  );
};

export default Contact;

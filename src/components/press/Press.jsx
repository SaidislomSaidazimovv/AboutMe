import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

// Real coverage of the "One Night One Humanity" project (from the resume).
const outlets = [
  "Daily Mail",
  "People",
  "Entertainment Tonight",
  "Yahoo Finance",
  "Business Insider",
];

const Press = () => {
  const { t } = useLanguage();
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current.querySelectorAll(".press-mark"),
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 88%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "48px var(--gutter) 8px",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.24em",
            color: "var(--color-faint)",
            marginBottom: "26px",
          }}
        >
          {t.press.title}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "18px 40px",
          }}
        >
          {outlets.map((name) => (
            <span key={name} className="press-mark">
              {name}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .press-mark {
          font-family: var(--font-display);
          font-size: clamp(1.05rem, 2vw, 1.5rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--color-faint);
          white-space: nowrap;
          transition: color 0.3s ease, transform 0.3s ease;
          cursor: default;
        }
        .press-mark:hover {
          color: var(--color-heading);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default Press;

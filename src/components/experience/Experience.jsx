import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (listRef.current) {
        gsap.fromTo(
          listRef.current.children,
          { opacity: 0, y: 34 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 74%" },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: "56px" }}>
          {t.experience.title[0]} <em>{t.experience.title[1]}</em>
        </h2>

        <div ref={listRef} className="timeline">
          {t.experience.items.map((item, i) => (
            <div key={i} className="tl-item">
              <div className="tl-period">
                <span className="mono-label">{item.period}</span>
                {item.current && <span className="tl-now">{t.experience.now}</span>}
              </div>

              <div className="tl-body">
                <span className={`tl-dot${item.current ? " tl-dot-live" : ""}`} />
                <h3 className="tl-role">{item.role}</h3>
                <div className="tl-org">
                  {item.org}
                  <span className="tl-sep">·</span>
                  <span style={{ color: "var(--color-faint)" }}>{item.location}</span>
                </div>
                <p className="tl-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tl-item {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 32px;
        }
        .tl-period {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          padding-top: 2px;
          font-size: 14px;
          color: var(--color-muted);
          letter-spacing: 0.02em;
        }
        .tl-now {
          display: inline-flex;
          align-items: center;
          font-size: 10.5px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--color-accent);
          background: var(--color-accent-soft);
          border: 1px solid var(--color-accent-dim);
          padding: 3px 10px;
          border-radius: var(--radius-pill);
        }
        .tl-body {
          position: relative;
          padding-left: 34px;
          padding-bottom: 44px;
          border-left: 1px solid var(--color-border);
        }
        .tl-item:last-child .tl-body { padding-bottom: 4px; }
        .tl-dot {
          position: absolute;
          left: -6px;
          top: 4px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: var(--color-bg);
          border: 2px solid var(--color-border-strong);
        }
        .tl-dot-live {
          background: var(--color-accent);
          border-color: var(--color-accent);
          box-shadow: 0 0 0 4px var(--color-accent-soft);
        }
        .tl-role {
          font-family: var(--font-display);
          font-size: clamp(1.15rem, 2vw, 1.4rem);
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--color-heading);
          margin-bottom: 8px;
        }
        .tl-org {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: var(--color-accent);
          margin-bottom: 14px;
        }
        .tl-sep { color: var(--color-faint); }
        .tl-desc {
          font-family: var(--font-body);
          font-size: 14.5px;
          line-height: 1.7;
          color: var(--color-muted);
          max-width: 60ch;
        }
        @media (max-width: 640px) {
          .tl-item { grid-template-columns: 1fr; gap: 12px; }
          .tl-period { flex-direction: row; align-items: center; }
          .tl-body { border-left: none; padding-left: 0; padding-bottom: 32px; }
          .tl-dot { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Experience;

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

const Nav = () => {
  const { t, lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ticking = useRef(false);

  const navKeys = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 48px",
          height: "64px",
          transition: "all 0.4s ease",
          background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(201,168,76,0.15)"
            : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "22px",
            fontWeight: 600,
            color: "var(--color-gold)",
            letterSpacing: "0.05em",
            cursor: "pointer",
          }}
          className="magnetic"
          onClick={() => scrollTo("home")}
        >
          ARS.Dev
        </span>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
          className="nav-desktop"
        >
          {navKeys.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              style={{
                background: "none",
                border: "none",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                cursor: "pointer",
                transition: "color 0.3s ease",
                padding: 0,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-muted)")
              }
            >
              {t.nav[key]}
            </button>
          ))}
          <button
            onClick={toggle}
            style={{
              background: "transparent",
              border: "1px solid var(--color-gold-mid)",
              borderRadius: "20px",
              padding: "6px 16px",
              color: "var(--color-gold)",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              letterSpacing: "0.08em",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(201,168,76,0.08)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
            className="magnetic"
          >
            {lang === "en" ? "UZ" : "EN"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: "var(--color-gold)",
              transition: "all 0.3s ease",
              transform: mobileOpen
                ? "rotate(45deg) translate(4px, 4px)"
                : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: "var(--color-gold)",
              transition: "all 0.3s ease",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: "var(--color-gold)",
              transition: "all 0.3s ease",
              transform: mobileOpen
                ? "rotate(-45deg) translate(4px, -4px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "var(--color-bg)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
          transition: "opacity 0.4s ease, visibility 0.4s ease",
          opacity: mobileOpen ? 1 : 0,
          visibility: mobileOpen ? "visible" : "hidden",
        }}
      >
        {navKeys.map((key) => (
          <button
            key={key}
            onClick={() => scrollTo(key)}
            style={{
              background: "none",
              border: "none",
              fontFamily: "var(--font-display)",
              fontSize: "32px",
              fontStyle: "italic",
              color: "var(--color-text)",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-gold)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text)")
            }
          >
            {t.nav[key]}
          </button>
        ))}
        <button
          onClick={toggle}
          style={{
            background: "transparent",
            border: "1px solid var(--color-gold-mid)",
            borderRadius: "20px",
            padding: "8px 24px",
            color: "var(--color-gold)",
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            letterSpacing: "0.08em",
            cursor: "pointer",
            marginTop: "16px",
          }}
        >
          {lang === "en" ? "O\u2018zbek" : "English"}
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Nav;

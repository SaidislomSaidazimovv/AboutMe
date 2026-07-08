import { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const navKeys = ["home", "about", "experience", "skills", "projects", "contact"];

const Nav = () => {
  const { t, lang, langs, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const doc = document.documentElement;
          const max = doc.scrollHeight - doc.clientHeight;
          setScrolled(window.scrollY > 50);
          setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navKeys
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
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

  const renderLangSwitch = (big) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid var(--color-border)",
        borderRadius: "100px",
        padding: "2px",
        gap: "2px",
      }}
    >
      {langs.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            onClick={() => {
              setLanguage(code);
              setMobileOpen(false);
            }}
            aria-pressed={active}
            style={{
              background: active ? "var(--color-accent)" : "transparent",
              color: active ? "#ffffff" : "var(--color-muted)",
              border: "none",
              borderRadius: "100px",
              padding: big ? "8px 16px" : "5px 11px",
              fontFamily: "var(--font-body)",
              fontSize: big ? "13px" : "11px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              cursor: "pointer",
              transition: "background 0.25s ease, color 0.25s ease",
            }}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );

  const renderThemeToggle = (big) => (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="magnetic"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: big ? "44px" : "34px",
        height: big ? "44px" : "34px",
        borderRadius: "50%",
        border: "1px solid var(--color-border)",
        background: "transparent",
        color: "var(--color-accent)",
        cursor: "pointer",
        transition: "background 0.25s ease, border-color 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--color-accent-soft)";
        e.currentTarget.style.borderColor = "var(--color-accent-mid)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.borderColor = "var(--color-border)";
      }}
    >
      {theme === "dark" ? (
        <FiSun size={big ? 18 : 15} />
      ) : (
        <FiMoon size={big ? 18 : 15} />
      )}
    </button>
  );

  return (
    <>
      {/* Scroll progress bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          width: `${progress}%`,
          background: "var(--color-accent)",
          zIndex: 101,
          transition: "width 0.1s linear",
        }}
      />

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
          background: scrolled ? "var(--color-nav-glass)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--color-border)"
            : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--color-text)",
            cursor: "pointer",
          }}
          className="magnetic"
          onClick={() => scrollTo("home")}
        >
          ARS<span style={{ color: "var(--color-accent)" }}>.dev</span>
        </span>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
          className="nav-desktop"
        >
          {navKeys.map((key) => {
            const active = activeSection === key;
            return (
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
                  color: active
                    ? "var(--color-accent)"
                    : "var(--color-muted)",
                  fontWeight: active ? 600 : 400,
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  padding: 0,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = active
                    ? "var(--color-accent)"
                    : "var(--color-muted)")
                }
              >
                {t.nav[key]}
              </button>
            );
          })}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {renderLangSwitch(false)}
            {renderThemeToggle(false)}
          </div>
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
        {navKeys.map((key) => {
          const active = activeSection === key;
          return (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              style={{
                background: "none",
                border: "none",
                fontFamily: "var(--font-display)",
                fontSize: "32px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: active ? "var(--color-accent)" : "var(--color-text)",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
            >
              {t.nav[key]}
            </button>
          );
        })}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            marginTop: "16px",
          }}
        >
          {renderLangSwitch(true)}
          {renderThemeToggle(true)}
        </div>
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

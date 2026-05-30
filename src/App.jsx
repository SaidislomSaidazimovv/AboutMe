import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Preloader from "./components/Preloader";
import Nav from "./components/navbar/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skillset from "./components/Skillset/Skillset";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import CustomCursor from "./components/customCursor/CustomCursor";
import { useLanguage } from "./context/LanguageContext";
import "./index.css";

function App() {
  const { t } = useLanguage();
  const lenisRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.classList.add("loading");
    } else {
      document.body.classList.remove("loading");
    }
  }, [loading]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      smooth: true,
    });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={loading ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      >
        <CustomCursor />
        <Nav />
        <main>
          <Header />
          <hr className="section-divider" />
          <About />
          <hr className="section-divider" />
          <Skillset />
          <hr className="section-divider" />
          <Projects />
          <hr className="section-divider" />
          <Contact />
        </main>
        <footer
          style={{
            borderTop: "1px solid var(--color-border)",
            padding: "24px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "var(--color-muted)",
            }}
          >
            {t.footer.credit}
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "var(--color-muted)",
            }}
          >
            &copy; {new Date().getFullYear()}
          </span>
        </footer>
      </motion.div>
    </>
  );
}

export default App;

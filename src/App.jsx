import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Preloader from "./components/Preloader";
import Nav from "./components/navbar/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Skillset from "./components/Skillset/Skillset";
import Projects from "./components/projects/Projects";
import Press from "./components/press/Press";
import Contact from "./components/contact/Contact";
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
      <div className="grain" aria-hidden="true" />

      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={loading ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      >
        <Nav />
        <main>
          <Header />
          <About />
          <Experience />
          <Skillset />
          <Projects />
          <Press />
          <Contact />
        </main>
        <footer
          style={{
            borderTop: "1px solid var(--color-border)",
            padding: "28px var(--gutter)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            maxWidth: "var(--container)",
            margin: "0 auto",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              color: "var(--color-muted)",
            }}
          >
            {t.footer.credit}
          </span>
          <span
            className="mono-label"
            style={{
              fontSize: "13px",
              color: "var(--color-faint)",
            }}
          >
            &copy; {new Date().getFullYear()} ARS.dev
          </span>
        </footer>
      </motion.div>
    </>
  );
}

export default App;

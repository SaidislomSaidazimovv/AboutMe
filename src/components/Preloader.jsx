import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Trilingual welcome that mirrors the site's EN / UZ / RU support.
const greetings = ["Welcome", "Xush kelibsiz", "Добро пожаловать"];

// eslint-disable-next-line react/prop-types
export default function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const id = setTimeout(() => setIndex((i) => i + 1), 1050);
      return () => clearTimeout(id);
    }
    // Last greeting shown — hold so it can be read, then hand off to the curtain reveal.
    const id = setTimeout(onComplete, 1000);
    return () => clearTimeout(id);
  }, [index]); // eslint-disable-line react-hooks/exhaustive-deps

  const progress = ((index + 1) / greetings.length) * 100;

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--color-bg)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
      }}
    >
      {/* Cycling greeting */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "var(--color-accent)",
            flexShrink: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            height: "1.1em",
            overflow: "hidden",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 6vw, 3.75rem)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "block",
                lineHeight: 1.1,
                color: "var(--color-text)",
                whiteSpace: "nowrap",
              }}
            >
              {greetings[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom accent line — fills as greetings advance */}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          height: "2px",
          width: "100%",
          background: "var(--color-border)",
        }}
      >
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          style={{
            height: "100%",
            background: "var(--color-accent)",
          }}
        />
      </div>
    </motion.div>
  );
}

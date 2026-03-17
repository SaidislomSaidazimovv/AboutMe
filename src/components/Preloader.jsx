import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 3000;
    const interval = 30;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = Math.round((current / steps) * 100);
      setCount(Math.min(progress, 100));

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 900);
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#0A0A0A",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "32px",
              fontWeight: 600,
              color: "#C9A84C",
              letterSpacing: "0.1em",
            }}
          >
            ARS.Dev
          </motion.div>

          {/* Progress bar container */}
          <div
            style={{
              width: "280px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {/* Bar track */}
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(201,168,76,0.15)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Bar fill */}
              <motion.div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  background: "#C9A84C",
                  width: `${count}%`,
                }}
                transition={{ ease: "linear" }}
              />
            </div>

            {/* Counter row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(201,168,76,0.5)",
                }}
              >
                Loading
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "28px",
                  fontWeight: 300,
                  color: "#C9A84C",
                  lineHeight: 1,
                  minWidth: "56px",
                  textAlign: "right",
                }}
              >
                {count}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

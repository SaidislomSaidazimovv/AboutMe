import { useEffect, useRef } from "react";

const lerp = (a, b, n) => (1 - n) * a + n * b;

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const hovering = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onEnter = () => {
      hovering.current = true;
      ringEl.style.width = "60px";
      ringEl.style.height = "60px";
      ringEl.style.borderColor = "var(--color-gold)";
      dot.style.width = "4px";
      dot.style.height = "4px";
    };

    const onLeave = () => {
      hovering.current = false;
      ringEl.style.width = "40px";
      ringEl.style.height = "40px";
      ringEl.style.borderColor = "rgba(201,168,76,0.6)";
      dot.style.width = "10px";
      dot.style.height = "10px";
    };

    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12);

      dot.style.transform = `translate(${mouse.current.x - 5}px, ${mouse.current.y - 5}px)`;
      ringEl.style.transform = `translate(${ring.current.x - (hovering.current ? 30 : 20)}px, ${ring.current.y - (hovering.current ? 30 : 20)}px)`;

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    const targets = document.querySelectorAll("a, button, .magnetic");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    rafId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", onMove);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "10px",
          height: "10px",
          background: "var(--color-gold)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.2s ease, height 0.2s ease",
          willChange: "transform",
        }}
        className="cursor-dot-el"
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40px",
          height: "40px",
          border: "1px solid rgba(201,168,76,0.6)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transition:
            "width 0.3s ease, height 0.3s ease, border-color 0.3s ease",
          willChange: "transform",
        }}
        className="cursor-ring-el"
      />
      <style>{`
        @media (max-width: 768px), (hover: none) {
          .cursor-dot-el, .cursor-ring-el { display: none !important; }
        }
        @media (min-width: 769px) and (hover: hover) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;

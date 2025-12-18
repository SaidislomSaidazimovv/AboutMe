import { useEffect, useRef } from "react";
import "./customCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const cursorDotPos = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    const handleMouseMove = (e) => {
      cursorPos.current = { x: e.clientX, y: e.clientY };
      cursorDotPos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const dx = cursorPos.current.x - parseFloat(cursor.style.left || 0);
      const dy = cursorPos.current.y - parseFloat(cursor.style.top || 0);
      cursor.style.left = `${parseFloat(cursor.style.left || 0) + dx * 0.15}px`;
      cursor.style.top = `${parseFloat(cursor.style.top || 0) + dy * 0.15}px`;
      cursorDot.style.left = `${cursorDotPos.current.x}px`;
      cursorDot.style.top = `${cursorDotPos.current.y}px`;
      requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      cursor.classList.add("cursor-hover");
      cursorDot.classList.add("cursor-dot-hover");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("cursor-hover");
      cursorDot.classList.remove("cursor-dot-hover");
    };

    const handleMouseDown = () => {
      cursor.classList.add("cursor-click");
      cursorDot.classList.add("cursor-dot-click");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("cursor-click");
      cursorDot.classList.remove("cursor-dot-click");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, [role='button']"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });
    animate();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={cursorDotRef} className="custom-cursor-dot"></div>
    </>
  );
};

export default CustomCursor;

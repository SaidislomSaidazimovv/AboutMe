import React, { useRef, useEffect } from "react";
import "../header/ConnectedDots.css";

const ConnectedDots = () => {
  const canvasRef = useRef(null);
  const dotsArray = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createDots();
    };

    const createDots = () => {
      dotsArray.current = [];
      const numDots = Math.floor((canvas.width * canvas.height) / 5000);

      for (let i = 0; i < numDots; i++) {
        const radius = Math.random() * 2 + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        dotsArray.current.push(new Dot(x, y, radius));
      }
    };

    class Dot {
      constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = (Math.random() - 0.5) * 0.5;
        this.dy = (Math.random() - 0.5) * 0.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0 || this.x > canvas.width) this.dx = -this.dx;
        if (this.y < 0 || this.y > canvas.height) this.dy = -this.dy;

        this.draw();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dotsArray.current.forEach((dot) => dot.update());
      requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="connected-dots"></canvas>;
};

export default ConnectedDots;

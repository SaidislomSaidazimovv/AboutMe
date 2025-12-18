import React, { useRef, useEffect } from "react";
import "../header/ConnectedDots.css";

const ConnectedDots = () => {
  const canvasRef = useRef(null);
  const dotsArray = useRef([]);
  const mouseRef = useRef({ x: null, y: null, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createDots();
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const createDots = () => {
      dotsArray.current = [];
      const numDots = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < numDots; i++) {
        const radius = Math.random() * 2.5 + 1;
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
        this.baseX = x;
        this.baseY = y;
        this.dx = (Math.random() - 0.5) * 0.8;
        this.dy = (Math.random() - 0.5) * 0.8;
        this.density = Math.random() * 30 + 1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius * 2
        );
        gradient.addColorStop(0, "rgba(205, 95, 248, 0.8)");
        gradient.addColorStop(1, "rgba(121, 40, 202, 0.3)");
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      update() {
        if (mouseRef.current.x != null && mouseRef.current.y != null) {
          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouseRef.current.radius;
          const force = (maxDistance - distance) / maxDistance;
          if (distance < mouseRef.current.radius) {
            const directionX = forceDirectionX * force * this.density;
            const directionY = forceDirectionY * force * this.density;
            this.x -= directionX;
            this.y -= directionY;
          }
        }
        const returnForce = 0.05;
        this.x += (this.baseX - this.x) * returnForce + this.dx;
        this.y += (this.baseY - this.y) * returnForce + this.dy;
        if (this.x < 0 || this.x > canvas.width) this.dx = -this.dx;
        if (this.y < 0 || this.y > canvas.height) this.dy = -this.dy;
        this.draw();
      }
    }

    const connectDots = () => {
      const maxDistance = 120;
      for (let i = 0; i < dotsArray.current.length; i++) {
        for (let j = i + 1; j < dotsArray.current.length; j++) {
          const dx = dotsArray.current[i].x - dotsArray.current[j].x;
          const dy = dotsArray.current[i].y - dotsArray.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(205, 95, 248, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dotsArray.current[i].x, dotsArray.current[i].y);
            ctx.lineTo(dotsArray.current[j].x, dotsArray.current[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dotsArray.current.forEach((dot) => dot.update());
      connectDots();
      requestAnimationFrame(animate);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    animate();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="connected-dots" />;
};

export default ConnectedDots;

// Soft, slow-moving emerald ambience behind the hero. Subtle by design — it sets a mood
// without competing with the type. Collapses to static under reduced-motion.
const Aurora = () => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <span className="aurora-blob aurora-blob-1" />
      <span className="aurora-blob aurora-blob-2" />
      <span className="aurora-grid" />

      <style>{`
        .aurora-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          will-change: transform;
          pointer-events: none;
        }
        .aurora-blob-1 {
          width: 560px;
          height: 560px;
          top: -180px;
          left: -120px;
          background: radial-gradient(circle, rgba(var(--accent-rgb), 0.28) 0%, rgba(var(--accent-rgb), 0) 70%);
          animation: auroraFloat1 22s ease-in-out infinite;
        }
        .aurora-blob-2 {
          width: 460px;
          height: 460px;
          bottom: -160px;
          right: -60px;
          background: radial-gradient(circle, rgba(var(--accent-rgb), 0.2) 0%, rgba(var(--accent-rgb), 0) 70%);
          animation: auroraFloat2 26s ease-in-out infinite;
        }
        /* Faint blueprint grid — organizes the space, fades out toward center */
        .aurora-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, var(--color-border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-border) 1px, transparent 1px);
          background-size: 64px 64px;
          -webkit-mask-image: radial-gradient(ellipse at 30% 40%, #000 0%, transparent 72%);
          mask-image: radial-gradient(ellipse at 30% 40%, #000 0%, transparent 72%);
          opacity: 0.5;
        }
        @keyframes auroraFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, 40px) scale(1.1); }
        }
        @keyframes auroraFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, -30px) scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora-blob { animation: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Aurora;

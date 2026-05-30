// Soft, slow-moving emerald glow behind the hero — replaces the old particle network.
const Aurora = () => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 50% 40%, var(--color-bg) 0%, var(--color-bg-2) 100%)",
      }}
    >
      <span className="aurora-blob aurora-blob-1" />
      <span className="aurora-blob aurora-blob-2" />
      <span className="aurora-blob aurora-blob-3" />

      <style>{`
        .aurora-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          will-change: transform;
          pointer-events: none;
        }
        .aurora-blob-1 {
          width: 540px;
          height: 540px;
          top: -140px;
          left: -100px;
          background: radial-gradient(circle, rgba(15,157,110,0.42) 0%, rgba(15,157,110,0) 70%);
          animation: auroraFloat1 20s ease-in-out infinite;
        }
        .aurora-blob-2 {
          width: 480px;
          height: 480px;
          bottom: -160px;
          right: -80px;
          background: radial-gradient(circle, rgba(16,185,129,0.34) 0%, rgba(16,185,129,0) 70%);
          animation: auroraFloat2 24s ease-in-out infinite;
        }
        .aurora-blob-3 {
          width: 400px;
          height: 400px;
          top: 42%;
          left: 52%;
          background: radial-gradient(circle, rgba(11,110,110,0.26) 0%, rgba(11,110,110,0) 70%);
          animation: auroraFloat3 28s ease-in-out infinite;
        }
        @keyframes auroraFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(70px, 50px) scale(1.12); }
        }
        @keyframes auroraFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-60px, -40px) scale(1.08); }
        }
        @keyframes auroraFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 60px) scale(1.14); }
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora-blob { animation: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Aurora;

import { useState, useEffect } from "react";
import Wave from "./Wave";
import { colors, fonts } from "../styles/theme";
import mockup from "../assets/mockup_nidush.png";

const QUESTIONS = [
  "What if you could leave the chaos at the door?",
  "What if your home knew you needed silence before you even asked?",
  "What if rest didn't feel like something you had to earn?",
  "What if switching off was as easy as walking through the door?",
];

const heroStyle = `
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-32px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(32px) rotate(6deg); }
    to   { opacity: 1; transform: translateX(0) rotate(6deg); }
  }
  @media (max-width: 768px) {
    .hero-inner { flex-direction: column !important; text-align: center !important; }
    .hero-text  { align-items: center !important; }
    .hero-image { margin-top: 40px; transform: rotate(0deg) !important; }
  }
`;

export default function HeroSection() {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setQuestionIdx((i) => (i + 1) % QUESTIONS.length);
        setVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: `linear-gradient(155deg, ${colors.beige} 0%, ${colors.white} 55%, ${colors.lightGreen} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "70px clamp(1.5rem, 5vw, 4rem) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{heroStyle}</style>

      {/* Ambient blobs */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          right: "-6%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.softGreen}28 0%, transparent 70%)`,
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "-8%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.green}12 0%, transparent 70%)`,
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      {/* Inner layout */}
      <div
        className="hero-inner"
        style={{
          maxWidth: 1100,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(2rem, 6vw, 5rem)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* LEFT — texto */}
        <div
          className="hero-text"
          style={{
            flex: "1 1 480px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            animation: "fadeInLeft 0.8s ease both",
          }}
        >
          {/* Coming Soon badge */}

          {/* Headline */}
          <h1
            style={{
              fontFamily: fonts.main,
              fontWeight: 800,
              fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
              color: colors.darkGreen,
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: "-0.03em",
            }}
          >
            Your home,
            <br />
            <span style={{ color: colors.green }}>your safe space.</span>
          </h1>

          {/* Rotating question */}
          <div
            style={{
              minHeight: 72,
              display: "flex",
              alignItems: "center",
              marginBottom: 28,
            }}
          >
            <p
              style={{
                fontFamily: fonts.main,
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: colors.textLight,
                fontWeight: 500,
                fontStyle: "italic",
                maxWidth: 480,
                lineHeight: 1.55,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              "{QUESTIONS[questionIdx]}"
            </p>
          </div>

          {/* Subline */}
          <p
            style={{
              fontFamily: fonts.main,
              fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
              color: colors.textLight,
              maxWidth: 460,
              margin: "0 0 44px",
              lineHeight: 1.75,
            }}
          >
            An app that helps you regulate stress and anxiety by adapting your
            home to how you feel.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              style={{
                background: colors.green,
                color: "white",
                border: "none",
                borderRadius: 50,
                padding: "15px 36px",
                fontFamily: fonts.main,
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
                boxShadow: `0 8px 32px ${colors.green}40`,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = `0 12px 36px ${colors.green}55`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = `0 8px 32px ${colors.green}40`;
              }}
            >
              Join the waitlist
            </button>
            <button
              style={{
                background: "transparent",
                color: colors.darkGreen,
                border: `1.5px solid ${colors.green}55`,
                borderRadius: 50,
                padding: "15px 36px",
                fontFamily: fonts.main,
                fontWeight: 600,
                fontSize: 16,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = `${colors.softGreen}28`;
                e.target.style.borderColor = colors.green;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.borderColor = `${colors.green}55`;
              }}
            >
              Discover more ↓
            </button>
          </div>
        </div>

        {/* RIGHT — mockup */}
        <div
          className="hero-image"
          style={{
            flex: "0 0 auto",
            animation: "fadeInRight 0.9s ease both",
            transform: "rotate(6deg)",
            filter: `drop-shadow(0 32px 64px ${colors.green}30) drop-shadow(0 8px 24px rgba(0,0,0,0.10))`,
          }}
        >
          <img
            src={mockup}
            alt="App mockup"
            style={{
              width: "clamp(200px, 22vw, 280px)",
              height: "auto",
              borderRadius: 36,
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Wave transition */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <Wave />
      </div>
    </section>
  );
}

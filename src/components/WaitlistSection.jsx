import { useState } from "react";
import { colors, fonts } from "../styles/theme";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.includes("@")) setSubmitted(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${colors.lightGreen}, ${colors.beige})`,
        padding: "110px clamp(1.5rem, 5vw, 4rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 640,
          height: 640,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.softGreen}28, transparent 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontFamily: fonts.main,
            fontWeight: 800,
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            color: colors.darkGreen,
            marginBottom: 18,
            letterSpacing: "-0.025em",
          }}
        >
          Be the first to
          <br />
          <span style={{ color: colors.green }}>find your peace.</span>
        </h2>

        <p
          style={{
            fontFamily: fonts.main,
            fontSize: "1.05rem",
            color: colors.textLight,
            marginBottom: 44,
            lineHeight: 1.75,
          }}
        >
          Join the waitlist and be among the first to transform your home into
          your safe space.
        </p>

        {!submitted ? (
          <div
            style={{
              display: "flex",
              gap: 8,
              maxWidth: 480,
              margin: "0 auto",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                flex: 1,
                minWidth: 220,
                padding: "14px 22px",
                borderRadius: 50,
                border: `1.5px solid ${colors.softGreen}`,
                background: "white",
                fontFamily: fonts.main,
                fontSize: 15,
                color: colors.darkGreen,
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = colors.green;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = colors.softGreen;
              }}
            />
            <button
              onClick={handleSubmit}
              style={{
                background: colors.green,
                color: "white",
                border: "none",
                borderRadius: 50,
                padding: "14px 28px",
                fontFamily: fonts.main,
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                whiteSpace: "nowrap",
                boxShadow: `0 4px 20px ${colors.green}40`,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = `0 8px 28px ${colors.green}50`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = `0 4px 20px ${colors.green}40`;
              }}
            >
              Join waitlist
            </button>
          </div>
        ) : (
          <div
            style={{
              background: `${colors.softGreen}45`,
              border: `1px solid ${colors.softGreen}`,
              borderRadius: 20,
              padding: "24px 36px",
              animation: "fadeUp 0.4s ease",
            }}
          >
            <p
              style={{
                fontFamily: fonts.main,
                fontWeight: 800,
                color: colors.darkGreen,
                fontSize: "1.15rem",
                marginBottom: 6,
              }}
            >
              🌱 You're on the list!
            </p>
            <p
              style={{
                fontFamily: fonts.main,
                color: colors.textLight,
                fontSize: "0.95rem",
              }}
            >
              We'll reach out when your safe space is ready.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";

const colors = {
  green: "#548F52",
  darkGreen: "#354F52",
  softGreen: "#BBE6BA",
  lightGreen: "#e8f5e8",
  beige: "#F0F2EB",
  darkBeige: "#E8EAE3",
  white: "#FAFAF8",
  text: "#2D3B2E",
  textLight: "#6B7F6C",
};

const features = [
  {
    icon: "🏠",
    title: "Smart Scenarios",
    desc: "Create personalized environments that transform each room to match how you feel.",
  },
  {
    icon: "💚",
    title: "Wearable Sync",
    desc: "Your heart rate guides your home. Nidush intervenes at the exact moment you need it.",
  },
  {
    icon: "🎵",
    title: "Spotify Integration",
    desc: "Deep Sleep. Deep Focus. Nature Escape. Playlists crafted for every moment of your day.",
  },
  {
    icon: "🏡",
    title: "Google Home",
    desc: "Your entire home ecosystem, unified and responsive to your wellbeing.",
  },
  {
    icon: "🧘",
    title: "Hobbies & Activities",
    desc: "Recipes, guided meditation, audiobooks and workout — everything you love, in one place.",
  },
  {
    icon: "🔕",
    title: "Silence Mode",
    desc: "Nidush silences notifications and distractions so you can simply breathe.",
  },
];

const questions = [
  "What if you could leave the chaos at the door?",
  "What if your home knew you needed silence before you even asked?",
  "What if rest didn't feel like something you had to earn?",
  "What if switching off was as easy as walking through the door?",
];

function Wave({ color = colors.softGreen, opacity = 0.4, flip = false }) {
  return (
    <div
      style={{
        overflow: "hidden",
        lineHeight: 0,
        transform: flip ? "scaleY(-1)" : "none",
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%" }}
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
          fillOpacity={opacity}
        />
        <path
          d="M0,55 C360,20 720,70 1080,30 C1260,15 1380,50 1440,55 L1440,80 L0,80 Z"
          fill={color}
          fillOpacity={opacity * 0.6}
        />
      </svg>
    </div>
  );
}

function Logo({ size = 36 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 4 L32 14 L32 30 Q32 34 28 34 L12 34 Q8 34 8 30 L8 14 Z"
          fill={colors.green}
          opacity="0.15"
        />
        <path
          d="M20 6 L30 15 L30 29 Q30 32 27 32 L13 32 Q10 32 10 29 L10 15 Z"
          fill="none"
          stroke={colors.green}
          strokeWidth="2"
        />
        <path
          d="M16 32 Q20 38 24 32"
          stroke={colors.green}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="20" cy="21" r="4" fill={colors.green} />
        <path
          d="M15 38 Q20 42 25 38"
          stroke={colors.softGreen}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <span
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 800,
          fontSize: size * 0.6,
          color: colors.darkGreen,
          letterSpacing: "-0.02em",
        }}
      >
        nidush
      </span>
    </div>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(240,242,235,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${colors.softGreen}40` : "none",
        transition: "all 0.4s ease",
        padding: "0 clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo size={32} />
        <div
          style={{
            display: "flex",
            gap: 36,
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 600,
            fontSize: 15,
            color: colors.darkGreen,
          }}
        >
          {["Features", "Hobbies", "Integrations", "Community"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                textDecoration: "none",
                color: colors.darkGreen,
                opacity: 0.8,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = 1)}
              onMouseLeave={(e) => (e.target.style.opacity = 0.8)}
            >
              {item}
            </a>
          ))}
        </div>
        <button
          style={{
            background: colors.green,
            color: "white",
            border: "none",
            borderRadius: 50,
            padding: "10px 24px",
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
            letterSpacing: "0.01em",
            boxShadow: `0 4px 20px ${colors.green}40`,
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-1px)";
            e.target.style.boxShadow = `0 6px 24px ${colors.green}50`;
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = `0 4px 20px ${colors.green}40`;
          }}
        >
          Coming Soon
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setQuestionIdx((i) => (i + 1) % questions.length);
        setFade(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: `linear-gradient(160deg, ${colors.beige} 0%, ${colors.white} 50%, ${colors.lightGreen} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px clamp(1.5rem, 5vw, 4rem) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.softGreen}30 0%, transparent 70%)`,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "-8%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.green}15 0%, transparent 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 800,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: `${colors.softGreen}50`,
            borderRadius: 50,
            padding: "6px 16px",
            marginBottom: 32,
            border: `1px solid ${colors.softGreen}`,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: colors.green,
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: colors.darkGreen,
            }}
          >
            Coming Soon
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: colors.darkGreen,
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: "-0.03em",
          }}
        >
          Your home,
          <br />
          <span style={{ color: colors.green }}>your safe space.</span>
        </h1>

        <div
          style={{
            minHeight: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              color: colors.textLight,
              fontWeight: 500,
              fontStyle: "italic",
              opacity: fade ? 1 : 0,
              transform: fade ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
              maxWidth: 600,
              lineHeight: 1.5,
            }}
          >
            "{questions[questionIdx]}"
          </p>
        </div>

        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: colors.textLight,
            maxWidth: 560,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          An app that helps you regulate stress and anxiety by adapting your
          home to how you feel.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              background: colors.green,
              color: "white",
              border: "none",
              borderRadius: 50,
              padding: "14px 32px",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
              boxShadow: `0 8px 32px ${colors.green}40`,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = `0 12px 36px ${colors.green}50`;
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
              border: `1.5px solid ${colors.green}60`,
              borderRadius: 50,
              padding: "14px 32px",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = `${colors.softGreen}30`;
              e.target.style.borderColor = colors.green;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.borderColor = `${colors.green}60`;
            }}
          >
            Discover more ↓
          </button>
        </div>
      </div>

      {/* Phone mockup */}
      <div style={{ marginTop: 64, position: "relative", zIndex: 1 }}>
        <div
          style={{
            width: 260,
            height: 520,
            borderRadius: 40,
            background: `linear-gradient(145deg, ${colors.white}, ${colors.beige})`,
            boxShadow: `0 40px 80px ${colors.darkGreen}20, 0 0 0 2px ${colors.softGreen}60`,
            overflow: "hidden",
            position: "relative",
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <div
            style={{
              background: colors.darkGreen,
              padding: "20px 20px 16px",
              color: "white",
            }}
          >
            <div
              style={{
                fontSize: 11,
                opacity: 0.7,
                fontFamily: "'Nunito', sans-serif",
                marginBottom: 4,
              }}
            >
              Good afternoon,
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 800,
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              Laura
            </div>
            <div
              style={{
                marginTop: 12,
                background: `${colors.green}40`,
                borderRadius: 12,
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: colors.softGreen,
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                }}
              >
                You're currently feeling...
              </span>
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 800,
                fontFamily: "'Nunito', sans-serif",
                marginTop: 8,
                color: colors.softGreen,
              }}
            >
              Relaxed
            </div>
          </div>
          <div style={{ padding: "16px 16px", background: colors.white }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: colors.textLight,
                fontFamily: "'Nunito', sans-serif",
                marginBottom: 10,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Activities for you
            </div>
            {[
              {
                name: "Chocolate Cake",
                time: "35 min",
                room: "Kitchen",
                emoji: "🍫",
              },
              {
                name: "Pasta Primavera",
                time: "25 min",
                room: "Kitchen",
                emoji: "🍝",
              },
            ].map((a) => (
              <div
                key={a.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 10px",
                  background: colors.beige,
                  borderRadius: 12,
                  marginBottom: 8,
                }}
              >
                <span style={{ fontSize: 20 }}>{a.emoji}</span>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: colors.darkGreen,
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    {a.name}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: colors.textLight,
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    {a.time} · {a.room}
                  </div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 12 }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: colors.textLight,
                  fontFamily: "'Nunito', sans-serif",
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Shortcuts
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {["🧘", "🎵", "💡", "🔕"].map((e, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      background: colors.lightGreen,
                      borderRadius: 12,
                      padding: "10px 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                    }}
                  >
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <Wave />
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section
      style={{
        background: `${colors.softGreen}25`,
        padding: "80px clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: colors.darkGreen,
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            Your home,
            <br />
            <span style={{ color: colors.green }}>tuned to you.</span>
          </h2>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "1.1rem",
              color: colors.textLight,
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Create and get recommendations of Scenarios that combine your smart
            devices and transform each room.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: colors.white,
                borderRadius: 24,
                padding: "28px 28px",
                border: `1px solid ${colors.softGreen}60`,
                boxShadow: `0 4px 20px ${colors.darkGreen}06`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 12px 40px ${colors.green}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 4px 20px ${colors.darkGreen}06`;
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icon}</div>
              <h3
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: colors.darkGreen,
                  marginBottom: 8,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "0.95rem",
                  color: colors.textLight,
                  lineHeight: 1.65,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section
      style={{
        background: colors.darkGreen,
        padding: "100px clamp(1.5rem, 5vw, 4rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          transform: "scaleY(-1)",
        }}
      >
        <Wave color={colors.softGreen} opacity={0.15} />
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <Wave color={colors.softGreen} opacity={0.1} />
      </div>
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: 64,
            opacity: 0.2,
            color: colors.softGreen,
            fontFamily: "Georgia, serif",
            lineHeight: 1,
            marginBottom: -20,
          }}
        >
          "
        </div>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            color: colors.white,
            lineHeight: 1.5,
            marginBottom: 32,
            letterSpacing: "-0.01em",
          }}
        >
          Whatever your version of peace looks like today — Nidush helps you
          shape your home to match it.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              height: 1,
              width: 40,
              background: `${colors.softGreen}60`,
            }}
          />
          <Logo size={24} />
          <div
            style={{
              height: 1,
              width: 40,
              background: `${colors.softGreen}60`,
            }}
          />
        </div>
      </div>
    </section>
  );
}

function SpotifySection() {
  const playlists = [
    {
      name: "Deep Sleep",
      desc: "Let go of the day",
      color: "#1a3a2a",
      emoji: "🌙",
    },
    {
      name: "Deep Focus",
      desc: "Flow without distraction",
      color: "#1a2a3a",
      emoji: "🧠",
    },
    {
      name: "Nature Escape",
      desc: "Breathe with the world",
      color: "#1a3a1a",
      emoji: "🌿",
    },
  ];

  return (
    <section
      style={{
        background: colors.beige,
        padding: "100px clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#1DB95420",
                borderRadius: 50,
                padding: "6px 16px",
                marginBottom: 24,
                border: "1px solid #1DB95440",
              }}
            >
              <span style={{ fontSize: 16 }}>🎵</span>
              <span
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#1DB954",
                }}
              >
                Nidush is on Spotify
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: colors.darkGreen,
                marginBottom: 20,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              The right sound
              <br />
              for your exact moment.
            </h2>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "1rem",
                color: colors.textLight,
                lineHeight: 1.7,
                marginBottom: 32,
                maxWidth: 420,
              }}
            >
              Whether you need to rest, work, or simply breathe — tune into our
              official playlists, crafted for every state of mind.
            </p>
            <button
              style={{
                background: "#1DB954",
                color: "white",
                border: "none",
                borderRadius: 50,
                padding: "12px 28px",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: "0 4px 20px #1DB95430",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
              }}
            >
              Listen on Spotify →
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {playlists.map((p, i) => (
              <div
                key={i}
                style={{
                  background: p.color,
                  borderRadius: 20,
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div style={{ fontSize: 32 }}>{p.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 800,
                      fontSize: "1rem",
                      color: "white",
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {p.desc}
                  </div>
                </div>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "#1DB954",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                  }}
                >
                  ▶
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${colors.lightGreen}, ${colors.beige})`,
        padding: "100px clamp(1.5rem, 5vw, 4rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.softGreen}30, transparent 70%)`,
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
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: colors.darkGreen,
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          Be the first to
          <br />
          <span style={{ color: colors.green }}>find your peace.</span>
        </h2>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "1.05rem",
            color: colors.textLight,
            marginBottom: 40,
            lineHeight: 1.7,
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
              style={{
                flex: 1,
                minWidth: 220,
                padding: "14px 20px",
                borderRadius: 50,
                border: `1.5px solid ${colors.softGreen}`,
                background: "white",
                fontFamily: "'Nunito', sans-serif",
                fontSize: 15,
                color: colors.darkGreen,
                outline: "none",
              }}
            />
            <button
              onClick={() => email && setSubmitted(true)}
              style={{
                background: colors.green,
                color: "white",
                border: "none",
                borderRadius: 50,
                padding: "14px 28px",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                whiteSpace: "nowrap",
                boxShadow: `0 4px 20px ${colors.green}40`,
              }}
            >
              Join waitlist
            </button>
          </div>
        ) : (
          <div
            style={{
              background: `${colors.softGreen}50`,
              border: `1px solid ${colors.softGreen}`,
              borderRadius: 20,
              padding: "20px 32px",
            }}
          >
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                color: colors.darkGreen,
                fontSize: "1.1rem",
              }}
            >
              🌱 You're on the list!
            </p>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: colors.textLight,
                fontSize: "0.95rem",
                marginTop: 4,
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

function Footer() {
  return (
    <footer
      style={{
        background: colors.darkGreen,
        padding: "48px clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <Logo size={28} />
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          © 2026 Nidush · Your home, your safe space.
        </p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Instagram", "Spotify", "Privacy"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = colors.softGreen)}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(255,255,255,0.5)")
              }
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function NidushWebsite() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${colors.beige}; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${colors.beige}; }
        ::-webkit-scrollbar-thumb { background: ${colors.softGreen}; border-radius: 3px; }
      `}</style>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <QuoteSection />
      <SpotifySection />
      <WaitlistSection />
      <Footer />
    </>
  );
}

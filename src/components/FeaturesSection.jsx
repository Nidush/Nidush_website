import { useEffect, useRef, useState } from "react";
import { colors, fonts } from "../styles/theme";
import video1 from "../videos/nidush_video2.mp4";
import video2 from "../videos/nidush_video3.mp4";
import video3 from "../videos/nidush_video4.mp4";
import video4 from "../videos/nidush_video5.mp4";
import video5 from "../videos/nidush_video6.mp4";
import video6 from "../videos/nidush_video7.mp4";

const FEATURES = [
  {
    title: "Smart Scenarios",
    desc: "Create personalized environments that transform each room to match how you feel — automatically.",
    video: video2,
  },
  {
    title: "Wearable Sync",
    desc: "Your heart rate guides your home. Nidush intervenes at the exact moment you need it.",
    video: video4,
  },
  {
    title: "Spotify Integration",
    desc: "Deep Sleep. Deep Focus. Nature Escape. Official playlists crafted for every moment of your day.",
    video: video6,
  },
  {
    title: "Google Home",
    desc: "Your entire home ecosystem, unified and responsive to your wellbeing.",
    video: video1,
  },
  {
    title: "Hobbies & Activities",
    desc: "Recipes, guided meditation, audiobooks and workout — everything you love, all in one place.",
    video: video5,
  },
  {
    title: "Silence Mode",
    desc: "Nidush silences notifications and distractions so you can simply breathe.",
    video: video3,
  },
];

const sectionStyle = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

// A altura da tua navbar para que o vídeo não fique cortado
const NAV_HEIGHT = 70;
const BG_COLOR = "#f0f2eb"; // A cor base que pediste (igual à da navbar)

export default function FeaturesStickySection() {
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const scrolled = -top;
      const scrollable = height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      const raw = progress * FEATURES.length;
      const index = Math.min(Math.floor(raw), FEATURES.length - 1);

      if (index !== activeIndex) {
        setTextVisible(false);
        setTimeout(() => {
          setActiveIndex(index);
          setTextVisible(true);
        }, 220);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === activeIndex) {
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      id="features"
      style={{
        position: "relative",
        height: `${FEATURES.length * 100}vh`,
        backgroundColor: BG_COLOR,
      }}
    >
      <style>{sectionStyle}</style>

      {/* Sticky viewport com offset da NavBar */}
      <div
        style={{
          position: "sticky",
          top: NAV_HEIGHT, // Começa exatamente abaixo da NavBar
          height: `calc(100vh - ${NAV_HEIGHT}px)`, // Ocupa o ecrã até ao fundo
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* ESQUERDA — 50% Informação e Texto */}
        <div
          style={{
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 clamp(2rem, 5vw, 6rem)",
            zIndex: 3,
            backgroundColor: BG_COLOR, // Nova cor de fundo
            position: "relative",
          }}
        >
          <p
            style={{
              fontFamily: fonts.main,
              fontWeight: 700,
              fontSize: 13,
              color: colors.green,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Features
          </p>
          <h2
            style={{
              fontFamily: fonts.main,
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              color: colors.darkGreen,
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              marginBottom: 48,
            }}
          >
            Your home,
            <br />
            <span style={{ color: colors.green }}>tuned to you.</span>
          </h2>

          <div
            key={activeIndex}
            style={{
              animation: textVisible ? "fadeUp 0.35s ease both" : "none",
              opacity: textVisible ? 1 : 0,
              transition: "opacity 0.22s ease",
              minHeight: "180px",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 20 }}>
              {FEATURES[activeIndex].icon}
            </div>
            <h3
              style={{
                fontFamily: fonts.main,
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 2.2vw, 2.2rem)",
                color: colors.darkGreen,
                marginBottom: 16,
                letterSpacing: "-0.02em",
              }}
            >
              {FEATURES[activeIndex].title}
            </h3>
            <p
              style={{
                fontFamily: fonts.main,
                fontSize: "1.1rem",
                color: colors.textLight,
                lineHeight: 1.85,
                maxWidth: 480,
              }}
            >
              {FEATURES[activeIndex].desc}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 24,
              marginTop: 40,
            }}
          >
            {FEATURES.map((f, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    height: 3,
                    width: i === activeIndex ? "100%" : "20px",
                    borderRadius: 3,
                    background:
                      i === activeIndex
                        ? colors.green
                        : `${colors.softGreen}70`,
                    transition: "width 0.4s ease, background 0.4s ease",
                  }}
                />
                <span
                  style={{
                    fontFamily: fonts.main,
                    fontSize: 13,
                    fontWeight: i === activeIndex ? 700 : 500,
                    color:
                      i === activeIndex
                        ? colors.darkGreen
                        : `${colors.textLight}80`,
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {f.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* DIREITA — 50% Vídeos */}
        <div
          style={{
            flex: 1,
            height: "100%",
            position: "relative",
            backgroundColor: colors.black,
            overflow: "hidden",
          }}
        >
          {/* Desfoque super progressivo com a cor pedida */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "40%", // Mais largo para uma transição suave
              height: "100%",
              // Passos intermédios (rgba com base em #f0f2eb)
              background: `linear-gradient(to right, 
                ${BG_COLOR} 0%, 
                rgba(240, 242, 235, 0.95) 15%, 
                rgba(240, 242, 235, 0.6) 45%, 
                rgba(240, 242, 235, 0) 100%)`,
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {FEATURES.map((feature, i) => (
            <video
              key={i}
              ref={(el) => (videoRefs.current[i] = el)}
              src={feature.video}
              muted
              loop
              playsInline
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                opacity: i === activeIndex ? 1 : 0,
                transition: "opacity 0.8s ease-in-out",
                pointerEvents: "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

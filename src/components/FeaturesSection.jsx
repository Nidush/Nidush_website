import { useEffect, useRef, useState } from "react";
import "../styles/Features.css"; // A nossa folha de estilos
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

export default function FeaturesStickySection() {
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  // Lógica de Scroll (Mantida)
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

  // Lógica dos Vídeos
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

  // Scroll ao clicar
  const handleOptionClick = (index) => {
    if (!sectionRef.current) return;
    const sectionTop = sectionRef.current.offsetTop;
    const height = sectionRef.current.offsetHeight;
    const scrollable = height - window.innerHeight;

    const targetScroll =
      sectionTop + ((index + 0.1) / FEATURES.length) * scrollable;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="features"
      className="features-section"
      style={{ height: `${FEATURES.length * 100}vh` }}
    >
      <div className="features-sticky-wrapper">
        {/* ESQUERDA NO PC / POR CIMA EM MOBILE — Textos e Timeline */}
        {/* Agora está na ordem correta do DOM! */}
        <div className="features-content-side">
          <p className="feat-label">Features</p>

          <h2 className="feat-main-title">
            Your home,
            <br />
            <span>tuned to you.</span>
          </h2>

          <div className={`feat-text-box ${textVisible ? "visible" : ""}`}>
            <h3>{FEATURES[activeIndex].title}</h3>
            <p>{FEATURES[activeIndex].desc}</p>
          </div>

          <div className="features-timeline">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                onClick={() => handleOptionClick(i)}
                className={`timeline-item ${i === activeIndex ? "active" : ""}`}
              >
                <div className="timeline-bar" />
                <span className="timeline-text">{f.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DIREITA NO PC / FUNDO EM MOBILE — Vídeos */}
        <div className="features-video-side">
          <div className="features-video-overlay" />

          {FEATURES.map((feature, i) => (
            <video
              key={i}
              ref={(el) => (videoRefs.current[i] = el)}
              src={feature.video}
              muted
              loop
              playsInline
              className={`features-video ${i === activeIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, useRef } from "react";
import { colors } from "../styles/theme";
import "../styles/FeaturesPage.css";

import mockup1 from "../assets/mockup_nidush.png";
import mockup2 from "../assets/mockup_activities.png";
import mockup3 from "../assets/mockup_scenarios.png";
import mockup4 from "../assets/mockup_rooms.png";
import mockup5 from "../assets/mockup_profiles.png";
import wearable from "../assets/wearable.png";

import lightIcon from "../assets/bulb.png";
import tempIcon from "../assets/difuser.png";
import speakerIcon from "../assets/smart_speaker.png";
import lockIcon from "../assets/purificador_ar.png";

import actImg1 from "../assets/atividade1.png";
import actImg2 from "../assets/atividade2.png";
import actImg3 from "../assets/atividade3.png";
import actImg4 from "../assets/atividade4.png";

const FEATURES = [
  {
    id: 0,
    title: "Just-In-Time Adaptive Interventions (JITAI)",
    description:
      "Nidush connects to your wearable. By analyzing Heart Rate Variability and Stress Scores, it detects anxiety before you do. The house instantly receives these signals, softening the lights and playing calming sounds to regulate your nervous system.",
    image: mockup1,
  },
  {
    id: 1,
    title: "Immersive Activities",
    description:
      "Start a specific activity and watch the room adapt. Whether it's Yoga, Reading, or Deep Work, Nidush isolates distractions, adjusts the environment, and curates the perfect playlist to get you in the zone.",
    image: mockup2,
  },
  {
    id: 2,
    title: "Sensory Scenarios",
    description:
      "Transform your physical space into an emotional escape. Choose 'Aurora Night' or 'Cozy Cabin'. The walls change color, the aroma diffuser activates, and your room becomes a completely different world.",
    image: mockup3,
  },
  {
    id: 3,
    title: "Smart Device Harmony",
    description:
      "No more juggling ten different apps. Nidush brings all your smart lights, speakers, locks, and thermostats into one single, intuitive interface. You control the feeling, we control the devices.",
    image: mockup4,
  },
  {
    id: 4,
    title: "Shared Home Management",
    description:
      "Living with family or roommates? Nidush manages everyone's needs. You can see who is doing what in which room, ensuring that your 'Focus Mode' isn't interrupted by someone else's 'Party Mode'.",
    image: mockup5,
  },
];

const JitaiNotification = ({ isActive }) => (
  <div className={`jitai-notification ${isActive ? "active" : ""}`}>
    <div className="notif-header">
      <div className="notif-app-icon">n</div>
      <span className="notif-app-name">NIDUSH</span>
    </div>
    <p className="notif-text">
      I notice you might need a moment for a break...
      <span className="notif-suggestion">
        What if we try the Gratitude Flow?
      </span>
    </p>
  </div>
);

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);
  const scrollingContentRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 900) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleHorizontalScroll = (e) => {
    if (window.innerWidth > 900) return;

    const container = e.target;
    const containerCenter =
      container.getBoundingClientRect().left + container.clientWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, idx) => {
      const childRect = child.getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const distance = Math.abs(containerCenter - childCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const isDarkMode = activeIndex === 2;

  return (
    <section
      id="features"
      className={`features-wrapper ${isDarkMode ? "dark-mode" : ""}`}
    >
      {/* --- FUNDO --- */}
      <div className="bg-layer">
        <div className="bg-sticky">
          <div className={`bg-effect ${activeIndex === 1 ? "active" : ""}`}>
            <div className="activities-grid-fs">
              {[
                actImg1,
                actImg2,
                actImg3,
                actImg4,
                actImg2,
                actImg1,
                actImg4,
                actImg3,
              ].map((imgSrc, i) => (
                <div key={i} className="activity-block-fs">
                  <img src={imgSrc} alt={`Activity ${i}`} />
                </div>
              ))}
            </div>
          </div>

          <div className={`bg-effect ${activeIndex === 2 ? "active" : ""}`}>
            <div className="aurora-container-fs">
              <div className="aurora-light-fs aurora-l-1"></div>
              <div className="aurora-light-fs aurora-l-2"></div>
              <div className="aurora-light-fs aurora-l-3"></div>
            </div>
          </div>

          <div
            className={`bg-effect bg-effect--circles ${activeIndex === 3 ? "active" : ""}`}
          >
            <div className="device-icon-fs d-1">
              <img src={lightIcon} alt="Smart Light" />
            </div>
            <div className="device-icon-fs d-2">
              <img src={tempIcon} alt="Aroma Diffuser" />
            </div>
            <div className="device-icon-fs d-3">
              <img src={speakerIcon} alt="Smart Speaker" />
            </div>
            <div className="device-icon-fs d-4">
              <img src={lockIcon} alt="Air Purifier" />
            </div>
          </div>

          <div
            className={`bg-effect bg-effect--circles ${activeIndex === 4 ? "active" : ""}`}
          >
            <div className="social-avatar-fs s-1">
              <div className="avatar-circle-fs">👨🏽</div>
              <div className="avatar-label-fs">Pedro • Living Room</div>
            </div>
            <div className="social-avatar-fs s-2">
              <div className="avatar-circle-fs">👩🏻</div>
              <div className="avatar-label-fs">Laura • Kitchen</div>
            </div>
            <div className="social-avatar-fs s-3">
              <div className="avatar-circle-fs">🧑🏼</div>
              <div className="avatar-label-fs">Miguel • Bedroom</div>
            </div>
            <div className="social-avatar-fs s-4">
              <div className="avatar-circle-fs">👵🏼</div>
              <div className="avatar-label-fs">Inês • Garden</div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTEÚDO --- */}
      <div className="content-layer">
        <div className="features-header">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 50,
              padding: "8px 20px",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.2em",
                color: isDarkMode ? "#00ffcc" : colors.green,
              }}
            >
              CORE FEATURES
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            The house that <br />
            <span style={{ color: isDarkMode ? "#00ffcc" : colors.green }}>
              understands you.
            </span>
          </h2>
        </div>

        <div className="scroll-container">
          <div className="sticky-visual">
            <JitaiNotification isActive={activeIndex === 0} />

            <div className="mockup-container">
              <div
                className={`jitai-zone ${activeIndex === 0 ? "active" : ""}`}
              >
                <div className="jitai-wearable-local">
                  <img src={wearable} alt="Wearable Smartwatch" />
                </div>
                <div
                  className="signal-waves-local"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="signal-waves-local"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="signal-waves-local"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              {FEATURES.map((feature, index) => (
                <img
                  key={feature.id}
                  src={feature.image}
                  alt={feature.title}
                  className="mockup-image"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform:
                      activeIndex === index
                        ? "scale(1) translateY(0)"
                        : "scale(0.95) translateY(10px)",
                    zIndex: activeIndex === index ? 2 : 1,
                  }}
                />
              ))}
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              minHeight: 0,
              justifyContent: "flex-start",
              paddingTop: "10px",
            }}
          >
            <div
              className="scrolling-content"
              ref={scrollingContentRef}
              onScroll={handleHorizontalScroll}
            >
              {FEATURES.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`feature-step ${activeIndex === index ? "is-active" : ""}`}
                  data-index={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                >
                  <div className="feature-text-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-desc">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mobile-carousel-indicators">
              {FEATURES.map((_, idx) => (
                <div
                  key={idx}
                  className={`indicator-dot ${activeIndex === idx ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

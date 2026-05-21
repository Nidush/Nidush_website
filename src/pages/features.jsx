import { useState, useEffect, useRef } from "react";
import { colors, fonts } from "../styles/theme";

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

import actImg1 from "../assets/gentle_rise.png";
import actImg2 from "../assets/deep_focus.png";
import actImg3 from "../assets/deep_sleep.png";
import actImg4 from "../assets/nature_escape.png";

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

const stickyStyle = `
  /* --- WRAPPER --- */
  .features-wrapper {
    background-color: ${colors.beige};
    font-family: ${fonts.main}, sans-serif;
    color: ${colors.darkGreen};
    transition: background-color 1s ease, color 1s ease;
    position: relative;
  }
  .features-wrapper.dark-mode {
    background-color: #0b1121;
    color: #ffffff;
  }

  /* --- FUNDO --- */
  .bg-layer {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 1;
    pointer-events: none;
    contain: paint;
  }
  .bg-sticky {
    position: sticky;
    top: 70px;
    height: calc(100vh - 70px);
    width: 100%;
    overflow: hidden;
  }
  .bg-effect {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    opacity: 0;
    transition: opacity 1s ease, transform 1s ease;
    display: flex; align-items: center; justify-content: center;
  }
  .bg-effect.active { opacity: 1; }

  /* --- CONTEÚDO --- */
  .content-layer {
    position: relative;
    z-index: 10;
  }
  .features-header {
    padding: 100px clamp(1.5rem, 5vw, 4rem) 60px;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .scroll-container {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 40vh;
  }

  .sticky-visual {
    position: sticky;
    top: 70px;
    height: calc(100vh - 70px);
    width: 38%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    flex-shrink: 0;
  }
  .mockup-container {
    position: relative;
    width: clamp(150px, 16vw, 240px);
    aspect-ratio: 1 / 2;
    z-index: 2;
  }
  .mockup-image {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    object-fit: contain;
    transition: opacity 0.8s ease, transform 0.8s ease;
    filter: drop-shadow(0 32px 64px rgba(0,0,0,0.15));
  }

  /* --- NOTIFICAÇÃO JITAI (desktop) --- */
  .jitai-notification {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%) translateY(-20px);
    width: 92%;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(15px);
    padding: 14px;
    border-radius: 22px;
    border: 1px solid rgba(255,255,255,0.4);
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    z-index: 20;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    pointer-events: none;
  }
  .jitai-notification.active {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  .features-wrapper.dark-mode .jitai-notification {
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(255,255,255,0.1);
  }
  .notif-header { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
  .notif-app-icon {
    width: 18px; height: 18px; background: ${colors.green}; border-radius: 5px;
    display: flex; align-items: center; justify-content: center; font-size: 10px; color: white; font-weight: 900;
  }
  .notif-app-name { font-size: 11px; font-weight: 800; color: ${colors.darkGreen}; opacity: 0.6; letter-spacing: 0.05em; }
  .features-wrapper.dark-mode .notif-app-name { color: #ffffff; }
  .notif-text { font-size: 12px; line-height: 1.4; color: ${colors.darkGreen}; font-weight: 500; }
  .features-wrapper.dark-mode .notif-text { color: rgba(255,255,255,0.9); }
  .notif-suggestion { color: ${colors.green}; font-weight: 700; display: block; margin-top: 2px; }
  .features-wrapper.dark-mode .notif-suggestion { color: #00ffcc; }

  /* --- WEARABLE --- */
  .jitai-zone {
    position: absolute;
    top: 50%; left: -75px;
    transform: translateY(-50%);
    opacity: 0; transition: opacity 0.5s ease;
    pointer-events: none; z-index: 5;
  }
  .jitai-zone.active { opacity: 1; }
  .jitai-wearable-local {
    width: 100px; height: 100px;
    display: flex; align-items: center; justify-content: center;
  }
  .jitai-wearable-local img { width: 100% !important; height: 100% !important; }
  .signal-waves-local {
    position: absolute; top: 50%; left: 35px; transform: translateY(-50%);
    width: 90px; height: 90px; border-radius: 50%;
    border: 3px dashed ${colors.green};
    animation: ping-local 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  @keyframes ping-local {
    0% { transform: translateY(-50%) scale(0.3); opacity: 1; }
    100% { transform: translateY(-50%) translateX(80px) scale(2); opacity: 0; }
  }

  .scrolling-content {
    padding: 0 clamp(2rem, 4vw, 5rem) 0 clamp(4rem, 7vw, 9rem);
    display: flex;
    flex-direction: column;
  }
  .feature-step {
    min-height: calc(100vh - 70px);
    display: flex; flex-direction: column; justify-content: center;
    transition: opacity 0.5s ease;
    opacity: 0.3;
  }
  .feature-step.is-active { opacity: 1; }

  .feature-text-content {
    padding: clamp(24px, 3vw, 40px);
    border-radius: 28px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border: 1px solid rgba(255, 255, 255, 0.22);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.06);
    transition: background 1s ease, border 1s ease;
  }
  .features-wrapper.dark-mode .feature-text-content {
    background: rgba(11, 17, 33, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
  }

  .feature-icon {
    font-size: 2.5rem; margin-bottom: 24px;
    background: rgba(255,255,255,0.1); backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    width: 70px; height: 70px; border-radius: 20px;
    display: flex; align-items: center; justify-content: center;
  }
  .features-wrapper.dark-mode .feature-icon {
    background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1);
  }
  .feature-title {
    font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 800;
    margin-bottom: 20px; line-height: 1.1; letter-spacing: -0.025em;
  }
  .feature-desc {
    font-size: 1.1rem;
    line-height: 1.75;
    max-width: 100%;
    opacity: 0.85;
  }

  /* --- ACTIVITIES GRID --- */
  .activities-grid-fs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: clamp(20px, 3vw, 36px);
    position: absolute;
    width: 110%; height: 110%;
    opacity: 0.13;
    transform: rotate(-5deg) scale(1.05);
  }
  .activity-block-fs {
    width: 100%; aspect-ratio: 1/1; border-radius: 24px; overflow: hidden;
    background: ${colors.green}20; border: 1px solid ${colors.green}40;
  }
  .activity-block-fs img { width: 100%; height: 100%; object-fit: cover; }

  /* --- AURORA --- */
  .aurora-container-fs { position: absolute; width: 100%; height: 100%; top: 0; left: 0; }
  .aurora-light-fs {
    position: absolute; border-radius: 50%;
    filter: blur(80px);
    mix-blend-mode: plus-lighter;
  }
  .aurora-l-1 { width: 60vw; height: 60vw; background: #00ffcc; top: -20%; left: -20%; animation: aurora-move-1 12s infinite alternate ease-in-out; }
  .aurora-l-2 { width: 70vw; height: 70vw; background: #9900ff; top: 20%; right: -30%; animation: aurora-move-2 16s infinite alternate ease-in-out; }
  .aurora-l-3 { width: 55vw; height: 55vw; background: #1DB954; bottom: -30%; left: 10%; animation: aurora-move-3 20s infinite alternate ease-in-out; }
  @keyframes aurora-move-1 { 0% { transform: translate(0,0); } 100% { transform: translate(30vw,20vh); } }
  @keyframes aurora-move-2 { 0% { transform: translate(0,0); } 100% { transform: translate(-40vw,-10vh); } }
  @keyframes aurora-move-3 { 0% { transform: translate(0,0); } 100% { transform: translate(20vw,-30vh); } }

  /* --- DEVICE ICONS (Desktop) --- */
  .device-icon-fs {
    position: absolute; width: clamp(70px,6vw,90px); height: clamp(70px,6vw,90px);
    background: white; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 12px 32px rgba(2,44,34,0.12);
    animation: float-around 5s infinite ease-in-out alternate;
    overflow: hidden; padding: 16px; border: 1px solid rgba(0,0,0,0.03);
  }
  .device-icon-fs img { width: 100%; height: 100%; object-fit: contain; }
  .d-1 { top: 15%; left: 5%; }
  .d-2 { bottom: 20%; left: 10%; }
  .d-3 { top: 25%; right: 10%; }
  .d-4 { bottom: 15%; right: 5%; }

  /* --- AVATARS (Desktop) --- */
  .social-avatar-fs {
    position: absolute; display: flex; flex-direction: column; align-items: center; gap: 8px;
    animation: float-around 6s infinite ease-in-out alternate;
  }
  .avatar-circle-fs {
    width: 90px; height: 90px; background: ${colors.softGreen}; border-radius: 50%;
    display: flex; align-items: center; justify-content: center; font-size: 2.5rem;
    border: 4px solid white; box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  .avatar-label-fs {
    background: white; color: ${colors.darkGreen}; padding: 8px 16px;
    border-radius: 20px; font-size: 0.85rem; font-weight: 700;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  }
  .s-1 { top: 15%; left: 3%; }
  .s-2 { bottom: 10%; left: 8%; }
  .s-3 { top: 45%; right: 3%; }
  .s-4 { bottom: 25%; right: 15%; }

  @keyframes float-around {
    0% { transform: translate(0,0); }
    100% { transform: translate(25px,-25px); }
  }


  /* =================================================================
     MOBILE - AJUSTADO PARA ECRÃ A 100% SEM SCROLL VERTICAL
     ================================================================= */
  @media (max-width: 900px) {
    /* 1. Bloquear o tamanho exato da viewport usando dvh */
    .features-wrapper {
      height: 100vh;
      height: 100dvh; 
      overflow: hidden; 
    }

    /* 2. Conteúdo em Flex para absorver Navbar + Espaço restante */
    .content-layer {
      height: 100%;
      display: flex;
      flex-direction: column;
      padding-top: 70px; /* Alocação para a navbar */
    }

    /* Header Compacto (Não comprime com o flex-shrink) */
    .features-header { 
      padding: 12px clamp(1rem, 5vw, 2rem) 8px; 
      flex-shrink: 0;
    }

    /* 3. Containers de Fundo convertidos para absolutos sobre o 100vh */
    .bg-layer {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
    }
    .bg-sticky {
      position: absolute; /* Não precisamos do sticky já que a secção não tem scroll vertical */
      top: 70px;
      height: calc(100% - 70px);
      width: 100%;
      overflow: hidden;
    }

    /* Aurora e efeitos ocupam devidamente os painéis */
    .bg-effect--aurora {
      top: 0;
      height: 100%;
    }
    .bg-effect:not(.bg-effect--aurora) {
      top: 40%;
      height: 60%;
    }

    /* 4. A Caixa de Scroll Principal preenche todo o espaço vertical livre do ecra */
    .scroll-container {
      flex-direction: column;
      flex: 1; 
      padding-bottom: 0;
      height: auto;
      overflow: hidden; 
    }

    /* 5. Ajuste Mockup - ocupa proporcionalmente uma área no ecrã (ex: 42%) */
    .sticky-visual {
      display: flex !important;
      position: relative;
      top: 0;
      width: 100%;
      height: 42%; 
      flex-shrink: 0;
      z-index: 25;
      background: transparent;
      padding: 5px 0;
    }

    .mockup-container {
      height: 100%;
      width: auto;
      aspect-ratio: 1 / 2;
    }

    /* Notificação e restantes elementos mobile continuam perfeitamente ajustados */
    .jitai-notification {
      position: absolute;
      top: 2px;
      left: 50%;
      transform: translateX(-50%) translateY(-10px);
      width: min(78vw, 320px);
      padding: 10px 12px;
      border-radius: 16px;
      z-index: 30;
    }
    .jitai-notification.active {
      transform: translateX(-50%) translateY(0);
    }
    .notif-app-icon { width: 15px; height: 15px; font-size: 9px; }
    .notif-app-name { font-size: 10px; }
    .notif-text     { font-size: 11px; }

    .jitai-zone { left: -48px; top: 48%; }
    .jitai-wearable-local { width: 52px; height: 52px; border-radius: 12px; }
    .signal-waves-local { left: 24px; }
    @keyframes ping-local {
      0% { transform: translateY(-50%) scale(0.3); opacity: 1; }
      100% { transform: translateY(-50%) translateX(60px) scale(1.8); opacity: 0; }
    }

    .activities-grid-fs {
      gap: clamp(10px, 3vw, 16px);
    }

    .aurora-light-fs {
      filter: blur(55px);
      mix-blend-mode: normal;
      opacity: 0.38;
    }
    .aurora-l-1, .aurora-l-2, .aurora-l-3 { width: 100vw; height: 100vw; }

    .device-icon-fs {
      animation: float-mobile 5s infinite ease-in-out alternate;
      transform: scale(0.85);
    }
    .d-1 { top: 6%  !important; left: 4%  !important; }
    .d-2 { top: 32% !important; left: 4%  !important; }
    .d-3 { top: 60% !important; right: 4% !important; }
    .d-4 { top: 82% !important; right: 4% !important; }

    .social-avatar-fs {
      animation: float-mobile 6s infinite ease-in-out alternate;
    }
    .avatar-circle-fs { width: 60px; height: 60px; font-size: 1.6rem; border-width: 3px; }
    .avatar-label-fs  { font-size: 0.75rem; padding: 6px 12px; }
    .s-1 { top: 5%  !important; left: 3%  !important; }
    .s-2 { top: 30% !important; left: 3%  !important; }
    .s-3 { top: 58% !important; right: 3% !important; }
    .s-4 { top: 80% !important; right: 3% !important; }

    @keyframes float-mobile {
      0%   { transform: translate(0, 0) scale(0.85); }
      100% { transform: translate(14px, -20px) scale(0.85); }
    }

    /* 6. TRACK HORIZONTAL (Cartões flexiveis absorvem tudo abaixo do telemóvel) */
    .scrolling-content {
      width: 100% !important;
      flex: 1 !important;
      padding: 8px 24px 0 !important;
      display: flex !important;
      flex-direction: row !important;
      align-items: stretch !important;
      overflow-x: auto !important;
      overflow-y: hidden !important;
      scroll-snap-type: x mandatory !important;
      gap: 14px;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .scrolling-content::-webkit-scrollbar { display: none; }

    .feature-step {
      min-height: unset !important;
      height: 100% !important;
      min-width: 84vw;
      max-width: 85vw;
      scroll-snap-align: center !important;
      opacity: 0.4;
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
    .feature-step.is-active { opacity: 1; }

    .feature-text-content {
      padding: 20px;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.22) !important;
      backdrop-filter: blur(28px) !important;
      -webkit-backdrop-filter: blur(28px) !important;
      border: 1px solid rgba(255, 255, 255, 0.32) !important;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08) !important;
    }
    .features-wrapper.dark-mode .feature-text-content {
      background: rgba(11, 17, 33, 0.55) !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
    }

    .feature-icon  { width: 44px; height: 44px; font-size: 1.4rem; margin-bottom: 10px; }
    /* Ajuste de tipografia para libertar espaço na bolha */
    .feature-title { font-size: 1.15rem; margin-bottom: 8px; line-height: 1.2; }
    .feature-desc  { font-size: 0.9rem; line-height: 1.45; }

    /* DOTS */
    .mobile-carousel-indicators {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
      margin-bottom: 10px;
      flex-shrink: 0;
      width: 100%;
      z-index: 35;
      position: relative;
    }
    .indicator-dot {
      width: 7px; height: 7px;
      border-radius: 50%;
      background: rgba(2, 44, 34, 0.2);
      transition: all 0.3s ease;
    }
    .features-wrapper.dark-mode .indicator-dot {
      background: rgba(255, 255, 255, 0.2);
    }
    .indicator-dot.active {
      width: 22px;
      border-radius: 10px;
      background: ${colors.green};
    }
    .features-wrapper.dark-mode .indicator-dot.active {
      background: #00ffcc;
    }
  }
`;

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
      <style>{stickyStyle}</style>

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

          <div
            className={`bg-effect bg-effect--aurora ${activeIndex === 2 ? "active" : ""}`}
          >
            <div className="aurora-container-fs">
              <div className="aurora-light-fs aurora-l-1"></div>
              <div className="aurora-light-fs aurora-l-2"></div>
              <div className="aurora-light-fs aurora-l-3"></div>
            </div>
          </div>

          <div className={`bg-effect ${activeIndex === 3 ? "active" : ""}`}>
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

          <div className={`bg-effect ${activeIndex === 4 ? "active" : ""}`}>
            <div className="social-avatar-fs s-1">
              <div className="avatar-circle-fs">👨🏽</div>
              <div className="avatar-label-fs">Pedro • Living Room</div>
            </div>
            <div className="social-avatar-fs s-2">
              <div className="avatar-circle-fs">👩🏻</div>
              <div className="avatar-label-fs">Duda • Kitchen</div>
            </div>
            <div className="social-avatar-fs s-3">
              <div className="avatar-circle-fs">🧑🏼</div>
              <div className="avatar-label-fs">Gabriel • Bedroom</div>
            </div>
            <div className="social-avatar-fs s-4">
              <div className="avatar-circle-fs">👵🏼</div>
              <div className="avatar-label-fs">Maria • Garden</div>
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
              background: isDarkMode
                ? "rgba(255,255,255,0.1)"
                : colors.softGreen + "44",
              borderRadius: 50,
              padding: "6px 16px",
              marginBottom: 16,
              border: isDarkMode ? "1px solid rgba(255,255,255,0.2)" : "none",
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: isDarkMode ? "#00ffcc" : colors.green,
              }}
            >
              CORE FEATURES
            </span>
          </div>
          <h2
            style={{
              fontSize:
                "clamp(2rem, 7vw, 4rem)" /* Ligeiramente mais pequeno em mobile para poupar espaço */,
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

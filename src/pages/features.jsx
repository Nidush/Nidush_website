import { useState, useEffect, useRef } from "react";
import { colors, fonts } from "../styles/theme";

import mockup1 from "../assets/mockup_nidush.png";
import mockup2 from "../assets/mockup_nidush.png";
import mockup3 from "../assets/mockup_scenarios.png";
import mockup4 from "../assets/mockup_rooms.png";
import mockup5 from "../assets/mockup_profiles.png";
import wearable from "../assets/wearable.png";

const FEATURES = [
  {
    id: 0,
    title: "Just-In-Time Adaptive Interventions (JITAI)",
    description:
      "Nidush connects to your wearable. By analyzing Heart Rate Variability and Stress Scores, it detects anxiety before you do. The house instantly receives these signals, softening the lights and playing calming sounds to regulate your nervous system.",
    icon: "⌚",
    image: mockup1,
  },
  {
    id: 1,
    title: "Immersive Activities",
    description:
      "Start a specific activity and watch the room adapt. Whether it's Yoga, Reading, or Deep Work, Nidush isolates distractions, adjusts the environment, and curates the perfect playlist to get you in the zone.",
    icon: "🧘‍♀️",
    image: mockup2,
  },
  {
    id: 2,
    title: "Sensory Scenarios",
    description:
      "Transform your physical space into an emotional escape. Choose 'Aurora Night' or 'Cozy Cabin'. The walls change color, the aroma diffuser activates, and your room becomes a completely different world.",
    icon: "🌌",
    image: mockup3,
  },
  {
    id: 3,
    title: "Smart Device Harmony",
    description:
      "No more juggling ten different apps. Nidush brings all your smart lights, speakers, locks, and thermostats into one single, intuitive interface. You control the feeling, we control the devices.",
    icon: "🎛️",
    image: mockup4,
  },
  {
    id: 4,
    title: "Shared Home Management",
    description:
      "Living with family or roommates? Nidush manages everyone's needs. You can see who is doing what in which room, ensuring that your 'Focus Mode' isn't interrupted by someone else's 'Party Mode'.",
    icon: "👥",
    image: mockup5,
  },
];

const stickyStyle = `
  /* --- WRAPPER E TRANSIÇÕES DE COR --- */
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

  /* --- CAMADA DE FUNDO FIXA (Atrás de tudo) --- */
  .bg-layer {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 1;
    pointer-events: none; 
  }

  .bg-sticky {
    position: sticky;
    top: 70px; /* Altura da Navbar */
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
  .bg-effect.active {
    opacity: 1;
  }

  /* --- CAMADA DE CONTEÚDO --- */
  .content-layer {
    position: relative;
    z-index: 10;
  }

  .features-header {
    padding: 120px clamp(1.5rem, 5vw, 4rem) 60px;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .scroll-container {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  /* --- LADO ESQUERDO (Mockup Desktop) --- */
  .sticky-visual {
    position: sticky;
    top: 70px;
    height: calc(100vh - 70px);
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
  }

  .mockup-container {
    position: relative;
    width: clamp(180px, 20vw, 280px); 
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

  /* --- JITAI ANIMATION (Desktop) --- */
  .jitai-zone {
    position: absolute;
    top: 40%; 
    left: -180px; /* Movi de -100px para -180px para empurrar mais para a esquerda */
    transform: translateY(-50%);
    opacity: 0; transition: opacity 0.5s ease;
    pointer-events: none; z-index: -1; 
  }
  .jitai-zone.active { opacity: 1; }
  
  .jitai-wearable-local {
    width: 70px; height: 70px; background: white; border-radius: 20px;
    display: flex; align-items: center; justify-content: center; font-size: 2.2rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15); position: relative; z-index: 2;
  }
  .signal-waves-local {
    position: absolute; top: 50%; left: 35px; transform: translateY(-50%);
    width: 100px; height: 100px; border-radius: 50%;
    border: 3px dashed ${colors.green};
    animation: ping-local 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  @keyframes ping-local {
    0% { transform: translateY(-50%) scale(0.2); opacity: 1; }
    100% { transform: translateY(-50%) translateX(100px) scale(2); opacity: 0; }
  }


  /* --- LADO DIREITO (Textos Desktop) --- */
  .scrolling-content {
    width: 50%;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
  }

  .feature-step {
    min-height: calc(100vh - 70px); 
    display: flex; flex-direction: column; justify-content: center;
    transition: opacity 0.5s ease;
    opacity: 0.3; 
  }
  .feature-step.is-active {
    opacity: 1; 
  }

  .mobile-mockup-wrapper {
    display: none; /* Escondido no PC */
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
    margin-bottom: 24px; line-height: 1.1; letter-spacing: -0.025em;
  }

  .feature-desc {
    font-size: 1.15rem; line-height: 1.6; max-width: 450px; opacity: 0.9;
  }

  /* --- BACKGROUNDS GERAIS (Ativos em todos os ecrãs) --- */
  
  /* 1: Activities */
  .activities-grid-fs {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;
    position: absolute; width: 110%; height: 110%;
    opacity: 0.15; transform: rotate(-5deg) scale(1.1);
  }
  .activity-block-fs {
    background: ${colors.green}; border-radius: 40px;
    display: flex; align-items: center; justify-content: center;
    font-size: clamp(4rem, 6vw, 8rem);
  }

  /* 2: Aurora Scenarios */
  .aurora-container-fs {
    position: absolute; width: 100%; height: 100%; top: 0; left: 0;
  }
  .aurora-light-fs {
    position: absolute; border-radius: 50%;
    filter: blur(120px); mix-blend-mode: plus-lighter;
  }
  .aurora-l-1 {
    width: 60vw; height: 60vw; background: #00ffcc;
    top: -20%; left: -20%;
    animation: aurora-move-1 12s infinite alternate ease-in-out;
  }
  .aurora-l-2 {
    width: 70vw; height: 70vw; background: #9900ff;
    top: 20%; right: -30%;
    animation: aurora-move-2 16s infinite alternate ease-in-out;
  }
  .aurora-l-3 {
    width: 55vw; height: 55vw; background: #1DB954;
    bottom: -30%; left: 10%;
    animation: aurora-move-3 20s infinite alternate ease-in-out;
  }
  @keyframes aurora-move-1 {
    0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
    100% { transform: translate(40vw, 30vh) scale(1.4); opacity: 0.9; }
  }
  @keyframes aurora-move-2 {
    0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
    100% { transform: translate(-50vw, -20vh) scale(1.2); opacity: 1; }
  }
  @keyframes aurora-move-3 {
    0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
    100% { transform: translate(30vw, -40vh) scale(1.5); opacity: 0.8; }
  }

  /* 3: Smart Devices */
  .device-icon-fs {
    position: absolute; width: 80px; height: 80px;
    background: white; border-radius: 50%; font-size: 2.2rem;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    animation: float-around 5s infinite ease-in-out alternate;
  }
  @keyframes float-around {
    0% { transform: translate(0, 0); }
    100% { transform: translate(30px, -30px); }
  }

  /* 4: Shared Home */
  .social-avatar-fs {
    position: absolute; display: flex; flex-direction: column; align-items: center; gap: 8px;
    animation: float-around 6s infinite ease-in-out alternate;
  }
  .avatar-circle-fs {
    width: 90px; height: 90px; background: ${colors.softGreen}; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 2.5rem; border: 4px solid white; box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  .avatar-label-fs {
    background: white; color: ${colors.darkGreen}; padding: 8px 16px; border-radius: 20px;
    font-size: 0.85rem; font-weight: 700; box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  }


  /* ====================================================
     OTIMIZAÇÃO TOTAL PARA MOBILE (LAYOUT EM BLOCOS)
     ==================================================== */
  @media (max-width: 900px) {
    .features-header { padding-top: 80px; }

    /* O Contentor de BG continua fullscreen sticky no fundo */
    .bg-sticky { height: 100vh; top: 0; }

    .scroll-container { 
      flex-direction: column; 
      padding-bottom: 0; 
    }
    
    /* ESCONDER O MOCKUP FIXO GLOBAL NO MOBILE */
    .sticky-visual {
      display: none; 
    }

    .scrolling-content {
      width: 100%; 
      padding: 0;
    }

    .feature-step {
      min-height: 100vh; 
      justify-content: flex-start; /* Alinha ao topo */
      padding: 40px 5%;
      opacity: 1; /* No mobile fica sempre opaco para leitura */
    }

    /* O MOCKUP MOBILE É INSERIDO DENTRO DE CADA PASSO */
    .mobile-mockup-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      flex-grow: 1;
      
      /* FORÇA A IMAGEM A APARECER PRIMEIRO (EM CIMA) */
      order: 1;
    }

    .mobile-mockup-img {
      max-height: 45vh; 
      object-fit: contain;
      filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2));
    }

    /* O CARTÃO DE TEXTO FICA SÓLIDO E SUPER LEGÍVEL */
    .feature-text-content {
      background: rgba(240, 242, 235, 0.95); 
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.5);
      padding: 32px 24px; 
      border-radius: 32px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      position: relative;
      z-index: 10;

      /* FORÇA O TEXTO A APARECER DEPOIS DA IMAGEM (EM BAIXO) */
      order: 2;
      margin-top: 30px; /* Cria um espaço entre a imagem e o texto */
    }
    .features-wrapper.dark-mode .feature-text-content {
      background: rgba(11, 17, 33, 0.9); border: 1px solid rgba(255,255,255,0.1);
    }

    /* O JITAI MOBILE É INSERIDO AO LADO DO PRIMEIRO MOCKUP */
    .jitai-zone-mobile {
      position: absolute;
      top: 30%;
      left: 0;
      transform: translateY(-50%);
      z-index: 1;
    }
    .jitai-wearable-mobile {
      width: 55px; height: 55px; background: white; border-radius: 16px;
      display: flex; align-items: center; justify-content: center; font-size: 1.5rem;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1); position: relative; z-index: 2;
    }
    .signal-waves-mobile {
      position: absolute; top: 50%; left: 25px; transform: translateY(-50%);
      width: 80px; height: 80px; border-radius: 50%; border: 3px dashed ${colors.green};
      animation: ping-mobile 2s infinite;
    }
    @keyframes ping-mobile {
      0% { transform: translateY(-50%) scale(0.2); opacity: 1; }
      100% { transform: translateY(-50%) translateX(80px) scale(1.8); opacity: 0; }
    }
    
    /* Limpeza de poluição visual na bg-layer mobile */
    .avatar-label-fs { display: none; }
    .avatar-circle-fs { width: 60px; height: 60px; font-size: 2rem; }
    .activity-block-fs { font-size: 3rem; }
  }
`;

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
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

  const isDarkMode = activeIndex === 2;

  return (
    <section
      id="features"
      className={`features-wrapper ${isDarkMode ? "dark-mode" : ""}`}
    >
      <style>{stickyStyle}</style>

      {/* --- CAMADA DE FUNDO (BACKGROUNDS GERAIS MÁGICOS) --- */}
      <div className="bg-layer">
        <div className="bg-sticky">
          {/* EFEITO 1: Activities Grid */}
          <div className={`bg-effect ${activeIndex === 1 ? "active" : ""}`}>
            <div className="activities-grid-fs">
              <div className="activity-block-fs">🧘‍♀️</div>
              <div className="activity-block-fs">🍳</div>
              <div className="activity-block-fs">📖</div>
              <div className="activity-block-fs">💻</div>
              <div className="activity-block-fs">🎨</div>
              <div className="activity-block-fs">🏋️</div>
              <div className="activity-block-fs">💻</div>
              <div className="activity-block-fs">📖</div>
            </div>
          </div>

          {/* EFEITO 2: Aurora Scenarios (DINÂMICA EXPANDIDA) */}
          <div className={`bg-effect ${activeIndex === 2 ? "active" : ""}`}>
            <div className="aurora-container-fs">
              <div className="aurora-light-fs aurora-l-1"></div>
              <div className="aurora-light-fs aurora-l-2"></div>
              <div className="aurora-light-fs aurora-l-3"></div>
            </div>
          </div>

          {/* EFEITO 3: Smart Devices */}
          <div className={`bg-effect ${activeIndex === 3 ? "active" : ""}`}>
            <div
              className="device-icon-fs"
              style={{ color: "#EAB308", top: "15%", left: "5%" }}
            >
              💡
            </div>
            <div
              className="device-icon-fs"
              style={{ color: "#3B82F6", bottom: "20%", left: "10%" }}
            >
              🌡️
            </div>
            <div
              className="device-icon-fs"
              style={{ color: "#10B981", top: "25%", right: "10%" }}
            >
              🔊
            </div>
            <div
              className="device-icon-fs"
              style={{ color: "#8B5CF6", bottom: "15%", right: "5%" }}
            >
              🔒
            </div>
          </div>

          {/* EFEITO 4: Social Harmony */}
          <div className={`bg-effect ${activeIndex === 4 ? "active" : ""}`}>
            <div
              className="social-avatar-fs"
              style={{ top: "15%", left: "3%" }}
            >
              <div className="avatar-circle-fs">👨🏽</div>
              <div className="avatar-label-fs">Pedro • Living Room (Focus)</div>
            </div>
            <div
              className="social-avatar-fs"
              style={{ bottom: "10%", left: "8%" }}
            >
              <div className="avatar-circle-fs">👩🏻</div>
              <div className="avatar-label-fs">Duda • Kitchen (Cooking)</div>
            </div>
            <div
              className="social-avatar-fs"
              style={{ top: "45%", right: "3%" }}
            >
              <div className="avatar-circle-fs">🧑🏼</div>
              <div className="avatar-label-fs">Gabriel • Bedroom (Sleep)</div>
            </div>
            <div
              className="social-avatar-fs"
              style={{ bottom: "25%", right: "15%" }}
            >
              <div className="avatar-circle-fs">👵🏼</div>
              <div className="avatar-label-fs">Maria • Garden (Rest)</div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CAMADA DE CONTEÚDO (MOCKUP E TEXTO) --- */}
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
              padding: "8px 20px",
              marginBottom: 20,
              border: isDarkMode ? "1px solid rgba(255,255,255,0.2)" : "none",
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
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
          {/* LADO ESQUERDO: Mockup Fixo (APENAS DESKTOP) */}
          <div className="sticky-visual">
            <div className="mockup-container">
              {/* EFEITO JITAI DESKTOP */}
              {/* EFEITO JITAI DESKTOP */}
              <div
                className={`jitai-zone ${activeIndex === 0 ? "active" : ""}`}
              >
                {/* Wrapper criado para controlar a posição da imagem sem afetar as ondas */}
                <div style={{ position: "relative", left: "-50px" }}>
                  <img
                    src={wearable}
                    alt="Wearable"
                    style={{ width: "50%", height: "50%" }}
                  />
                </div>

                {/* As ondas permanecem no centro original da zona */}
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
                        : "scale(0.95) translateY(20px)",
                    zIndex: activeIndex === index ? 2 : 1,
                  }}
                />
              ))}
            </div>
          </div>

          {/* LADO DIREITO (Desktop) / ECRÃ INTEIRO (Mobile) */}
          <div className="scrolling-content">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.id}
                className={`feature-step ${activeIndex === index ? "is-active" : ""}`}
                data-index={index}
                ref={(el) => (stepRefs.current[index] = el)}
              >
                {/* CAIXA DE TEXTO (Sólida em mobile, invisível em desktop) */}
                <div className="feature-text-content">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.description}</p>
                </div>

                {/* MOCKUP INLINE (APENAS MOBILE) */}
                <div className="mobile-mockup-wrapper">
                  {/* JITAI Animation apenas no primeiro slide do mobile */}
                  {/* JITAI Animation apenas no primeiro slide do mobile */}
                  {index === 0 && (
                    <div className="jitai-zone-mobile">
                      {/* Wrapper para mover apenas a imagem */}
                      <div style={{ position: "relative", left: "-20px" }}>
                        <img
                          src={wearable}
                          alt="Wearable"
                          style={{ width: "30%", height: "30%" }}
                        />
                      </div>

                      {/* As ondas permanecem no centro */}
                      <div
                        className="signal-waves-mobile"
                        style={{ animationDelay: "0s" }}
                      ></div>
                      <div
                        className="signal-waves-mobile"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  )}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="mobile-mockup-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

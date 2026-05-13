import { useState, useEffect } from "react";
import { colors } from "../styles/theme";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Deteta o scroll para mostrar/esconder o botão
  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra o botão quando a janela descer mais de 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Função para subir ao topo ignorando todas as secções
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        zIndex: 999, // Garante que fica por cima de vídeos e barras
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: isHovered ? colors.darkGreen : colors.green,
        color: colors.white,
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: isHovered
          ? `0 6px 16px ${colors.darkGreen}60`
          : `0 4px 12px ${colors.green}40`,
        // Animação de entrada/saída
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        transform: isVisible
          ? isHovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(20px)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      aria-label="Ir para o topo"
    >
      {/* Ícone de seta para cima (SVG puro para não precisares de dependências) */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </button>
  );
}

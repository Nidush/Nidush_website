import lettering from "../assets/lettering_nidush.png";
import { colors, fonts } from "../styles/theme";

const trailerStyle = `
  /* --- REGRAS PARA DESKTOP (PC) --- */
  .trailer-section {
    scroll-margin-top: 40px; /* Ajuda na navegação por âncoras (#trailer) */
    min-height: calc(100vh - 70px);
    padding: 96px clamp(1.5rem, 5vw, 4rem);
    background-color: ${colors.beige || "#f0f2eb"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .trailer-content {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .trailer-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .trailer-title {
    font-weight: 800;
    font-size: clamp(1.75rem, 4vw, 3rem);
    color: ${colors.darkGreen || "#354F52"};
    letter-spacing: -0.025em;
    line-height: 1.1;
  }

  .trailer-lettering {
    width: 256px;
    height: auto;
  }

  .trailer-video-wrapper {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 24px 48px rgba(2, 44, 34, 0.15);
    background-color: black;
    position: relative;
    margin-top: 50px;
  }

  .trailer-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  /* --- REGRAS PARA MOBILE & TABLETS --- */
  @media (max-width: 768px) {
    .trailer-section {
      min-height: auto;
      padding-top: 64px;
      padding-bottom: 64px;
    }
    
    .trailer-header {
      gap: 8px; /* Menos espaço entre título e imagem no telemóvel */
    }
    
    .trailer-lettering {
      width: 192px; /* Imagem ligeiramente mais pequena */
    }
    
    .trailer-video-wrapper {
      border-radius: 16px; /* Cantos menos arredondados em ecrãs pequenos */
      box-shadow: 0 16px 32px rgba(2, 44, 34, 0.1);
      margin-top: 40px;
    }
  }
`;

export default function TrailerSection() {
  return (
    <section id="trailer" className="trailer-section">
      <style>{trailerStyle}</style>

      <div className="trailer-content">
        {/* BLOCO 1: Título e Lettering */}
        <div className="trailer-header">
          <h2 className="trailer-title" style={{ fontFamily: fonts.main }}>
            Discover more about
          </h2>
          <img
            src={lettering}
            alt="Nidush Lettering"
            className="trailer-lettering"
          />
        </div>

        {/* BLOCO 2: Contentor do Vídeo */}
        <div className="trailer-video-wrapper">
          <iframe
            className="trailer-iframe"
            src="https://www.youtube.com/embed/tIzNWHl0EMA?rel=0&modestbranding=1"
            title="Nidush Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

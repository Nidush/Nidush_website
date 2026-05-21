import { colors, fonts } from "../styles/theme";
import deepFocus from "../assets/deep_focus.png";
import natureEscape from "../assets/nature_escape.png";
import deepSleep from "../assets/deep_sleep.png";
import gentleRise from "../assets/gentle_rise.png";

const PLAYLISTS = [
  {
    name: "Deep Sleep",
    desc: "Let go of the day",
    image: deepSleep,

    link: "https://open.spotify.com/playlist/4JsSJdt7FsIhmlga6Fi8OS?si=7f7c4ab73f164d9f",
  },
  {
    name: "Deep Focus",
    desc: "Flow without distraction",
    image: deepFocus,

    link: "https://open.spotify.com/playlist/2ADGJWqHRP8n7IYJMmozFd?si=d0b9b95dd4354202",
  },
  {
    name: "Nature Escape",
    desc: "Breathe with the world",
    image: natureEscape,

    link: "https://open.spotify.com/playlist/0ZvQlFUqVLU6Kq99rWNsR6?si=b548f765233749d1",
  },
  {
    name: "Gentle Rise",
    desc: "Start your morning right",
    image: gentleRise,

    link: "https://open.spotify.com/playlist/3WD3IvwdUJgPJM6JR8K9j1?si=25d5fdb85fc24212",
  },
];

const spotifyStyle = `
  /* --- LAYOUT PRINCIPAL --- */
  .spotify-section {
    background: ${colors.beige};
    padding: 100px clamp(1.5rem, 5vw, 4rem);
    overflow: hidden;
  }
  
  .spotify-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
  }

  .spotify-text {
    flex: 1 1 400px;
    z-index: 2;
  }

  /* BOTÃO SPOTIFY */
  .spotify-btn {
    display: inline-block;
    background: #548F53;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    padding: 15px 32px;
    font-family: ${fonts.main};
    font-weight: 700;
    font-size: 16px;
    transition: all 0.2s;
    box-shadow: 0 4px 20px #1DB95430;
  }
  .spotify-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px #1DB95445;
  }

  /* --- 3D GRID & CARDS (Desktop) --- */
  .spotify-cards-wrapper {
    flex: 1 1 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1200px;
    padding: 40px 0;
  }

  .spotify-cards-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    transform: rotateX(60deg) rotateZ(45deg);
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
  }

  .playlist-card {
    text-decoration: none;
    width: 220px;
    height: 220px;
    background-size: cover;
    background-position: center;
    border-radius: 24px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: translateZ(0px);
    box-shadow: 10px 10px 20px rgba(0,0,0,0.15);
    position: relative;
    z-index: 1;
  }

  .playlist-card:hover {
    transform: translateZ(40px);
    box-shadow: 20px 20px 40px rgba(29, 185, 84, 0.4), 5px 5px 15px rgba(29, 185, 84, 0.2);
    z-index: 10;
  }

  .play-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #1DB954;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: white;
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.4s ease;
    box-shadow: 0 4px 12px rgba(29, 185, 84, 0.4);
  }
  .playlist-card:hover .play-icon {
    opacity: 1;
    transform: scale(1);
  }

  .card-emoji { font-size: 36px; text-shadow: 0 2px 10px rgba(0,0,0,0.3); }
  .card-title { font-size: 1.25rem; }
  .card-desc { font-size: 0.9rem; }

  /* --- REGRAS PARA MOBILE --- */
  @media (max-width: 900px) {
    .spotify-section {
      /* Reduzi o padding inferior de 80px para 40px */
      padding: 80px clamp(1.5rem, 5vw, 4rem) 40px;
    }
    
    .spotify-container {
      flex-direction: column;
      text-align: center;
      gap: 0px; 
    }

    .spotify-text {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .spotify-text p {
      text-align: center;
    }

    .spotify-cards-wrapper {
      width: 100%;
      padding: 0;
      perspective: 900px;
      /* Aumentei os valores negativos para cortar o espaço "fantasma" criado pelo 3D */
      margin-top: -50px; 
      margin-bottom: -80px; 
    }

    .spotify-cards-grid {
      gap: 16px;
      transform: rotateX(60deg) rotateZ(45deg) scale(0.85); 
    }

    .playlist-card {
      width: 150px;
      height: 150px;
      padding: 16px;
      border-radius: 20px;
    }

    .card-emoji { font-size: 28px; }
    .card-title { font-size: 1rem; margin-bottom: 4px !important; }
    .card-desc { font-size: 0.75rem; }
  }

  @media (max-width: 400px) {
    .spotify-cards-grid {
      transform: rotateX(60deg) rotateZ(45deg) scale(0.7); 
    }
  }
`;

function PlaylistCard({ name, desc, image, emoji, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="playlist-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div className="card-emoji">{emoji}</div>
        <div className="play-icon">▶</div>
      </div>

      <div>
        <div
          className="card-title"
          style={{
            fontFamily: fonts.main,
            fontWeight: 800,
            color: "white",
            marginBottom: 8,
            lineHeight: 1.1,
          }}
        >
          {name}
        </div>
        <div
          className="card-desc"
          style={{
            fontFamily: fonts.main,
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.4,
          }}
        >
          {desc}
        </div>
      </div>
    </a>
  );
}

export default function SpotifySection() {
  return (
    <section id="integrations" className="spotify-section">
      <style>{spotifyStyle}</style>

      <div className="spotify-container">
        {/* ESQUERDA — texto */}
        <div className="spotify-text">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#1DB95418",
              borderRadius: 50,
              padding: "6px 16px",
              marginBottom: 24,
              border: "1px solid #1DB95430",
            }}
          >
            <span
              style={{
                fontFamily: fonts.main,
                fontWeight: 700,
                fontSize: 13,
                color: "#548F53",
              }}
            >
              Nidush is on Spotify
            </span>
          </div>

          <h2
            style={{
              fontFamily: fonts.main,
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: colors.darkGreen,
              marginBottom: 20,
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
            }}
          >
            The right sound
            <br />
            for your exact moment.
          </h2>

          <p
            style={{
              fontFamily: fonts.main,
              fontSize: "1rem",
              color: colors.textLight,
              lineHeight: 1.75,
              marginBottom: 32,
              maxWidth: 420,
            }}
          >
            Whether you need to rest, work, or simply breathe — tune into our
            official playlists, crafted for every state of mind.
          </p>

          <a
            href="https://open.spotify.com/user/31zfhdtjcp73rauyfg4st37h5yjq?si=7a5d26ca75ac4448"
            target="_blank"
            rel="noopener noreferrer"
            className="spotify-btn"
          >
            Listen on Spotify
          </a>
        </div>

        {/* DIREITA — Playlists */}
        <div className="spotify-cards-wrapper">
          <div className="spotify-cards-grid">
            {PLAYLISTS.map((p) => (
              <PlaylistCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

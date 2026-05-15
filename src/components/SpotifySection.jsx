import { useState } from "react";
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
    // COLOCA AQUI O LINK DA PLAYLIST DEEP SLEEP:
    link: "https://open.spotify.com/playlist/4JsSJdt7FsIhmlga6Fi8OS?si=7f7c4ab73f164d9f",
  },
  {
    name: "Deep Focus",
    desc: "Flow without distraction",
    image: deepFocus,
    // COLOCA AQUI O LINK DA PLAYLIST DEEP FOCUS:
    link: "https://open.spotify.com/playlist/2ADGJWqHRP8n7IYJMmozFd?si=d0b9b95dd4354202",
  },
  {
    name: "Nature Escape",
    desc: "Breathe with the world",
    image: natureEscape,
    // COLOCA AQUI O LINK DA PLAYLIST NATURE ESCAPE:
    link: "https://open.spotify.com/playlist/0ZvQlFUqVLU6Kq99rWNsR6?si=b548f765233749d1",
  },
  {
    name: "Gentle Rise",
    desc: "Start your morning right",
    image: gentleRise,
    // COLOCA AQUI O LINK DA PLAYLIST GENTLE RISE:
    link: "https://open.spotify.com/playlist/3WD3IvwdUJgPJM6JR8K9j1?si=25d5fdb85fc24212",
  },
];

// Adicionada a prop 'link' aqui
function PlaylistCard({ name, desc, image, emoji, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // A tag <div> principal passou a ser um <a> (link)
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        textDecoration: "none", // Remove o sublinhado padrão dos links
        width: 220,
        height: 220,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 24,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
        transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        transform: isHovered ? "translateZ(40px)" : "translateZ(0px)",
        boxShadow: isHovered
          ? "20px 20px 40px rgba(29, 185, 84, 0.4), 5px 5px 15px rgba(29, 185, 84, 0.2)"
          : "10px 10px 20px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ fontSize: 36, textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
          {emoji}
        </div>

        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#1DB954",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            color: "white",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "scale(1)" : "scale(0.5)",
            transition: "all 0.4s ease",
            boxShadow: "0 4px 12px rgba(29, 185, 84, 0.4)",
          }}
        >
          ▶
        </div>
      </div>

      <div>
        <div
          style={{
            fontFamily: fonts.main,
            fontWeight: 800,
            fontSize: "1.25rem",
            color: "white",
            marginBottom: 8,
            lineHeight: 1.1,
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: fonts.main,
            fontSize: "0.9rem",
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
    <section
      id="integrations"
      style={{
        background: colors.beige,
        padding: "100px clamp(1.5rem, 5vw, 4rem)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* ESQUERDA — texto */}
          <div style={{ zIndex: 2 }}>
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
                  color: "#1DB954",
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

            <button
              style={{
                background: "#1DB954",
                color: "white",
                border: "none",
                borderRadius: 50,
                padding: "13px 28px",
                fontFamily: fonts.main,
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: "0 4px 20px #1DB95430",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 28px #1DB95445";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 20px #1DB95430";
              }}
            >
              <a
                href="https://open.spotify.com/user/31zfhdtjcp73rauyfg4st37h5yjq?si=7a5d26ca75ac4448"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Listen on Spotify
              </a>
            </button>
          </div>

          {/* DIREITA — Playlists */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              perspective: "1200px",
              padding: "40px 0",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
                transform: "rotateX(60deg) rotateZ(45deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {PLAYLISTS.map((p) => (
                <PlaylistCard key={p.name} {...p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

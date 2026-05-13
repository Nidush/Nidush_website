import { useState, useEffect } from "react";
import Logo from "./../assets/nidush_logo_horizontal.png";
import { colors, fonts } from "../styles/theme";

const NAV_LINKS = ["Features", "Hobbies", "Integrations", "Community"];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <div>
          <img src={Logo} alt="Descrição da imagem" className="w-28 auto" />
        </div>

        <div style={{ display: "flex", gap: 36 }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: fonts.main,
                fontWeight: 600,
                fontSize: 15,
                color: colors.darkGreen,
                textDecoration: "none",
                opacity: 0.75,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = 1)}
              onMouseLeave={(e) => (e.target.style.opacity = 0.75)}
            >
              {link}
            </a>
          ))}
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: `${colors.softGreen}45`,
            borderRadius: 50,
            padding: "6px 18px",
            border: `1px solid ${colors.softGreen}`,
          }}
        >
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: colors.green,
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontFamily: fonts.main,
              fontSize: 13,
              fontWeight: 700,
              color: colors.darkGreen,
            }}
          >
            Coming Soon
          </span>
        </div>
      </div>
    </nav>
  );
}

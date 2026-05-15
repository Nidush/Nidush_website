import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // 1. Importa o Link do React Router
import Logo from "./../assets/nidush_logo_horizontal.png";
import { colors, fonts } from "../styles/theme";

// 2. Transforma as strings num objeto com label e path (caminho da rota)
const NAV_LINKS = [
  { label: "Features", path: "/features" },
  { label: "Community", path: "/community" },
  { label: "About us", path: "/about-us" },
  { label: "Join the waitlist", path: "/waitlist" },
];

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
        {/* 3. O logótipo agora leva-te sempre de volta à Home ("/") */}
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo Nidush" className="w-28 h-auto" />
          </Link>
        </div>

        <div style={{ display: "flex", gap: 36 }}>
          {/* 4. Mapeamento usando o componente <Link> */}
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={label}
              to={path} // Usar "to" em vez de "href"
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
              {label}
            </Link>
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

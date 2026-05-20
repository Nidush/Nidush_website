import Logo from "./../assets/nidush_logo_white.png";
import { colors, fonts } from "../styles/theme";

const LINKS = [
  {
    label: "Instagram",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="6"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="12"
          r="4.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Spotify",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M7.5 10.5C10.2 9.7 13.8 9.4 16.5 10.3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7 13.5C9.1 12.9 12.9 12.6 15.8 13.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7.5 16.5C10.3 15.8 14.1 15.4 16.6 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Privacy Policy",
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: colors.darkGreen,
        padding: "48px clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <div>
          <img src={Logo} alt="Descrição da imagem" className="w-10 auto" />
        </div>

        <p
          style={{
            fontFamily: fonts.main,
            fontSize: 13,
            color: "rgba(255,255,255,0.35)",
          }}
        >
          © 2026 Nidush · Your home, your safe space.
        </p>

        <div style={{ display: "flex", gap: 24 }}>
          {LINKS.map((link) => (
            <a
              key={link.label}
              href="#"
              aria-label={link.label}
              style={{
                fontFamily: fonts.main,
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                transition: "color 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: link.icon ? 8 : 0,
              }}
              onMouseEnter={(e) => (e.target.style.color = colors.softGreen)}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(255,255,255,0.45)")
              }
            >
              {link.icon || link.label}
              {link.icon && (
                <span style={{ display: "none" }}>{link.label}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

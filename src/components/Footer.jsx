import React from "react";
import Logo from "./../assets/nidush_logo_white.png";
import { colors, fonts } from "../styles/theme";

const LINKS = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/nidush_app",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@Nidush-app",
    icon: (
      <svg
        width="22"
        height="16"
        viewBox="0 0 24 17"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <path d="M23.498 6.186a2.94 2.94 0 0 0-2.067-2.078C19.347 3.655 12 3.655 12 3.655s-7.348 0-9.431.453c-1.15.253-2.056 1.156-2.316 2.078C0 7.973 0 11.722 0 11.722s0 3.75.253 5.536c.26.922 1.166 1.825 2.316 2.078 2.083.453 9.431.453 9.431.453s7.348 0 9.431-.453c1.15-.253 2.056-1.156 2.316-2.078.253-1.786.253-5.536.253-5.536s0-3.749-.253-5.536zm-13.344 7.647V8.167l6.233 2.833-6.233 2.833z" />
      </svg>
    ),
  },
  {
    label: "Spotify",
    url: "https://open.spotify.com/user/31zfhdtjcp73rauyfg4st37h5yjq?nd=1&dlsi=1a85df1671794cca",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    label: "Privacy Policy",
    url: "/privacy-policy",
  },
];

const footerStyle = `
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
  }
  .footer-logo {
    order: 1;
  }
  .footer-copyright {
    order: 2;
  }
  .footer-links {
    order: 3;
    display: flex;
    gap: 24px;
    align-items: center;
  }

  /* --- REGRAS PARA MOBILE --- */
  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      justify-content: center;
      gap: 28px;
    }
    .footer-logo {
      order: 1;
    }
    .footer-links {
      order: 2;
      justify-content: center;
    }
    .footer-copyright {
      order: 3;
      text-align: center;
      margin-top: 8px;
    }
  }
`;

export default function Footer() {
  return (
    <footer
      style={{
        background: colors.darkGreen,
        padding: "48px clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <style>{footerStyle}</style>

      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Nidush Logo" className="w-10 auto" />
        </div>

        <p
          className="footer-copyright"
          style={{
            fontFamily: fonts.main,
            fontSize: 13,
            color: "rgba(255,255,255,0.35)",
          }}
        >
          © 2026 Nidush · Your home, your safe space.
        </p>
        <div className="footer-links">
          {LINKS.map((link) => {
            const isExternal = link.url && link.url.startsWith("http");
            const isTextLink = !link.icon;

            return (
              <a
                key={link.label}
                href={link.url || "#"}
                aria-label={link.label}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  color: "rgba(255,255,255,0.45)",
                  width: isTextLink ? "auto" : "32px", // Auto para texto, 32px para ícones
                  height: isTextLink ? "auto" : "32px",
                  whiteSpace: "nowrap", // Garante que o texto fica numa só linha
                  fontFamily: isTextLink ? fonts.main : undefined,
                  fontSize: isTextLink ? "13px" : undefined,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.softGreen)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                }
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {link.icon
                    ? React.cloneElement(link.icon, {
                        style: {
                          width: "20px",
                          height: "20px",
                          display: "block",
                        },
                      })
                    : link.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

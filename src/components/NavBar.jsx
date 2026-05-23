import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/nidush_logo_horizontal.png";
import "../styles/Navbar.css"; // Importa o nosso novo CSS

const NAV_LINKS = [
  { label: "Features", path: "/features" },
  { label: "Community", path: "/community" },
  { label: "About us", path: "/about-us" },
  { label: "Join the waitlist", path: "/waitlist" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detetar o scroll da página
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar o menu mobile se o ecrã for redimensionado para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Controlar o scroll do body quando o menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${isOpen ? "open" : ""}`}
    >
      <div className="nav-container">
        {/* LOGO */}
        <div className="nav-logo-wrapper">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={Logo} alt="Logo Nidush" className="nav-logo" />
          </Link>
        </div>
        <div className="nav-badge nav-badge-inline-mobile">
          <div className="nav-badge-dot" />
          <span className="nav-badge-text">Coming Soon</span>
        </div>

        {/* LINKS DESKTOP */}
        <div className="nav-links-desktop">
          {NAV_LINKS.map(({ label, path }) => (
            <Link key={label} to={path} className="nav-link">
              {label}
            </Link>
          ))}
        </div>

        {/* BADGE "COMING SOON" DESKTOP */}
        <div className="nav-badge nav-badge-desktop">
          <div className="nav-badge-dot" />
          <span className="nav-badge-text">Coming Soon</span>
        </div>

        {/* BOTÃO MENU HAMBÚRGUER MOBILE */}
        <button
          className="hamburger-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="hamburger-line line-top" />
          <span className="hamburger-line line-middle" />
          <span className="hamburger-line line-bottom" />
        </button>
      </div>

      {/* MENU DROPDOWN MOBILE */}
      <div className="mobile-menu">
        <div className="mobile-menu-inner">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              onClick={() => setIsOpen(false)} // Fecha o menu ao clicar num link
              className="mobile-nav-link"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

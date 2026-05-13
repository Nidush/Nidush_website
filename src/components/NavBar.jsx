import { useState, useEffect } from 'react';
import Logo from './Logo';
import { colors, fonts } from '../styles/theme';

const NAV_LINKS = ['Features', 'Hobbies', 'Integrations', 'Community'];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(240,242,235,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? `1px solid ${colors.softGreen}40` : 'none',
      transition: 'all 0.4s ease',
      padding: '0 clamp(1.5rem, 5vw, 4rem)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', height: 70,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Logo size={32} />

        <div style={{ display: 'flex', gap: 36 }}>
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              fontFamily: fonts.main, fontWeight: 600, fontSize: 15,
              color: colors.darkGreen, textDecoration: 'none', opacity: 0.75,
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.target.style.opacity = 1}
              onMouseLeave={e => e.target.style.opacity = 0.75}
            >
              {link}
            </a>
          ))}
        </div>

        <button style={{
          background: colors.green, color: 'white', border: 'none', borderRadius: 50,
          padding: '10px 24px', fontFamily: fonts.main, fontWeight: 700, fontSize: 14,
          cursor: 'pointer', boxShadow: `0 4px 20px ${colors.green}40`,
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = `0 8px 28px ${colors.green}50`;
          }}
          onMouseLeave={e => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = `0 4px 20px ${colors.green}40`;
          }}
        >
          Coming Soon
        </button>
      </div>
    </nav>
  );
}

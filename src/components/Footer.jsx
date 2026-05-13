import Logo from './Logo';
import { colors, fonts } from '../styles/theme';

const LINKS = ['Instagram', 'Spotify', 'Privacy Policy'];

export default function Footer() {
  return (
    <footer style={{
      background: colors.darkGreen,
      padding: '48px clamp(1.5rem, 5vw, 4rem)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 24,
      }}>
        <Logo size={28} />

        <p style={{
          fontFamily: fonts.main, fontSize: 13,
          color: 'rgba(255,255,255,0.35)',
        }}>
          © 2026 Nidush · Your home, your safe space.
        </p>

        <div style={{ display: 'flex', gap: 24 }}>
          {LINKS.map(link => (
            <a key={link} href="#" style={{
              fontFamily: fonts.main, fontSize: 13,
              color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = colors.softGreen}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

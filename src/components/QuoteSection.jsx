import Wave from './Wave';
import Logo from './Logo';
import { colors, fonts } from '../styles/theme';

export default function QuoteSection() {
  return (
    <section style={{
      background: colors.darkGreen,
      padding: '100px clamp(1.5rem, 5vw, 4rem)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, transform: 'scaleY(-1)' }}>
        <Wave color={colors.softGreen} opacity={0.12} />
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Wave color={colors.softGreen} opacity={0.08} />
      </div>

      <div style={{
        maxWidth: 760, margin: '0 auto',
        textAlign: 'center', position: 'relative', zIndex: 1,
      }}>
        <div style={{
          fontSize: 80, opacity: 0.15, color: colors.softGreen,
          fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: -28,
        }}>
          "
        </div>
        <p style={{
          fontFamily: fonts.main, fontWeight: 700,
          fontSize: 'clamp(1.4rem, 3vw, 2.1rem)',
          color: colors.white, lineHeight: 1.55,
          marginBottom: 36, letterSpacing: '-0.01em',
        }}>
          Whatever your version of peace looks like today — Nidush helps you shape your home to match it.
        </p>
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: 16,
        }}>
          <div style={{ height: 1, width: 48, background: `${colors.softGreen}50` }} />
          <Logo size={22} />
          <div style={{ height: 1, width: 48, background: `${colors.softGreen}50` }} />
        </div>
      </div>
    </section>
  );
}

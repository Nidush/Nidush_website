import { colors, fonts } from '../styles/theme';

const PLAYLISTS = [
  { name: 'Deep Sleep', desc: 'Let go of the day', bg: '#1a3a2a', emoji: '🌙' },
  { name: 'Deep Focus', desc: 'Flow without distraction', bg: '#1a2a3a', emoji: '🧠' },
  { name: 'Nature Escape', desc: 'Breathe with the world', bg: '#1e3a1e', emoji: '🌿' },
];

function PlaylistCard({ name, desc, bg, emoji }) {
  return (
    <div
      style={{
        background: bg, borderRadius: 20, padding: '18px 22px',
        display: 'flex', alignItems: 'center', gap: 16,
        cursor: 'pointer', transition: 'transform 0.25s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(8px)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; }}
    >
      <div style={{ fontSize: 30 }}>{emoji}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: fonts.main, fontWeight: 800, fontSize: '1rem', color: 'white' }}>
          {name}
        </div>
        <div style={{ fontFamily: fonts.main, fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>
          {desc}
        </div>
      </div>
      <div style={{
        width: 36, height: 36, borderRadius: '50%',
        background: '#1DB954', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        fontSize: 13, color: 'white',
      }}>
        ▶
      </div>
    </div>
  );
}

export default function SpotifySection() {
  return (
    <section id="integrations" style={{
      background: colors.beige,
      padding: '100px clamp(1.5rem, 5vw, 4rem)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 60, alignItems: 'center',
        }}>
          {/* Left — text */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#1DB95418', borderRadius: 50,
              padding: '6px 16px', marginBottom: 24,
              border: '1px solid #1DB95430',
            }}>
              <span style={{ fontSize: 15 }}>🎵</span>
              <span style={{
                fontFamily: fonts.main, fontWeight: 700,
                fontSize: 13, color: '#1DB954',
              }}>
                Nidush is on Spotify
              </span>
            </div>

            <h2 style={{
              fontFamily: fonts.main, fontWeight: 900,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: colors.darkGreen, marginBottom: 20,
              letterSpacing: '-0.025em', lineHeight: 1.2,
            }}>
              The right sound<br />for your exact moment.
            </h2>

            <p style={{
              fontFamily: fonts.main, fontSize: '1rem',
              color: colors.textLight, lineHeight: 1.75,
              marginBottom: 32, maxWidth: 420,
            }}>
              Whether you need to rest, work, or simply breathe — tune into our official playlists, crafted for every state of mind.
            </p>

            <button style={{
              background: '#1DB954', color: 'white', border: 'none', borderRadius: 50,
              padding: '13px 28px', fontFamily: fonts.main, fontWeight: 700, fontSize: 15,
              cursor: 'pointer', transition: 'all 0.2s',
              boxShadow: '0 4px 20px #1DB95430',
            }}
              onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 28px #1DB95445'; }}
              onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 20px #1DB95430'; }}
            >
              Listen on Spotify →
            </button>
          </div>

          {/* Right — playlists */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {PLAYLISTS.map(p => (
              <PlaylistCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

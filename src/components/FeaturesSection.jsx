import { colors, fonts } from '../styles/theme';

const FEATURES = [
  {
    icon: '🏠',
    title: 'Smart Scenarios',
    desc: 'Create personalized environments that transform each room to match how you feel — automatically.',
  },
  {
    icon: '💚',
    title: 'Wearable Sync',
    desc: 'Your heart rate guides your home. Nidush intervenes at the exact moment you need it.',
  },
  {
    icon: '🎵',
    title: 'Spotify Integration',
    desc: 'Deep Sleep. Deep Focus. Nature Escape. Official playlists crafted for every moment of your day.',
  },
  {
    icon: '🏡',
    title: 'Google Home',
    desc: 'Your entire home ecosystem, unified and responsive to your wellbeing.',
  },
  {
    icon: '🧘',
    title: 'Hobbies & Activities',
    desc: 'Recipes, guided meditation, audiobooks and workout — everything you love, all in one place.',
  },
  {
    icon: '🔕',
    title: 'Silence Mode',
    desc: 'Nidush silences notifications and distractions so you can simply breathe.',
  },
];

function FeatureCard({ icon, title, desc }) {
  return (
    <div
      style={{
        background: colors.white, borderRadius: 24, padding: '28px',
        border: `1px solid ${colors.softGreen}55`,
        boxShadow: `0 4px 20px ${colors.darkGreen}06`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = `0 16px 48px ${colors.green}14`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = `0 4px 20px ${colors.darkGreen}06`;
      }}
    >
      <div style={{ fontSize: 34, marginBottom: 16 }}>{icon}</div>
      <h3 style={{
        fontFamily: fonts.main, fontWeight: 800, fontSize: '1.1rem',
        color: colors.darkGreen, marginBottom: 10,
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: fonts.main, fontSize: '0.95rem',
        color: colors.textLight, lineHeight: 1.7,
      }}>
        {desc}
      </p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" style={{
      background: `${colors.softGreen}20`,
      padding: '100px clamp(1.5rem, 5vw, 4rem)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{
            fontFamily: fonts.main, fontWeight: 900,
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            color: colors.darkGreen, marginBottom: 18, letterSpacing: '-0.025em',
          }}>
            Your home,<br />
            <span style={{ color: colors.green }}>tuned to you.</span>
          </h2>
          <p style={{
            fontFamily: fonts.main, fontSize: '1.05rem',
            color: colors.textLight, maxWidth: 480,
            margin: '0 auto', lineHeight: 1.75,
          }}>
            Create and get recommendations of Scenarios that combine your smart devices and transform each room.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {FEATURES.map(f => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

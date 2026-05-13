import { colors, fonts } from '../styles/theme';

const ACTIVITIES = [
  { name: 'Chocolate Cake', time: '35 min', room: 'Kitchen', emoji: '🍫' },
  { name: 'Pasta Primavera', time: '25 min', room: 'Kitchen', emoji: '🍝' },
];

const SHORTCUTS = ['🧘', '🎵', '💡', '🔕'];

export default function PhoneMockup() {
  return (
    <div style={{
      width: 260, height: 520, borderRadius: 40,
      background: `linear-gradient(145deg, ${colors.white}, ${colors.beige})`,
      boxShadow: `0 40px 80px ${colors.darkGreen}20, 0 0 0 2px ${colors.softGreen}60`,
      overflow: 'hidden',
      animation: 'float 6s ease-in-out infinite',
    }}>
      {/* Header */}
      <div style={{ background: colors.darkGreen, padding: '24px 20px 18px' }}>
        <div style={{ fontSize: 11, opacity: 0.6, fontFamily: fonts.main, color: 'white', marginBottom: 4 }}>
          Good afternoon,
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, fontFamily: fonts.main, color: 'white' }}>
          Laura
        </div>
        <div style={{
          marginTop: 12, background: `${colors.green}40`,
          borderRadius: 12, padding: '8px 12px',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: colors.softGreen }} />
          <span style={{ fontSize: 11, fontFamily: fonts.main, fontWeight: 600, color: 'white' }}>
            You're currently feeling...
          </span>
        </div>
        <div style={{
          fontSize: 24, fontWeight: 900, fontFamily: fonts.main,
          marginTop: 6, color: colors.softGreen,
        }}>
          Relaxed
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '16px', background: colors.white, flex: 1 }}>
        <div style={{
          fontSize: 10, fontWeight: 700, color: colors.textLight,
          fontFamily: fonts.main, marginBottom: 10,
          textTransform: 'uppercase', letterSpacing: '0.06em',
        }}>
          Activities for you
        </div>

        {ACTIVITIES.map(a => (
          <div key={a.name} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '8px 10px', background: colors.beige,
            borderRadius: 12, marginBottom: 8,
          }}>
            <span style={{ fontSize: 20 }}>{a.emoji}</span>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: colors.darkGreen, fontFamily: fonts.main }}>
                {a.name}
              </div>
              <div style={{ fontSize: 10, color: colors.textLight, fontFamily: fonts.main }}>
                {a.time} · {a.room}
              </div>
            </div>
          </div>
        ))}

        <div style={{ marginTop: 14 }}>
          <div style={{
            fontSize: 10, fontWeight: 700, color: colors.textLight,
            fontFamily: fonts.main, marginBottom: 8,
            textTransform: 'uppercase', letterSpacing: '0.06em',
          }}>
            Shortcuts
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {SHORTCUTS.map((icon, i) => (
              <div key={i} style={{
                flex: 1, background: colors.lightGreen, borderRadius: 12,
                padding: '10px 0', display: 'flex',
                alignItems: 'center', justifyContent: 'center', fontSize: 18,
              }}>
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

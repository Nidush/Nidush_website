import { colors, fonts } from '../styles/theme';

export default function Logo({ size = 36 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4 L32 14 L32 30 Q32 34 28 34 L12 34 Q8 34 8 30 L8 14 Z" fill={colors.green} opacity="0.12" />
        <path d="M20 6 L30 15 L30 29 Q30 32 27 32 L13 32 Q10 32 10 29 L10 15 Z" fill="none" stroke={colors.green} strokeWidth="2" />
        <path d="M16 32 Q20 38 24 32" stroke={colors.green} strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="20" cy="21" r="4" fill={colors.green} />
        <path d="M15 38 Q20 42 25 38" stroke={colors.softGreen} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
      <span style={{
        fontFamily: fonts.main,
        fontWeight: 800,
        fontSize: size * 0.6,
        color: colors.darkGreen,
        letterSpacing: '-0.02em',
      }}>
        nidush
      </span>
    </div>
  );
}

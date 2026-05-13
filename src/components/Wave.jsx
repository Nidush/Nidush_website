import { colors } from '../styles/theme';

export default function Wave({ color = colors.softGreen, opacity = 0.4, flip = false }) {
  return (
    <div style={{ overflow: 'hidden', lineHeight: 0, transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={color} fillOpacity={opacity}
        />
        <path
          d="M0,55 C360,20 720,70 1080,30 C1260,15 1380,50 1440,55 L1440,80 L0,80 Z"
          fill={color} fillOpacity={opacity * 0.6}
        />
      </svg>
    </div>
  );
}

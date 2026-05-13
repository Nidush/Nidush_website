import { colors } from "../styles/theme";

const waveStyle = `
  @keyframes wave1 {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes wave2 {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

export default function Wave({
  color = colors.softGreen,
  opacity = 0.4,
  flip = false,
}) {
  return (
    <>
      <style>{waveStyle}</style>
      <div
        style={{
          overflow: "hidden",
          lineHeight: 0,
          transform: flip ? "scaleY(-1)" : "none",
        }}
      >
        <div style={{ position: "relative", height: "140px" }}>
          {/* Onda 1 */}
          <div
            style={{
              display: "flex",
              width: "200%",
              position: "absolute",
              animation: "wave1 8s linear infinite",
            }}
          >
            {[0, 1].map((i) => (
              <svg
                key={i}
                viewBox="0 0 1440 140"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block", width: "50%", flexShrink: 0 }}
              >
                <path
                  d="M0,70 C240,140 480,0 720,70 C960,140 1200,0 1440,70 L1440,140 L0,140 Z"
                  fill={color}
                  fillOpacity={opacity}
                />
              </svg>
            ))}
          </div>

          {/* Onda 2 (sobreposta, velocidade diferente) */}
          <div
            style={{
              display: "flex",
              width: "200%",
              position: "absolute",
              top: 0,
              animation: "wave2 12s linear infinite reverse",
            }}
          >
            {[0, 1].map((i) => (
              <svg
                key={i}
                viewBox="0 0 1440 140"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block", width: "50%", flexShrink: 0 }}
              >
                <path
                  d="M0,95 C360,40 720,120 1080,60 C1260,30 1380,90 1440,95 L1440,140 L0,140 Z"
                  fill={color}
                  fillOpacity={opacity * 0.6}
                />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

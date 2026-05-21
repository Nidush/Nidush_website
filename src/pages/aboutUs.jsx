import "../styles/global.css";
import "../styles/AboutUs.css";
import pedro_perfil from "../assets/foto_perfil_linkedin2.png";
import gabriel_perfil from "../assets/perfil_gabriel.jpg";
import duda_perfil from "../assets/duda_perfil.jpg";

// Team data
const TEAM = [
  {
    id: 1,
    name: "Eduarda Carvalho",
    role: "Design & UX Research",
    image: duda_perfil,
  },
  {
    id: 2,
    name: "Gabriel Teixeira",
    role: "Hardware & Product",
    image: gabriel_perfil,
  },
  {
    id: 3,
    name: "Pedro Teixeira",
    role: "Developer & UI/UX",
    image: pedro_perfil,
  },
];

export default function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-wrapper">
        {/* HEADER */}
        <div className="about-header">
          <div className="about-label-container">
            <p className="about-label">About Nidush</p>
          </div>

          <h1 className="about-title">
            Your home as an <span>active ecosystem.</span>
          </h1>
          <p className="about-subtitle">
            We believe technology shouldn't just automate tasks—it should
            regulate stress and anxiety. Nidush transforms your home into a
            sensory sanctuary that adapts to how you feel.
          </p>
        </div>

        {/* BENTO GRID - MISSION AND VALUES */}
        <div className="vision-grid">
          {/* Larger Card: The Mission */}
          <div className="vision-card-main">
            <div className="vision-glow" />
            <h2>A sanctuary that breathes with you.</h2>
            <p>
              Nidush was born from the need to leave chaos at the door. By
              utilizing{" "}
              <strong>JITAI (Just-In-Time Adaptive Interventions)</strong> and
              biometric data from your smartwatch, Nidush detects anxiety peaks
              before you even realize them. It automatically harmonizes
              lighting, sound, and aroma to provide exactly what you need at
              that exact moment: deep rest, focus, or gentle energy.
            </p>
          </div>

          {/* Smaller Cards: The Values */}
          <div className="vision-values">
            <div className="value-card">
              <div className="value-icon">🧠</div>
              <h3 className="value-title">Biometric Empathy</h3>
              <p className="value-desc">
                Your environment responds to your body. By reading Heart Rate
                and Stress Scores, the house proactively cares for your mental
                well-being.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3 className="value-title">Invisible Design</h3>
              <p className="value-desc">
                No complex dashboards or intrusive alerts. Nidush works silently
                in the background, making peace feel completely effortless.
              </p>
            </div>
          </div>
        </div>

        {/* TEAM */}
        <div className="team-section">
          <h3>Meet the Team</h3>
          <p>The minds focused on bringing calm to your everyday life.</p>

          <div className="team-grid">
            {TEAM.map((member) => (
              <div key={member.id} className="team-member">
                <div className="team-avatar">
                  <img src={member.image} alt={`Avatar of ${member.name}`} />
                </div>
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

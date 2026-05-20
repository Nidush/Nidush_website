import "../styles/global.css"; // Ensure you have the base imports
import "../styles/AboutUs.css"; // Import our new CSS
import pedro_perfil from "../assets/foto_perfil_linkedin2.png"; // Example image import
import gabriel_perfil from "../assets/perfil_gabriel.jpg"; // Example image import
import duda_perfil from "../assets/duda_perfil.jpg"; // Example image import

// Team data
const TEAM = [
  {
    id: 1,
    name: "Eduarda Carvalho",
    role: "Design & UX Research",
    image: duda_perfil, // Avatar placeholder generated dynamically with Nidush colors
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
    // Avatar placeholder generated dynamically with Nidush colors
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
            Technology serving your <span>balance.</span>
          </h1>
          <p className="about-subtitle">
            We believe technology in our homes should not be a source of stress
            or distraction. It should be invisible, intuitive, and designed to
            give us peace.
          </p>
        </div>

        {/* BENTO GRID - MISSION AND VALUES */}
        <div className="vision-grid">
          {/* Larger Card: The Mission */}
          <div className="vision-card-main">
            <div className="vision-glow" />
            <h2>Turning houses into true sanctuaries.</h2>
            <p>
              Nidush was born from the desire to create a domestic environment
              that breathes with you. Instead of hundreds of notifications and
              complex controls, we developed an ecosystem that understands how
              you feel and adjusts your home automatically for what you need
              most: focus, rest, or energy.
            </p>
          </div>

          {/* Smaller Cards: The Values */}
          <div className="vision-values">
            <div className="value-card">
              <div className="value-icon">🌿</div>
              <h3 className="value-title">Well-being First</h3>
              <p className="value-desc">
                Everything we build has a single goal: caring for your mental
                and physical health through your environment.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3 className="value-title">Invisible Design</h3>
              <p className="value-desc">
                The best interfaces are the ones you don't need to use. Nidush
                works silently in the background.
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

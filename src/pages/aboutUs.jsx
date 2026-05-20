import "../styles/global.css"; // Garante que tens os imports base
import "../styles/AboutUs.css"; // Importa o nosso novo CSS

// Dados da equipa
const TEAM = [
  {
    id: 1,
    name: "Pedro",
    role: "Developer & UI/UX",
    // Avatar placeholder gerado dinamicamente com as cores da Nidush
    image:
      "https://api.dicebear.com/7.x/notionists/svg?seed=Pedro&backgroundColor=d1fae5",
  },
  {
    id: 2,
    name: "Eduarda Carvalho",
    role: "Design & UX Research",
    image:
      "https://api.dicebear.com/7.x/notionists/svg?seed=Eduarda&backgroundColor=ccfbf1",
  },
  {
    id: 3,
    name: "Gabriel Teixeira",
    role: "Hardware & Product",
    image:
      "https://api.dicebear.com/7.x/notionists/svg?seed=Gabriel&backgroundColor=ecfccb",
  },
];

export default function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-wrapper">
        {/* HEADER */}
        <div className="about-header">
          <div className="about-label-container">
            <div className="about-dots">
              <span className="dot-1" />
              <span className="dot-2" />
              <span className="dot-3" />
            </div>
            <p className="about-label">A Nossa História</p>
          </div>

          <h1 className="about-title">
            A tecnologia ao serviço do teu <span>equilíbrio.</span>
          </h1>
          <p className="about-subtitle">
            Acreditamos que a tecnologia nas nossas casas não deve ser um fator
            de stress ou distração. Deve ser invisível, intuitiva e desenhada
            para nos dar paz.
          </p>
        </div>

        {/* BENTO GRID - MISSÃO E VALORES */}
        <div className="vision-grid">
          {/* Cartão Maior: A Missão */}
          <div className="vision-card-main">
            <div className="vision-glow" />
            <h2>Transformar casas em verdadeiros santuários.</h2>
            <p>
              A Nidush nasceu da vontade de criar um ambiente doméstico que
              respira contigo. Em vez de centenas de notificações e controlos
              complexos, desenvolvemos um ecossistema que entende como te sentes
              e ajusta a tua casa automaticamente para o que mais precisas:
              foco, descanso ou energia.
            </p>
          </div>

          {/* Cartões Menores: Os Valores */}
          <div className="vision-values">
            <div className="value-card">
              <div className="value-icon">🌿</div>
              <h3 className="value-title">Bem-Estar em 1º lugar</h3>
              <p className="value-desc">
                Tudo o que construímos tem um único objetivo: cuidar da tua
                saúde mental e física através do teu ambiente.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3 className="value-title">Design Invisível</h3>
              <p className="value-desc">
                As melhores interfaces são aquelas que não precisas de usar. A
                Nidush atua em silêncio no background.
              </p>
            </div>
          </div>
        </div>

        {/* EQUIPA */}
        <div className="team-section">
          <h3>Conhece a equipa</h3>
          <p>As mentes focadas em trazer tranquilidade para o teu dia-a-dia.</p>

          <div className="team-grid">
            {TEAM.map((member) => (
              <div key={member.id} className="team-member">
                <div className="team-avatar">
                  <img src={member.image} alt={`Avatar do ${member.name}`} />
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

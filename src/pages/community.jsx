import "../styles/global.css";
import "../styles/Community.css"; // A nossa nova stylesheet
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const TAG_PALETTES = [
  "tag-emerald",
  "tag-teal",
  "tag-lime",
  "tag-cyan",
  "tag-green",
];

function tagPalette(str = "") {
  const sum = [...str].reduce((a, c) => a + c.charCodeAt(0), 0);
  return TAG_PALETTES[sum % TAG_PALETTES.length];
}

function readingMins(text = "") {
  return Math.max(
    1,
    Math.round(text.split(/\s+/).filter(Boolean).length / 200),
  );
}

/* ─── HERO CARD (post 0) ───────────────────────────── */
function HeroCard({ post }) {
  const palette = tagPalette(post.subtitulo);
  return (
    <div className="hero-card">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="hero-pattern" />
      <span className="hero-number">01</span>

      <div className="hero-content">
        <div>
          <div className="hero-meta">
            <span className={`tag-base ${palette}`}>
              {post.subtitulo || "Destaque"}
            </span>
            <span className="hero-time">{readingMins(post.descrição)} min</span>
          </div>
          <h2 className="hero-title">{post.titulo}</h2>
          <p className="hero-desc line-clamp-3">{post.descrição}</p>
        </div>
        <div className="hero-footer">
          <span className="hero-footer-text">Ler agora</span>
          <div className="hero-btn">
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── TALL CARD (post 1) ───────────────────────────── */
function TallCard({ post }) {
  const palette = tagPalette(post.subtitulo);
  return (
    <div className="tall-card">
      <div className="tall-top-bar" />
      <div className="tall-glow" />

      <div className="tall-content">
        <div className="tall-meta">
          <span className={`tag-base ${palette}`}>
            {post.subtitulo || "Artigo"}
          </span>
          <span className="tall-time">{readingMins(post.descrição)} min</span>
        </div>
        <h2 className="tall-title">{post.titulo}</h2>
        <p className="tall-desc line-clamp-5">{post.descrição}</p>

        <div className="tall-footer">
          <span className="tall-footer-text">Ler artigo</span>
          <span className="tall-arrow">→</span>
        </div>
      </div>
    </div>
  );
}

/* ─── WIDE CARD (post 2) ───────────────────────────── */
function WideCard({ post }) {
  const palette = tagPalette(post.subtitulo);
  return (
    <div className="wide-card">
      <div className="wide-icon">
        <span>03</span>
      </div>
      <div className="wide-content">
        <div className="wide-meta">
          <span className={`tag-base ${palette}`}>
            {post.subtitulo || "Artigo"}
          </span>
          <span className="wide-time">{readingMins(post.descrição)} min</span>
        </div>
        <h2 className="wide-title">{post.titulo}</h2>
        <p className="wide-desc line-clamp-2">{post.descrição}</p>
      </div>
      <div className="wide-btn">
        <span>→</span>
      </div>
    </div>
  );
}

/* ─── MINI CARD (posts 3+) ─────────────────────────── */
function MiniCard({ post, index }) {
  const palette = tagPalette(post.subtitulo);
  const num = String(index + 4).padStart(2, "0");
  return (
    <div className="mini-card">
      <div className="mini-meta">
        <span className={`tag-base ${palette}`}>
          {post.subtitulo || "Artigo"}
        </span>
        <span className="mini-number">{num}</span>
      </div>
      <h2 className="mini-title line-clamp-2">{post.titulo}</h2>
      <p className="mini-desc line-clamp-3">{post.descrição}</p>
      <div className="mini-footer">
        <span className="mini-footer-text">Ler</span>
        <span className="mini-arrow">→</span>
      </div>
    </div>
  );
}

/* ─── PAGE ─────────────────────────────────────────── */
export default function Community() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        setPosts(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        );
      } catch (error) {
        console.error("Erro ao buscar os posts: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const [p0, p1, p2, ...rest] = posts;

  return (
    <div className="community-page">
      <div className="community-wrapper">
        {/* Header */}
        <div className="header-section">
          <div className="header-label-container">
            <div className="header-dots">
              <span className="dot-1" />
              <span className="dot-2" />
              <span className="dot-3" />
            </div>
            <p className="header-label">Nidush Community</p>
          </div>

          <div className="header-title-wrapper">
            <h1 className="header-title">
              Ideias para o teu{" "}
              <span className="header-title-highlight">
                <span>bem‑estar.</span>
              </span>
            </h1>
            <p className="header-subtitle">
              Artigos e rotinas para transformar o teu dia‑a‑dia.
            </p>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="spinner-container">
            <div className="spinner" />
          </div>
        )}

        {/* Bento Grid */}
        {!loading && posts.length > 0 && (
          <div className="bento-container">
            {(p0 || p1) && (
              <div className="bento-top-row">
                {p0 && <HeroCard post={p0} />}
                {p1 && <TallCard post={p1} />}
              </div>
            )}

            {p2 && <WideCard post={p2} />}

            {rest.length > 0 && (
              <div className="bento-bottom-row">
                {rest.map((post, i) => (
                  <MiniCard key={post.id} post={post} index={i} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Empty */}
        {!loading && posts.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">✦</div>
            <p className="empty-text">Ainda não há publicações disponíveis.</p>
          </div>
        )}
      </div>
    </div>
  );
}

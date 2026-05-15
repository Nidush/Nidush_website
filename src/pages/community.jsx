import "../styles/global.css";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const TAG_PALETTES = [
  "bg-emerald-100 text-emerald-800",
  "bg-teal-100 text-teal-800",
  "bg-lime-100 text-lime-800",
  "bg-cyan-100 text-cyan-800",
  "bg-green-100 text-green-800",
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
    <div
      className="group relative overflow-hidden rounded-[28px] bg-[#1B3A2D] cursor-pointer
      transition-all duration-500 hover:scale-[1.015] hover:shadow-2xl hover:shadow-emerald-900/30
      flex flex-col justify-between p-8 md:p-10 min-h-[340px]"
    >
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full
        bg-emerald-500/20 blur-3xl group-hover:bg-emerald-400/30 transition-all duration-700"
      />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-teal-700/30 blur-2xl" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <span className="absolute top-6 right-8 text-[7rem] font-black text-white/5 leading-none select-none">
        01
      </span>

      <div className="relative z-10 flex flex-col gap-5 flex-1 justify-between">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span
              className={`text-[10px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full ${palette}`}
            >
              {post.subtitulo || "Destaque"}
            </span>
            <span className="text-emerald-400/70 text-xs font-semibold">
              {readingMins(post.descrição)} min
            </span>
          </div>
          <h2
            className="text-white font-black text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.15]
            tracking-[-0.03em] mb-4 group-hover:text-emerald-100 transition-colors"
          >
            {post.titulo}
          </h2>
          <p className="text-emerald-200/60 text-[15px] leading-relaxed line-clamp-3">
            {post.descrição}
          </p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-emerald-300 font-black text-sm tracking-wide">
            Ler agora
          </span>
          <div
            className="w-8 h-8 rounded-full bg-emerald-400/20 flex items-center justify-center
            group-hover:bg-emerald-400 group-hover:scale-110 transition-all duration-300"
          >
            <span className="text-emerald-300 group-hover:text-[#1B3A2D] text-sm font-black transition-colors">
              →
            </span>
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
    <div
      className="group relative overflow-hidden rounded-[28px] bg-white cursor-pointer
      border border-stone-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-100
      flex flex-col p-7"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-t-[28px]" />
      <div
        className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-emerald-50
        group-hover:bg-emerald-100 transition-colors duration-500"
      />
      <div className="relative z-10 flex flex-col flex-1 gap-4">
        <div className="flex items-center justify-between">
          <span
            className={`text-[10px] font-black uppercase tracking-[0.14em] px-3 py-1.5 rounded-full ${palette}`}
          >
            {post.subtitulo || "Artigo"}
          </span>
          <span className="text-stone-400 text-xs font-semibold">
            {readingMins(post.descrição)} min
          </span>
        </div>
        <h2
          className="text-[#1B3A2D] font-black text-xl leading-snug tracking-tight
          group-hover:text-emerald-700 transition-colors"
        >
          {post.titulo}
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-5 flex-1">
          {post.descrição}
        </p>
        <div className="pt-4 border-t border-stone-100 flex items-center gap-2">
          <span className="text-emerald-600 font-black text-xs tracking-wide uppercase">
            Ler artigo
          </span>
          <span className="text-emerald-500 text-sm group-hover:translate-x-1 transition-transform inline-block">
            →
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── WIDE CARD (post 2) ───────────────────────────── */
function WideCard({ post }) {
  const palette = tagPalette(post.subtitulo);
  return (
    <div
      className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-emerald-50 to-teal-50
      cursor-pointer border border-emerald-100
      transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-200/50
      flex flex-row items-center gap-6 p-7 md:p-8"
    >
      <div
        className="shrink-0 w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center
        group-hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-300/40"
      >
        <span className="text-white font-black text-2xl">03</span>
      </div>
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <div className="flex items-center gap-3">
          <span
            className={`text-[10px] font-black uppercase tracking-[0.14em] px-3 py-1.5 rounded-full ${palette}`}
          >
            {post.subtitulo || "Artigo"}
          </span>
          <span className="text-stone-400 text-xs font-semibold">
            {readingMins(post.descrição)} min
          </span>
        </div>
        <h2
          className="text-[#1B3A2D] font-black text-lg leading-snug tracking-tight truncate
          group-hover:text-emerald-700 transition-colors"
        >
          {post.titulo}
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
          {post.descrição}
        </p>
      </div>
      <div
        className="shrink-0 w-9 h-9 rounded-full border-2 border-emerald-300 flex items-center justify-center
        group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all duration-300"
      >
        <span className="text-emerald-600 group-hover:text-white text-sm font-black transition-colors">
          →
        </span>
      </div>
    </div>
  );
}

/* ─── MINI CARD (posts 3+) ─────────────────────────── */
function MiniCard({ post, index }) {
  const palette = tagPalette(post.subtitulo);
  const num = String(index + 4).padStart(2, "0");
  return (
    <div
      className="group relative overflow-hidden rounded-[22px] bg-white cursor-pointer
      border border-stone-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-emerald-100
      flex flex-col p-6"
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className={`text-[10px] font-black uppercase tracking-[0.12em] px-2.5 py-1 rounded-full ${palette}`}
        >
          {post.subtitulo || "Artigo"}
        </span>
        <span className="text-stone-200 font-black text-xl">{num}</span>
      </div>
      <h2
        className="text-[#1B3A2D] font-black text-base leading-snug tracking-tight mb-2
        group-hover:text-emerald-700 transition-colors line-clamp-2"
      >
        {post.titulo}
      </h2>
      <p className="text-stone-400 text-[13px] leading-relaxed line-clamp-3 flex-1">
        {post.descrição}
      </p>
      <div className="flex items-center gap-1.5 mt-4 pt-3.5 border-t border-stone-100">
        <span className="text-emerald-600 font-black text-[11px] tracking-widest uppercase">
          Ler
        </span>
        <span className="text-emerald-500 text-xs group-hover:translate-x-0.5 transition-transform inline-block">
          →
        </span>
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
    <div
      className="min-h-screen pt-[134px] pb-24 bg-[#F5F7F2]"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-10 lg:px-14">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="w-2 h-2 rounded-full bg-emerald-300" />
              <span className="w-2 h-2 rounded-full bg-emerald-100" />
            </div>
            <p className="text-emerald-600 font-black text-[11px] tracking-[0.2em] uppercase">
              Nidush Community
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1
              className="font-black text-[clamp(2.4rem,5vw,4rem)] text-[#1B3A2D]
              leading-[1.05] tracking-[-0.04em] max-w-2xl"
            >
              Ideias para o teu{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-emerald-600">
                  bem‑estar.
                </span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-emerald-100 -z-0 rounded" />
              </span>
            </h1>
            <p className="text-stone-500 max-w-xs text-[15px] leading-relaxed font-semibold md:text-right">
              Artigos e rotinas para transformar o teu dia‑a‑dia.
            </p>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-24">
            <div className="w-10 h-10 rounded-full border-4 border-emerald-100 border-t-emerald-500 animate-spin" />
          </div>
        )}

        {/* Bento Grid */}
        {!loading && posts.length > 0 && (
          <div className="flex flex-col gap-5">
            {(p0 || p1) && (
              <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-5">
                {p0 && <HeroCard post={p0} />}
                {p1 && <TallCard post={p1} />}
              </div>
            )}
            {p2 && <WideCard post={p2} />}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {rest.map((post, i) => (
                  <MiniCard key={post.id} post={post} index={i} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Empty */}
        {!loading && posts.length === 0 && (
          <div className="flex flex-col items-center py-24 gap-4 text-stone-400">
            <div className="w-14 h-14 rounded-2xl bg-stone-100 flex items-center justify-center text-2xl">
              ✦
            </div>
            <p className="font-bold text-sm">
              Ainda não há publicações disponíveis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

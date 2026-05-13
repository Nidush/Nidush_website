import lettering from "../assets/lettering_nidush.png";

export default function TrailerSection() {
  return (
    <section
      id="trailer"
      className="scroll-mt-10 min-h-[calc(120vh-70px)] px-6 md:px-12 lg:px-16 pt-24 pb-24 bg-[#f0f2eb] flex flex-col items-center justify-start"
    >
      {/* Adicionei gap-[100px] para forçar 100px de espaço entre tudo o que estiver aqui dentro */}
      <div className="w-full max-w-[800px] flex flex-col items-center text-center">
        {/* BLOCO 1: Título e Lettering */}
        {/* Adicionei gap-4 para dar um espacinho entre o título e a imagem */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-extrabold text-[clamp(2rem,3.5vw,3rem)] text-[#354F52] tracking-tight leading-tight">
            Discover more about
          </h2>
          <img src={lettering} alt="Nidush Lettering" className="w-64 h-auto" />
        </div>

        {/* BLOCO 2: Contentor do Vídeo */}
        {/* Adicionei style inline como plano de segurança. É impossível o browser ignorar isto. */}
        <div
          className="w-full aspect-video rounded-3xl overflow-hidden shadow-[0_24px_48px_rgba(2,44,34,0.15)] bg-black relative"
          style={{ marginTop: "50px" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full border-none"
            src="https://www.youtube.com/embed/tIzNWHl0EMA?rel=0&modestbranding=1"
            title="Nidush Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

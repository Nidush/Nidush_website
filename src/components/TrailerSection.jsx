export default function TrailerSection() {
  return (
    <section
      id="trailer"
      // Fundo alterado para bg-[#f0f2eb] para manter a consistência
      className="scroll-mt-10 min-h-[calc(120vh-70px)] px-6 md:px-12 lg:px-16 py-5 bg-[#f0f2eb] flex flex-col items-center justify-center"
    >
      {/* max-w-[800px] em vez de max-w-250 para tornar o vídeo mais pequeno e contido */}
      <div className="w-full max-w-200 flex flex-col items-center text-center">
        <h2 className="font-extrabold text-[clamp(2rem,3.5vw,3rem)] text-emerald-950 tracking-tight leading-tight mb-12">
          Discover more about <br />
          <span className="text-emerald-600">Nidush</span>
        </h2>

        {/* Contentor do Vídeo */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-[0_24px_48px_rgba(2,44,34,0.15)] bg-black relative">
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

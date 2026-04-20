import { site } from "@/lib/siteData";

export default function Hero() {
  return (
    <section className="relative pt-24">
      <div className="mx-auto max-w-6xl px-4">
        

        <div className="min-h-[calc(100dvh-96px)] flex flex-col justify-end md:justify-center pb-20 md:pb-0 animate-fadeUp">
          
          <div className="flex flex-col items-start text-left md:items-center md:text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80 w-fit backdrop-blur-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
              Reservas online · Confirmación inmediata
            </div>

            {/* Título */}
            <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">
              {site.name}
            </h1>

            {/* Subtítulo */}
            <p className="mt-5 text-lg md:text-xl text-white/75 max-w-xl leading-relaxed">
              {site.tagline}
            </p>

            {/* Botones */}
            <div className="mt-9 flex flex-col sm:flex-row gap-3 md:justify-center">
              <a
                href="#servicios"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold hover:bg-white/10 transition text-center backdrop-blur-sm"
              >
                Ver precios
              </a>

              <a
                href={site.koalendar.bookingLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white text-black px-7 py-3 font-semibold hover:opacity-90 transition text-center"
              >
                Reservar
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

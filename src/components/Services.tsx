import { site } from "@/lib/siteData";

export default function Services() {
  return (
    <section id="servicios" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold">Servicios & precios</h2>
            <p className="mt-2 text-white/70">
              Transparente, rápido y con acabado premium.
            </p>
          </div>
          <a
            href={site.koalendar.bookingLink}
            target="_blank"
            className="hidden sm:inline rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Reservar
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {site.services.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="font-semibold">{s.name}</div>
                <div className="text-white font-semibold">{s.price}</div>
              </div>
              <div className="mt-2 text-sm text-white/70">{s.detail}</div>
            </div>
          ))}
        </div>

        {/*<div className="mt-10 rounded-2xl border border-white/10 bg-zinc-950 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="font-semibold">¿No sabes qué elegir?</div>
            <div className="text-white/70 text-sm mt-1">
              Reserva y te asesoramos según tu estilo y tipo de pelo.
            </div>
          </div>
          <a
            href={site.koalendar.bookingLink}
            target="_blank"
            className="rounded-full bg-white text-black px-5 py-2 font-semibold hover:opacity-90 transition"
          >
            Reservar ahora
          </a>
        </div>*/}
      </div>
    </section>
  );
}

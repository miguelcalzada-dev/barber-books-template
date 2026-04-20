import { site } from "@/lib/siteData";

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-3xl font-bold">Ubicación</h2>
            <p className="mt-2 text-white/70">{site.address}</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="font-semibold">Horario</div>
              <div className="mt-3 space-y-2 text-sm text-white/80">
                {site.hours.map((h) => (
                  <div key={h.day} className="flex justify-between">
                    <span className="text-white/70">{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={site.koalendar.bookingLink}
                  target="_blank"
                  className="rounded-full bg-white text-black px-5 py-2 font-semibold hover:opacity-90 transition text-center"
                >
                  Reservar
                </a>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2 font-semibold hover:bg-white/10 transition text-center"
                >
                  Llamar: {site.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <iframe
              title="Google Maps"
              src={site.googleMapsEmbed}
              className="w-full h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

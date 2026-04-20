import Image from "next/image";
import { site } from "@/lib/siteData";

export default function Team() {
  return (
    <section id="equipo" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Equipo</h2>


        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {site.team.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <div className="relative h-56 bg-stone-900/60 flex items-center justify-center border-b border-white/5">
                <span className="text-stone-500/50 font-bold tracking-[0.15em] text-lg uppercase">
                  {m.name}
                </span>
              </div>
              <div className="p-5 flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold text-lg">{m.name}</div>
                  <div className="text-white/70 text-sm">{m.role}</div>
                </div>
                <a
                  href={m.bookingLink}
                  target="_blank"
                  className="rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
                >
                  Reservar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

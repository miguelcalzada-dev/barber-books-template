import { site } from "@/lib/siteData";

export default function Testimonials() {
  return (
    <section id="opiniones" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Opiniones</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {site.testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-sm text-white/80">“{t.text}”</div>
              <div className="mt-4 text-sm font-semibold">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

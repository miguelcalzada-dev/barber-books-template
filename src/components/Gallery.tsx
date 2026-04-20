import Image from "next/image";
import { site } from "@/lib/siteData";

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Galería</h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {site.gallery.map((src, i) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-stone-900/40 hover:bg-stone-800/50 transition duration-300">
                <span className="text-stone-500/70 font-semibold tracking-[0.2em] text-xs uppercase">
                  Imagen {i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

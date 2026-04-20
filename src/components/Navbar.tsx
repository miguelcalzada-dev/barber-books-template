"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/siteData";
import BookingModal from "./BookingModal";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#equipo", label: "Equipo" },
  //{ href: "#opiniones", label: "Opiniones" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "transition-all",
          scrolled ? "bg-black/80 backdrop-blur border-b border-white/10" : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-wide">
            {site.name}
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="hidden sm:inline text-sm text-white/80 hover:text-white transition"
            >
              {site.phone}
            </a>

            <button
              onClick={() => setOpen(true)}
              className="rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
            >
              Reservar
            </button>
          </div>
        </div>
      </header>

      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

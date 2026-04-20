import Image from "next/image";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="relative min-h-screen text-white overflow-x-hidden">
        {/* Fondo global */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          {/* Imagen noise */}
          <Image
            src="/fondo-noise.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-25"
          />

          {/* Base color (no negro puro) */}
          <div className="absolute inset-0 bg-[#0b0f17]/80" />

          {/* Degradado vertical (profundidad) */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-black/20 to-black/60" />

          {/* Spotlights suaves */}
          <div className="absolute left-1/2 top-[-260px] h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-[-220px] top-[20%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute left-[-220px] top-[55%] h-[520px] w-[520px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>

        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barber Template",
  description: "A premium barber shop template.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="relative min-h-screen text-white overflow-x-hidden">
        {/* Fondo global: Moderno y Clásico */}
        <div className="fixed inset-0 -z-10 bg-[#0c0a09] pointer-events-none overflow-hidden">
          {/* Patrón pinstripe clásico */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, #fff, #fff 1px, transparent 1px, transparent 30px)" }} />
          
          {/* Sombras verticales (profundidad) */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/95" />

          {/* Iluminación cálida estilo filamento (focos ámbar/dorados) */}
          <div className="absolute left-1/2 top-[-300px] h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-amber-600/15 blur-[120px]" />
          <div className="absolute right-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-yellow-700/10 blur-[100px]" />
          <div className="absolute left-[-200px] top-[60%] h-[600px] w-[600px] rounded-full bg-orange-900/15 blur-[120px]" />
        </div>

        {children}
      </body>
    </html>
  );
}

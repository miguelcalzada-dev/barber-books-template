"use client";

import Script from "next/script";

export default function BookingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      <div className="absolute left-1/2 top-1/2 w-[min(960px,92vw)] h-[min(720px,86vh)] -translate-x-1/2 -translate-y-1/2">
        <div className="h-full rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="text-sm font-semibold">Reserva tu cita</div>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition text-sm"
            >
              Cerrar ✕
            </button>
          </div>

          <div className="h-[calc(100%-48px)] p-4 overflow-auto">
            {/* Contenedor del widget */}
            <div id="inline-widget-testmiguelweb" />

            {/* Script Koalendar */}
            <Script
              src="https://koalendar.com/assets/widget.js"
              strategy="afterInteractive"
              onLoad={() => {
                // @ts-ignore
                window.Koalendar &&
                  // @ts-ignore
                  window.Koalendar("inline", {
                    url: "https://koalendar.com/e/testmiguelweb",
                    selector: "#inline-widget-testmiguelweb",
                  });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { NextResponse } from "next/server";
import { createBookingEvent } from "~/lib/gcal";

export async function GET() {
  try {
    const res = await createBookingEvent({
      barber: "b1",
      startISO: "2026-02-21T10:00:00",
      endISO: "2026-02-21T10:30:00",
      customerPhone: "whatsapp:+34624982727",
      serviceName: "Corte",
    });

    return NextResponse.json({ ok: true, res });
  } catch (err: any) {
    console.error("DEBUG create-event error:", err?.message || err);
    return NextResponse.json(
      { ok: false, error: err?.message || String(err) },
      { status: 500 }
    );
  }
}
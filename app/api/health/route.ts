import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, service: "zenvia", timestamp: new Date().toISOString() });
}

import { NextResponse } from "next/server";
import { runSupplierSync } from "../../../../lib/dropshipping/sync";

export async function POST() {
  return NextResponse.json(await runSupplierSync());
}

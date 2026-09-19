import { NextResponse } from "next/server";
import { searchProducts } from "../../../../lib/recommendations";

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("q") ?? "";
  return NextResponse.json({ query, products: searchProducts(query) });
}

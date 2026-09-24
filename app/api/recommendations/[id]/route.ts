import { NextResponse } from "next/server";
import { getProduct } from "../../../../lib/products";
import { recommendProducts } from "../../../../lib/recommendations";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ products: recommendProducts(product) });
}

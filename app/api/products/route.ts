import { NextResponse } from "next/server";
import { db } from "../../../lib/db";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q")?.trim();
  const category = url.searchParams.get("category")?.trim();
  const products = await db.product.findMany({
    where: { active: true, ...(category ? { category } : {}), ...(q ? { OR: [{ name: { contains: q, mode: "insensitive" } }, { description: { contains: q, mode: "insensitive" } }] } : {}) },
    orderBy: { createdAt: "desc" }
  });
  return NextResponse.json({ products });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.name || !body.slug || body.price == null || !body.category) return NextResponse.json({ error: "name, slug, price and category are required" }, { status: 400 });
    const product = await db.product.create({ data: { name: body.name, slug: body.slug, description: body.description ?? "", price: body.price, stock: body.stock ?? 0, category: body.category, rating: 0, active: true } });
    return NextResponse.json({ product }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Unable to create product" }, { status: 400 });
  }
}

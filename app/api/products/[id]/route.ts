import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await db.product.findUnique({ where: { id } });
  if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ product });
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const product = await db.product.update({ where: { id }, data: { ...(body.name !== undefined && { name: body.name }), ...(body.description !== undefined && { description: body.description }), ...(body.price !== undefined && { price: body.price }), ...(body.stock !== undefined && { stock: body.stock }), ...(body.category !== undefined && { category: body.category }), ...(body.active !== undefined && { active: body.active }) } });
    return NextResponse.json({ product });
  } catch {
    return NextResponse.json({ error: "Unable to update product" }, { status: 400 });
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await db.product.update({ where: { id }, data: { active: false } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to archive product" }, { status: 400 });
  }
}

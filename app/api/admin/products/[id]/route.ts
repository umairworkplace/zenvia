import { NextResponse } from "next/server";
import { db } from "../../../../../lib/db";
import { getCurrentUser } from "../../../../../lib/session";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await getCurrentUser();
  if (user?.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const product = await db.product.update({
      where: { id },
      data: {
        ...(body.name !== undefined && { name: body.name }),
        ...(body.price !== undefined && { price: body.price }),
        ...(body.stock !== undefined && { stock: body.stock }),
        ...(body.active !== undefined && { active: body.active }),
      },
    });
    return NextResponse.json({ product });
  } catch {
    return NextResponse.json({ error: "Unable to update product" }, { status: 400 });
  }
}

import { NextResponse } from "next/server";
import { createOrder } from "../../../lib/orders";
import { CartItem } from "../../../lib/cart";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const items = Array.isArray(body.items) ? body.items as CartItem[] : [];
    if (!items.length) return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    const order = createOrder(items);
    return NextResponse.json({ order }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid order request" }, { status: 400 });
  }
}

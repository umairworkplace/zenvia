import { CartItem, cartTotal } from "./cart";

export type OrderStatus = "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled";

export type Order = {
  id: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  createdAt: string;
};

export function createOrder(items: CartItem[]): Order {
  const subtotal = cartTotal(items);
  const shipping = subtotal >= 75 ? 0 : 7.99;
  return {
    id: `ZV-${Date.now().toString(36).toUpperCase()}`,
    items,
    subtotal,
    shipping,
    total: subtotal + shipping,
    status: "pending",
    createdAt: new Date().toISOString()
  };
}

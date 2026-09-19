import { Product } from "./products";

export type CartItem = Product & { quantity: number };

export function addItem(items: CartItem[], product: Product, quantity = 1): CartItem[] {
  const existing = items.find((item) => item.id === product.id);
  if (existing) return items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
  return [...items, { ...product, quantity }];
}

export function removeItem(items: CartItem[], productId: string): CartItem[] {
  return items.filter((item) => item.id !== productId);
}

export function updateQuantity(items: CartItem[], productId: string, quantity: number): CartItem[] {
  if (quantity <= 0) return removeItem(items, productId);
  return items.map((item) => item.id === productId ? { ...item, quantity } : item);
}

export function cartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function cartCount(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.quantity, 0);
}

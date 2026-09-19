export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  badge?: string;
  description: string;
  gradient: string;
};

export const products: Product[] = [
  { id: "nova-headset", name: "Nova Spatial Headset", category: "Tech", price: 249, rating: 4.8, badge: "Trending", description: "Immersive spatial audio with adaptive comfort.", gradient: "linear-gradient(135deg,#5865f2,#111827)" },
  { id: "orbit-lamp", name: "Orbit Ambient Lamp", category: "Home", price: 89, rating: 4.7, badge: "New", description: "A sculptural smart lamp for focused or relaxed spaces.", gradient: "linear-gradient(135deg,#f59e0b,#451a03)" },
  { id: "pulse-watch", name: "Pulse Smart Watch", category: "Tech", price: 179, rating: 4.6, description: "Minimal everyday wearable with a vivid edge-to-edge display.", gradient: "linear-gradient(135deg,#22c55e,#052e16)" },
  { id: "drift-pack", name: "Drift Everyday Pack", category: "Everyday", price: 74, rating: 4.9, badge: "Popular", description: "Lightweight modular carry system for daily movement.", gradient: "linear-gradient(135deg,#ec4899,#500724)" },
  { id: "arc-keyboard", name: "Arc Mechanical Keyboard", category: "Gaming", price: 129, rating: 4.8, description: "Low-profile mechanical keys with a clean desk-first silhouette.", gradient: "linear-gradient(135deg,#06b6d4,#083344)" },
  { id: "halo-mirror", name: "Halo Smart Mirror", category: "Beauty", price: 139, rating: 4.5, badge: "Featured", description: "A clean reflective surface with adjustable ambient lighting.", gradient: "linear-gradient(135deg,#a78bfa,#2e1065)" }
];

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

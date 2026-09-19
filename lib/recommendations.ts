import { Product, products } from "./products";

export function recommendProducts(current: Product, limit = 4): Product[] {
  return products
    .filter((product) => product.id !== current.id)
    .sort((a, b) => {
      const aScore = (a.category === current.category ? 3 : 0) + a.rating;
      const bScore = (b.category === current.category ? 3 : 0) + b.rating;
      return bScore - aScore;
    })
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return products;
  return products.filter((product) =>
    [product.name, product.category, product.description].some((value) => value.toLowerCase().includes(normalized))
  );
}

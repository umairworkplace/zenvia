import Link from "next/link";
import { Price } from "./Price";
import { Rating } from "./Rating";
import { AddToCartButton } from "./AddToCartButton";

export function ProductCard({ product }: { product: { id: string; name: string; slug: string; price: number; rating?: number; stock?: number } }) {
  return <article className="product-card">
    <Link href={`/product/${product.slug}`}>
      <div className="product-media" aria-hidden="true">◇</div>
      <h3>{product.name}</h3>
    </Link>
    <Rating value={product.rating ?? 0} />
    <Price value={product.price} />
    <AddToCartButton productId={product.id} disabled={(product.stock ?? 1) < 1} />
  </article>;
}

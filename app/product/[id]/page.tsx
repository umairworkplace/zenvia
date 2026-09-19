import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct } from "../../../lib/products";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();
  return <main className="page"><Link className="ghost" href="/shop">← Back to shop</Link><section className="product-detail"><div className="detail-art" style={{background: product.gradient}}><strong>◈</strong></div><div className="detail-copy"><p className="eyebrow">{product.category} · ★ {product.rating}</p><h1>{product.name}</h1><p className="detail-description">{product.description} Designed around everyday use, with a premium feel and straightforward controls.</p><div className="price">${product.price}</div><button className="buy">Add to cart</button><button className="secondary">Buy now</button><div className="trust"><span>✓ Secure checkout</span><span>✓ Easy returns</span><span>✓ Order tracking</span></div></div></section></main>;
}

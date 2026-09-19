import Link from "next/link";
import { products } from "../../lib/products";

export default function Shop() {
  return (
    <main className="page">
      <header className="section-head"><div><p className="eyebrow">DISCOVERY MARKET</p><h1>Find your next favorite.</h1><p className="muted">Curated products designed to make browsing feel less like a catalog.</p></div><Link className="ghost" href="/">Home</Link></header>
      <section className="product-grid">
        {products.map((product) => <Link className="product-card" href={`/product/${product.id}`} key={product.id}>
          <div className="product-art" style={{background: product.gradient}}><span>{product.badge ?? product.category}</span><strong>◈</strong></div>
          <div className="product-info"><div><h2>{product.name}</h2><p>{product.description}</p></div><div className="product-meta"><b>${product.price}</b><span>★ {product.rating}</span></div></div>
        </Link>)}
      </section>
    </main>
  );
}

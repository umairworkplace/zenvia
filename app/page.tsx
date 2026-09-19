import Link from "next/link";

const categories = ["Electronics", "Fashion", "Home & Living", "Beauty", "Sports", "Toys", "Groceries", "More"];
const products = ["Sony WH-1000XM5", "MacBook Air M3", "Nike Air Max 270", "Samsung Galaxy S24"];

export default function Home() {
  return <main className="zen-home">
    <header className="glass-nav"><div className="brand"><span className="brand-mark">Z</span><strong>ZENVIA</strong></div><div className="search-glass">⌕ <span>Search for products, brands, or anything...</span></div><nav><Link href="/">Home</Link><Link href="/shop">Shop</Link><Link href="/zenverse">3D Store</Link><Link href="/ai">AI Assistant</Link><Link href="/wishlist">♡</Link><Link href="/cart">🛒</Link></nav></header>
    <div className="home-shell">
      <aside className="glass-sidebar"><Link className="active" href="/">⌂ <span>Home</span></Link><Link href="/shop">▣ <span>Shop</span></Link><Link href="/zenverse">◇ <span>3D Store</span></Link><Link href="/ai">✦ <span>AI Assistant</span></Link><Link href="/wishlist">♡ <span>Wishlist</span></Link><Link href="/cart">🛒 <span>Cart</span></Link><Link href="/orders">▤ <span>Orders</span></Link><Link href="/account">♙ <span>Profile</span></Link><div className="side-promo">🚚<b>Free Shipping</b><small>On orders over $50</small></div></aside>
      <section className="home-main">
        <div className="glass-hero"><div><p className="eyebrow">NEW COLLECTION</p><h1>Smarter Choices.<br/>Better Living.</h1><p>AI-powered. 3D immersive. Personalized for you.</p><div className="hero-actions"><Link className="primary-glass" href="/zenverse">Explore 3D Store →</Link><Link className="soft-link" href="/shop">Shop collection</Link></div></div><div className="hero-object">◉</div></div>
        <div className="glass-categories">{categories.map((c,i)=><Link href={`/shop?category=${encodeURIComponent(c)}`} key={c}><span>{["◉","◌","⌂","✧","◒","♧","▣","＋"][i]}</span><small>{c}</small></Link>)}</div>
        <section className="glass-section"><div className="section-title"><div><p className="eyebrow">HANDPICKED FOR YOU</p><h2>Featured Products</h2></div><Link href="/shop">View all →</Link></div><div className="home-products">{products.map((p,i)=><article className="glass-product" key={p}><div className={`product-visual visual-${i}`}>{["◉","▱","◒","▣"][i]}</div><button className="heart">♡</button><h3>{p}</h3><small>★★★★★ <span>4.{8-i}</span></small><strong>${[349.99,1099,149.99,799][i].toFixed(2)}</strong><Link className="add-glass" href="/cart">🛒 Add to Cart</Link></article>)}</div></section>
        <div className="home-bottom"><div className="glass-mini"><p className="eyebrow">TRENDING NOW</p><h3>Discover what everyone is loving.</h3><Link href="/shop">Explore trends →</Link></div><div className="glass-mini warm"><p className="eyebrow">FLASH SALE</p><h3>Up to 50% Off</h3><p>Top brands. Limited time.</p><Link href="/shop">Shop deals →</Link></div></div>
        <footer className="glass-footer"><span>♙ Secure Payments</span><span>🚚 Fast & Free Shipping</span><span>◌ 24/7 Support</span><span>↻ Easy Returns</span><span>✦ Trusted Reviews</span><b>ZENVIA</b></footer>
      </section>
      <aside className="right-rail"><div className="glass-ai"><p className="eyebrow">ZEN AI</p><h2>Your Personal<br/>Shopping Assistant</h2><p>Ask anything, get personalized recommendations.</p><Link href="/ai">✦ Ask ZEN AI</Link><button>Best laptop under $1000?</button><button>Show me wireless headphones</button><button>Gift for a tech lover</button></div><div className="glass-promo"><p>Upgrade Your<br/><b>Lifestyle</b></p><Link href="/shop">Shop now →</Link></div><div className="glass-recent"><div className="section-title"><h3>Recently Viewed</h3><Link href="/shop">View all</Link></div><p>iPhone 16 <b>$999</b></p><p>PS5 Console <b>$499</b></p><p>Air Jordan 1 <b>$179</b></p><p>MacBook Air M3 <b>$1,099</b></p></div></aside>
    </div>
  </main>;
}

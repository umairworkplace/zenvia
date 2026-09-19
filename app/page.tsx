import Link from "next/link";

const categories = ["Tech", "Home", "Fashion", "Beauty", "Gaming", "Everyday"];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "radial-gradient(circle at 70% 15%, #26365d 0, #0c1020 28%, #08090d 62%)" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 5vw", borderBottom: "1px solid #ffffff18" }}>
        <strong style={{ fontSize: 25, letterSpacing: "-.04em" }}>ZENVIA</strong>
        <div style={{ display: "flex", gap: 24, color: "#b9bfce", fontSize: 14 }}>
          <Link href="/shop">Shop</Link><Link href="/discover">Discover</Link><Link href="/cart">Cart</Link>
        </div>
      </nav>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "9vh 5vw 5vh" }}>
        <div style={{ maxWidth: 760 }}>
          <p style={{ color: "#8e9cff", fontWeight: 700, letterSpacing: ".18em", fontSize: 12 }}>A NEW KIND OF MARKETPLACE</p>
          <h1 style={{ fontSize: "clamp(52px, 8vw, 108px)", lineHeight: .92, letterSpacing: "-.065em", margin: "20px 0" }}>SHOP THE<br /><span style={{ color: "#8e9cff" }}>UNEXPECTED.</span></h1>
          <p style={{ color: "#aeb4c4", maxWidth: 560, fontSize: 18, lineHeight: 1.65 }}>Explore products through an immersive shopping world built for discovery, personalization and simple checkout.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
            <Link href="/shop" style={{ padding: "15px 24px", borderRadius: 14, background: "#f6f7fb", color: "#08090d", fontWeight: 700 }}>Explore products →</Link>
            <Link href="/discover" style={{ padding: "15px 24px", borderRadius: 14, border: "1px solid #ffffff24", color: "#fff" }}>Enter 3D world</Link>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 80 }}>
          {categories.map((category) => <Link key={category} href={`/shop?category=${category.toLowerCase()}`} style={{ padding: "12px 18px", border: "1px solid #ffffff16", borderRadius: 999, color: "#c5cad6", background: "#ffffff06" }}>{category}</Link>)}
        </div>
      </section>
    </main>
  );
}

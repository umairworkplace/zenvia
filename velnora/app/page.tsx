const highlights = [
  { title: "Storefront", text: "A fast customer shopping experience built for conversion." },
  { title: "Seller workspace", text: "Products, inventory, orders, and performance in one place." },
  { title: "Operations", text: "Admin controls, analytics, fulfillment, and commerce workflows." },
];

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <header style={{ padding: "24px 6vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e5e7eb", background: "white" }}>
        <strong style={{ fontSize: 24, letterSpacing: "-0.04em" }}>VELNORA</strong>
        <nav style={{ display: "flex", gap: 20, fontSize: 14 }}>
          <a href="#platform">Platform</a>
          <a href="#workspaces">Workspaces</a>
        </nav>
      </header>

      <section style={{ padding: "96px 6vw 72px", maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ margin: 0, fontWeight: 700, letterSpacing: ".12em", fontSize: 12 }}>THE MODERN COMMERCE PLATFORM</p>
        <h1 style={{ fontSize: "clamp(48px, 8vw, 92px)", lineHeight: 0.98, letterSpacing: "-0.06em", maxWidth: 900, margin: "18px 0 28px" }}>
          One platform for modern commerce.
        </h1>
        <p style={{ maxWidth: 650, fontSize: 19, lineHeight: 1.7, color: "#4b5563", marginBottom: 36 }}>
          Velnora brings storefronts, sellers, products, inventory, orders, analytics, and commerce operations into one coherent system.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="#platform" style={{ background: "#111827", color: "white", padding: "14px 22px", borderRadius: 10, fontWeight: 700 }}>Explore platform</a>
          <a href="#workspaces" style={{ border: "1px solid #d1d5db", padding: "14px 22px", borderRadius: 10, fontWeight: 700 }}>View workspaces</a>
        </div>
      </section>

      <section id="platform" style={{ padding: "40px 6vw 90px", maxWidth: 1100, margin: "0 auto" }}>
        <div id="workspaces" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {highlights.map((item) => (
            <article key={item.title} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 18, padding: 24, minHeight: 190 }}>
              <h2 style={{ marginTop: 0, fontSize: 22 }}>{item.title}</h2>
              <p style={{ color: "#6b7280", lineHeight: 1.6 }}>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

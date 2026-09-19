import Link from "next/link";

export default function SellerPage() {
  return <main className="page">
    <p className="eyebrow">SELLER CENTER</p>
    <h1>Your marketplace workspace.</h1>
    <p className="muted">Manage listings, inventory and fulfillment from one place.</p>
    <section className="admin-grid">
      <Link className="admin-card" href="/seller/products"><span className="admin-icon">◈</span><h2>My products</h2><p>Create and manage your listings.</p><span>Open →</span></Link>
      <Link className="admin-card" href="/seller/orders"><span className="admin-icon">◇</span><h2>Orders</h2><p>Review orders that contain your products.</p><span>Open →</span></Link>
    </section>
  </main>;
}

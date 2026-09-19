import Link from "next/link";

export default function SellerOrdersPage() {
  return <main className="page">
    <Link className="ghost" href="/seller">← Seller center</Link>
    <p className="eyebrow">FULFILLMENT</p><h1>Seller orders</h1>
    <div className="filter-row"><button className="filter active">All</button><button className="filter">New</button><button className="filter">Processing</button><button className="filter">Shipped</button></div>
    <div className="table-card"><strong>Order queue</strong><p className="muted">Seller-specific orders will be loaded from the database when seller authentication is enabled.</p></div>
  </main>;
}

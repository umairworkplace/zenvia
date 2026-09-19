import Link from "next/link";

const cards = [
  ["Orders", "Review, process and track customer orders.", "/admin/orders"],
  ["Products", "Manage catalog, prices and inventory.", "/admin/products"],
  ["Customers", "View customer accounts and activity.", "/admin/customers"],
  ["Analytics", "Monitor sales and marketplace performance.", "/admin/analytics"]
];

export default function AdminPage() {
  return <main className="page">
    <p className="eyebrow">ZENVA ADMIN</p>
    <h1>Commerce control center.</h1>
    <p className="muted">Manage the marketplace from one focused workspace.</p>
    <section className="admin-grid">
      {cards.map(([title, text, href]) => <Link className="admin-card" href={href} key={title}>
        <span className="admin-icon">✦</span><h2>{title}</h2><p>{text}</p><span>Open →</span>
      </Link>)}
    </section>
  </main>;
}

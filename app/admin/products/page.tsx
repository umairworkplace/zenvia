import Link from "next/link";

const stats = [
  { label: "Catalog", value: "—" },
  { label: "Low stock", value: "—" },
  { label: "Drafts", value: "—" }
];

export default function AdminProductsPage() {
  return <main className="page">
    <Link className="ghost" href="/admin">← Admin</Link>
    <div className="page-heading"><div><p className="eyebrow">CATALOG</p><h1>Products</h1></div><button className="primary">+ Add product</button></div>
    <section className="stats-grid">{stats.map((s) => <div className="stat-card" key={s.label}><span>{s.label}</span><strong>{s.value}</strong></div>)}</section>
    <div className="table-card"><div className="table-head"><strong>Product catalog</strong><input placeholder="Search products…" aria-label="Search products" /></div><p className="muted">Database-backed product management will appear here once DATABASE_URL is configured.</p></div>
  </main>;
}

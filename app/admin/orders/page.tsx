import Link from "next/link";

export default function AdminOrdersPage() {
  return <main className="page">
    <Link className="ghost" href="/admin">← Admin</Link>
    <p className="eyebrow">OPERATIONS</p><h1>Orders</h1>
    <div className="filter-row"><button className="filter active">All</button><button className="filter">Pending</button><button className="filter">Processing</button><button className="filter">Shipped</button><button className="filter">Delivered</button></div>
    <div className="table-card"><div className="table-head"><strong>Order queue</strong><span className="muted">Live database records will appear here.</span></div></div>
  </main>;
}

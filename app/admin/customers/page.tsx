import Link from "next/link";

export default function AdminCustomersPage() {
  return <main className="page">
    <Link className="ghost" href="/admin">← Admin</Link>
    <p className="eyebrow">CUSTOMERS</p><h1>Customer accounts</h1>
    <div className="table-card"><div className="table-head"><strong>Customer directory</strong><input placeholder="Search customers…" aria-label="Search customers" /></div><p className="muted">Customer records will be loaded from the User model after database setup.</p></div>
  </main>;
}

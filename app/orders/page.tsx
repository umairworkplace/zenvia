import Link from "next/link";
export default function OrdersPage(){return <main className="page"><Link className="ghost" href="/account">← Account</Link><p className="eyebrow">PURCHASE HISTORY</p><h1>Your orders.</h1><div className="table-card"><p className="muted">Your authenticated orders will appear here. Order records are backed by the PostgreSQL schema.</p></div></main>}

"use client";

import { useState } from "react";
import Link from "next/link";

export default function SellerProductsPage() {
  const [created, setCreated] = useState(false);
  return <main className="page">
    <Link className="ghost" href="/seller">← Seller center</Link>
    <div className="page-heading"><div><p className="eyebrow">SELLER CATALOG</p><h1>My products</h1></div><button className="primary" onClick={() => setCreated(true)}>+ New listing</button></div>
    <div className="table-card">
      <div className="table-head"><strong>Listings</strong><input placeholder="Search listings…" aria-label="Search listings" /></div>
      {created ? <div className="form-grid"><input placeholder="Product name" /><input placeholder="Price" type="number" min="0" /><input placeholder="Stock" type="number" min="0" /><select defaultValue=""><option value="" disabled>Category</option><option>Tech</option><option>Home</option><option>Fashion</option></select><button className="primary">Save draft</button></div> : <p className="muted">Create your first listing to start selling.</p>}
    </div>
  </main>;
}

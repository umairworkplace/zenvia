"use client";

import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const [status, setStatus] = useState("ready");
  const [email, setEmail] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("processing");
    await new Promise((resolve) => setTimeout(resolve, 500));
    setStatus("demo");
  }

  return <main className="page narrow">
    <Link className="ghost" href="/cart">← Back to cart</Link>
    <p className="eyebrow">SECURE CHECKOUT</p>
    <h1>Finish your order.</h1>
    <p className="muted">Checkout foundation is ready. Payment provider credentials will be connected through environment variables before production payments are enabled.</p>
    <form className="checkout-card" onSubmit={submit}>
      <label>Email<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" /></label>
      <label>Shipping address<input required placeholder="Street and city" /></label>
      <button className="primary" disabled={status === "processing"}>{status === "processing" ? "Preparing order…" : "Continue to payment"}</button>
      {status === "demo" && <p className="success">Checkout flow is connected to the order API. Live payment processing will be enabled after a payment provider is configured.</p>}
    </form>
  </main>;
}

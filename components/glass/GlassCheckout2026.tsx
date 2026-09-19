import Link from "next/link";
export function GlassCheckout2026({total}:{total:number}){return <aside className="glass-checkout"><span className="eyebrow">ORDER SUMMARY</span><div className="checkout-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div><Link className="glass-primary" href="/checkout">Continue to checkout →</Link></aside>}

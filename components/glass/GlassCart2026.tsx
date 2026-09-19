import Link from "next/link";
export function GlassCart2026({count=0}:{count?:number}){return <Link className="glass-cart-pill" href="/cart">Bag <span>{count}</span></Link>}

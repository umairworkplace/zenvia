import Link from "next/link";
export function GlassCartPill({count}:{count:number}){return <Link href="/cart" className="glass-cart-pill">Bag <span>{count}</span></Link>}

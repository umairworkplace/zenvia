import Link from "next/link";
export function GlassHeader(){return <header className="glass-header"><Link href="/" className="brand">ZENVIA</Link><nav><Link href="/shop">Shop</Link><Link href="/zenverse">Zenverse</Link><Link href="/orders">Orders</Link></nav><Link href="/cart" className="glass-icon">Cart</Link></header>}

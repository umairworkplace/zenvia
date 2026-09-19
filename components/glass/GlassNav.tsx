import Link from "next/link";
export function GlassNav(){return <nav className="glass-nav"><Link className="brand" href="/">ZENVIA</Link><div className="nav-links"><Link href="/shop">Shop</Link><Link href="/discover">Discover</Link><Link href="/zenverse">Zenverse</Link></div><div className="nav-actions"><Link href="/account">Account</Link><Link href="/cart">Cart</Link></div></nav>}

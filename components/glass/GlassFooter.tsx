import Link from "next/link";
export function GlassFooter(){return <footer className="glass-footer"><div><strong>ZENVIA</strong><p>Commerce, softened.</p></div><nav><Link href="/shop">Shop</Link><Link href="/discover">Discover</Link><Link href="/help">Help</Link><Link href="/privacy">Privacy</Link></nav><small>© {new Date().getFullYear()} Zenvia</small></footer>}

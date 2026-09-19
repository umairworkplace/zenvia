import Link from "next/link";
export function StoreFooter(){return <footer className="store-footer"><div><strong>ZENVIA</strong><p>Commerce, reimagined.</p></div><nav><Link href="/shop">Shop</Link><Link href="/help">Help</Link><Link href="/account">Account</Link></nav><small>© {new Date().getFullYear()} Zenvia</small></footer>}

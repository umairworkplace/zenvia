import Link from "next/link";
const items=[['⌂','Home','/'],['▣','Shop','/shop'],['◇','3D Store','/zenverse'],['✦','AI Assistant','/ai'],['♡','Wishlist','/wishlist'],['🛒','Cart','/cart'],['▤','Orders','/orders'],['♙','Profile','/account']];
export function GlassSidebar(){return <aside className="glass-sidebar">{items.map(([icon,label,href])=><Link href={href} key={label}><span>{icon}</span><span>{label}</span></Link>)}<div className="side-promo">🚚<b>Free Shipping</b><small>On orders over $50</small></div></aside>}

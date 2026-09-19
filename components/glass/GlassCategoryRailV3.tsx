import Link from "next/link";
export function GlassCategoryRailV3({items}:{items:string[]}){return <nav className="glass-category-rail">{items.map(x=><Link key={x} href={`/shop?category=${encodeURIComponent(x)}`}>{x}</Link>)}</nav>}

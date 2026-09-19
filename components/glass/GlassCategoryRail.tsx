import Link from "next/link";
export function GlassCategoryRail({items}:{items:string[]}){return <div className="glass-category-rail">{items.map(x=><Link key={x} href={`/shop?category=${encodeURIComponent(x)}`}>{x}</Link>)}</div>}

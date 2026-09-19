import Link from "next/link";
export function GlassCategoryNav({categories}:{categories:string[]}){return <div className="glass-category-nav">{categories.map(category=><Link key={category} href={`/shop?category=${encodeURIComponent(category)}`}>{category}</Link>)}</div>}

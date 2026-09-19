import Link from "next/link";
export function GlassCategoryRow({categories}:{categories:string[]}){return <div className="glass-category-row">{categories.map(c=><Link href={`/shop?category=${encodeURIComponent(c)}`} key={c}><span>◇</span>{c}</Link>)}</div>}

import Link from "next/link";
export function CategoryPills({items}:{items:string[]}){return <div className="category-pills">{items.map(item=><Link href={`/shop?category=${encodeURIComponent(item)}`} key={item}>{item}</Link>)}</div>}

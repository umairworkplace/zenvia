import Link from "next/link";
export function CategoryPill({name}:{name:string}){return <Link className="category-pill" href={`/shop?category=${encodeURIComponent(name)}`}>{name}</Link>}

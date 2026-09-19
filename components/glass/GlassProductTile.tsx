import Link from "next/link";
export function GlassProductTile({slug,name,price}:{slug:string;name:string;price:number}){return <article className="glass-product-tile"><Link href={`/product/${slug}`}><div className="glass-product-media">◇</div><h3>{name}</h3><p>${price.toFixed(2)}</p></Link></article>}

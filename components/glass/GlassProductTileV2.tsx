import Link from "next/link";
export function GlassProductTileV2({slug,name,price}:{slug:string;name:string;price:number}){return <article className="glass-product"><Link href={`/product/${slug}`}><div className="glass-product-image">◇</div><div><h3>{name}</h3><strong>${price.toFixed(2)}</strong></div></Link><button aria-label={`Save ${name}`}>♡</button></article>}

import Link from "next/link";
import {GlassBadge} from "./GlassBadge";
import {GlassPrice} from "./GlassPrice";
import {GlassRating} from "./GlassRating";
export function GlassProductCard({product}:{product:{slug:string;name:string;price:number;rating?:number;tag?:string}}){return <article className="glass-product-card"><Link href={`/product/${product.slug}`}><div className="glass-product-image">◇</div>{product.tag&&<GlassBadge>{product.tag}</GlassBadge>}<h3>{product.name}</h3><GlassRating value={product.rating??0}/><GlassPrice value={product.price}/></Link></article>}

import Link from "next/link";
import {GlassBadge} from "./GlassBadge";
import {GlassPrice} from "./GlassPrice";
import {GlassRating} from "./GlassRating";
export function GlassProductCard({product}:{product:{slug:string;name:string;price:number;rating?:number;tag?:string}}){return <article className="glass-product-card"><Link href={`/product/${product.slug}`}><div className="glass-product-art"><span>✦</span>{product.tag&&<GlassBadge>{product.tag}</GlassBadge>}</div><div className="glass-product-copy"><h3>{product.name}</h3><div><GlassRating value={product.rating??0}/><GlassPrice price={product.price}/></div></div></Link></article>}

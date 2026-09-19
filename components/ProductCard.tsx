import Link from "next/link";
import {Price} from "./Price";
import {Rating} from "./Rating";
export function ProductCard({product}:{product:{id:string;name:string;slug:string;price:number;rating?:number}}){return <article className="product-card"><Link href={`/product/${product.slug}`}><div className="product-media" aria-hidden="true">◇</div><h3>{product.name}</h3></Link><Rating value={product.rating??0}/><Price value={product.price}/></article>}

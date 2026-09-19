"use client";
import Link from "next/link";
export function ZenverseProductSpot({slug,name,price}:{slug:string;name:string;price:number}){return <Link className="zenverse-spot" href={`/product/${slug}`}><span className="spot-orb"/><strong>{name}</strong><small>${price.toFixed(2)}</small><span>Explore →</span></Link>}

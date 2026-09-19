"use client";
import {useEffect,useState} from "react";
export function FeaturedProducts(){const [products,setProducts]=useState<any[]>([]);useEffect(()=>{fetch('/api/ai/recommendations').then(r=>r.json()).then(d=>setProducts(d.products||[])).catch(()=>{});},[]);return <section className="product-strip"><div><p className="eyebrow">FOR YOU</p><h2>Picked for your next discovery.</h2></div><div className="product-mini-grid">{products.slice(0,4).map(p=><article className="product-mini" key={p.id}><strong>{p.name}</strong><span>${Number(p.price).toFixed(2)}</span></article>)}</div></section>}

"use client";
export function GlassSortMenu({value,onChange}:{value:string;onChange:(v:string)=>void}){return <select className="glass-select" value={value} onChange={e=>onChange(e.target.value)}><option value="newest">Newest</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option><option value="rating">Top rated</option></select>}

"use client";
export function GlassSort2026({value,onChange}:{value:string;onChange:(v:string)=>void}){return <select className="glass-sort" value={value} onChange={e=>onChange(e.target.value)}><option value="newest">Newest</option><option value="price-asc">Price low → high</option><option value="price-desc">Price high → low</option></select>}

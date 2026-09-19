"use client";
export function GlassSortV2({value,onChange}:{value:string;onChange:(value:string)=>void}){return <label className="glass-sort">Sort <select value={value} onChange={e=>onChange(e.target.value)}><option value="newest">Newest</option><option value="price-asc">Price low → high</option><option value="price-desc">Price high → low</option></select></label>}

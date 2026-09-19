"use client";
export function GlassSearchBar({value,onChange}:{value:string;onChange:(v:string)=>void}){return <div className="glass-search"><span>⌕</span><input value={value} onChange={e=>onChange(e.target.value)} placeholder="Search products, brands and ideas"/></div>}

"use client";
export function GlassSearch({value,onChange,onSubmit}:{value:string;onChange:(v:string)=>void;onSubmit:()=>void}){return <form className="glass-search" onSubmit={e=>{e.preventDefault();onSubmit()}}><input value={value} onChange={e=>onChange(e.target.value)} placeholder="Search the marketplace…"/><button aria-label="Search">⌕</button></form>}

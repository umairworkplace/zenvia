"use client";
export function GlassTabs({items,value,onChange}:{items:string[];value:string;onChange:(v:string)=>void}){return <div className="glass-tabs" role="tablist">{items.map(item=><button key={item} className={value===item?"active":""} onClick={()=>onChange(item)} role="tab" aria-selected={value===item}>{item}</button>)}</div>}

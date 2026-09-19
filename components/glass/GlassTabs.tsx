"use client";
export function GlassTabs({items,active,onChange}:{items:string[];active:string;onChange:(item:string)=>void}){return <div className="glass-tabs">{items.map(item=><button className={item===active?"active":""} key={item} onClick={()=>onChange(item)}>{item}</button>)}</div>}

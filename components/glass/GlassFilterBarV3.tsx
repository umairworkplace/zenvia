"use client";
export function GlassFilterBarV3({onChange}:{onChange:(value:string)=>void}){return <div className="glass-filter-bar"><button onClick={()=>onChange("all")}>All</button><button onClick={()=>onChange("new")}>New</button><button onClick={()=>onChange("sale")}>On sale</button><button onClick={()=>onChange("popular")}>Popular</button></div>}

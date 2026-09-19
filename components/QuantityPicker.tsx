"use client";
export function QuantityPicker({ value, onChange, min=1, max=99 }: { value:number; onChange:(value:number)=>void; min?:number; max?:number }) { return <div className="quantity"><button type="button" onClick={()=>onChange(Math.max(min,value-1))}>−</button><span>{value}</span><button type="button" onClick={()=>onChange(Math.min(max,value+1))}>+</button></div>; }

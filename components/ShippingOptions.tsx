"use client";
import { ShippingOption } from "../lib/shipping";
export function ShippingOptions({options,selected,onChange}:{options:ShippingOption[];selected:string;onChange:(id:string)=>void}){return <div className="shipping-options">{options.map(o=><label className="shipping-option" key={o.id}><input type="radio" name="shipping" checked={selected===o.id} onChange={()=>onChange(o.id)}/><span><strong>{o.name}</strong><small>{o.eta}</small></span><b>{o.price===0?"Free":`$${o.price.toFixed(2)}`}</b></label>)}</div>}

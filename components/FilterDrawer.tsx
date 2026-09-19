"use client";
import {useState} from "react";
export function FilterDrawer({categories}:{categories:string[]}){const [open,setOpen]=useState(false);return <div><button className="filter" onClick={()=>setOpen(!open)}>Filters</button>{open&&<div className="filter-drawer">{categories.map(c=><label key={c}><input type="checkbox"/> {c}</label>)}</div>}</div>}

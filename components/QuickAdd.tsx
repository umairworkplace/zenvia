"use client";
import {useState} from "react";
export function QuickAdd({productId}:{productId:string}){const [done,setDone]=useState(false);return <button className="quick-add" onClick={()=>{setDone(true);setTimeout(()=>setDone(false),1200)}}>{done?"Added ✓":"Quick add"}</button>}

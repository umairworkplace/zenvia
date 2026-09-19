"use client";
import {useState} from "react";
export function CompareButton(){const [on,setOn]=useState(false);return <button className="ghost" aria-pressed={on} onClick={()=>setOn(!on)}>{on?"Compared ✓":"Compare"}</button>}

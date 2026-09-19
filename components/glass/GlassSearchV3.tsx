"use client";
import {useState} from "react";
export function GlassSearchV3(){const[q,setQ]=useState("");return <form className="glass-search" action="/shop"><input name="q" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search Zenvia…"/><button aria-label="Search">⌕</button></form>}

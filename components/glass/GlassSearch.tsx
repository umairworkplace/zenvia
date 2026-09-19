"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
export function GlassSearch(){const[q,setQ]=useState("");const router=useRouter();return <form className="glass-search" onSubmit={e=>{e.preventDefault();if(q.trim())router.push(`/shop?q=${encodeURIComponent(q.trim())}`)}}><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search the unexpected…"/><button aria-label="Search">⌕</button></form>}

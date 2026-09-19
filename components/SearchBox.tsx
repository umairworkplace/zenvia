"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export function SearchBox() { const [q,setQ]=useState(""); const router=useRouter(); function submit(e:FormEvent){e.preventDefault(); if(q.trim()) router.push(`/shop?q=${encodeURIComponent(q.trim())}`);} return <form className="search-box" onSubmit={submit}><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search the Zenvia universe…" aria-label="Search products"/><button aria-label="Search">⌕</button></form>; }

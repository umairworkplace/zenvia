"use client";
import { useState } from "react";
import Link from "next/link";
export default function WishlistPage(){const [items,setItems]=useState<string[]>([]); return <main className="page"><Link className="ghost" href="/account">← Account</Link><p className="eyebrow">SAVED FOR LATER</p><h1>Wishlist.</h1><div className="table-card"><p className="muted">{items.length ? `${items.length} saved item${items.length===1?'':'s'}.` : "No saved products yet."}</p><button className="primary" onClick={()=>setItems([...items,"demo"])}>{items.length?"Save another demo item":"Add a demo item"}</button></div></main>}

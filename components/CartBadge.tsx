"use client";
import Link from "next/link"; import {useEffect,useState} from "react"; import {readCart,cartSummary} from "../lib/cart-store";
export function CartBadge(){const [count,setCount]=useState(0);useEffect(()=>{const sync=()=>setCount(cartSummary(readCart()).count);sync();addEventListener("zenvia-cart",sync);return()=>removeEventListener("zenvia-cart",sync)},[]);return <Link href="/cart" className="cart-badge">Cart {count>0?<span>{count}</span>:null}</Link>}

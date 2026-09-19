"use client"; import {useState} from "react";
export function GlassWishlist2026(){const[saved,setSaved]=useState(false);return <button className={`glass-wishlist ${saved?"saved":""}`} aria-label="Save product" onClick={()=>setSaved(!saved)}>{saved?"♥":"♡"}</button>}

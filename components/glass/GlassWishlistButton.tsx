"use client";
import {useState} from "react";
export function GlassWishlistButton(){const[on,setOn]=useState(false);return <button className="glass-icon" aria-label="Wishlist" aria-pressed={on} onClick={()=>setOn(v=>!v)}>{on?"♥":"♡"}</button>}

"use client";
import {useState} from "react";
export function GlassWishlistButtonV3(){const[saved,setSaved]=useState(false);return <button className="glass-wishlist" aria-label="Wishlist" aria-pressed={saved} onClick={()=>setSaved(!saved)}>{saved?"♥":"♡"}</button>}

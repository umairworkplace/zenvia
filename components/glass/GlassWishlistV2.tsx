"use client";
export function GlassWishlistV2({active=false,onToggle}:{active?:boolean;onToggle?:()=>void}){return <button className="glass-wishlist" aria-label="Wishlist" aria-pressed={active} onClick={onToggle}>{active?"♥":"♡"}</button>}

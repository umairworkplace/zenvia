"use client";
export function BackToTop(){return <button className="ghost back-top" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Back to top">↑ Top</button>}

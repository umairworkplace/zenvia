"use client";
import {useEffect,useRef} from "react";
export function Reveal({children}:{children:React.ReactNode}){const ref=useRef<HTMLDivElement>(null);useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.dataset.revealed="true";io.disconnect()}},{threshold:.12});io.observe(el);return()=>io.disconnect()},[]);return <div ref={ref} className="reveal">{children}</div>}

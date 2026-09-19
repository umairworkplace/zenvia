"use client";
import {useState} from "react";
export function AiAssistantLauncher(){const [open,setOpen]=useState(false);return <><button className="ai-launcher" onClick={()=>setOpen(!open)} aria-expanded={open}>✦ Ask Zenvia AI</button>{open&&<div className="ai-popover"><strong>What are you looking for?</strong><p className="muted">Tell the shopping assistant what you need.</p></div>}</>}

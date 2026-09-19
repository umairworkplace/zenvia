"use client";
import {useState} from "react";
export function AiAssistant(){const [open,setOpen]=useState(false);const [message,setMessage]=useState("");return <div className="ai-assistant"><button className="ai-fab" onClick={()=>setOpen(!open)}>✦ AI</button>{open&&<div className="ai-panel"><strong>Zenvia AI</strong><p className="muted">Tell me what you are shopping for.</p><input value={message} onChange={e=>setMessage(e.target.value)} placeholder="e.g. headphones for travel"/><button className="primary" type="button">Find products</button></div>}</div>}

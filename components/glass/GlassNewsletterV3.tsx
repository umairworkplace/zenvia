"use client";
import {useState} from "react";
export function GlassNewsletterV3(){const[email,setEmail]=useState("");const[done,setDone]=useState(false);return <form className="glass-newsletter" onSubmit={e=>{e.preventDefault();setDone(true)}}><h3>Stay in the loop.</h3><input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address"/><button className="glass-button">{done?"Subscribed":"Subscribe"}</button></form>}

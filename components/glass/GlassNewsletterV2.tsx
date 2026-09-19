"use client";
import{useState}from"react";
export function GlassNewsletterV2(){const[email,setEmail]=useState("");return <form className="glass-newsletter" onSubmit={e=>{e.preventDefault();setEmail("")}}><div><p className="eyebrow">ZEN LETTER</p><h3>Good finds, occasionally.</h3><p>No noise. Just new drops and useful discoveries.</p></div><input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email"/><button className="glass-button">Join</button></form>}

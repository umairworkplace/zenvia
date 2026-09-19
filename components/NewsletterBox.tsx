"use client";
import {useState} from "react";
export function NewsletterBox(){const [done,setDone]=useState(false);return <form className="newsletter" onSubmit={e=>{e.preventDefault();setDone(true)}}><input type="email" required placeholder="Email for new drops" aria-label="Email"/><button className="primary">{done?"Subscribed":"Join Zenvia"}</button></form>}

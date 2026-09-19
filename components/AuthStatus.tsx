"use client";
import { useEffect,useState } from "react";
export function AuthStatus(){const [email,setEmail]=useState<string|null>(null);useEffect(()=>{fetch("/api/me").then(r=>r.ok?r.json():null).then(d=>setEmail(d?.user?.email??null)).catch(()=>setEmail(null));},[]);return <span className="auth-status">{email??"Guest"}</span>;}

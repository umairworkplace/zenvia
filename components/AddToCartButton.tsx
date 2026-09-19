"use client";
import {useState} from "react";
export function AddToCartButton({productId,disabled=false}:{productId:string;disabled?:boolean}){const[busy,setBusy]=useState(false);const[msg,setMsg]=useState("");async function add(){setBusy(true);setMsg("");try{const r=await fetch("/api/cart/items",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({productId,quantity:1})});setMsg(r.ok?"Added to cart":"Unable to add item");}finally{setBusy(false);}}return <button className="primary" disabled={disabled||busy} onClick={add}>{busy?"Adding…":"Add to cart"}</button>}

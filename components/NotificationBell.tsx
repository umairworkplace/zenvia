"use client";
import { useEffect, useState } from "react";
export function NotificationBell(){const [count,setCount]=useState(0);useEffect(()=>{fetch("/api/notifications").then(r=>r.ok?r.json():null).then(d=>d&&setCount(d.notifications?.filter((n:{read:boolean})=>!n.read).length??0)).catch(()=>{});},[]);return <button className="icon-button" aria-label={`Notifications${count?` (${count})`:""}`}>♢{count>0&&<sup>{count}</sup>}</button>;}

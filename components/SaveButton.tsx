"use client";
import {useState} from "react";
export function SaveButton(){const [saved,setSaved]=useState(false);return <button className="ghost" aria-pressed={saved} onClick={()=>setSaved(!saved)}>{saved?"♥ Saved":"♡ Save"}</button>}

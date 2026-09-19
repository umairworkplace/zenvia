"use client"; import {useState} from "react";
export function SyncNowButton(){const[busy,setBusy]=useState(false);async function sync(){setBusy(true);try{await fetch("/api/dropshipping/sync",{method:"POST"})}finally{setBusy(false)}}return <button className="secondary" disabled={busy} onClick={sync}>{busy?"Syncing…":"Sync now"}</button>}

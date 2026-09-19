export function GlassOrderStatus2026({status}:{status:string}){return <span className={`glass-order-status ${status.toLowerCase()}`}>{status.replaceAll("_"," ")}</span>}

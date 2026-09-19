export function GlassOrderStatusV2({status}:{status:string}){return <span className={`glass-order-status status-${status.toLowerCase()}`}>{status.replaceAll("_"," ")}</span>}

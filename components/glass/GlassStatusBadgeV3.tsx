export function GlassStatusBadgeV3({status}:{status:string}){return <span className={`glass-status status-${status.toLowerCase()}`}>{status.replaceAll("_"," ")}</span>}

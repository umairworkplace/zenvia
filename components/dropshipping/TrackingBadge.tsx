export function TrackingBadge({status,trackingNumber}:{status:string;trackingNumber?:string}){return <span className="tracking-badge">{status}{trackingNumber?` · ${trackingNumber}`:""}</span>}

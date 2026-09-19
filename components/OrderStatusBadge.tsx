import { orderLabel } from "../lib/order-status";
export function OrderStatusBadge({status}:{status:string}){return <span className="badge badge-neutral">{orderLabel(status)}</span>;}

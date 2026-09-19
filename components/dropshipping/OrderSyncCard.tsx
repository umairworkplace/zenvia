export function OrderSyncCard({orderId,status}:{orderId:string;status:string}){return <div className="order-sync-card"><strong>Order {orderId}</strong><span>{status}</span></div>}

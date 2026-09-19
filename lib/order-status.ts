export const ORDER_STATUSES=["PENDING","CONFIRMED","PROCESSING","SHIPPED","DELIVERED","CANCELLED"] as const;
export type OrderStatusCode=typeof ORDER_STATUSES[number];
export const orderLabel=(status:string)=>status.charAt(0)+status.slice(1).toLowerCase();
export const isOrderStatus=(value:unknown):value is OrderStatusCode=>typeof value==="string"&&ORDER_STATUSES.includes(value as OrderStatusCode);

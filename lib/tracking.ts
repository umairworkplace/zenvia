export const trackingSteps=["Order placed","Confirmed","Processing","Shipped","Delivered"] as const;
export function trackingIndex(status:string){const map:Record<string,number>={PENDING:0,CONFIRMED:1,PROCESSING:2,SHIPPED:3,DELIVERED:4};return map[status]??0;}

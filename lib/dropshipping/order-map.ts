export function supplierOrderPayload(orderId:string,items:{externalVariantId:string;quantity:number}[]){return{idempotencyKey:`order:${orderId}`,items}}

import {idempotencyKey} from "./idempotency";
export function fulfillmentRequest(orderId:string,supplier:string){return{orderId,supplier,idempotencyKey:idempotencyKey(orderId,supplier)}}

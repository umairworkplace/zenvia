import {normalizeFulfillmentStatus} from "./tracking";
export function parseTrackingWebhook(body:unknown){const b=body as Record<string,unknown>;return{supplierOrderId:String(b.orderId??""),trackingNumber:b.trackingNumber?String(b.trackingNumber):undefined,carrier:b.carrier?String(b.carrier):undefined,status:normalizeFulfillmentStatus(String(b.status??"processing"))};}

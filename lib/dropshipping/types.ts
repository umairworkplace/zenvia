export type Supplier="cj"|"aliexpress"|"amazon";
export type SupplierProduct={supplier:Supplier;externalId:string;title:string;cost:number;currency:string;variants:{externalId:string;sku?:string;price:number;stock:number}[]};
export type FulfillmentStatus="pending"|"submitted"|"processing"|"shipped"|"delivered"|"exception";
export type TrackingUpdate={supplierOrderId:string;trackingNumber?:string;carrier?:string;status:FulfillmentStatus;updatedAt:string};

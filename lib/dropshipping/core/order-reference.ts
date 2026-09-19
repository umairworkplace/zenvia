export function supplierReference(orderId:string){return `ZV-${orderId.replace(/[^a-zA-Z0-9]/g,"").slice(-16).toUpperCase()}`;}

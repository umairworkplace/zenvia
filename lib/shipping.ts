export type ShippingOption = { id:string; name:string; price:number; eta:string };
export const shippingOptions: ShippingOption[] = [
 {id:"standard",name:"Standard delivery",price:7.99,eta:"3–5 business days"},
 {id:"express",name:"Express delivery",price:14.99,eta:"1–2 business days"},
 {id:"free",name:"Free delivery",price:0,eta:"5–8 business days"}
];
export function eligibleShipping(subtotal:number){return subtotal>=75?shippingOptions.filter(x=>x.id==="free"||x.id==="express"):shippingOptions.filter(x=>x.id!=="free");}

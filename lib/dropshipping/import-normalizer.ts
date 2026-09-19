import type {SupplierProduct} from "./types";
export function normalizeSupplierProduct(p:SupplierProduct){return{name:p.title,cost:p.cost,currency:p.currency,variants:p.variants.map(v=>({externalId:v.externalId,sku:v.sku||v.externalId,price:v.price,stock:v.stock}))}}

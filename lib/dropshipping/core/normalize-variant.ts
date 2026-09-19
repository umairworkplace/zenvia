export function normalizeVariantSku(sku:string|undefined,fallback:string){return (sku||fallback).trim().slice(0,80);}

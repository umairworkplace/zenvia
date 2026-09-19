export function mapVariant(externalId:string,variants:{externalId:string;sku?:string}[]){return variants.find(v=>v.externalId===externalId)||null}

export type ImportMap={supplier:string;externalProductId:string;externalVariantId:string;localProductId?:string;localVariantId?:string};
export function makeImportMap(input:ImportMap){return {...input,externalProductId:String(input.externalProductId),externalVariantId:String(input.externalVariantId)}}

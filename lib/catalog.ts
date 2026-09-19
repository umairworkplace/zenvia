export type CatalogSort="newest"|"price-asc"|"price-desc"|"rating";
export function catalogParams(input:{q?:string;category?:string;sort?:string}){return{q:input.q?.trim()||undefined,category:input.category?.trim()||undefined,sort:(input.sort as CatalogSort)||"newest"};}

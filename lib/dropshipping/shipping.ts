export type ShippingQuote={method:string;cost:number;etaDays?:number};
export function cheapestShipping(quotes:ShippingQuote[]){return quotes.filter(q=>q.cost>=0).sort((a,b)=>a.cost-b.cost)[0]??null}

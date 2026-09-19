export function sellingPrice(cost:number,markupPercent=60,shipping=0){if(cost<0||shipping<0)throw new Error("Invalid cost");return Number((cost+shipping+(cost*markupPercent/100)).toFixed(2));}
export function margin(selling:number,cost:number){if(selling<=0)return 0;return Number((((selling-cost)/selling)*100).toFixed(2));}

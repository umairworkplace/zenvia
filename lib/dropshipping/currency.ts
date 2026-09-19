export function convertCost(amount:number,rate:number){if(amount<0||rate<=0)throw new Error("Invalid currency conversion");return Number((amount*rate).toFixed(2));}

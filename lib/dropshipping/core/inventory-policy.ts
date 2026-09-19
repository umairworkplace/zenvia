export function sellableStock(stock:number,buffer=0){return Math.max(0,stock-Math.max(0,buffer));}

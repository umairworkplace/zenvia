export function customerStock(supplierStock:number,buffer=0){return Math.max(0,Math.floor(supplierStock)-Math.max(0,buffer));}

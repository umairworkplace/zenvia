export function canFulfill(input:{paid:boolean;stock:number;addressValid:boolean}){return input.paid&&input.stock>0&&input.addressValid;}

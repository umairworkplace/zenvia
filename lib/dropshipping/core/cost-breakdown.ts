export function costBreakdown(cost:number,shipping:number,fee=0){return{cost,shipping,fee,total:Number((cost+shipping+fee).toFixed(2))};}

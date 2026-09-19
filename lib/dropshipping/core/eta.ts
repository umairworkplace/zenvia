export function etaLabel(days:number|undefined){return days==null?"Delivery estimate unavailable":days<=1?"Arrives in 1 day":`Arrives in ${days} days`;}

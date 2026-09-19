export function queuePriority(type:string){return type==="order"?100:type==="tracking"?80:type==="inventory"?50:20;}

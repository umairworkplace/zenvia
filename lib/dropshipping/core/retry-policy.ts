export function retryDelay(attempt:number,base=500){return Math.min(30000,base*Math.pow(2,Math.max(0,attempt)));}

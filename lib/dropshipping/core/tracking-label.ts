export function trackingLabel(status:string){return status.replace(/[-_]/g," ").replace(/\b\w/g,c=>c.toUpperCase());}

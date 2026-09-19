export function validateUSAddress(a:{name?:string;address?:string;city?:string;state?:string;zip?:string}){return !!(a.name&&a.address&&a.city&&a.state&&/^\d{5}(-\d{4})?$/.test(a.zip||""));}

export function normalizeImageUrl(url:string){try{const u=new URL(url);return u.protocol==="https:"||u.protocol==="http:"?u.toString():null}catch{return null}}

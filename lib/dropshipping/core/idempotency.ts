export function idempotencyKey(parts:string[]){return parts.map(p=>p.trim()).filter(Boolean).join(":");}

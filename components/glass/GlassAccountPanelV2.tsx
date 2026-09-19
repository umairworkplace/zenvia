import Link from "next/link";
export function GlassAccountPanelV2({name,email}:{name:string;email:string}){return <aside className="glass-account-panel"><div className="avatar">{name.charAt(0).toUpperCase()}</div><div><strong>{name}</strong><small>{email}</small></div><Link href="/account">View account →</Link></aside>}

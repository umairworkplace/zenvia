import Link from "next/link";
export function GlassAccountPanel({name}:{name:string}){return <section className="glass-account"><div className="glass-avatar">{name.slice(0,1).toUpperCase()}</div><div><strong>{name}</strong><small>Manage your Zenvia account</small></div><Link href="/account">Open account →</Link></section>}

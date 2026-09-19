import Link from "next/link";
export function GlassAccountCard({name,email}:{name:string;email:string}){return <section className="glass-account-card"><div className="account-avatar">{name.slice(0,1).toUpperCase()}</div><div><h3>{name}</h3><p>{email}</p></div><Link href="/account">Manage account →</Link></section>}

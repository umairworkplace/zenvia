import Link from "next/link";
export function GlassAccount2026({name="Your account"}:{name?:string}){return <Link className="glass-account" href="/account"><span className="account-avatar">◎</span><span><b>{name}</b><small>Orders & settings</small></span></Link>}

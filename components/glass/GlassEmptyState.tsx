import Link from "next/link";
export function GlassEmptyState({title,message}:{title:string;message:string}){return <section className="glass-empty"><div>◇</div><h2>{title}</h2><p>{message}</p><Link className="glass-button" href="/shop">Continue shopping</Link></section>}

import Link from "next/link";
export function EmptyState({ title, text, href="/shop", action="Explore products" }: { title:string; text:string; href?:string; action?:string }) { return <section className="empty-state"><div className="empty-mark">◇</div><h2>{title}</h2><p>{text}</p><Link className="primary" href={href}>{action}</Link></section>; }

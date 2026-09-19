import Link from "next/link";
export function GlassBreadcrumbs({items}:{items:{label:string;href?:string}[]}){return <nav className="glass-breadcrumbs">{items.map((x,i)=><span key={`${x.label}-${i}`}>{x.href?<Link href={x.href}>{x.label}</Link>:x.label}{i<items.length-1&&" / "}</span>)}</nav>}

import Link from "next/link";
export function GlassBreadcrumbsV2({items}:{items:{label:string;href?:string}[]}){return <nav className="glass-breadcrumbs" aria-label="Breadcrumb">{items.map((x,i)=><span key={x.label}>{x.href?<Link href={x.href}>{x.label}</Link>:x.label}{i<items.length-1&&"  /  "}</span>)}</nav>}

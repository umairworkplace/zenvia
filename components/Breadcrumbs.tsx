import Link from "next/link";
export function Breadcrumbs({items}:{items:{label:string;href?:string}[]}){return <nav aria-label="Breadcrumbs" className="breadcrumbs">{items.map((item,i)=><span key={`${item.label}-${i}`}>{item.href?<Link href={item.href}>{item.label}</Link>:item.label}{i<items.length-1&&" / "}</span>)}</nav>}

import Link from "next/link";
export function GlassDeal2026({title,subtitle,href="/shop"}:{title:string;subtitle:string;href?:string}){return <Link href={href} className="glass-deal"><span className="eyebrow">LIMITED DROP</span><h3>{title}</h3><p>{subtitle}</p><b>Explore →</b></Link>}

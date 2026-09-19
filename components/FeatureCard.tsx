import Link from "next/link";
export function FeatureCard({title,text,href="/shop"}:{title:string;text:string;href?:string}){return <Link className="feature-card" href={href}><span className="feature-glow"/><h3>{title}</h3><p>{text}</p><span>Explore →</span></Link>}

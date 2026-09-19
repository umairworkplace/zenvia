import Link from "next/link";
export function RecommendationRail({title="Picked for you"}:{title?:string}){return <section className="recommendation-rail"><div className="section-heading"><p className="eyebrow">SMART DISCOVERY</p><h2>{title}</h2></div><Link className="ghost" href="/shop">Explore recommendations →</Link></section>}

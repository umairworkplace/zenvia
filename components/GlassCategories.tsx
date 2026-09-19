import Link from "next/link";
const cats=['Electronics','Fashion','Home & Living','Beauty','Sports','Toys','Groceries','More'];
export function GlassCategories(){return <div className="glass-categories">{cats.map((c,i)=><Link key={c} href={`/shop?category=${encodeURIComponent(c)}`}><span>{['◉','◌','⌂','✧','◒','♧','▣','＋'][i]}</span><small>{c}</small></Link>)}</div>}

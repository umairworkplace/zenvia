export function GlassCategoryRailV2({items}:{items:string[]}){return <div className="glass-category-rail">{items.map((x,i)=><button key={x} className={i===0?"active":""}>{x}</button>)}</div>}

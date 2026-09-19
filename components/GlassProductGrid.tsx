import {GlassProductTile} from './GlassProductTile';
export function GlassProductGrid({products}:{products:{id:string;slug:string;name:string;price:number}[]}){return <div className="home-products">{products.map((p,i)=><GlassProductTile key={p.id} {...p} index={i}/>)}</div>}

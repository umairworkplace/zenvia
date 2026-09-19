export function GlassPrice({value,currency="$"}:{value:number;currency?:string}){return <span className="glass-price">{currency}{value.toFixed(2)}</span>}

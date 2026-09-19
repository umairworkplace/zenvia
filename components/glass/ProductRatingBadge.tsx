export function ProductRatingBadge({value}:{value:number}){return <span className="glass-rating" aria-label={`${value} out of 5 stars`}>★ {value.toFixed(1)}</span>}

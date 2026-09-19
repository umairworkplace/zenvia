export function ReviewStars({value}:{value:number}){const n=Math.max(0,Math.min(5,Math.round(value)));return <span aria-label={`${value} out of 5`}>{"★".repeat(n)}{"☆".repeat(5-n)}</span>}

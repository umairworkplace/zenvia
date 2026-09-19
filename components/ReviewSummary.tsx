import { ReviewStars } from "./ReviewStars";
export function ReviewSummary({rating,count}:{rating:number;count:number}){return <div className="review-summary"><ReviewStars value={rating}/><strong>{rating.toFixed(1)}</strong><span className="muted">{count} reviews</span></div>}

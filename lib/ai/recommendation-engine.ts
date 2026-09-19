export type RecommendationSignal={category?:string;rating?:number;price?:number};
export function score(signal:RecommendationSignal, target?:RecommendationSignal){let value=signal.rating??0;if(target?.category&&signal.category===target.category)value+=2;if(target?.price&&signal.price)value+=Math.max(0,1-Math.abs(signal.price-target.price)/Math.max(target.price,1));return value;}

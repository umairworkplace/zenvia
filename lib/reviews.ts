export type ReviewInput={rating:number;title:string;body:string};
export function validateReview(input:ReviewInput){if(!Number.isInteger(input.rating)||input.rating<1||input.rating>5)throw new Error("Rating must be 1-5");if(!input.title.trim()||!input.body.trim())throw new Error("Title and body are required");return {rating:input.rating,title:input.title.trim(),body:input.body.trim()};}

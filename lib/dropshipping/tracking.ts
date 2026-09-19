import type {FulfillmentStatus} from "./types";
export function normalizeFulfillmentStatus(value:string):FulfillmentStatus{const v=value.toLowerCase();if(["pending","submitted","processing","shipped","delivered","exception"].includes(v))return v as FulfillmentStatus;return "processing";}

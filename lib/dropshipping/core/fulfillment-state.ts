export const fulfillmentStates=["pending","submitted","processing","shipped","delivered","exception"] as const; export type FulfillmentState=typeof fulfillmentStates[number];

export const supportedFulfillmentCountries=["US"] as const; export type FulfillmentCountry=typeof supportedFulfillmentCountries[number];

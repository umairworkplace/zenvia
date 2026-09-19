export type PaymentStatus="unpaid"|"authorized"|"paid"|"failed"|"refunded";
export type PaymentIntent={id:string;amount:number;currency:string;status:PaymentStatus};

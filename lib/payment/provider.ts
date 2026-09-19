import {PaymentIntent} from "./types";
export interface PaymentProvider{createIntent(amount:number,currency:string):Promise<PaymentIntent>;}
export class ConfiguredPaymentProvider implements PaymentProvider{async createIntent(amount:number,currency:string){return {id:`demo_${Date.now()}`,amount,currency,status:"unpaid"};}}

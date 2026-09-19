import {CartItem,cartTotal} from "./cart";
export function checkoutTotals(items:CartItem){const subtotal=cartTotal(items);const shipping=subtotal>=75?0:7.99;return {subtotal,shipping,total:subtotal+shipping};}

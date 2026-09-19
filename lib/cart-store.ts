"use client";
import { CartItem, cartCount, cartTotal, addItem, removeItem, updateQuantity } from "./cart";
import { Product } from "./products";
const KEY="zenvia-cart";
export function readCart():CartItem[]{if(typeof window==="undefined")return[];try{return JSON.parse(localStorage.getItem(KEY)||"[]")}catch{return[]}}
export function writeCart(items:CartItem[]){localStorage.setItem(KEY,JSON.stringify(items));window.dispatchEvent(new Event("zenvia-cart"));}
export const cartSummary=(items:CartItem[])=>({count:cartCount(items),total:cartTotal(items)});
export const cartAdd=(product:Product,q=1)=>{const next=addItem(readCart(),product,q);writeCart(next);return next};
export const cartRemove=(id:string)=>{const next=removeItem(readCart(),id);writeCart(next);return next};
export const cartUpdate=(id:string,q:number)=>{const next=updateQuantity(readCart(),id,q);writeCart(next);return next};

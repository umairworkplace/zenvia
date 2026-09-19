"use client";
import {useState} from "react";import {Product} from "../lib/products";import {cartAdd} from "../lib/cart-store";
export function ProductActions({product}:{product:Product}){const [added,setAdded]=useState(false);return <div className="product-actions"><button className="primary" onClick={()=>{cartAdd(product);setAdded(true)}}>{added?"Added to cart ✓":"Add to cart"}</button><button className="ghost" onClick={()=>{cartAdd(product);location.href="/checkout"}}>Buy now</button></div>}

import Link from "next/link"; export function CartPill09({count=0}:{count?:number}){return <Link className="liquid-cart" href="/cart">Cart {count>0&&<b>{count}</b>}</Link>}

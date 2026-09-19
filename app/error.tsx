"use client";
export default function Error({reset}:{error:Error&{digest?:string};reset:()=>void}){return <main className="page narrow"><p className="eyebrow">ERROR</p><h1>Something interrupted the experience.</h1><button className="primary" onClick={()=>reset()}>Try again</button></main>}

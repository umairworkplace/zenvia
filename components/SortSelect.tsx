"use client";
export function SortSelect({value,onChange}:{value:string;onChange:(v:string)=>void}){return <select aria-label="Sort products" value={value} onChange={e=>onChange(e.target.value)}><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="rating">Top rated</option></select>}

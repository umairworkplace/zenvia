export function InventoryBadge({stock}:{stock:number}){return <span className={`inventory-badge ${stock===0?"out":""}`}>{stock>0?`${stock} in stock`:"Out of stock"}</span>}

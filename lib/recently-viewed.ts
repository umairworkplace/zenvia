const KEY="zenvia_recent";
export function addRecentlyViewed(id:string){if(typeof window==="undefined")return;const current=JSON.parse(localStorage.getItem(KEY)||"[]") as string[];localStorage.setItem(KEY,JSON.stringify([id,...current.filter(x=>x!==id)].slice(0,12)));}
export function getRecentlyViewed(){if(typeof window==="undefined")return [];return JSON.parse(localStorage.getItem(KEY)||"[]") as string[];}

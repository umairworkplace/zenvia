export const redactSecret=(value:string)=>value?`${value.slice(0,4)}***${value.slice(-4)}`:'';

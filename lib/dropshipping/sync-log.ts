export type SyncLog={supplier:string;operation:string;success:boolean;message:string;at:string};
export function syncLog(supplier:string,operation:string,success:boolean,message:string):SyncLog{return{supplier,operation,success,message,at:new Date().toISOString()}}

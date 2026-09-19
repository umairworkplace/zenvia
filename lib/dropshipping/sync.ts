export type SyncResult={updated:number;failed:number;messages:string[]};
export async function runSupplierSync():Promise<SyncResult>{return{updated:0,failed:0,messages:["Supplier credentials are required before live synchronization can run."]};}

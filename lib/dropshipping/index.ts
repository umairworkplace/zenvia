import {amazonSupplier} from "./amazon"; import {aliexpressSupplier} from "./aliexpress"; import {cjSupplier} from "./cj"; import type {Supplier} from "./types"; import type {SupplierAdapter} from "./supplier";
const adapters:Record<Supplier,SupplierAdapter>={cj:cjSupplier,aliexpress:aliexpressSupplier,amazon:amazonSupplier};
export function supplierAdapter(name:Supplier){return adapters[name];}

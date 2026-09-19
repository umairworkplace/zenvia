import {supplierEnv} from "./env";
export function cjConfigured(){return Boolean(supplierEnv.cjToken)}
export function cjHeaders(){if(!supplierEnv.cjToken)throw new Error("CJ credentials are not configured");return {Authorization:`Bearer ${supplierEnv.cjToken}`,"Content-Type":"application/json"};}

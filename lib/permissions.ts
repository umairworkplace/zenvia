import { SessionUser } from "./auth";
export function canManageCatalog(user:SessionUser|null){return !!user&&["ADMIN","SELLER"].includes(user.role);}
export function canManageOrders(user:SessionUser|null){return !!user&&["ADMIN","SELLER"].includes(user.role);}
export function isAdmin(user:SessionUser|null){return user?.role==="ADMIN";}

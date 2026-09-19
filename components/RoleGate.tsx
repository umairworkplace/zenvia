import { SessionUser } from "../lib/auth";
export function RoleGate({user,roles,children}:{user:SessionUser|null;roles:SessionUser["role"][];children:React.ReactNode}){if(!user||!roles.includes(user.role))return null;return <>{children}</>;}

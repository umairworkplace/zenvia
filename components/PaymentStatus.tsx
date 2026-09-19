import {Badge} from "./Badge";
export function PaymentStatus({status}:{status:string}){const tone=status==="paid"?"success":status==="failed"?"warning":"neutral";return <Badge tone={tone}>{status}</Badge>}

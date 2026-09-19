import { NextResponse } from "next/server";
import { eligibleShipping } from "../../../lib/shipping";
export async function GET(request:Request){const subtotal=Number(new URL(request.url).searchParams.get("subtotal")??0);if(!Number.isFinite(subtotal)||subtotal<0)return NextResponse.json({error:"Invalid subtotal"},{status:400});return NextResponse.json({options:eligibleShipping(subtotal)});}

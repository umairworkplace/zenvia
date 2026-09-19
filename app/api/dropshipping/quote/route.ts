import {NextResponse} from "next/server"; import {cheapestShipping} from "../../../../../lib/dropshipping/shipping";
export async function POST(request:Request){const{quotes=[]}=await request.json();return NextResponse.json({quote:cheapestShipping(quotes)});}

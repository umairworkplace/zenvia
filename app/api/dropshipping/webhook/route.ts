import {NextResponse} from "next/server"; import {parseTrackingWebhook} from "../../../../../lib/dropshipping/webhook";
export async function POST(request:Request){const body=await request.json();return NextResponse.json({ok:true,event:parseTrackingWebhook(body)});}

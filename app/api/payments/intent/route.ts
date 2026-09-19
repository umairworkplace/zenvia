import {NextResponse} from "next/server";
import {ConfiguredPaymentProvider} from "../../../../lib/payment/provider";
export async function POST(request:Request){try{const {amount,currency="USD"}=await request.json();if(!Number.isFinite(Number(amount))||Number(amount)<=0)return NextResponse.json({error:"Invalid amount"},{status:400});const intent=await new ConfiguredPaymentProvider().createIntent(Number(amount),currency);return NextResponse.json({intent});}catch{return NextResponse.json({error:"Unable to create payment intent"},{status:400});}}

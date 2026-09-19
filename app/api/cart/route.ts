import {NextResponse} from "next/server";
export async function POST(request:Request){const body=await request.json().catch(()=>null);if(!body?.items?.length)return NextResponse.json({error:"Cart is empty"},{status:400});return NextResponse.json({items:body.items,count:body.items.reduce((n:number,i:{quantity:number})=>n+i.quantity,0)})}

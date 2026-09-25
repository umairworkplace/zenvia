import {NextResponse} from "next/server"; import {sellingPrice} from "../../../../lib/dropshipping/price";
export async function POST(request:Request){const{cost,markupPercent,shipping}=await request.json();return NextResponse.json({price:sellingPrice(Number(cost),Number(markupPercent??60),Number(shipping??0))});}

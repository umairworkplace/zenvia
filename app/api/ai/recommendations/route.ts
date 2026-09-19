import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
export async function GET(request:Request){const category=new URL(request.url).searchParams.get("category")||undefined;const products=await db.product.findMany({where:{active:true,...(category?{category}: {})},orderBy:{rating:"desc"},take:8});return NextResponse.json({products});}

import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
export async function GET(request:Request){const p=new URL(request.url).searchParams;const category=p.get("category");const exclude=p.get("exclude");const products=await db.product.findMany({where:{active:true,...(category?{category}:{}),...(exclude?{id:{not:exclude}}:{})},orderBy:{rating:"desc"},take:8});return NextResponse.json({products});}

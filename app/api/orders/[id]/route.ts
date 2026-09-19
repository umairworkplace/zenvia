import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
export async function GET(_:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params;const order=await db.order.findUnique({where:{id},include:{items:{include:{product:true}},user:true}});if(!order)return NextResponse.json({error:"Order not found"},{status:404});return NextResponse.json({order});}

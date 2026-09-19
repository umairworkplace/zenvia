import { NextResponse } from "next/server";
import { db } from "../../../../../../lib/db";
import { getCurrentUser } from "../../../../../../lib/session";
export async function POST(_:Request,{params}:{params:Promise<{id:string}>}){const user=await getCurrentUser();if(!user||!["SELLER","ADMIN"].includes(user.role))return NextResponse.json({error:"Forbidden"},{status:403});try{const {id}=await params;const product=await db.product.update({where:{id},data:{active:false}});return NextResponse.json({product});}catch{return NextResponse.json({error:"Unable to archive listing"},{status:400});}}

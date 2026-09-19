import { NextResponse } from "next/server";
import { db } from "../../../../../lib/db";
import { getCurrentUser } from "../../../../../lib/session";
export async function GET(){const user=await getCurrentUser();if(!user||!["SELLER","ADMIN"].includes(user.role))return NextResponse.json({error:"Forbidden"},{status:403});const products=await db.product.findMany({where:{active:true},orderBy:{createdAt:"desc"}});return NextResponse.json({products});}

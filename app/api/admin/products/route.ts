import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { getCurrentUser } from "../../../../lib/session";
export async function GET(){const user=await getCurrentUser();if(user?.role!=="ADMIN")return NextResponse.json({error:"Forbidden"},{status:403});const products=await db.product.findMany({orderBy:{createdAt:"desc"}});return NextResponse.json({products});}

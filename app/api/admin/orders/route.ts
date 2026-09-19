import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { getCurrentUser } from "../../../../lib/session";
export async function GET(){const user=await getCurrentUser();if(user?.role!=="ADMIN")return NextResponse.json({error:"Forbidden"},{status:403});const orders=await db.order.findMany({include:{items:{include:{product:true}},user:true},orderBy:{createdAt:"desc"}});return NextResponse.json({orders});}

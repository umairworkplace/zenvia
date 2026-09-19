import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { getCurrentUser } from "../../../../lib/session";
export async function GET(){const user=await getCurrentUser();if(user?.role!=="ADMIN")return NextResponse.json({error:"Forbidden"},{status:403});const users=await db.user.findMany({select:{id:true,email:true,name:true,role:true,createdAt:true},orderBy:{createdAt:"desc"}});return NextResponse.json({users});}

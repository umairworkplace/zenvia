import { NextResponse } from "next/server";
import { db } from "../../../../../lib/db";
import { getCurrentUser } from "../../../../../lib/session";
export async function PATCH(request:Request,{params}:{params:Promise<{id:string}>}){const user=await getCurrentUser();if(user?.role!=="ADMIN")return NextResponse.json({error:"Forbidden"},{status:403});try{const {id}=await params;const {role}=await request.json();if(!["CUSTOMER","SELLER","ADMIN"].includes(role))return NextResponse.json({error:"Invalid role"},{status:400});const updated=await db.user.update({where:{id},data:{role}});return NextResponse.json({user:updated});}catch{return NextResponse.json({error:"Unable to update user"},{status:400});}}

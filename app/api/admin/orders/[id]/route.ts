import { NextResponse } from "next/server";
import { db } from "../../../../../lib/db";
import { getCurrentUser } from "../../../../../lib/session";
export async function PATCH(request:Request,{params}:{params:Promise<{id:string}>}){const user=await getCurrentUser();if(user?.role!=="ADMIN")return NextResponse.json({error:"Forbidden"},{status:403});try{const {id}=await params;const {status}=await request.json();const allowed=["PENDING","CONFIRMED","PROCESSING","SHIPPED","DELIVERED","CANCELLED"];if(!allowed.includes(status))return NextResponse.json({error:"Invalid status"},{status:400});const order=await db.order.update({where:{id},data:{status}});return NextResponse.json({order});}catch{return NextResponse.json({error:"Unable to update order"},{status:400});}}

import { NextResponse } from "next/server";
import { db } from "../../../../../lib/db";
import { getCurrentUser } from "../../../../../lib/session";
export async function GET(){const user=await getCurrentUser();if(user?.role!=="ADMIN")return NextResponse.json({error:"Forbidden"},{status:403});const [users,products,orders]=await Promise.all([db.user.count(),db.product.count({where:{active:true}}),db.order.count()]);return NextResponse.json({users,products,orders});}

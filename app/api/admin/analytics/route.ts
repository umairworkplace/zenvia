import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { getCurrentUser } from "../../../../lib/session";
export async function GET(){const user=await getCurrentUser();if(user?.role!=="ADMIN")return NextResponse.json({error:"Forbidden"},{status:403});const [orders,users,products]=await Promise.all([db.order.count(),db.user.count(),db.product.count({where:{active:true}})]);const revenue=await db.order.aggregate({where:{status:{not:"CANCELLED"}},_sum:{total:true}});return NextResponse.json({orders,users,products,revenue:Number(revenue._sum.total??0)});}

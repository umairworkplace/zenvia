import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
export async function GET(){const rows=await db.product.findMany({where:{active:true},select:{category:true},distinct:["category"],orderBy:{category:"asc"}});return NextResponse.json({categories:rows.map(r=>r.category)});}

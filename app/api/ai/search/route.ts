import {NextResponse} from "next/server";
import {db} from "../../../../lib/db";
export async function GET(request:Request){const q=new URL(request.url).searchParams.get("q")?.trim();if(!q)return NextResponse.json({products:[]});const products=await db.product.findMany({where:{active:true,OR:[{name:{contains:q,mode:"insensitive"}},{description:{contains:q,mode:"insensitive"}},{category:{contains:q,mode:"insensitive"}}]},take:12});return NextResponse.json({products});}

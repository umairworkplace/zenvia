import {NextResponse} from "next/server";
import {getCurrentUser} from "../../../lib/session";
import {normalizeQuestion} from "../../../lib/product-qna";
export async function GET(){return NextResponse.json({questions:[]});}
export async function POST(request:Request){if(!(await getCurrentUser()))return NextResponse.json({error:"Unauthorized"},{status:401});try{const{question}=await request.json();return NextResponse.json({question:normalizeQuestion(String(question??""))},{status:201});}catch(e){return NextResponse.json({error:e instanceof Error?e.message:"Invalid question"},{status:400});}}

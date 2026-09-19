import {NextResponse} from "next/server";
export async function GET(){return NextResponse.json({reviews:[],message:"Review persistence will be enabled with the verified-purchase review model."});}

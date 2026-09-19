import {NextResponse} from "next/server"; import {cjConfigured} from "../../../../../lib/dropshipping/cj-client";
export async function GET(){return NextResponse.json({cjConfigured,aliexpressConfigured:Boolean(process.env.ALIEXPRESS_CLIENT_ID),amazonConfigured:Boolean(process.env.AMAZON_CLIENT_ID)});}

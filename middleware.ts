import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request:NextRequest){const protectedPath=["/account","/orders","/seller","/admin"];if(protectedPath.some(path=>request.nextUrl.pathname.startsWith(path))&&!request.cookies.get("zenvia_session")){return NextResponse.redirect(new URL("/login",request.url));}return NextResponse.next();}
export const config={matcher:["/account/:path*","/orders/:path*","/seller/:path*","/admin/:path*"]};

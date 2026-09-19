import Link from "next/link";
export function GlassButton({href,children,primary=false}:{href:string;children:React.ReactNode;primary?:boolean}){return <Link href={href} className={primary?'primary-glass':'soft-link'}>{children}</Link>}

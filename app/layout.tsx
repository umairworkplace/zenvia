import type { Metadata } from "next";
import "./globals.css";
import "./liquid-glass.css";

export const metadata: Metadata = { title: "Zenvia — Smarter Choices. Better Living.", description: "A warm liquid-glass AI-powered 3D marketplace." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

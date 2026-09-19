import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zenvia — The New Way to Shop",
  description: "A 3D-first commerce experience built around discovery.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

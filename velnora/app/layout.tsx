import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velnora — The Modern Commerce Platform",
  description: "Commerce infrastructure for customers, sellers, and operations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

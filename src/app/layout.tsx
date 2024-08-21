import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import icon from "./favicon.ico"



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HOME",
  description: "Devconnect - Just Develop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

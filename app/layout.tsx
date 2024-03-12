import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-lack flex",
          inter.className,
          {
            "debug-screens": process.env.DEVELOPMENT === "development",
          }
        )}
      >
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className="bg-gray-50 w-full h-full p-8">
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}

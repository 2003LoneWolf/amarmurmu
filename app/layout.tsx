import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amar Murmu",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 relative`}>
        <div className="bg-[#8338ec] -z-10 h-[20rem] w-[20rem] rounded-full blur-[10rem] absolute left-[10rem]"></div>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

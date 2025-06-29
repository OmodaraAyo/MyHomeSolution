import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({variable: "--font-geist-sans",subsets: ["latin"],});

const geistMono = Geist_Mono({variable: "--font-geist-mono",subsets: ["latin"],});
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] }); 

export const metadata: Metadata = {title: "My Home Solution",description: "Send, receive, and save money with zero fees using Veegil Bank — Nigeria’s trusted online banking platform.",};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora, Quicksand } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./layoutWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"]});
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });
const quicksand = Quicksand({ variable: "--font-quicksand", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Home Solution",
  description:
    "best service provider",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${quicksand.variable} antialiased`}>
       <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

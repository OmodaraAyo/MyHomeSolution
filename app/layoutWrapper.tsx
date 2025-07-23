"use client";
import Footer from '@/components/footer';
import Header from '@/components/header';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function LayoutWrapper({children}: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isDashboard = pathname.startsWith('/dashboard')
  return (
    <>
      {!isDashboard && <Header/>}
      <main className="min-h-[calc(100vh-120px)]">{children}</main>
      {!isDashboard && <Footer/>}
    </>
  )
}

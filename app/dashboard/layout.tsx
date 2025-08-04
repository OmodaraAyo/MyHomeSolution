"use client";
import DashboardHeader from "@/components/dashboard/dashboardHeader";
import DashboardSideBar from "@/components/dashboard/dashboardSideBar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen font-sans">
      {/** Side bar */}
      <DashboardSideBar />
      <div className="flex-1 bg-[#FFFFFF] p-6 overflow-hidden">

        {/**Dashboard Header */}
        <DashboardHeader />
        <main className="relative min-h-[calc(100dvh-2rem)]">{children}</main>
      </div>
    </div>
  );
}
//created by Omodara Ayodele
//github: OmodaraAyo
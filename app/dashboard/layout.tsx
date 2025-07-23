"use client";
import DashboardHeader from "@/components/dashboard/dashboardHeader";
import DashboardSideBar from "@/components/dashboard/dashboardSideBar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen font-sans">
      {/** Side bar */}
      <DashboardSideBar/>
      <div className="flex-1 bg-[#F5F5F5] p-6">

        {/**Dashboard Header */}
        <DashboardHeader />
        <main>{children}</main>
      </div>
    </div>
  );
}

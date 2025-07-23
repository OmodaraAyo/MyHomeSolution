import { sidebarLinks } from "@/data/dashboard";
import React from "react";
import { SidebarLinks } from "./sideBarLinks";

export default function DashboardSideBar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-[#0C1E58] to-[#1439A2] text-white p-5 flex flex-col justify-between">
      <div className="space-y-8">
        {/* Logo */}
        <div className="w-full h-10 bg-white rounded" />

        <nav className="space-y-4">
          {sidebarLinks.map(({ label, iconSrc, active }) => (
            <SidebarLinks
              key={label}
              label={label}
              iconSrc={iconSrc}
              active={active}
            />
          ))}
        </nav>
      </div>

      <div>
        <a href="#" className="text-sm hover:underline text-white">
          Help Center <span aria-hidden>↗</span>
        </a>
      </div>
    </aside>
  );
}

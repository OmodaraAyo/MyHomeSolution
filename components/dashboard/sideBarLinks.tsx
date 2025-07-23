"use client";
import { SidebarLinkProps } from "@/reusables/types/types";
import Image from "next/image";

export function SidebarLinks(props: SidebarLinkProps) {
  const { iconSrc, label, active = false } = props;
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition 
        ${active ? "bg-white text-[#1C3FAA]" : "hover:bg-white/10 text-white"}`}
    >
      <Image
        src={iconSrc}
        alt={`${label} icon`}
        width={5}
        height={5}
        className="w-5 h-5"
      />
      <span>{label}</span>
    </div>
  );
}


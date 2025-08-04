"use client";
import { SidebarLinkProps } from "@/reusables/types/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarLinks(props: SidebarLinkProps) {
  const { iconSrc, label, link } = props;
  const pathname = usePathname();
  const isActive =
    link === "/dashboard"
      ? pathname === "/dashboard" || pathname.startsWith("/dashboard/new-project")
      : pathname === link;
  return (
    <Link
      href={link}
      className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition 
        ${isActive ? "bg-white/10 text-white" : "hover:bg-white/10 text-[#BBBBBB]"}`}
    >
      <Image
        src={iconSrc}
        alt={`${label} icon`}
        width={5}
        height={5}
        className="w-5 h-5"
      />
      <span>{label}</span>
    </Link>
  );
}

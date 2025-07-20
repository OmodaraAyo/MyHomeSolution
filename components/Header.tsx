"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PhoneIncoming, ArrowRight, AlignJustify } from "lucide-react";
import { navPages } from "@/data/navbar";
import ArrowDropDown from "@/public/assets/icons/arrowDown";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isSpecialPage = ["/", "/pricing", "/about-us", "/case-study"].includes(pathname);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = isSpecialPage
  ? isScrolled
    ? "bg-gradient-to-tr from-[#06102D] to-[#16389E] text-white"
    : "bg-transparent text-white"
  : "bg-white text-[#777777]";

  const scrollTargets: Record<string, string> = {
    "Resources": "resources",
    "Contact Us": "contact",
  };

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();

    const section = document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(`/?scrollTo=${sectionId}`)
    }
  }

  const handleConditionalScroll = (e: React.MouseEvent<HTMLAnchorElement>,pageName: string) => {
  const targetId = scrollTargets[pageName];
  if (targetId) {
    handleNavClick(e, targetId);
  }
};

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navClasses}`}
    >
      <div className="container mx-auto flex items-center justify-between px-8 py-4 gap-16">
        {/* Logo placeholder */}
        <div className="p-7 bg-gray-200 rounded-md" />

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center justify-between w-full">
          {navPages.map((page, index) => (
            <div key={index}>
              {scrollTargets[page.name] ? (
                <a
                  href={page.href}
                  onClick={(e) => handleConditionalScroll(e, page.name)}
                  className="hover:text-blue-500 px-4 py-2"
                >
                  {page.name}
                </a>
              ) : page.name === "Services" || page.name === "Industries" ? (
                <a
                  href={page.href}
                  className="hover:text-blue-500 px-4 py-2 flex items-center"
                >
                  <p>{page.name}</p>
                  <ArrowDropDown />
                </a>
              ) : (
                <a href={page.href} className="hover:text-blue-500 px-4 py-2">
                  {page.name}
                </a>
              )}
            </div>
          ))}

          <div className="flex items-center">
            <Link
              href="/login"
              className="flex items-center justify-center gap-2"
            >
              <p>Client Login</p>
              <ArrowRight width={18} height={18} />
            </Link>

            <Link
              href="/call"
              className="bg-[#1C3FAA] text-white px-4 py-3 rounded-xl ml-4 flex items-center text-md gap-2 justify-center"
            >
              <PhoneIncoming width={18} height={18} />
              <p>Schedule a call</p>
            </Link>
          </div>
        </div>

        {/* Mobile Icon */}
        <div className="xl:hidden">
          <AlignJustify width={48} height={48} color="#1C3FAA" />
        </div>
      </div>
    </nav>
  );
}

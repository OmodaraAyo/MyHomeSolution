"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PhoneIncoming, ArrowRight, AlignJustify } from "lucide-react";
import { navPages } from "@/data/navbar";


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll(); 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 text-[#fff] ${
        isScrolled
          ? "xl:bg-gradient-to-tr from-[#06102D] to-[#16389E] "
          : "xl:bg-transparent"
      }`}
    >
      <div className="container mx-auto bg-white xl:bg-transparent flex items-center justify-between px-8 py-4 gap-16 ">
        <div className="p-7 bg-gray-200 rounded-md "></div>

        <div className="hidden xl:flex items-center justify-between w-full">
          <div>
            {navPages.map((page, index) => (
              <a
                key={index}
                href={page.href}
                className="hover:text-blue-500 px-4 py-2"
              >
                {page.name}
              </a>
            ))}
          </div>

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

        <div className="xl:hidden">
          <AlignJustify width={48} height={48} color="#1C3FAA"/>
        </div>
      </div>
    </nav>
  );
}

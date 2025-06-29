"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PhoneIncoming, ArrowRight  } from "lucide-react";

const navPages = [
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Pricing", href: "/pricing" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About Us", href: "/blog" },
  { name: "Resources", href: "/resources" },
  { name: "Contact Us", href: "/call" },
];
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 text-[#fff] ${
        isScrolled
          ? "bg-gradient-to-tr from-[#06102D] to-[#16389E] "
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        <div className="p-7 bg-white rounded-md "></div>
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
          <Link href="/login" className="flex items-center justify-center gap-2">
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
    </nav>
  );
}

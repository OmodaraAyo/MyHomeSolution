import React from 'react'
import { Bell, Search } from "lucide-react";
import Image from "next/image";

export default function DashboardHeader() {
  return (
    <div>
      {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className='w-1/2 max-w-4xl border rounded-md flex items-center gap-3 px-2 border-[#c2c1c1] outline-none'>
            <Search className='w-5 h-5 text-[#787878]'/>
            <input
            type="text"
            placeholder="Search"
            className="py-2 w-full outline-none"
          />
          </div>

          <div className="flex items-center gap-4">
            <div className="border p-2.5 rounded-lg border-[#c2c1c1]">
              <Bell className="w-5 h-5 " />
            </div>
            {/* Avatar */}
            <div className="flex items-center gap-2">
              <div className="relative w-9 h-9 rounded-full overflow-hidden">
                <Image
                  src="/assets/images/avatar.png"
                  alt="User avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-sm">
                <p className="font-semibold">Umar Adex</p>
                <p className="text-xs text-gray-500">Client</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

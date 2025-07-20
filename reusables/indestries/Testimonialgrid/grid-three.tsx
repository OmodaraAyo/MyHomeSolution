import { businessOwnerTestimonialsData } from "@/data/industries";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function GridThree() {
  return (
    <div className="flex flex-col h-full justify-between p-1">
      {businessOwnerTestimonialsData.slice(5, 7).map((data, index) => (
        <div
          key={index}
          className={`rounded-xl text-left md:flex gap-6 snap-start shrink-0 w-[25rem] p-4 ${
            index === 0
              ? "h-[68%] bg-[#0A163B] text-[1.335rem] leading-[2.40rem] text-white"
              : "border border-[#DBDBDB] text-[1.125rem]"
          }`}
        >
          <div className="flex flex-col h-full p-2">
            {data.logo && (
              <Image
                src={data.logo}
                alt={data.title}
                width={120}
                height={120}
                className="mb-5"
                priority
                quality={85}
              />
            )}
            <p className="w-full mb-5">{data.description}</p>
            {/**profile details */}
            <div className="flex items-center gap-3 mt-auto flex-row-reverse justify-between">
              <Image
                src={data.image}
                alt={data.title}
                width={45}
                height={45}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-semibold md:mt-2">{data.founder}</p>
                <p className="text-base opacity-70 tracking-wide">
                  {data.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import { businessOwnerTestimonialsData } from '@/data/industries'
import { motion } from "framer-motion";
import Image from 'next/image';
import React from 'react'

export default function GridTwo() {
  return (
    <div className="flex flex-col h-full justify-between p-1">
      {businessOwnerTestimonialsData.slice(2, 5).map((data, index) => (
        <div
          key={index}
          className={`rounded-xl text-left md:flex gap-6 snap-start shrink-0 w-[25rem] p-4 border border-[#DBDBDB] text-[1.125rem]`}
        >
          <div className="flex flex-col h-full p-2">
            <p className="text-black w-full mb-5">{data.description}</p>
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
                <p className="text-lg font-semibold md:mt-2 text-black">
                  {data.founder}
                </p>
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

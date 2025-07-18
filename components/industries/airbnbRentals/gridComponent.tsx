import { industriesGridData } from '@/data/industries'
import Image from 'next/image'
import React, { memo } from 'react'

const GridComponent = memo(function GridComponent() {
  return (
    <div className="grid md:grid-cols-3 gap-3 mt-[2.5rem] p-2">
      {industriesGridData.map((data, index) => (
        <div key={index} className="flex flex-col justify-between text-center items-center p-4 rounded-lg h-full">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-[#FFF8E5] mb-4 rounded-full flex items-center justify-center">
              <Image 
                src={data.image} 
                alt={data.title} 
                width={25} 
                height={25}
                loading="lazy"
              />
            </div>
            <h1 className="font-medium text-lg text-[#0C0A08] text-ellipsis line-clamp-1">
              {data.title}
            </h1>
          </div>
          <p className="font-normal text-sm text-[#A3A3A3] mt-4 text-ellipsis line-clamp-2 lg:line-clamp-3">
            {data.description}
          </p>
        </div>
      ))}
    </div>
  );
});

export default GridComponent;
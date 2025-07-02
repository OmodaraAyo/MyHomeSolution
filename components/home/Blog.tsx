import { motion } from "framer-motion";
import { blogData, blogImages, howWeWorkImage } from "@/data/home";
import Image from "next/image";
import { useState } from "react";
import sora from "@/public/fonts/Sora";
import { ArrowUpRight } from 'lucide-react';

export default function BlogSection() {
  const [isHovered, setIsHovered] = useState<number | null>(0);

  const handleIsHoveredStart = (index: number) => {
    setIsHovered(index);
  };

  const handleIsHoveredEnd = (index: number) => {
    setIsHovered(index);
  };

  return (
    <section className="container mx-auto py-12 px-4 items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`text-2xl sm:text-3xl font-semibold text-[#333333] mb-17 px-2 md:px-0 max-w-sm ${sora.className}`}
      >
        <p className="inline font-normal text-sm border px-4 py-1 rounded-full text-[#535862] border-[#D5D7DA]">Blog</p>
        <p className="mt-3 pl-2 md:pl-0">Our latest News & Recources</p>
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-stretch gap-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            type: "spring",
            stiffness: 60,
            damping: 15,
          }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Image
            src={blogImages[0].image}
            alt={howWeWorkImage[0].title}
            width={580}
            height={704}
            className="w-full h-auto object-contain mb-7"
          />

          <div className="rounded-tr-2xl cursor-auto">
            <p className="flex w-full mb-3">
                <span className="border px-4 py-1 rounded-full text-[#535862] border-[#D5D7DA]">Growth marketing</span>
                <span className="text-[#1C3FAA] w-fit ml-auto"><ArrowUpRight/></span>
            </p>

            <p className={`text-lg font-semibold max-w-[490] text-ellipsis line-clamp-2 ${sora.className}`}>Why Your SEO Isn’t Working and How to Fix It</p>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="w-full lg:max-w-2xl text-left flex flex-col gap-2">
          {blogData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              onHoverStart={() => handleIsHoveredStart(index)}
              onHoverEnd={() => handleIsHoveredEnd(index)}
              whileHover={{ scale: 1.02 }}
              animate={{
                backgroundColor: isHovered === index ? "#102460" : "",
                color: isHovered === index ? "#ffffff" : "#0C0A08",
                borderColor: isHovered === index ? "#102460" : "#D9D9D9",
                transition: { duration: 0.3 },
              }}
              className="p-6 flex-shrink-0 border-b rounded-tr-2xl text-start gap-2 snap-start cursor-auto"
            >

              <div className="flex gap-4 w-full mb-3">
                {
                    data.trends.map((trend, idx) => (
                        <div key={idx} className={`border px-4 py-1 rounded-full text-ellipsis line-clamp-1 ${isHovered === index ? "text-white border-white": "text-[#535862] border-[#D5D7DA]"}`}>
                            <p>{trend}</p>
                        </div>
                    ))
                }
                <h1 className="w-fit ml-auto">
                    <ArrowUpRight color={isHovered === index ? "#FFFFFF"  :"#1C3FAA"}/>
                </h1>
              </div>
              <h1 className={`text-lg font-semibold  max-w-[490] text-ellipsis line-clamp-2 ${sora.className}`}>
                {data.description}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

//created by Omodara Ayodele 
//github: OmodaraAyo
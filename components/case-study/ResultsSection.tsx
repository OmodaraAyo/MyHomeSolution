"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import sora from "@/public/assets/fonts/Sora";
import { DisplayUSDCurrency } from "@/helpers/displayCurrency";
import { resultsSectionData } from "@/data/case-study";

export default function ResultsSection() {
  return (
    <section className="container mx-auto py-16 px-4 bg-white text-center mb-17">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-15 mx-auto max-w-[40rem]"
      >
        <p
          className={`text-2xl sm:text-3xl font-[600] text-[#333333] mt-2 ${sora.className}`}
        >
          Why These Results Matter
        </p>
         <motion.p
          className="text-sm text-[#8E8E8E] mt-2 max-w-lg md:max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          We build more than websites — we create digital growth systems for home service businesses of all sizes.
        </motion.p>
      </motion.div>

      {/* Grid Container */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 items-stretch w-full">
        {resultsSectionData.map((data, index) => (
          <motion.div
            key={index}
            className="p-6 border border-white rounded-xl shadow-md shadow-black/4 flex flex-col h-full text-left gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-9 h-9 bg-[#FFF8E5] mb-4 rounded-lg flex items-center justify-center">
              <Image
                src={data.image}
                alt={data.title}
                width={18}
                height={18}
                className=""
              />
            </div>
            <h1 className="text-lg font-semibold min-w-full text-ellipsis line-clamp-2">{data.title}</h1>
            <p className="text-sm text-gray-600 mt-auto">
              {data.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// created by Omodara Ayodele
// github: OmodaraAyo

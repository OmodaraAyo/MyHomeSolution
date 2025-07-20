"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { packagesData } from "@/data/pricing";
import { DisplayUSDCurrency } from "@/helpers/displayCurrency";

export default function AdditionalPackagesSection() {
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
          className={`text-2xl sm:text-3xl font-[600] text-[#333333] mt-2`}
          style={{ fontFamily: "Sora, system-ui, sans-serif" }}
        >
          Additional Packages
        </p>
      </motion.div>

      {/* Grid Container */}
      <div className="grid md:grid-cols-3 gap-5 items-stretch w-full">
        {packagesData.map((pkg, index) => (
          <motion.div
            key={index}
            className="p-6 border border-white rounded-xl shadow-lg shadow-black/4 flex flex-col h-full text-center items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-9 h-9 bg-[#FFF8E5] mb-4 rounded-lg flex items-center justify-center">
              <Image
                src={pkg.image}
                alt={pkg.title}
                width={18}
                height={18}
                className=""
              />
            </div>
            <h1 className="text-md text-[#4A4A4A] text-ellipsis line-clamp-1">{pkg.title}</h1>

            <h2 className="text-lg font-semibold min-w-full text-ellipsis line-clamp-2">
              {`+${DisplayUSDCurrency(parseFloat(pkg.amount))}${pkg.duration}`}
            </h2>

            <p className="text-sm mt-2 text-gray-600 flex-grow">
              {pkg.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// created by Omodara Ayodele
// github: OmodaraAyo

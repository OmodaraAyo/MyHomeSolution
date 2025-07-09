import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import sora from "@/public/assets/fonts/Sora";
import { ArrowRight } from "lucide-react";
import { heroSectionData } from "@/data/brand-scaling";

export default function BHeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative bg-primary text-black pt-36 pb-32 px-4"
    >
      {/* Animated Gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="container mx-auto relative h-full">
          <motion.div
            className="absolute top-0 -left-32 w-[24rem] h-[24rem] rounded-full bg-gradient-to-r from-[#1C3FAACC] to-[#B2C5FF61] blur-3xl"
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 20, 0, -20, 0],
              opacity: [0.8, 1, 0.8],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="hidden md:block absolute bottom-10 right-0 xl:-right-24 w-[24rem] h-[24rem] rounded-full bg-gradient-to-r from-[#B2C5FF61] to-[#1C3FAACC] blur-3xl"
            animate={{
              y: [0, 25, 0, -25, 0],
              x: [0, -20, 0, 20, 0],
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* white overlay */}
      <div className="absolute inset-0 bg-white opacity-10 z-10 pointer-events-none"></div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="container mx-auto px-8 py-4 text-left relative z-20"
      >
        <div className="flex flex-col items-start gap-1 w-full">
          <h1 className={`text-lg font-semibold leading-tight text-[#606060] ${sora.className}`}>
            BRAND SCALING
          </h1>
          <p className={`text-[1.6rem] md:text-5xl font-bold leading-11 md:leading-20 w-full md:max-w-2xl ${sora.className}`}>
            Build a Brand That Looks Good and Grows Fast
          </p>
          <p className="max-w-[42.2rem] text-[#606060]">
            Your brand is more than a logo — it’s the experience, trust, and presence you create. We craft cohesive brand systems that connect and convert.
          </p>

          <Link
            href="/"
            className="flex items-center bg-[#1C3FAA] rounded-xl px-4 py-2 w-fit justify-center gap-2 text-white mt-4"
          >
            <p>See Services</p>
            <span className="inline-block border-2 rounded-full p-1">
              <ArrowRight width={14} height={14} />
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-3 mt-[5rem] p-2">
          {heroSectionData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col justify-between text-center items-center p-4 rounded-lg h-full"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#FFF8E5] mb-4 rounded-full flex items-center justify-center">
                  <Image
                    src={data.image}
                    alt={data.title}
                    width={25}
                    height={25}
                  />
                </div>
                <h1 className="font-medium text-lg text-[#0C0A08] text-ellipsis line-clamp-1">
                  {data.title}
                </h1>
              </div>
              <p className="font-normal text-sm text-[#A3A3A3] mt-4 text-ellipsis line-clamp-2">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

// created by Omodara Ayodele
// github: OmodaraAyo

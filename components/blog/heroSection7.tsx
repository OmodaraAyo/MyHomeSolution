import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import sora from "@/public/assets/fonts/Sora";
import { blogSectionData } from "@/data/blog";
import SeoResults from "./seoResults";

export default function HeroSection7() {
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
            className="hidden md:block absolute top-2/12 right-0 xl:-right-24 w-[24rem] h-[24rem] rounded-full bg-gradient-to-r from-[#B2C5FF61] to-[#1C3FAACC] blur-3xl"
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

      {/* white overlay*/}
      <div className="absolute inset-0 bg-white opacity-10 z-10 pointer-events-none"></div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="container mx-auto px-8 py-4 text-left relative z-20"
      >
        <div className="flex flex-col items-start md:p-13 gap-1 w-full">
          <h1 className={`text-lg font-semibold leading-tight text-[#606060]`} style={{ fontFamily: "Sora, system-ui, sans-serif" }}>
            GROWTH MARKETING
          </h1>
          <p className={`text-[1.6rem] md:text-5xl font-bold leading-11 md:leading-20 w-full md:max-w-[43rem]`} style={{ fontFamily: "Sora, system-ui, sans-serif" }}>
            Why Your SEO Isn&apos;t Working — and How to Fix It
          </p>

          <div className="max-w-[66rem] text-[#606060] space-y-3">
            <p className={`text-sm lg:text-[1.7rem] font-semibold leading-tight text-black`}>You&apos;ve invested in SEO, but the results are… underwhelming. What’s going wrong?</p>
            <p className="text-xs lg:text-xl">If you’ve spent months optimizing your website and still aren&apos;t seeing more traffic, leads, or rankings, you’re not alone. Many service-based businesses — from HVAC and pest control to interior design and cleaning services — hit the same wall.</p>
            <p className="text-xs lg:text-xl">The good news? It’s fixable.</p>
            <p className="text-xs lg:text-xl">In this article, we’ll break down why your SEO efforts might be falling flat and, more importantly, what you can do to turn things around.</p>
            
          </div>
          
          {/* Article Image */}
          <div className="mt-10 h-full w-full max-w-[66rem] rounded-xl overflow-hidden flex justify-self-center">
            <Image
              src={blogSectionData[0].image}
              alt="Team using phones"
              width={1024}
              height={600}
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>

        <SeoResults/>
      </motion.div>
    </motion.section>
  );
}

// created by Omodara Ayodele
// github: OmodaraAyo

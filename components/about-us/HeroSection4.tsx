import Image from "next/image";
import { motion } from "framer-motion";
import sora from "@/public/assets/fonts/Sora";
import { aboutUsHeroSectionData } from "@/data/about-us";

export default function HeroSection4() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="bg-primary text-white relative pt-[13rem] pb-[3rem] md:py-[10rem] md:px-4 text-center"
    >
      {/* Background Image for desktop */}
      <div className="hidden md:block bg-gradient-to-br from-[#06102D] to-[#16389E] absolute inset-0 w-full h-full z-0">
        <Image
          src={aboutUsHeroSectionData[0].image}
          alt="Hero"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Background Image for mobile */}
      <div className="md:hidden bg-gradient-to-br from-[#06102D] to-[#16389E] absolute inset-0 w-full h-full z-0">
        <div className="relative h-full w-full">
          <Image
            src={aboutUsHeroSectionData[2].image}
            alt="Hero"
            width={33}
            height={33}
            className="absolute right-33 top-60 sm:right-60 -translate-x-1/2 -translate-y-1/2"
            priority
          />
          <Image
            src={aboutUsHeroSectionData[3].image}
            alt="Hero"
            width={35}
            height={35}
            className="absolute right-20 bottom-12 sm:right-30 -translate-x-1/2 -translate-y-1/2"
            priority
          />
        </div>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="container mx-auto px-8 py-4 text-left relative z-10 flex items-center"
      >
        <div className="flex flex-col items-start gap-1 w-full">
          <h1 className="text-base lg:font-semibold leading-tight text-white">
            ABOUT US
          </h1>
          <p
            className={`text-[1.6rem] md:text-5xl font-bold leading-11 md:leading-20 w-full max-w-80 sm:max-w-2xl lg:max-w-3xl ${sora.className}`}
          >
            Helping Home Service Businesses Grow Smarter, Scale Faster, and
            Stand Out
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

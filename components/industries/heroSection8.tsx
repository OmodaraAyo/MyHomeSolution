import Image from "next/image";
import { motion } from "framer-motion";
import sora from "@/public/assets/fonts/Sora";
import { pricingHeroSectionData } from "@/data/pricing";

export default function HeroSection8() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="bg-primary text-white relative pt-[13rem] pb-[3rem] md:pt-[10rem] md:pb-[5rem] md:px-4 text-center"
    >
      {/* Background Image for desktop */}
      <div className="hidden md:block bg-gradient-to-br from-[#06102D] to-[#16389E] absolute inset-0 w-full h-full z-0">
        <Image
          src={pricingHeroSectionData[0].image}
          alt="Hero"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          priority
        />
      </div>

      {/* Background Image for desktop */}
      <div className="md:hidden bg-gradient-to-br from-[#06102D] to-[#16389E] absolute inset-0 w-full h-full z-0">
        <Image
          src={pricingHeroSectionData[1].image}
          alt="Hero"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          priority
        />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="container mx-auto px-8 py-4 mt-9 text-left relative z-10 flex flex-col gap-9"
      >
        <div className="flex flex-col items-start gap-1 w-full">
          <h1 className="text-base lg:font-semibold leading-tight text-white">
            INDUSTRIES WE SERVE
          </h1>
          <p className={`text-[1.6rem] md:text-5xl font-medium lg:font-bold leading-11 md:leading-20 w-full max-w-80 sm:max-w-xl lg:max-w-3xl ${sora.className}`}>
            Property Management & Rental Solutions
          </p>
          <p className="max-w-[43.2rem] text-[#FFFFFF] text-xs lg:text-lg">
           Streamline operations, attract more bookings, and grow your rental business with smart digital strategies built for property managers and short-term rental owners.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo
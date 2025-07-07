import Image from "next/image";
import { motion } from "framer-motion";
import { homeData } from "@/data/home";
import Link from "next/link";
import sora from "@/public/fonts/Sora";
import { ArrowRight } from "lucide-react";
import { heroSectionData } from "@/data/digital-marketing";

export default function DHeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative bg-primary text-black pt-36 pb-32 px-4"
    >
      {/* Background Image inside container */}
      <div className="hidden md:block absolute inset-0 pointer-events-none -z-10">
        <div className="container mx-auto relative h-full">
          <div className="absolute top-0 -left-32 w-[24rem] h-[24rem] rounded-full bg-gradient-to-r from-[#1C3FAACC] to-[#B2C5FF61] blur-3xl" />
          <div className="absolute bottom-0 right-0 xl:-right-24 w-[24rem] h-[24rem] rounded-full bg-gradient-to-r from-[#B2C5FF61] to-[#1C3FAACC] blur-3xl" />
        </div>
      </div>

      {/* Optional white overlay */}
      <div className="absolute inset-0 bg-white opacity-50 z-10 pointer-events-none"></div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="container mx-auto px-8 py-4 text-left relative z-20"
      >
        <div className="flex flex-col items-start gap-1 w-full">
          <h1 className={`text-lg font-semibold leading-tight text-[#606060] ${sora.className}`}>
            DIGITAL MARKETING
          </h1>
          <p className={`text-[1.6rem] md:text-5xl font-bold leading-11 md:leading-20 w-full md:max-w-4xl ${sora.className}`}>
            Fuel Visibility.<br />
            Drive Demand.<br />
            Convert with Confidence.
          </p>
          <p className="max-w-[42.2rem] text-[#606060]">
            At MyHomeSolution, we help home service businesses thrive online
            with tailored digital marketing strategies. From boosting visibility
            to driving qualified leads, we focus on real growth in a competitive
            market.
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


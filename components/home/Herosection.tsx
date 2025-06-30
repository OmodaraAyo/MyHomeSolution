import Image from "next/image";
import { motion } from "framer-motion";
import { homeData } from "@/data/home";
import Link from "next/link";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="bg-primary text-white relative h-screen min-h-[1000px] md:min-h-[1060px] py-20 px-4 text-center"
    >
      {/* Background Image */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <Image
          src={homeData[0].image}
          alt="Hero"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full md:hidden">
        <Image
          src={homeData[6].image}
          alt="Hero"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>


      {/* Overlay with second image */}
      <div className="absolute inset-0 bg-black/55 opacity-50">
        <Image
          src={homeData[3].image}
          alt="Hero"
          fill
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="max-w-4xl mx-auto absolute inset-0 right-0 left-0 top-[11rem] will-change-transform"
      >
        <div className="font-sora relative z-10 flex flex-col items-center justify-center gap-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We Help Local Home Service Brands Go 10X Bigger
          </h1>
          <div className="hidden md:block w-fit ml-auto absolute top-33 right-18 px-8">
            <Image
              src={homeData[10].image}
              alt=""
              width={300}
              height={300}
              className="object-scale-down mix-blend-multiply"
              loading="lazy"
            />
            <Image
              src={homeData[11].image}
              alt=""
              width={300}
              height={300}
              className="object-scale-down pl-5"
              loading="lazy"
            />
          </div>
          <h1 className="max-w-2xl text-lg font-normal">
            Our 3-tiered service model combines expert marketing, brand
            strategy, and tech-driven automation to unlock next-level business
            growth.
          </h1>

          <Link
            href="/call"
            className="bg-white rounded-md text-center px-7 py-2.5 text-[#1C3FAA] font-bold text-[18px]"
          >
            Let&#39;s talk
          </Link>

          <Image
            src={homeData[4].image}
            alt=""
            width={1000}
            height={586}
            style={{ objectFit: "contain" }}
            loading="lazy"
            className="hidden sm:block"
          />

          <Image
            src={homeData[5].image}
            alt=""
            width={1000}
            height={586}
            style={{ objectFit: "contain" }}
            loading="lazy"
            className="sm:hidden"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

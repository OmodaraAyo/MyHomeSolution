import { motion } from "framer-motion";
import { caseStudiesImages } from "@/data/home";
import Image from "next/image";
import sora from "@/public/fonts/Sora";

export default function CaseStudiesSection() {
  return (
    <section className="py-16 px-4 text-center relative h-screen min-h-[1000px] md:min-h-[1060px] flex flex-col items-start justify-between">
      {/**bg image */}
      <div className="absolute inset-0 w-full h-full bg-[#102460]">
        <Image
          src={caseStudiesImages[0].image}
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto absolute inset-0 right-0 left-0 top-[4.5rem] will-change-transform"
      >
        <div className={`relative z-10 gap-6 ${sora.className}`}>
          <h2 className="mb-16 mx-auto flex flex-col items-center text-white gap-1.5">
            <p className="text-lg font-[400]">Case Studies</p>
            <p className="text-[29px] font-[600] mt-2 max-w-xl font-sora">
              We Don’t Just Build Brands, We Drive Real Results
            </p>
            <p className="text-sm font-light text-[#E8E8E8] max-w-2xl">
              At MyHomeSolution, we help home service businesses go from
              invisible to unforgettable. From short-term rentals to
              full-service contractors, we build stunning websites, automate
              growth, and turn clicks into clients. Explore how we’ve helped
              businesses like yours increase bookings, leads, and revenue—fast.
            </p>
          </h2>
        </div>
      </motion.div>
    </section>
  );
}

{
  /* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8 marker:container mx-auto max-w-lg text-center lg:text-left w-full"
      >
        <p className="text-[29px] font-[600] text-[#333333] mt-2 lg:max-w-[20rem] lg:mt-3">
          Built to Deliver More Than Just Clicks
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6 min-w-fit marker:container overflow-x-auto snap-x scrollbar-hide pl-5 py-5">
        {strategyData.map((champion, index) => (
          <motion.div
            key={index}
            className="min-w-[250px] md:max-w-[300px] flex-shrink-0 p-6 border border-white rounded-xl text-start flex flex-col gap-2 snap-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{ boxShadow: "-3px 3px 5px rgba(0,0,0,0.15)" }}
          >
            <div className="w-12 h-12 bg-[#FFF8E5] mb-4 rounded-full flex items-center justify-center">
              <Image
                src={champion.image}
                alt={champion.title}
                width={25}
                height={25}
              />
            </div>
            <h3 className="text-lg font-semibold min-w-full text-ellipsis line-clamp-2">
              {champion.title}
            </h3>
            <p className="text-sm mt-2 text-gray-600 flex-grow">
              {champion.description}
            </p>
          </motion.div>
        ))}
      </div> */
}

import { motion } from "framer-motion";
import {
  serviceSectionData,
  serviceSectionImages,
  servicesRef,
} from "@/data/home";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import sora from "@/public/assets/fonts/Sora";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState("Digital Marketing");
  const currentService = servicesRef.find(
    (service) => service.title === activeService
  );

  return (
    <section className="container mx-auto py-12 px-4 text-center items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`text-2xl sm:text-3xl text-[#333333] mb-17 text-center flex flex-col items-center gap-5`}
      >
        <p className={`font-semibold ${sora.className}`}>Our Services</p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-[#EBF0FF] px-3 py-2.5 rounded-lg max-w-lg font-medium">
          {servicesRef.map((service, index) => (
            <div
              key={index}
              onClick={() => setActiveService(service.title)}
              className={`px-3 py-2 rounded-lg text-[10px] sm:text-base cursor-pointer transition-all duration-200 ${
                activeService === service.title
                  ? "bg-[#1C3FAA] text-white shadow-[#acbff7]"
                  : "bg-transparent text-[#777777]"
              }`}
            >
              {service.title}
            </div>
          ))}
        </div>
      </motion.h2>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl text-left flex flex-col gap-6"
        >
          <p className="text-xl sm:text-2xl font-semibold text-[#333333]">
            {activeService}
          </p>

          <p className="text-sm sm:text-base text-[#444]">
            At Myhomesolution, we specialize in digital marketing for home-based
            service businesses. From boosting visibility to driving qualified
            leads, our tailored solutions help you grow and thrive in today’s
            competitive landscape.
          </p>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3">
              Our Solutions are:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {serviceSectionData.map((service, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
                  <span className="text-gray-800 text-sm sm:text-base">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {currentService && (
            <Link
              href={currentService.link}
              className="flex items-center bg-[#1C3FAA] rounded-xl px-4 py-2 w-fit justify-center gap-2 text-white mt-4"
            >
              <p>Learn More</p>
              <span className="inline-block border-2 rounded-full p-1">
                <ArrowRight width={14} height={14} />
              </span>
            </Link>
          )}
        </motion.div>

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
          className="w-full max-w-2xl flex justify-center"
        >
          <Image
            src={serviceSectionImages[0].image}
            alt={serviceSectionImages[0].title}
            width={610}
            height={516}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
//created by Omodara Ayodele
//github: OmodaraAyo

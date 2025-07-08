"use client";

import { motion } from "framer-motion";
import { pricingPlanData } from "@/data/home";
import { Check } from "lucide-react";
import { DisplayNAICurrency } from "@/helpers/displayCurrency";
import { useState, useEffect } from "react";
import sora from "@/public/assets/fonts/Sora";

export default function PricingPlanSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="container mx-auto py-12 px-4 text-center items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`mb-16 mx-auto max-w-2xl ${sora.className}`}
      >
        <p className="text-lg font-[400] text-[#777777]">Our Pricing Plans</p>
        <p className="text-2xl lg:text-3xl font-[600] text-[#333333] mt-2">
          Transparent Pricing Built for Growth, No Surprises
        </p>
      </motion.h2>

      <div className="flex flex-col gap-3 lg:flex-row lg:gap-0 items-center">
        {pricingPlanData.map((data, index) => {
          const isPlatinum = data?.plan === "Platinum Plan";

          return (
            <motion.div
              key={index}
              initial={
                isLargeScreen ? { opacity: 0, x: 20 } : { opacity: 0, y: 20 }
              }
              whileInView={
                isLargeScreen ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }
              }
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.15,
                ease: "easeIn",
              }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl text-left w-full lg:w-[320px] mx-auto border transition-all duration-300 flex flex-col gap-3 ${
                isPlatinum
                  ? "bg-[#102460] text-white border-[#102460]"
                  : "bg-white text-[#0C0A08] border-white"
              }`}
              style={{
                boxShadow: isPlatinum
                  ? "0 0 30px 5px rgba(189, 203, 247, 1)"
                  : "0 18px 30px rgba(0,0,0,0.15)",
              }}
            >
              <div>
                <h1 className={`text-2xl font-semibold mb-1 ${sora.className}`}>
                  {data.plan}
                </h1>
                <p className="text-sm">{data.planDescription}</p>
              </div>

              <div>
                {data.price ? (
                  <div className="flex items-end">
                    <h1 className={`font-bold text-4xl ${sora.className}`}>
                      {DisplayNAICurrency(parseFloat(data.price))}
                    </h1>
                    <p className="font-medium text-lg tracking-wide">
                      /{data.duration}
                    </p>
                  </div>
                ) : (
                  <p className="font-bold text-4xl tracking-wider">--</p>
                )}
              </div>

              <div>
                {data.advantages.map((adv, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 p-2.5 border-b ${
                      isPlatinum ? "border-[#1C3FAA]" : "border-[#E8E8E8]"
                    }`}
                  >
                    <div className="w-3 h-3 min-w-[17px] min-h-[17px] bg-[#E2E9FF] border rounded-full border-[#1C3FAA] flex items-center justify-center">
                      <Check width={10} height={10} color="#1C3FAA" />
                    </div>
                    <p className="flex flex-grow font-normal text-xs tracking-wider">
                      {adv}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-2.5 lg:gap-7 mt-15">
        <p
          className={`font-medium text-sm lg:text-2xl text-[#4A4A4A] ${sora.className}`}
        >
          Explore more options?
        </p>
        <button className="bg-[#102460] text-white px-6 py-3 rounded-xl font-semibold text-sm lg:text-base hover:opacity-90 transition cursor-pointer">
          View All Pricing Plans
        </button>
      </div>
    </section>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo

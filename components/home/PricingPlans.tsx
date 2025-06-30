"use client";

import { motion } from "framer-motion";
import { pricingPlanData } from "@/data/home"; // adjust path if needed
import { Check  } from "lucide-react";
import { DisplayNAICurrency } from "@/helpers/displayCurrency"

export default function PricingPlan() {
  return (
    <section className="container mx-auto py-12 px-4 text-center items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 mx-auto max-w-xl"
      >
        <p className="text-lg font-[400] text-[#777777]">Our Pricing Plans</p>
        <p className="text-[29px] font-[600] text-[#333333] mt-2">
          Transparent Pricing Built for Growth, No Surprises
        </p>
      </motion.h2>

      <div className="flex flex-col items-center gap-6">
        {pricingPlanData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl text-left w-[320px] border transition-all duration-300 ${
                data.plan === "Platinum Plan"
                  ? "bg-[#102460] text-white shadow-xl border-transparent"
                  : "bg-white text-[#0C0A08] border-[#D9D9D9]"
              }`}
            >

                <div>
                    <h1>{data.plan}</h1>
                    <p>{data.planDescription}</p>
                </div>

                <div>
                    {
                        data.price ? (
                            <div className="flex">
                                <h1>{DisplayNAICurrency(parseFloat(data.price))}</h1>
                                <p>/{data.duration}</p>
                            </div>
                        ) : "--"
                    }
                </div>

                <div>
                    {
                        data.advantages.map((adv, index) => (
                            <div key={index} className="flex">
                                <p className="w-4 h-4 bg-[#E2E9FF] border rounded-full border-[#1C3FAA] flex items-center justify-center">
                                    <Check width={10} height={10} color="#1C3FAA"/>
                                </p>
                                {/* <p>{adv}</p> */}
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <button className="bg-[#102460] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
          View All Pricing Plans
        </button>
      </div>
    </section>
  );
}

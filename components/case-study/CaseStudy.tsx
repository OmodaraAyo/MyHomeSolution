import { motion } from "framer-motion";
import sora from "@/public/assets/fonts/Sora";
import { useState, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { caseStudyData } from "@/data/case-study";

export default function CaseStudySection() {
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
    <section className="py-16 md:px-4 text-center relative h-fit min-h-[1000px] md:min-h-[1060px] bg-[#FBFBFB]">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        viewport={{ once: true }}
        className="relative z-30 container mx-auto px-5 md:px-12 lg:px-48"
      >
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:p-2 items-start">
          {caseStudyData.map((data, index) => (
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
              className="rounded-xl w-full mx-auto transition-all duration-300 bg-white text-[#0C0A08] overflow-hidden flex flex-col min-h-[420px]"
              style={{ boxShadow: "0px 0px 13px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-full py-20 rounded-xl bg-[#D9D9D9]"></div>

              <div className="flex flex-col gap-3 p-3 text-left flex-grow">
                <h1 className="text-base font-semibold mb-1 text-[#777777]">
                  {data.plan}
                </h1>

                <div>
                  <h1 className={`font-bold text-3xl`} style={{ fontFamily: "Sora, system-ui, sans-serif" }}>
                    {
                      data.plan === "Interior Design" ? `${data.percentage}` : `${data.percentage}%` 
                    }
                  </h1>
                  <p className="font-medium text-xs tracking-wide">
                    {data.description}
                  </p>
                </div>

                <div>
                  {data.advantages.map((adv, index) => (
                    <div key={index} className="flex items-center gap-2 py-2">
                      <div className="w-3 h-3 min-w-[17px] min-h-[17px] bg-[#E2E9FF] border rounded-full border-[#1C3FAA] flex items-center justify-center">
                        <Check width={10} height={10} color="#1C3FAA" />
                      </div>
                      <p className="flex flex-grow font-normal text-xs tracking-wider">
                        {adv}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href={data.ref}
                  className="flex items-center bg-transparent rounded-xl px-4 py-1.5 w-fit justify-center gap-2 text-[#1C3FAA] border-2 border-[#1C3FAA] mt-auto text-xs font-medium"
                >
                  <p>View full case study</p>
                  <span className="inline-block border-2 rounded-full p-0.5">
                    <ArrowRight width={12} height={12} />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo

import { motion } from "framer-motion";
import { serviceSectionImages, caseStudiesImages } from "@/data/home";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import sora from "@/public/assets/fonts/Sora";
import { ApproachComponentProps } from "../types/types";

export default function ApproachComponent(props: ApproachComponentProps) {
  const { data } = props
  return (
    <section className="relative px-6 py-8 lg:p-13 shadow-lg rounded-2xl mt-[2.5rem]">
      {/* Background Image */}
      <div className="absolute inset-0 z-10 bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage: `url(${caseStudiesImages[0].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay Layer */}
      <div className="absolute inset-0 w-full h-full bg-[#0A163B]/20 z-20 rounded-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-30 flex flex-col lg:flex-row items-start gap-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="w-full max-w-2xl text-left flex flex-col gap-3 sm:gap-5 text-white"
        >
          <p className={`text-lg sm:text-3xl font-semibold ${sora.className}`}>
            Our Approach
          </p>

          <div className="flex flex-col gap-y-3 font-semibold text-left">
            {data.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-blue-500 w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[10px] sm:text-base font-semibold md:max-w-md break-words mb-2">
                    {service.title}
                  </p>
                  <p className="text-[10px] sm:text-sm font-normal md:max-w-sm break-words tracking-wide">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/*Image*/}
        <div className="w-full max-w-2xl -mt-18 z-40 hidden lg:block">
          <Image
            src={serviceSectionImages[0].image}
            alt={serviceSectionImages[0].title}
            width={610}
            height={516}
            className="w-full h-auto object-contain"
            loading="lazy"
            priority={false}
            quality={85}
          />
        </div>
      </div>
    </section>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo
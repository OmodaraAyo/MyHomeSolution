import { motion } from "framer-motion";
import { serviceSectionImages } from "@/data/home";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import sora from "@/public/assets/fonts/Sora";
import { chatbotsAutomationSectionData } from "@/data/growth-marketing";

export default function ChatbotsAutomationSection() {
  return (
    <section className="container mx-auto py-12 px-4 text-center items-center lg:mt-10">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-10 bg-[#EEF2FF] rounded-2xl p-8 lg:p-13 shadow-lg">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl text-left flex flex-col gap-3 sm:gap-5 lg:gap-5"
        >
          <p
            className={`text-lg sm:text-3xl font-semibold text-[#333333] ${sora.className}`}
          >
            AI & Chatbots Automation
          </p>

          <div className="text-xs sm:text-base text-[#444] space-y-4 lg:max-w-xl leading-[1.07rem] sm:leading-7">
            <p>
              Never miss a lead—even after hours. Our smart AI chatbots engage visitors instantly, answer FAQs, qualify leads, and book appointments 24/7. You’ll save time, close faster, and offer lightning-fast customer experiences.
            </p>
            <p>
              Whether it’s Facebook Messenger, your website, or SMS, our chatbots feel human and deliver real results without extra staff.
            </p>
          </div>

          <div className="flex flex-col gap-x-8 gap-y-3 font-semibold text-left">
            {chatbotsAutomationSectionData.map((service, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-gray-800 text-sm sm:text-base md:max-w-md break-words">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
          <Link
            href=""
            className="flex items-center bg-[#1C3FAA] rounded-xl px-4 py-2 w-fit justify-center gap-2 text-white mt-4"
          >
            <p>Boost my online presence</p>
          </Link>
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
          className="w-full max-w-2xl"
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

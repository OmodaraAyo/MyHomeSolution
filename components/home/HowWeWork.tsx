import { motion } from "framer-motion";
import { howWeWorkData, howWeWorkImage } from "@/data/home";
import Image from "next/image";
import { useState } from "react";

export default function HowWeWork() {
  const [isHovered, setIsHovered] = useState<number | null>(0);

  const handleIsHoveredStart = (index: number) => {
    setIsHovered(index);
  };

  const handleIsHoveredEnd = (index: number) => {
    setIsHovered(index);
  };

  return (
    <section className="container mx-auto py-12 px-4 text-center items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-semibold text-[#333333] mb-17 text-center flex flex-col items-center gap-5"
      >
        <p>How We Work</p>
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-stretch gap-10">
        {/* Image */}
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], type: "spring", stiffness: 60, damping: 15}}
            viewport={{ once: true }}
            className="w-full hidden lg:block"
            >
          <Image
            src={howWeWorkImage[0].image}
            alt={howWeWorkImage[0].title}
            width={580}
            height={704}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Text Content */}
        <div className="w-full max-w-2xl text-left flex flex-col gap-6">
          {howWeWorkData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.15), ease: "easeOut" }}
              viewport={{ once: true }}
              onHoverStart={() => handleIsHoveredStart(index)}
              onHoverEnd={() => handleIsHoveredEnd(index)}
              whileHover={{ scale: 1.02 }}
              animate={{backgroundColor: isHovered === index ? "#102460" : "#ffffff",color: isHovered === index ? "#ffffff" : "#0C0A08", borderColor: isHovered === index ? "#102460" : "#D9D9D9",transition: { duration: 0.3 }}}
              className="p-6 rounded-xl flex-shrink-0 border text-start flex flex-col gap-2 snap-start cursor-auto"
              >
              <div className="w-10 h-10 bg-[#FFF8E5] mb-4 rounded-full flex items-center justify-center">
                <Image
                  src={data.image}
                  alt={data.title}
                  width={22}
                  height={22}
                />
              </div>
              <h1 className="text-lg font-semibold min-w-full text-ellipsis line-clamp-2">
                {data.title}
              </h1>
              <div>
                <p className={`block lg:hidden text-sm mt-2 flex-grow ${isHovered === index ? "text-white" : "text-[#777777]"}`}>
                  {data.description}
                </p>
                {isHovered === index && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="hidden lg:block text-sm flex-grow text-white"
                  >
                    {data.description}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
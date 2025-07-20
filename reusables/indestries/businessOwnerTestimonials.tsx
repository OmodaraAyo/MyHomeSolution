import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import sora from "@/public/assets/fonts/Sora";
import { businessOwnerTestimonialsData } from "@/data/industries";
import GridOne from "./Testimonialgrid/grid-one";
import GridTwo from "./Testimonialgrid/grid-two";
import GridThree from "./Testimonialgrid/grid-three";
export default function BusinessOwnerTestimonials() {
  const scrollElement = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollElement.current) {
      scrollElement.current.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollElement.current) {
      scrollElement.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
    }
  };
  return (
    <section>
      <div className="container mx-auto py-12 px-3 items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-9 px-2 md:px-0"
        >
          <p className={`text-[24px] sm:text-3xl font-[600] text-[#333333] mt-2 w-full px-1 ${sora.className}`}>
            What Business Owners Say
          </p>

          {/* Navigation Buttons */}
          <div className="flex w-fit ml-auto items-center justify-center gap-2 px-2 xl:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="bg-[#F3F3F38F] text-white p-2 rounded-full flex items-center gap-2 shadow-lg shadow-[#f1f4fd] cursor-pointer border"
              onClick={handleScrollLeft}
            >
              <ChevronLeft width={16} height={16} color="#DDDDDD" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="bg-[#A6B8F0] text-white p-2 rounded-full flex items-center gap-2 shadow-lg shadow-gray-200 cursor-pointer"
              onClick={handleScrollRight}
            >
              <ChevronRight width={16} height={16} color="#1C3FAA" />
            </motion.button>
          </div>
        </motion.div>

        {/**destop layout */}
        <div className="overflow-hidden snap-x snap-mandatory scrollbar-hide scroll-smooth hidden xl:flex h-[48rem] gap-3" ref={scrollElement}>
          <GridOne />
          <GridTwo />
          <GridThree />
        </div>

        {/**mobile layout */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth xl:hidden" ref={scrollElement} style={{ willChange: 'transform', overflowY: 'hidden' }}>
          {businessOwnerTestimonialsData.map((data, index) => (
            <motion.div
              key={index}
              className="rounded-xl text-start md:flex md:gap-6 snap-start w-full shrink-0 sm:w-full xl:w-[25rem] px-2 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <Image
                  src={data.image}
                  alt={data.title}
                  width={312}
                  height={312}
                  className="hidden md:block rounded-full"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col h-full">
                <p className="text-xl sm:text-2xl opacity-70 w-full font-semibold mb-5 ">
                  {data.description}
                </p>
                {/**profile details */}
                <div className="flex items-center gap-3 mt-auto">
                  <Image
                    src={data.image}
                    alt={data.title}
                    width={40}
                    height={40}
                    className="rounded-lg md:hidden"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-md font-semibold md:mt-2 text-gray-600">
                      {data.founder}
                    </p>
                    <p className="text-sm md:mt-1 opacity-70 tracking-wide">
                      {data.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo

import { motion } from "framer-motion";
import { foundersTestimonialData } from "@/data/home";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import sora from "@/public/assets/fonts/Sora";
export default function FoundersTestimonialSection() {
  const scrollElement = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollElement.current) {
      scrollElement.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollElement.current) {
      scrollElement.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <section>
      <div className="container mx-auto py-12 px-3 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-9 px-2 md:px-0"
        >
          <p
            className={`text-[24px] sm:text-3xl font-[600] text-[#333333] mt-2 ${sora.className}`}
          >
            What Founders Say
          </p>

          {/* Navigation Buttons */}
          <div className="flex w-fit ml-auto items-center justify-center gap-2 px-2">
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

        <div
          className="md:flex gap-6 min-w-[280px] marker:container mx-auto overflow-x-auto snap-x scrollbar-hide"
          ref={scrollElement}
        >
          {foundersTestimonialData.map((data, index) => (
            <motion.div
              key={index}
              className="rounded-xl text-start px-2 md:flex md:gap-6 snap-start w-full"
              initial={{ opacity: 0, y: 20 }}
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
                  className="hidden md:block"
                />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl text-[#4A4A4A] min-w-full font-semibold max-w-[690] mb-5">
                  {data.description}
                </h3>
                <div className="flex items-center gap-3">
                  <Image
                    src={data.image}
                    alt={data.title}
                    width={40}
                    height={40}
                    className="rounded-lg md:hidden"
                  />
                  <div>
                    <p className="text-md font-bold md:mt-2 text-gray-600 text-black">
                      {data.founder}
                    </p>
                    <p className="text-sm md:mt-1 text-gray-600">
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

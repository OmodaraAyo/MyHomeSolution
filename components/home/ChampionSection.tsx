
import { motion } from "framer-motion";
import Link from "next/link";
import { championData } from "@/data/home";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import sora from "@/public/fonts/Sora";
export default function ChampionsSection() {
  const scrollElement = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollElement.current) {
      scrollElement.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  }

  const handleScrollRight = () => {
    if (scrollElement.current) {
      scrollElement.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  }
  return (
    <section className="container mx-auto py-16 px-4 bg-white text-center mb-17">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-17 mx-auto max-w-[40rem]"
      >
        <p className="text-lg font-[400] text-[#777777]">Elevating Home Service Businesses</p>
        <p className={`text-2xl sm:text-3xl font-[600] text-[#333333] mt-2 ${sora.className}`}>We Love Serving Our Industry - Here’s Who We Champion Daily</p>
      </motion.div>
        <div className="md:flex gap-6 min-w-[280px] marker:container mx-auto overflow-x-auto snap-x scrollbar-hide p-5" ref={scrollElement}>
        {championData.map((champion, index) => (
          <motion.div
            key={index}
            className="min-w-[250px] md:max-w-[300px] flex-shrink-0 p-6 border border-white rounded-xl shadow-lg shadow-[#ecf1fd] text-start flex flex-col gap-2 snap-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
           
            <div className="w-12 h-12 bg-[#FFF8E5] mb-4 rounded-lg flex items-center justify-center">
              <Image
                src={champion.image}
                alt={champion.title}
                width={30}
                height={30}
                className=""
              />
            </div>
            <h3 className="text-lg font-semibold min-w-full text-ellipsis line-clamp-2">{champion.title}</h3>
            <p className="text-sm mt-2 text-gray-600 flex-grow">{champion.description}</p>
            <Link href="/industries"className="mt-auto pt-4 text-[#1C3FAA] font-medium text-sm flex items-center  gap-2">
              <p>See All Industries</p>
                <span className="inline mt-1">
                  <ArrowRight width={16} height={16} />
                </span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:flex w-fit ml-auto mt-8 items-center justify-center gap-2 px-2">
        <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} className="bg-[#F3F3F38F] text-white p-2 rounded-full flex items-center gap-2 shadow-lg shadow-[#f1f4fd] cursor-pointer" onClick={handleScrollLeft}>
          <ArrowLeft width={16} height={16} color="#1C3FAA"/>
        </motion.button>

         <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} className="bg-[#FFFFFF] text-white p-2 rounded-full flex items-center gap-2 shadow-lg shadow-gray-200 cursor-pointer" onClick={handleScrollRight}>
          <ArrowRight width={16} height={16} color="#1C3FAA"/>
        </motion.button>
      </div>
    </section>
  );
}

//created by Omodara Ayodele 
//github: OmodaraAyo
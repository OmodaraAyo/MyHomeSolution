
import { motion } from "framer-motion";
import Link from "next/link";
import { championData } from "@/data/home";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
export default function ChampionsSection() {
  return (
    <section className="container mx-auto py-16 px-4 bg-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10 marker:container mx-auto max-w-xl"
      >
        <p className="text-lg font-medium text-[#777777]">Elevating Home Service Businesses</p>
        <p className="text-[29px] font-bold">We Love Serving Our Industry - Here’s Who We Champion Daily</p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {championData.map((champion, index) => (
          <motion.div
            key={index}
            className="p-6 border border-white rounded-xl shadow-xl shadow-[#f1f4fd] text-start flex flex-col gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* PLACE IMAGE HERE: Champion Icon {index+1} */}
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

      <div className="hidden md:flex w-fit ml-auto mt-8 items-center justify-center gap-2 px-2">
        <button className="bg-[#F3F3F38F] text-white p-2 rounded-full flex items-center gap-2 shadow-lg shadow-[#f1f4fd] cursor-pointer">
          <ArrowLeft width={16} height={16} color="#1C3FAA"/>
        </button>

         <button className="bg-[#FFFFFF] text-white p-2 rounded-full flex items-center gap-2 shadow-lg shadow-gray-200 cursor-pointer">
          <ArrowRight width={16} height={16} color="#1C3FAA"/>
        </button>
      </div>
    </section>
  );
}
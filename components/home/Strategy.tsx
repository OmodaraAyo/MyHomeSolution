import { motion } from "framer-motion";
import { strategyData } from "@/data/home";
import Image from "next/image";
export default function StrategySection() {
  return (
    <section className="container mx-auto py-16 px-4 text-center flex flex-col lg:flex-row items-start justify-between">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8 marker:container mx-auto max-w-lg text-center lg:text-left w-full"
      >
        <p className="text-[29px] font-[600] text-[#333333] mt-2 lg:max-w-[20rem] lg:mt-3">
          Built to Deliver More Than Just Clicks
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6 min-w-fit marker:container overflow-x-auto snap-x scrollbar-hide pl-5 py-5">
        {strategyData.map((champion, index) => (
          <motion.div
            key={index}
            className="min-w-[250px] md:max-w-[300px] flex-shrink-0 p-6 border border-white rounded-xl text-start flex flex-col gap-2 snap-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{ boxShadow: "-4px 4px 12px #ecf1fd" }}
          >
            <div className="w-12 h-12 bg-[#FFF8E5] mb-4 rounded-full flex items-center justify-center">
              <Image
                src={champion.image}
                alt={champion.title}
                width={25}
                height={25}
              />
            </div>
            <h3 className="text-lg font-semibold min-w-full text-ellipsis line-clamp-2">
              {champion.title}
            </h3>
            <p className="text-sm mt-2 text-gray-600 flex-grow">
              {champion.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

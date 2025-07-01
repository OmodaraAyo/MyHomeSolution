import { motion } from "framer-motion";
import { strategyData } from "@/data/home";
import Image from "next/image";
import sora from "@/public/fonts/Sora";
export default function BuiltStrategySection() {
  return (
    <section className="container mx-auto py-16 px-4 text-center flex flex-col lg:flex-row items-start justify-between">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8 md:max-w-full lg:max-w-lg text-left md:text-center lg:text-left w-full"
      >
        <p className={`text-2xl md:text-3xl font-[600] text-[#333333] mt-2 lg:max-w-[20rem] lg:mt-3 ${sora.className}`}>
          Built to Deliver More Than Just Clicks
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6 w-full md:pl-5 py-5">
        {strategyData.map((champion, index) => (
          <motion.div
            key={index}
            className="w-full sm:min-w-[250px] md:max-w-[300px] flex-shrink-0 p-6 border border-white rounded-xl text-start flex flex-col gap-2 snap-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{ boxShadow: "-3px 3px 5px rgba(0,0,0,0.15)" }}
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

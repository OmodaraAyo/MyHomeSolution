import { motion } from "framer-motion";
import { buildLegacyData } from "@/data/home";
import sora from "@/public/fonts/Sora";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BuildLegacy() {

  return (
    <section className="py-12 px-4 items-center bg-[#E4EBFF] justify-center">
        <div className="container mx-auto bg-white w-full lg:max-w-5xl rounded-xl flex flex-col items-center justify-center py-12 text-center">
          {buildLegacyData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              animate={{ transition: { duration: 0.3 }}}
              className="p-6 flex-shrink-0 flex flex-col items-center gap-2 cursor-auto"
            >
              <h1 className={`text-2xl lg:text-3xl max-w-[580] font-semibold text-ellipsis line-clamp-2 ${sora.className}`}>
                {data.title}
              </h1>
              <div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`text-sm font-semibold mt-2 flex-grow text-[#333333] max-w-[580]`}>
                        {data.description}
                </motion.p>
                
              </div>
            </motion.div>
          ))}

          <Link
            href="/schedule-consultation"
            className="flex items-center bg-[#1C3FAA] rounded-xl px-4 py-2 w-fit justify-center gap-2 text-white mt-4"
            >
                <p>Schedule a Consultation</p>
                <span className="inline-block border-2 rounded-full p-0.5">
                    <ArrowRight width={14} height={14} />
                </span>
            </Link>
        </div>
    </section>
  );
}

//created by Omodara Ayodele 
//github: OmodaraAyo
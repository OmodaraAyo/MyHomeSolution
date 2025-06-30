import { brandData } from "@/data/home";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandsSection() {
  return (
    <section className="py-16 px-4 text-center container mx-auto mb-17">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[29px] font-[600] text-[#333333] mt-2 marker:container mx-auto max-w-lg mb-17 text-center"
      >
        Trusted by Local Service Legends and Global Hosts
      </motion.h2>
      
      <div className="relative w-full overflow-hidden h-[80px]">
        <div className="absolute flex">
          {/* Main Items - original items */}
          <div className="flex gap-12 pr-12 animate-marquee">
            {brandData.map((brand, index) => (
              <motion.div
                key={`brand-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-[150px] h-[80px] flex items-center justify-center flex-shrink-0 "
              >
                <Image
                  src={brand.image}
                  alt={`Brand logo ${index + 1}`}
                  width={brand.title === "Zoom" || brand.title === "Webflow" || brand.title === "Slack" ? 100 : 132}
                  height={brand.title === "Zoom" || brand.title === "Webflow" || brand.title === "Slack" ? 50 : 62}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
          
          {/* Duplicate Items*/}
          <div className="flex gap-12 pr-12 animate-marquee">
            {brandData.map((brand, index) => (
              <div
                key={`duplicate-${index}`}
                className="w-[150px] h-[80px] flex items-center justify-center flex-shrink-0"
              >
                <Image
                  src={brand.image}
                  alt={`Brand logo duplicate ${index + 1}`}
                  width={brand.title === "Zoom" || brand.title === "Webflow" || brand.title === "Slack" ? 100 : 132}
                  height={brand.title === "Zoom" || brand.title === "Webflow" || brand.title === "Slack" ? 50 : 62}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div>
        <h1>
          <p>We doubled our bookings in 90 days with MyHomeSolution</p>

        </h1>
      </div> */}
    </section>
  );
}
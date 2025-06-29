
import { motion } from "framer-motion";
export default function BrandsSection() {
  return (
    <section className="py-16 px-4 bg-gray-100 text-center ">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-6"
      >
        Trusted by Local Service Legends and Global Heats
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {["coinbase", "spotify", "slack", "dropbox", "webflow", "zoom"].map((brand, index) => (
          <motion.div
            key={brand}
            className="w-24 h-10 bg-gray-300 rounded"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          /> // PLACE IMAGE HERE: brand logo
        ))}
      </div>
    </section>
  );
}

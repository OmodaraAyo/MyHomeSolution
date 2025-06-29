
import { motion } from "framer-motion";

export default function ChampionsSection() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10"
      >
        We Love Serving Our Industry - Here’s Who We Champion Daily
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, idx) => (
          <motion.div
            key={idx}
            className="p-6 border rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            {/* PLACE IMAGE HERE: Champion Icon {idx+1} */}
            <div className="w-16 h-16 bg-gray-200 mx-auto mb-4 rounded-full" />
            <h3 className="text-xl font-semibold">Champion Title</h3>
            <p className="text-sm mt-2 text-gray-600">Short description of the champion group.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
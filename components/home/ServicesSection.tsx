import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10"
      >
        Our Services
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {["Digital Marketing", "Growth & Scaling"].map((title, index) => (
          <motion.div
            key={title}
            className="p-6 border rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <ul className="text-left list-disc ml-5 text-sm">
              {index === 0 ? (
                <>
                  <li>Paid Ads Management</li>
                  <li>Email Marketing</li>
                  <li>Lead Generation</li>
                </>
              ) : (
                <>
                  <li>Customer Retention Strategy</li>
                  <li>Funnel Optimization</li>
                  <li>Revenue Scaling</li>
                </>
              )}
            </ul>
            {/* PLACE IMAGE HERE: Service Icon */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

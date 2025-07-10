import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import sora from "@/public/assets/fonts/Sora";
import { faqs } from "@/data/about-us";

export default function CommonQuestionsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative py-20 px-4 md:px-10 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 0.77, 0.47, 0.97],
          delay: 0.2,
        }}
        viewport={{ once: true, margin: "-100px" }}
        className={`max-w-4xl mx-auto text-center`}
      >
        <motion.h2
          className={`text-xl lg:text-3xl font-semibold text-[#0C0A08] ${sora.className}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Common Questions
        </motion.h2>
        <motion.p
          className="text-sm text-[#8E8E8E] mt-2 max-w-lg md:max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          From pricing to process, here&#39;s everything you need to know about
          working with MyHomeSolution.
        </motion.p>

        <motion.div
          className="mt-10 space-y-4 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#F3F3F3] border-[#F3F3F3]"
                    : "bg-white border-[#F5F5F5] hover:border-[#eae8e8]"
                } `}
              >
                <motion.button
                  className="flex justify-between items-center w-full px-4 py-5 text-left"
                  onClick={() => toggle(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <p className="font-semibold text-sm text-[#181D27]">
                    {faq.question}
                  </p>
                  <motion.p
                    className="ml-4 text-[#3A3A3A]"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <Minus size={17} className="text-[#A4A7AE]" />
                    ) : (
                      <Plus size={17} className="text-[#A4A7AE]" />
                    )}
                  </motion.p>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3, ease: "easeOut" },
                        opacity: { duration: 0.2, delay: 0.1 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-5 text-sm text-[#535862]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-14 text-center flex justify-center items-center gap-3 md:gap-5"
        >
          <p className="text-lg font-semibold">Got more questions?</p>
          <motion.button
            type="button"
            className="bg-[#1C3FAA] text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:opacity-90 transition-transform cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo
import React from 'react';
import { quickFixCheckListData, seoResultsData, finalThoughtData } from '@/data/blog';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SeoResults() {
  return (
    <div className="mt-20 w-full max-w-[66rem] lg:px-8">
      {/* Section Heading */}
      <h2 className={`text-md md:text-[2rem] font-semibold mb-10 text-[#4A4A4A]`} style={{ fontFamily: "Sora, system-ui, sans-serif" }}>
        Common Reasons Your SEO Isn&apos;t Delivering Results
      </h2>

      {/* Main List */}
      <div className="space-y-12">
        {seoResultsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-[#606060]"
          >
            <h3 className="font-semibold text-sm md:text-[0.89rem] mb-2 text-[#333333]">
              {index + 1}. {item.why}
            </h3>
            <p className="text-sm md:text-[0.95rem] mb-3">{item.description}</p>
            <p className="font-bold text-sm md:text-[0.95rem] mb-1">Fix it:</p>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-[0.95rem]">
              {item.fixIt.map((fix, index) => (
                <li key={index} className='px-3'>{fix}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Quick Fix Checklist */}
      <div className="mt-16">
        <h3 className={`text-md md:text-[1.25rem] font-bold mb-3 text-[#4A4A4A]`} style={{ fontFamily: "Sora, system-ui, sans-serif" }}>Quick Fix Checklist</h3>
        <div className="list-disc list-inside text-sm space-y-3 leading-10">
          {quickFixCheckListData.map((data, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="text-[#606060]"
            >
              {data}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Final Thoughts */}
      <div className="mt-12 space-y-3">
        <h3 className={`text-md md:text-[1.25rem] font-bold text-[#4A4A4A]`} style={{ fontFamily: "Sora, system-ui, sans-serif" }}>Final Thoughts</h3>
        {finalThoughtData.map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="text-[#606060] text-sm md:text-[0.95rem]"
          >
            {text}
          </motion.p>
        ))}
      </div>

      <div className='flex flex-col md:flex-row gap-3 md:gap-5 max-w-xl md:items-center mt-12'>
        <p className={`text-[#4A4A4A]`} style={{ fontFamily: "Sora, system-ui, sans-serif" }}>Need help fixing your SEO?</p>
        <Link
          href="/"
          className="flex items-center bg-[#1C3FAA] rounded-xl px-4 py-2 w-fit justify-center gap-2 text-white text-[14px] md:text-base"
        >
          Book a Free Strategy Call
        </Link>
      </div>
    </div>
  );
}


// created by Omodara Ayodele
// github: OmodaraAyo

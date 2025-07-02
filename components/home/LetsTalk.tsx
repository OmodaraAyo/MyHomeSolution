"use client";

import { motion } from "framer-motion";
import sora from "@/public/fonts/Sora";
import { contactInfos } from "@/data/home";
import { useState } from "react";

export default function LetsTalk() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    industry: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-12 px-4 bg-[#E4EBFF]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto bg-white w-full px-7 rounded-xl flex flex-col md:flex-row justify-between py-5 gap-5"
      >
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-tr from-[#09153C] to-[#17389D] p-4 text-left text-white w-full md:max-w-md rounded-2xl relative overflow-hidden"
        >
          <div className="flex flex-col gap-2 mb-8">
            <p className={`font-bold text-xl ${sora.className}`}>Let’s Talk</p>
            <p className="font-normal text-sm">
              We’re here to listen—reach out and let’s explore new possibilities together
            </p>
          </div>

          <div className="space-y-5">
            {contactInfos.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-3 items-center font-normal text-[15px]"
              >
                <info.icon className="w-5 h-5" />
                <a href={info.href} target="_blank" rel="noopener noreferrer">
                  {info.value}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:px-4 w-full"
        >
          {/* Fullname */}
          <div className="flex flex-col">
            <label htmlFor="fullname" className="font-semibold text-md">
              Full name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border border-[#BBBBBB] outline-none p-2 rounded-lg mb-4 mt-2"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-md">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@company.com"
              required
              className="border border-[#BBBBBB] outline-none p-2 rounded-lg mb-4 mt-2"
            />
          </div>

          {/* Industry */}
          <div className="flex flex-col">
            <label htmlFor="industry" className="font-semibold text-md">
              Industry
            </label>
            <input
              type="text"
              id="industry"
              name="industry"
              value={form.industry}
              onChange={handleChange}
              placeholder="Industry"
              required
              className="border border-[#BBBBBB] outline-none p-2 rounded-lg mb-4 mt-2"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="font-semibold text-md">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              id="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Leave us a message here"
              required
              className="border border-[#BBBBBB] outline-none p-2 rounded-lg mb-6 mt-2 resize-none"
            />
          </div>

          <button className="block w-fit ml-auto bg-[#1C3FAA] p-2 rounded-lg text-white font-semibold text-center md:text-base cursor-pointer">
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}

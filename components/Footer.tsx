"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { footerLinks } from "@/data/home";

export default function Footer() {
  return (
    <section className="bg-[#0A1C45] text-white py-2">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-y-10 gap-x-8 justify-between border-b border-gray-600">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full  space-y-4"
        >
          <div className="w-[100px] h-[50px] bg-gray-300 rounded-md" />
          <p className="text-sm text-gray-300 leading-relaxed md:max-w-sm">
            In a matter of seconds, compose audience-specific copy that is high-performing and tailored to the intended target audience.
          </p>
        </motion.div>

        {/* Right Columns Wrapper */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {footerLinks.services.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {footerLinks.resources.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-y-4 gap-x-6 text-sm text-gray-400 text-center md:text-left">
          {/* Social Icons */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            {footerLinks.socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link key={index} href={social.href}>
                  <Icon size={16} />
                </Link>
              );
            })}
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            {footerLinks.legal.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <p className="text-xs text-center md:text-right">
            &copy; myhomesolution 2025, All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
}

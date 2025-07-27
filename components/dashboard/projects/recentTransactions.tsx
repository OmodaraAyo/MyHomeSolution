"use client"
import React from "react";
import { motion } from "framer-motion";
import { recentTransactionLabels, recentTransactionsDummyData } from "@/data/dashboard";
import { Square } from 'lucide-react';
import Link from 'next/link';

export default function RecentTransactions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border border-[#E8E8E8] rounded-xl grid grid-cols-1 items-center justify-between gap-4 text-left"
    >
      <div className="px-5 pt-5 flex items-center justify-between">
        <h1 className="text-[#4A4A4A] text-lg font-semibold tracking-wide">Recent Transactions</h1>
        <Link href={"/"} className="flex items-center gap-0.5 text-[#1C3FAA] underline underline-offset-2">View All</Link>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="bg-[#F2F5F7]">
            {/** Table headers */}
            {recentTransactionLabels.map((title, index) => (
              <th
                key={index}
                className="text-[#ACB5BB] text-sm font-semibold mb-2 px-3 py-5 tracking-wide"
              >
                {index === 0 ? (
                  <div className="flex items-center gap-4">
                    <Square className="inline-block" size={13} />
                    {title}
                  </div>
                ) : (
                  title
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/** Table data */}
          {recentTransactionsDummyData.map((transaction, index) => (
            <tr key={index}>
              <td className="flex items-center gap-4 p-3">
                <Square className="inline-block" size={13} />
                {transaction.id}
              </td>
              <td className="p-3">{transaction.date}</td>
              <td className="p-3">{transaction.service}</td>
              <td className="p-3">{transaction.amount}</td>
              <td className="p-3">{transaction.status}</td>
              <td className="p-3"> <span className="bg-[#EDF1F3] text-[#4F4F4F] flex rounded-lg w-32 p-2 justify-center">{transaction.paymentMethod}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

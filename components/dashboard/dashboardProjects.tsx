"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projectList} from "@/data/dashboard";
import ActiveProject from "@/components/dashboard/projects/activeProject";
import RecentTransactions from "@/components/dashboard/projects/recentTransactions";

export default function DashboardProjects() {
  return (
    <section>
      {/* projects counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-xl px-1 py-4 grid grid-cols-3 items-center gap-10 text-center mb-6"
      >
        {
            projectList.map((data, index) => (
                <div key={index} className="flex p-4 border border-[#E8E8E8] rounded-xl text-left justify-between items-center ">
                    <div className="space-y-4">
                        <p className="text-base font-semibold text-gray-600">{data.projectTitle}</p>
                        <p className={`text-3xl font-semibold`} style={{ fontFamily: "Sora, system-ui, sans-serif" }}>{data.counter}</p>
                    </div>
                    <div style={{ backgroundColor: data.iconBg, padding: 9, borderRadius: '0.45rem'  }}>
                        <Image
                        alt={data.projectTitle}
                        src={data.icon}
                        width={23}
                        height={23}
                        className=""
                        />
                    </div>
                </div>
            ))
        }
      </motion.div>
      
      {/* active projects */}
      <ActiveProject/>

      {/** Recent Transactions */}
      <RecentTransactions/>
    </section>
  );
}

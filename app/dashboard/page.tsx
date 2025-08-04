"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { otherDashboardImages, projectList } from "@/data/dashboard";
import Link from "next/link";
import DashboardProjects from "@/components/dashboard/dashboardProjects";

export default function DashboardPage() {
  const hasProjects = projectList && projectList.length > 0;

  return (
    <section>
      {hasProjects ? (
        <DashboardProjects />
      ) : (
        <>
          {/* Welcome Message */}
          <div className="flex justify-between mb-6 items-center px-1">
            <div>
              <h2
                className={`text-xl font-semibold`}
                style={{ fontFamily: "Sora, system-ui, sans-serif" }}
              >
                Welcome, Umar
              </h2>
              <p className="text-sm text-gray-600">
                Ready to launch your next project?
              </p>
            </div>

            <Link
              href="/dashboard/new-project"
              className="bg-[#1C3FAA] text-white px-5 py-2 rounded-lg text-sm font-medium"
            >
              + Request Service
            </Link>
          </div>

          {/* Start project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-xl p-10 flex flex-col items-center justify-center text-center"
          >
            <div className="relative w-9 h-9 overflow-hidden">
              <Image
                alt={otherDashboardImages[0].alt}
                src={otherDashboardImages[0].iconSrc}
                fill
                className="object-cover"
              />
            </div>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ fontFamily: "Sora, system-ui, sans-serif" }}
            >
              Start a Project
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Your active projects appear here.
            </p>
            <Link
              href="/dashboard/new-project"
              className="bg-[#1C3FAA] text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              + New Request
            </Link>
          </motion.div>
        </>
      )}
    </section>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo

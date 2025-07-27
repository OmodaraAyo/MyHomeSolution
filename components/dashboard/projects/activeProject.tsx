"use client"
import React from 'react'
import { activeProjects, progressData, nextStepData } from "@/data/dashboard";
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';
import { motion } from "framer-motion";

export default function ActiveProject() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border border-[#E8E8E8] rounded-xl p-5 grid grid-cols-1 items-center justify-between gap-10 text-left mb-10"
          >
            {
                activeProjects.map((project, index)=> (
                    <div key={index} className='space-y-4'>
                        {/* title */}
                        <div className="flex items-start justify-between">
    
                            <div className="space-y-1">
                                <p className='text-[#606060]'>Active Project</p>
                                <p className='text-[#333333] text-2xl font-semibold mb-3' style={{ fontFamily: "Sora, system-ui, sans-serif" }}>{project.name}</p>
                                <p className="text-[#8E8E8E] flex items-center gap-2">
                                    <CalendarDays className="w-4 h-4"/>
                                    <span className='text-sm'>Submitted: {project.dateSubmitted}</span>
                                </p>
                            </div>
    
                            <Link href={project.id} className="flex items-center gap-0.5 text-[#1C3FAA]">
                                <p className='underline underline-offset-2'>View Details</p>
                                <ArrowUpRight className=""/>
                            </Link>
                        </div>
    
                        {/**progress */}
                        <div className="space-y-2">
                            
                            <div className="h-4 bg-[#E9E9E9] rounded-full overflow-hidden"><p className=" w-25 h-4 bg-[#1C3FAA] rounded-full"></p></div>
                            <div className="flex justify-between">
                                {
                                progressData.map((data, index)=> (
                                    <div key={index} className="text-sm font-semibold text-[#777777] tracking-wide">
                                        <p>{data}</p>
                                    </div>
                                ))
                            }
                            </div>
                        </div>

                        {/* next step */}
                              <div>
                                <h1 className="text-sm text-[#8E8E8E] mb-2">Next Steps:</h1>
                                {
                                    nextStepData.map((step, index)=>(
                                        <div key={index} className="flex items-center gap-2">
                                            <step.icon style={{ color: step.iconColor, width: 17 }}/>
                                            <p className="text-base font-normal text-[#606060]">{step.description}</p>
                                        </div>
                                    ))
                                }
                              </div>
                    </div>
                ))
            }
          </motion.div>
  )
}

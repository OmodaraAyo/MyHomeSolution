import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import sora from "@/public/assets/fonts/Sora";
import {industryHeroSectionImages,rentalsSectionData} from "@/data/industries";
import GridComponent from "./gridComponent";
import { ApproachType, GridType } from "../types/types";
import { useState, useEffect } from "react";
import GridSkeleton from "../skeleton/industries/GridSkeleton";
import ApproachSkeleton from "../skeleton/industries/ApproachSkeleton";
import useIsMobile from "@/hooks/useIsMobile";
import ApproachComponent from './approach';

interface RentalsSectionProps {
  bgPrimaryColor: string;
  bgSecondaryColor: string;
  componentTitle: string;
  description1: string;
  description2: string;
  testimonial: string;
  authorName: string;
  authorPosition: string;
  gridImgBgPrimarycolor: string;
    gridImgBgSecondarycolor: string;
  gridData: Array<GridType>;
  approachData: Array<ApproachType>;
}

export default function RentalsSection(props: RentalsSectionProps) {
  const isMobile = useIsMobile();
  const {
    bgPrimaryColor,
    bgSecondaryColor,
    componentTitle,
    description1,
    description2,
    testimonial,
    authorName,
    authorPosition,
    gridImgBgPrimarycolor,
    gridImgBgSecondarycolor,
    gridData,
    approachData,
  } = props;

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
  const timeout = setTimeout(() => setIsMounted(true), 500);
  return () => clearTimeout(timeout);
}, []);
  return (
    <section className="container mx-auto py-12 px-4 text-center items-center lg:mt-10 min-h-[1100px] md:min-h-[1400px] lg:min-h-[1600px]">
      <div
        className={`rounded-2xl px-4 lg:px-8 py-8 lg:p-13 shadow-lg`}
        style={{ backgroundColor: isMobile ? bgSecondaryColor : bgPrimaryColor }}
      >
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="w-full max-w-2xl text-left flex flex-col gap-3 sm:gap-5 lg:gap-5"
          >
            <p
              className={`text-lg sm:text-3xl font-semibold text-[#333333] ${sora.className}`}
            >
              {componentTitle}
            </p>

            <div className="text-xs sm:text-base text-[#444] space-y-4 lg:max-w-xl leading-[1.07rem] sm:leading-7">
              <p>{description1}</p>
              <p>{description2}</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="relative md:w-[3rem]"></div>
              {/* Testimonial Text Box */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                viewport={{ once: true }}
                className="relative text-[10px] font-light sm:text-[0.885rem] text-white space-y-4 leading-[1.07rem] sm:leading-7 bg-[#4A4A4A] px-5 md:px-7 py-3 rounded-2xl md:rounded-[1.8rem] w-full "
              >
                <div className="absolute -left-6 md:-left-10 top-15">
                  <Image
                    src={rentalsSectionData[1].image}
                    alt={rentalsSectionData[1].title}
                    width={40}
                    height={40}
                    loading="lazy"
                    className="rounded-full object-cover w-10 h-10 md:w-16 md:h-16"
                  />
                </div>
                <p>{testimonial}</p>
                <p>
                  <span className="font-semibold">{authorName}</span>
                  {authorPosition}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <div className="w-full max-w-2xl">
            <Image
              src={industryHeroSectionImages[0].image}
              alt={industryHeroSectionImages[0].title}
              width={610}
              height={516}
              className="w-full h-auto object-contain"
              loading="lazy"
              priority={false}
              quality={85}
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          viewport={{ once: true }}
        >
          {isMounted ? <GridComponent data={gridData} imgBgPrimaryColor={gridImgBgPrimarycolor} imgBgSecondaryColor={gridImgBgSecondarycolor}/> : <GridSkeleton />}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          viewport={{ once: true }}
        >
          {isMounted ? (
            <ApproachComponent data={approachData} />
          ) : (
            <ApproachSkeleton />
          )}
        </motion.div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-5 items-center mt-12 justify-center">
          <p className={`text-[#4A4A4A] ${sora.className}`}>
            Discover similar projects?
          </p>
          <Link
            href="/"
            className="flex items-center bg-[#1C3FAA] rounded-xl px-4 py-2 w-fit justify-center gap-2 text-white text-[14px] md:text-base"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
//created by Omodara Ayodele
//github: OmodaraAyo

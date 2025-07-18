import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import sora from "@/public/assets/fonts/Sora";
import { industryHeroSectionImages, rentalsSectionData } from "@/data/industries";
import GridComponent from "./gridComponent";
import ApproachComponent from "./Approach";

export default function RentalsSection() {
  return (
    <section className="container mx-auto py-12 px-4 text-center items-center lg:mt-10">
      <div className="bg-[#EEF2FF] rounded-2xl px-4 lg:px-8 py-8 lg:p-13 shadow-lg">
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
              Airbnb & Short-Term Rentals
            </p>

            <div className="text-xs sm:text-base text-[#444] space-y-4 lg:max-w-xl leading-[1.07rem] sm:leading-7">
              <p>
                Running a successful Airbnb or short-term rental brand means
                juggling turnover schedules, guest expectations, and non-stop
                inquiries. We help you turn that chaos into a conversion
                machine—powered by clean branding, automated lead flows, and a
                website that does the talking for you. From instant booking
                integrations to review management and guest messaging
                automation, we make you the preferred host in your city.
              </p>
              <p>
                Our full-stack solutions cover everything from search
                optimization and CRM automation to real-time availability and
                SEO-rich content. Want to be booked solid month after month? You
                need more than great photos—you need a full digital system built
                for growth. That’s where we come in.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="relative md:w-[3rem]"></div>
              {/* Testimonial Text Box */}
              <div className="relative text-[10px] font-light sm:text-[0.885rem] text-white space-y-4 leading-[1.07rem] sm:leading-7 bg-[#4A4A4A] px-5 md:px-7 py-3 rounded-2xl md:rounded-[1.8rem] w-full ">
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
                <p>
                  Since partnering with MyHomeSolution, our booking rate jumped
                  45% in three months. Their team automated our guest
                  follow-ups, revamped our site, and made our brand stand out.
                  It’s like we hired a full tech team without the overhead!
                </p>
                <p>
                  <span className="font-semibold">Tina A M., </span>
                  Co-founder, PrimeNest Short Stays
                </p>
              </div>
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
        <GridComponent />
        <ApproachComponent />
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

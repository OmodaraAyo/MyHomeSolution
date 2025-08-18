import { aboutUSectionImage } from "@/data/about-us";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="container mx-auto py-12 px-4 text-center items-center">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-10 rounded-2xl p-4">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl text-left flex flex-col gap-3 sm:gap-5 lg:gap-5"
        >
          <div className="text-xs sm:text-base text-[#444] space-y-4 lg:max-w-xl leading-[1.07rem] sm:leading-7">
            <p>
              At Myhomesolution, we are more than just a digital marketing
              agency. We are the architects of your success, the brushstrokes of
              your brand&#39;s masterpiece, and the driving force behind your
              business&#39;s growth. With a passion for innovation and an
              unwavering commitment to our clients, we have become the go-to
              partner for a diverse range of home service businesses.
            </p>
            <p>
              From bathroom remodelling contractors to HVAC installation and
              maintenance experts, we have a deep understanding of the unique
              challenges and opportunities within the home service industry. Our
              mission is to elevate your business above the competition, and our
              track record speaks volumes.
            </p>
            <p>
              Our digital toolbox is equipped with the latest and most effective
              techniques, from SEO and PPC campaigns to social media management
              and content marketing. We take pride in being your growth partner,
              your success advocate, and your digital marketing ally.
            </p>
          </div>

        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            type: "spring",
            stiffness: 60,
            damping: 15,
          }}
          viewport={{ once: true }}
          className="w-full max-w-2xl"
        >
          <Image
            src={aboutUSectionImage[0].image}
            alt={aboutUSectionImage[0].title}
            width={610}
            height={516}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
//created by Omodara Ayodele
//github: OmodaraAyo

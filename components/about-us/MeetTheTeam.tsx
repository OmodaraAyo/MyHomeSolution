import { motion } from "framer-motion";
import Image from "next/image";
import sora from "@/public/assets/fonts/Sora";
import { useState, useEffect } from "react";
import { teamSectionData } from "@/data/about-us";
import { Linkedin } from "lucide-react";

export default function MeetTheTeamSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="py-20 px-4 md:px-12 lg:px-36 bg-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <div className={`mb-4 `}>
          <h2 className={`text-xl lg:text-3xl font-bold text-[#333333] ${sora.className}`}>
            Meet the Team
          </h2>
          <p className=" text-sm lg:text-md text-[#8E8E8E] mt-3">
            Meet the growth architects behind MyHomeSolution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamSectionData.map((member, index) => (
            <motion.div
              key={index}
              initial={
                isLargeScreen ? { opacity: 0, x: 30 } : { opacity: 0, y: 30 }
              }
              whileInView={
                isLargeScreen ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }
              }
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={600}
                className="object-cover w-full h-[600px] sm:h-[400px]"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-4 text-white">
                <div className="flex justify-between w-full text-left items-center">
                  <div>
                    <p className="text-sm font-semibold">{member.name}</p>
                    <p className="text-xs">{member.title}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto mt-1"
                  >
                    <div className="bg-white p-1 rounded-sm">
                      <Linkedin size={16} className="text-black" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

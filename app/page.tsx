"use client";
import BrandsSection from "@/components/home/brandsSection";
import ChampionsSection from "@/components/home/championSection";
import HeroSection from "@/components/home/herosection";
import HowWeWorkSection from "@/components/home/howWeWork";
import PricingPlanSection from "@/components/home/pricingPlans";
import ServicesSection from "@/components/home/servicesSection";
import BuiltStrategySection from "@/components/home/builtStrategy";
import CaseStudiesSection from "@/components/home/caseStudies";
import BuildLegacy from "@/components/home/buildLegacy";
import BlogSection from "@/components/home/blog";
import FoundersTestimonialSection from "@/reusables/foundersTestimonial";
import LetsTalk from "@/reusables/letsTalk";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo")
  const router = useRouter()

  useEffect(()=> {
    if(scrollTo) {
      const element = document.getElementById(scrollTo);
      if(element) {
        setTimeout(()=> {
          element.scrollIntoView({ behavior: "smooth"})
          router.replace("/", { scroll: false })
        }, 100)
      }
    }
  }, [scrollTo, router])

  return (
    <>
      <HeroSection />
      <ChampionsSection />
      <BrandsSection />
      <BuiltStrategySection />
      <ServicesSection />
      <div className="bg-[#F3F3F38F]">
        <HowWeWorkSection />
        <PricingPlanSection />
        <CaseStudiesSection />
        <BuildLegacy />
        <BlogSection />
        <FoundersTestimonialSection />
        <LetsTalk />
      </div>
    </>
  );
}

"use client";
import BrandsSection from "@/components/home/BrandsSection";
import ChampionsSection from "@/components/home/ChampionSection";
import HeroSection from "@/components/home/Herosection";
import HowWeWorkSection from "@/components/home/HowWeWork";
import PricingPlanSection from "@/components/home/PricingPlans";
import ServicesSection from "@/components/home/ServicesSection";
import BuiltStrategySection from "@/components/home/BuiltStrategy";
import CaseStudiesSection from "@/components/home/CaseStudies";
import BuildLegacy from "@/components/home/BuildLegacy";
import BlogSection from "@/components/home/Blog";
import FoundersTestimonialSection from "@/components/home/FoundersTestimonial";
import LetsTalk from "@/components/home/LetsTalk";

export default function Home() {
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
        <BuildLegacy/>
        <BlogSection/>
        <FoundersTestimonialSection/>
        <LetsTalk/>
      </div>
    </>
  );
}

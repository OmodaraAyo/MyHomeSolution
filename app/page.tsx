"use client";
import BrandsSection from "@/components/home/BrandsSection";
import ChampionsSection from "@/components/home/ChampionSection";
import HeroSection from "@/components/home/Herosection";
import HowWeWorkSection from "@/components/home/HowWeWork";
import PricingPlanSection from "@/components/home/PricingPlans";
import ServicesSection from "@/components/home/ServicesSection";
import BuiltStrategySection from "@/components/home/BuiltStrategy";
import CaseStudiesSection from "@/components/home/CaseStudies";

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
      </div>
    </>
  );
}

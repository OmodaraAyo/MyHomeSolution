"use client"
import BrandsSection from "@/components/home/BrandsSection";
import ChampionsSection from "@/components/home/ChampionSection";
import HeroSection from "@/components/home/Herosection";
import HowWeWork from "@/components/home/HowWeWork";
import PricingPlan from "@/components/home/PricingPlans";
import ServicesSection from "@/components/home/ServicesSection";
import StrategySection from "@/components/home/Strategy";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <ChampionsSection/>
      <BrandsSection/>
      <StrategySection/>
      <ServicesSection/>
      <div className="bg-[#F3F3F38F]"> 
        <HowWeWork/>
        <PricingPlan/>
      </div>
    </>
  );
}

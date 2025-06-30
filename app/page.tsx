"use client"
import BrandsSection from "@/components/home/BrandsSection";
import ChampionsSection from "@/components/home/ChampionSection";
import HeroSection from "@/components/home/Herosection";
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
    </>
  );
}

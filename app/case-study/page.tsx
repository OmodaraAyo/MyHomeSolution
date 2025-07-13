"use client";
import CaseStudySection from "@/components/case-study/CaseStudy";
import HeroSection6 from "@/components/case-study/HeroSection6";
import ResultsSection from "@/components/case-study/ResultsSection";
import SuccessStorySection from "@/reusables/SuccessStorySection";
import React from "react";

export default function page() {
  return (
    <>
      <HeroSection6 />
      <CaseStudySection />
      <ResultsSection />
      <SuccessStorySection link="/schedule-consultation"/>
    </>
  );
}

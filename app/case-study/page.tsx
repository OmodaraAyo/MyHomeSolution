"use client";
import CaseStudySection from "@/components/case-study/caseStudy";
import HeroSection6 from "@/components/case-study/heroSection6";
import ResultsSection from "@/components/case-study/resultsSection";
import SuccessStorySection from "@/reusables/successStorySection";
import React from "react";

export default function page() {
  return (
    <>
      <HeroSection6 />
      <CaseStudySection />
      <ResultsSection />
      <SuccessStorySection link="/schedule-consultation" />
    </>
  );
}

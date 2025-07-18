"use client";
import AdsSection from "@/components/digital-marketing/adsSection";
import ContentMarketingSection from "@/components/digital-marketing/contentMarketingSection";
import DHeroSection from "@/components/digital-marketing/dHeroSection";
import EmailMarketingSection from "@/components/digital-marketing/emailMarketing";
import LeadGenerationSection from "@/components/digital-marketing/leadGenerationSection";
import LocalSearchOp from "@/components/digital-marketing/localSearchOp";
import PPCManagementSection from "@/components/digital-marketing/ppc-Management";
import SearchEngineSection from "@/components/digital-marketing/searchEngineSection";
import SocialMediaMarketingSection from "@/components/digital-marketing/socialMediaMarketing";
import SuccessStorySection from "@/reusables/successStorySection";
import React from "react";

export default function DigitalMarketingPage() {
  return (
    <>
      <DHeroSection />
      <SearchEngineSection />
      <PPCManagementSection />
      <EmailMarketingSection />
      <SocialMediaMarketingSection />
      <ContentMarketingSection />
      <LeadGenerationSection />
      <AdsSection />
      <LocalSearchOp />
      <SuccessStorySection link="/schedule-consultation" />
    </>
  );
}

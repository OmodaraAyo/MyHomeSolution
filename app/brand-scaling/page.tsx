"use client";
import BHeroSection from "@/components/brand-scaling/bHeroSection";
import BrandDesignSection from "@/components/brand-scaling/brandDesign";
import BrandStrategySection from "@/components/brand-scaling/brandStrategy";
import OnlineOptSection from "@/components/brand-scaling/onlineOpt";
import PrServiceSection from "@/components/brand-scaling/prService";
import ReviewsManagementSection from "@/components/brand-scaling/reviewsManagementSection";
import UXDesignSection from "@/components/brand-scaling/uXDesign";
import VideoTestimonialSection from "@/components/brand-scaling/videoTestimonialSection";
import WebsiteDesignSection from "@/components/brand-scaling/websiteDesign";
import SuccessStorySection from "@/reusables/successStorySection";
import React from "react";

export default function BrandScaling() {
  return (
    <>
      <BHeroSection />
      <BrandStrategySection />
      <WebsiteDesignSection />
      <BrandDesignSection />
      <UXDesignSection />
      <OnlineOptSection />
      <ReviewsManagementSection />
      <VideoTestimonialSection />
      <PrServiceSection />
      <SuccessStorySection link="/schedule-consultation" />
    </>
  );
}

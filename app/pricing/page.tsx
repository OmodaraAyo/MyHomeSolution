"use client";
import AdditionalPackagesSection from "@/components/pricing/additionalPackagesSection";
import HeroSection5 from "@/components/pricing/heroSection5";
import SubscriptionPlan from "@/components/pricing/subscriptionPlan";
import FoundersTestimonialSection from "@/reusables/foundersTestimonial";
import LetsTalk from "@/reusables/letsTalk";
import React from "react";
export default function page() {
  return (
    <>
      <HeroSection5 />
      <SubscriptionPlan />
      <AdditionalPackagesSection />
      <FoundersTestimonialSection />
      <LetsTalk />
    </>
  );
}

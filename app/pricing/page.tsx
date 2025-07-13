"use client"
import AdditionalPackagesSection from '@/components/pricing/AdditionalPackagesSection'
import HeroSection5 from '@/components/pricing/HeroSection5'
import SubscriptionPlan from '@/components/pricing/SubscriptionPlan'
import FoundersTestimonialSection from '@/reusables/FoundersTestimonial'
import LetsTalk from "@/reusables/LetsTalk";
import React from 'react'
export default function page() {
  return (
    <>
      <HeroSection5 />
      <SubscriptionPlan />
      <AdditionalPackagesSection />
      <FoundersTestimonialSection/>
      <LetsTalk/>
    </>
  );
}

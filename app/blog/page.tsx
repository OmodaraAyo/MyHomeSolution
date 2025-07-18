"use client";
import HeroSection7 from "@/components/blog/heroSection7";
import FoundersTestimonialSection from "@/reusables/foundersTestimonial";
import SuccessStorySection from "@/reusables/successStorySection";
import React from "react";

export default function Blog() {
  return (
    <>
      <HeroSection7 />
      <FoundersTestimonialSection />
      <SuccessStorySection link="/schedule-consultation" />
    </>
  );
}

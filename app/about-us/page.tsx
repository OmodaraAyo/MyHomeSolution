"use client";
import AboutUsSection from "@/components/about-us/aboutUs";
import CommonQuestionsSection from "@/components/about-us/commonQuestionSection";
import HeroSection4 from "@/components/about-us/heroSection4";
import MeetTheTeamSection from "@/components/about-us/meetTheTeam";
import FoundersTestimonialSection from "@/reusables/foundersTestimonial";
import LetsTalk from "@/reusables/letsTalk";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <HeroSection4 />
      <AboutUsSection />
      <MeetTheTeamSection />
      <CommonQuestionsSection />
      <FoundersTestimonialSection />
      <LetsTalk />
    </>
  );
}

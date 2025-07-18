"use client";
import AIAnalysisSection from "@/components/growth-marketing/aI-Analysis";
import AppointmentManagementSection from "@/components/growth-marketing/appointmentManagementSection";
import BookingIntegrationSection from "@/components/growth-marketing/bookingIntegration";
import ChatbotsAutomationSection from "@/components/growth-marketing/chatbotsAutomationSection";
import GHeroSection from "@/components/growth-marketing/gHeroSection";
import MobileDevelopmentSection from "@/components/growth-marketing/mobileDevelopment";
import PremiumAnalyticsSection from "@/components/growth-marketing/premiumAnalyticsSection";
import RateOptSection from "@/components/growth-marketing/rateOptSection";
import SuccessStorySection from "@/reusables/successStorySection";
import React from "react";

export default function page() {
  return (
    <>
      <GHeroSection />
      <ChatbotsAutomationSection />
      <MobileDevelopmentSection />
      <RateOptSection />
      <BookingIntegrationSection />
      <AppointmentManagementSection />
      <AIAnalysisSection />
      <PremiumAnalyticsSection />
      <SuccessStorySection link="/schedule-consultation" />
    </>
  );
}

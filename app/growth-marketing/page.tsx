"use client"
import AIAnalysisSection from '@/components/growth-marketing/AI-Analysis'
import AppointmentManagementSection from '@/components/growth-marketing/AppointmentManagementSection'
import BookingIntegrationSection from '@/components/growth-marketing/BookingIntegration'
import ChatbotsAutomationSection from '@/components/growth-marketing/ChatbotsAutomationSection'
import GHeroSection from '@/components/growth-marketing/GHeroSection'
import MobileDevelopmentSection from '@/components/growth-marketing/MobileDevelopment'
import RateOptSection from '@/components/growth-marketing/RateOptSection'
import SuccessStorySection from '@/reusables/SuccessStorySection'
import React from 'react'

export default function page() {
  return (
    <>
    <GHeroSection/>
    <ChatbotsAutomationSection/>
    <MobileDevelopmentSection/>
    <RateOptSection/>
    <BookingIntegrationSection/>
    <AppointmentManagementSection/>
    <AIAnalysisSection/>
    <SuccessStorySection link="/schedule-consultation"/>
    </>
  )
}

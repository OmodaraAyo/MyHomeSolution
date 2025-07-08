"use client"
import AdsSection from '@/components/digital-marketing/AdsSection'
import ContentMarketingSection from '@/components/digital-marketing/ContentMarketingSection'
import DHeroSection from '@/components/digital-marketing/DHeroSection'
import EmailMarketingSection from '@/components/digital-marketing/EmailMarketing'
import LeadGenerationSection from '@/components/digital-marketing/LeadGenerationSection'
import LocalSearchOp from '@/components/digital-marketing/LocalSearchOp'
import PPCManagementSection from '@/components/digital-marketing/PPC-Management'
import SearchEngineSection from '@/components/digital-marketing/SearchEngineSection'
import SocialMediaMarketingSection from '@/components/digital-marketing/SocialMediaMarketing'
import SuccessStorySection from '@/reusables/SuccessStorySection'
import React from 'react'

export default function DigitalMarketingPage() {
  return (
    <>
     <DHeroSection />
     <SearchEngineSection/>
     <PPCManagementSection/>
     <EmailMarketingSection/>
     <SocialMediaMarketingSection/>
     <ContentMarketingSection/>
     <LeadGenerationSection/>
     <AdsSection/>
     <LocalSearchOp/>
     <SuccessStorySection link="/schedule-consultation"/>
    </>
  )
}

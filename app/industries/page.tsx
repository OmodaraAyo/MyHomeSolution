"use client"
import React from 'react'
import AirbnbRentals from '@/components/industries/property-management/airbnbRentals'
import HomeCleaning from '@/components/industries/property-management/home-Cleaning'
import PestControlService from '@/components/industries/property-management/pestControlService'
import LandscapingService from '@/components/industries/property-management/LandscapingService';
import TurnoverService from '@/components/industries/property-management/turnoverService'
import SuccessStorySection from '@/reusables/successStorySection'
import BusinessOwnerTestimonials from '@/reusables/indestries/businessOwnerTestimonials'
import HeroSection8 from '@/reusables/indestries/heroSection8'
import { propertyManagementHeroSectionData } from '@/data/industries'

export default function page() {
  return (
    <>
      <HeroSection8 title={propertyManagementHeroSectionData.title} subTitle={propertyManagementHeroSectionData.subTitle} description={propertyManagementHeroSectionData.description}/>
      <AirbnbRentals/>
      <HomeCleaning/>
      <PestControlService/>
      <LandscapingService/>
      <TurnoverService/>
      <BusinessOwnerTestimonials/>
      <SuccessStorySection link={"/schedule-consultation"}/>
    </>
  )
}

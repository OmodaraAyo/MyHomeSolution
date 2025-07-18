"use client"
import HeroSection8 from '@/components/industries/heroSection8'
import React from 'react'
import AirbnbRentals from '@/components/industries/industry1/airbnbRentals'
import HomeCleaning from '@/components/industries/industry1/home-Cleaning'
import PestControlService from '@/components/industries/industry1/pestControlService'
import LandscapingService from '@/components/industries/industry1/LandscapingService';
import TurnoverService from '@/components/industries/industry1/turnoverService'
import SuccessStorySection from '@/reusables/successStorySection'
import BusinessOwnerTestimonials from '@/reusables/indestries/businessOwnerTestimonials'

export default function page() {
  return (
    <>
      <HeroSection8/>
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

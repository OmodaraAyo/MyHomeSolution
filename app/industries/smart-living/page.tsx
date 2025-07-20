"use client"
import React from 'react'
import SuccessStorySection from '@/reusables/successStorySection'
import BusinessOwnerTestimonials from '@/reusables/indestries/businessOwnerTestimonials'
import HeroSection8 from '@/reusables/indestries/heroSection8'
import { smartLivingData } from '@/data/industries'
import HomeSecurity from '@/components/industries/smart-living/homeSecurity'
import Hvac from '@/components/industries/smart-living/hvac'
import PestControl from '@/components/industries/smart-living/pestControl'

export default function page() {
  return (
    <>
      <HeroSection8 title={smartLivingData.title} subTitle={smartLivingData.subTitle} description={smartLivingData.description}/>
      <HomeSecurity/>
      <Hvac/>
      <PestControl/>
      <BusinessOwnerTestimonials/>
      <SuccessStorySection link={"/schedule-consultation"}/>
    </>
  )
}

//created by Omodara Ayodele
//github: OmodaraAyo

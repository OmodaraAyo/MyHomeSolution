"use client"
import React from 'react'
import SuccessStorySection from '@/reusables/successStorySection'
import BusinessOwnerTestimonials from '@/reusables/indestries/businessOwnerTestimonials'
import HeroSection8 from '@/reusables/indestries/heroSection8'
import { homeDesignAndAestheticEnhancementData } from '@/data/industries'
import InteriorDesigner from '@/components/industries/home-design-aesthetic-enhancement/interiorDesigners'
import FurnitureMaker from '@/components/industries/home-design-aesthetic-enhancement/furnitureMakers'

export default function page() {
  return (
    <>
      <HeroSection8 title={homeDesignAndAestheticEnhancementData.title} subTitle={homeDesignAndAestheticEnhancementData.subTitle} description={homeDesignAndAestheticEnhancementData.description}/>
      <InteriorDesigner/>
      <FurnitureMaker/>
      <BusinessOwnerTestimonials/>
      <SuccessStorySection link={"/schedule-consultation"}/>
    </>
  )
}

//created by Omodara Ayodele
//github: OmodaraAyo

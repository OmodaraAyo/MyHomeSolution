"use client"
import React from 'react'
import SuccessStorySection from '@/reusables/successStorySection'
import BusinessOwnerTestimonials from '@/reusables/indestries/businessOwnerTestimonials'
import HeroSection8 from '@/reusables/indestries/heroSection8'
import { homeRenovationAndConstructionServicesData } from '@/data/industries'
import Remodeling from '@/components/industries/home-renovation-construction-services/remodeling'
import RoofingContractor from '@/components/industries/home-renovation-construction-services/roofingContractors'
import FlooringContractor from '@/components/industries/home-renovation-construction-services/flooringContractors'

export default function page() {
  return (
    <>
      <HeroSection8 title={homeRenovationAndConstructionServicesData.title} subTitle={homeRenovationAndConstructionServicesData.subTitle} description={homeRenovationAndConstructionServicesData.description}/>
      <Remodeling/>
      <RoofingContractor/>
      <FlooringContractor/>
      <BusinessOwnerTestimonials/>
      <SuccessStorySection link={"/schedule-consultation"}/>
    </>
  )
}

//created by Omodara Ayodele
//github: OmodaraAyo

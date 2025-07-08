"use client"
import BHeroSection from '@/components/brand-scaling/BHeroSection'
import BrandDesignSection from '@/components/brand-scaling/BrandDesign'
import BrandStrategySection from '@/components/brand-scaling/BrandStrategy'
import OnlineOptSection from '@/components/brand-scaling/OnlineOpt'
import PrServiceSection from '@/components/brand-scaling/PrService'
import ReviewsManagementSection from '@/components/brand-scaling/ReviewsManagementSection'
import UXDesignSection from '@/components/brand-scaling/UXDesign'
import VideoTestimonialSection from '@/components/brand-scaling/VideoTestimonialSection'
import WebsiteDesignSection from '@/components/brand-scaling/WebsiteDesign'
import SuccessStorySection from '@/reusables/SuccessStorySection'
import React from 'react'

export default function BrandScaling() {
  return (
    <>
      <BHeroSection/>
      <BrandStrategySection/>
      <WebsiteDesignSection/>
      <BrandDesignSection/>
      <UXDesignSection/>
      <OnlineOptSection/>
      <ReviewsManagementSection/>
      <VideoTestimonialSection/>
      <PrServiceSection/>
      <SuccessStorySection link="/schedule-consultation"/>
    </>
  )
}

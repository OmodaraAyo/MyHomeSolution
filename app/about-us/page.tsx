"use client"
import AboutUsSection from '@/components/about-us/AboutUs'
import CommonQuestionsSection from '@/components/about-us/CommonQuestionSection'
import HeroSection4 from '@/components/about-us/HeroSection4'
import MeetTheTeamSection from '@/components/about-us/MeetTheTeam'
import FoundersTestimonialSection from '@/reusables/FoundersTestimonial'
import LetsTalk from '@/reusables/LetsTalk'
import React from 'react'

export default function AboutUs() {
  return (
    <>
      <HeroSection4/>
      <AboutUsSection/>
      <MeetTheTeamSection/>
      <CommonQuestionsSection/>
      <FoundersTestimonialSection/>
      <LetsTalk/>
    </>
  )
}

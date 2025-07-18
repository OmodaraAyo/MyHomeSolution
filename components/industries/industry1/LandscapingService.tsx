import { landscapingSeviceData } from '@/data/industries';
import RentalsSection from '@/reusables/indestries/rentalSection'
import React from 'react'

export default function LandscapingService() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={landscapingSeviceData.bgPrimaryColor}
        bgSecondaryColor={landscapingSeviceData.bgSecondaryColor}
        componentTitle={landscapingSeviceData.componentTitle}
        description1={landscapingSeviceData.description1}
        description2={landscapingSeviceData.description2}
        testimonial={landscapingSeviceData.testimonial}
        authorName={landscapingSeviceData.authorName}
        authorPosition={landscapingSeviceData.authorPosition}
        gridImgBgPrimarycolor={landscapingSeviceData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={landscapingSeviceData.gridImgBgSecondarycolor}
        gridData={landscapingSeviceData.gridData}
        approachData={landscapingSeviceData.approachComponentData}
      />
    </>
  );
}

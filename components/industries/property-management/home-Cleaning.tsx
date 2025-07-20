import { homeCleaningData } from '@/data/industries';
import RentalsSection from '@/reusables/indestries/rentalSection';
import React from 'react'

export default function HomeCleaning() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={homeCleaningData.bgPrimaryColor}
        bgSecondaryColor={homeCleaningData.bgSecondaryColor}
        componentTitle={homeCleaningData.componentTitle}
        description1={homeCleaningData.description1}
        description2={homeCleaningData.description2}
        testimonial={homeCleaningData.testimonial}
        authorName={homeCleaningData.authorName}
        authorPosition={homeCleaningData.authorPosition}
        gridImgBgPrimarycolor={homeCleaningData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={homeCleaningData.gridImgBgSecondarycolor}
        gridData={homeCleaningData.gridData}
        approachData={homeCleaningData.approachComponentData}
      />
    </>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo

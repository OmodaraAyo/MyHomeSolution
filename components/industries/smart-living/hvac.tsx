import { hvacData } from '@/data/industries';
import RentalsSection from '@/reusables/indestries/rentalSection';
import React from 'react'

export default function Hvac() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={hvacData.bgPrimaryColor}
        bgSecondaryColor={hvacData.bgSecondaryColor}
        componentTitle={hvacData.componentTitle}
        description1={hvacData.description1}
        description2={hvacData.description2}
        testimonial={hvacData.testimonial}
        authorName={hvacData.authorName}
        authorPosition={hvacData.authorPosition}
        gridImgBgPrimarycolor={hvacData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={hvacData.gridImgBgSecondarycolor}
        gridData={hvacData.gridData}
        approachData={hvacData.approachComponentData}
      />
    </>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo

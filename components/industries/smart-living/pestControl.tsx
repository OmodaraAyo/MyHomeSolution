import { pestControlData } from '@/data/industries'
import RentalsSection from '@/reusables/indestries/rentalSection'
import React from 'react'

export default function PestControl() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={pestControlData.bgPrimaryColor}
        bgSecondaryColor={pestControlData.bgSecondaryColor}
        componentTitle={pestControlData.componentTitle}
        description1={pestControlData.description1}
        description2={pestControlData.description2}
        testimonial={pestControlData.testimonial}
        authorName={pestControlData.authorName}
        authorPosition={pestControlData.authorPosition}
        gridImgBgPrimarycolor={pestControlData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={pestControlData.gridImgBgSecondarycolor}
        gridData={pestControlData.gridData}
        approachData={pestControlData.approachComponentData}
      />
    </>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo

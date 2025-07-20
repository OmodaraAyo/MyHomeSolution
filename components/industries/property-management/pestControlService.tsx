import { pestControlServiceData } from '@/data/industries'
import RentalsSection from '@/reusables/indestries/rentalSection'
import React from 'react'

export default function PestControlService() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={pestControlServiceData.bgPrimaryColor}
        bgSecondaryColor={pestControlServiceData.bgSecondaryColor}
        componentTitle={pestControlServiceData.componentTitle}
        description1={pestControlServiceData.description1}
        description2={pestControlServiceData.description2}
        testimonial={pestControlServiceData.testimonial}
        authorName={pestControlServiceData.authorName}
        authorPosition={pestControlServiceData.authorPosition}
        gridImgBgPrimarycolor={pestControlServiceData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={pestControlServiceData.gridImgBgSecondarycolor}
        gridData={pestControlServiceData.gridData}
        approachData={pestControlServiceData.approachComponentData}
      />
    </>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo

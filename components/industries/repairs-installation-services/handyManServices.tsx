import { handyManServicesData } from '@/data/industries'
import RentalsSection from '@/reusables/indestries/rentalSection'
import React from 'react'


export default function HandyManServices() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={handyManServicesData.bgPrimaryColor}
        bgSecondaryColor={handyManServicesData.bgSecondaryColor}
        componentTitle={handyManServicesData.componentTitle}
        description1={handyManServicesData.description1}
        description2={handyManServicesData.description2}
        testimonial={handyManServicesData.testimonial}
        authorName={handyManServicesData.authorName}
        authorPosition={handyManServicesData.authorPosition}
        gridImgBgPrimarycolor={handyManServicesData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={handyManServicesData.gridImgBgSecondarycolor}
        gridData={handyManServicesData.gridData}
        approachData={handyManServicesData.approachComponentData}
      />
    </>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo
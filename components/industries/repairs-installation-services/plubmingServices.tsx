import { plubmingServicesData } from '@/data/industries'
import RentalsSection from '@/reusables/indestries/rentalSection'
import React from 'react'

export default function PlubmingServices() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={plubmingServicesData.bgPrimaryColor}
        bgSecondaryColor={plubmingServicesData.bgSecondaryColor}
        componentTitle={plubmingServicesData.componentTitle}
        description1={plubmingServicesData.description1}
        description2={plubmingServicesData.description2}
        testimonial={plubmingServicesData.testimonial}
        authorName={plubmingServicesData.authorName}
        authorPosition={plubmingServicesData.authorPosition}
        gridImgBgPrimarycolor={plubmingServicesData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={plubmingServicesData.gridImgBgSecondarycolor}
        gridData={plubmingServicesData.gridData}
        approachData={plubmingServicesData.approachComponentData}
      />
    </>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo

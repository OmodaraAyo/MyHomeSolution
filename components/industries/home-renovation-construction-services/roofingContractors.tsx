import { roofingContractorsData } from '@/data/industries';
import RentalsSection from '@/reusables/indestries/rentalSection';
import React from 'react'

export default function RoofingContractor() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={roofingContractorsData.bgPrimaryColor}
        bgSecondaryColor={roofingContractorsData.bgSecondaryColor}
        componentTitle={roofingContractorsData.componentTitle}
        description1={roofingContractorsData.description1}
        description2={roofingContractorsData.description2}
        testimonial={roofingContractorsData.testimonial}
        authorName={roofingContractorsData.authorName}
        authorPosition={roofingContractorsData.authorPosition}
        gridImgBgPrimarycolor={roofingContractorsData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={roofingContractorsData.gridImgBgSecondarycolor}
        gridData={roofingContractorsData.gridData}
        approachData={roofingContractorsData.approachComponentData}
      />
    </>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo

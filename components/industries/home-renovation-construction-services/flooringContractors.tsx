import { flooringContractorsData } from '@/data/industries'
import RentalsSection from '@/reusables/indestries/rentalSection'
import React from 'react'

export default function FlooringContractor() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={flooringContractorsData.bgPrimaryColor}
        bgSecondaryColor={flooringContractorsData.bgSecondaryColor}
        componentTitle={flooringContractorsData.componentTitle}
        description1={flooringContractorsData.description1}
        description2={flooringContractorsData.description2}
        testimonial={flooringContractorsData.testimonial}
        authorName={flooringContractorsData.authorName}
        authorPosition={flooringContractorsData.authorPosition}
        gridImgBgPrimarycolor={flooringContractorsData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={flooringContractorsData.gridImgBgSecondarycolor}
        gridData={flooringContractorsData.gridData}
        approachData={flooringContractorsData.approachComponentData}
      />
    </>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo

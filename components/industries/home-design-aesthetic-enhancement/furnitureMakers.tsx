import { furnitureMakerData } from '@/data/industries';
import RentalsSection from '@/reusables/indestries/rentalSection';
import React from 'react'

export default function FurnitureMaker() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={furnitureMakerData.bgPrimaryColor}
        bgSecondaryColor={furnitureMakerData.bgSecondaryColor}
        componentTitle={furnitureMakerData.componentTitle}
        description1={furnitureMakerData.description1}
        description2={furnitureMakerData.description2}
        testimonial={furnitureMakerData.testimonial}
        authorName={furnitureMakerData.authorName}
        authorPosition={furnitureMakerData.authorPosition}
        gridImgBgPrimarycolor={furnitureMakerData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={furnitureMakerData.gridImgBgSecondarycolor}
        gridData={furnitureMakerData.gridData}
        approachData={furnitureMakerData.approachComponentData}
      />
    </>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo

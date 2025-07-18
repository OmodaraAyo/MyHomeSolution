import { turnoverServiceData } from '@/data/industries'
import RentalsSection from '@/reusables/indestries/rentalSection'
import React from 'react'

export default function TurnoverService() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={turnoverServiceData.bgPrimaryColor}
        bgSecondaryColor={turnoverServiceData.bgSecondaryColor}
        componentTitle={turnoverServiceData.componentTitle}
        description1={turnoverServiceData.description1}
        description2={turnoverServiceData.description2}
        testimonial={turnoverServiceData.testimonial}
        authorName={turnoverServiceData.authorName}
        authorPosition={turnoverServiceData.authorPosition}
        gridImgBgPrimarycolor={turnoverServiceData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={turnoverServiceData.gridImgBgSecondarycolor}
        gridData={turnoverServiceData.gridData}
        approachData={turnoverServiceData.approachComponentData}
      />
    </>
  );
}

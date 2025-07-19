import { electricalServicesData } from '@/data/industries'
import RentalsSection from '@/reusables/indestries/rentalSection'
import React from 'react'

export default function ElectricalServices() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={electricalServicesData.bgPrimaryColor}
        bgSecondaryColor={electricalServicesData.bgSecondaryColor}
        componentTitle={electricalServicesData.componentTitle}
        description1={electricalServicesData.description1}
        description2={electricalServicesData.description2}
        testimonial={electricalServicesData.testimonial}
        authorName={electricalServicesData.authorName}
        authorPosition={electricalServicesData.authorPosition}
        gridImgBgPrimarycolor={electricalServicesData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={electricalServicesData.gridImgBgSecondarycolor}
        gridData={electricalServicesData.gridData}
        approachData={electricalServicesData.approachComponentData}
      />
    </>
  );
}

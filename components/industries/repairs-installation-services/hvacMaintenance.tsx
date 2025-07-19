import { hvacMaintenanceData } from '@/data/industries'
import RentalsSection from '@/reusables/indestries/rentalSection'
import React from 'react'

export default function HvacMaintenance() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={hvacMaintenanceData.bgPrimaryColor}
        bgSecondaryColor={hvacMaintenanceData.bgSecondaryColor}
        componentTitle={hvacMaintenanceData.componentTitle}
        description1={hvacMaintenanceData.description1}
        description2={hvacMaintenanceData.description2}
        testimonial={hvacMaintenanceData.testimonial}
        authorName={hvacMaintenanceData.authorName}
        authorPosition={hvacMaintenanceData.authorPosition}
        gridImgBgPrimarycolor={hvacMaintenanceData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={hvacMaintenanceData.gridImgBgSecondarycolor}
        gridData={hvacMaintenanceData.gridData}
        approachData={hvacMaintenanceData.approachComponentData}
      />
    </>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo

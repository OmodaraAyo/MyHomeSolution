import { appliancesInstallationData } from '@/data/industries'
import RentalsSection from '@/reusables/indestries/rentalSection'
import React from 'react'


export default function AppliancesInstallation() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={appliancesInstallationData.bgPrimaryColor}
        bgSecondaryColor={appliancesInstallationData.bgSecondaryColor}
        componentTitle={appliancesInstallationData.componentTitle}
        description1={appliancesInstallationData.description1}
        description2={appliancesInstallationData.description2}
        testimonial={appliancesInstallationData.testimonial}
        authorName={appliancesInstallationData.authorName}
        authorPosition={appliancesInstallationData.authorPosition}
        gridImgBgPrimarycolor={appliancesInstallationData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={appliancesInstallationData.gridImgBgSecondarycolor}
        gridData={appliancesInstallationData.gridData}
        approachData={appliancesInstallationData.approachComponentData}
      />
    </>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo
import { homeSecurityData } from "@/data/industries";
import RentalsSection from "@/reusables/indestries/rentalSection";
import React from "react";

export default function HomeSecurity() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={homeSecurityData.bgPrimaryColor}
        bgSecondaryColor={homeSecurityData.bgSecondaryColor}
        componentTitle={homeSecurityData.componentTitle}
        description1={homeSecurityData.description1}
        description2={homeSecurityData.description2}
        testimonial={homeSecurityData.testimonial}
        authorName={homeSecurityData.authorName}
        authorPosition={homeSecurityData.authorPosition}
        gridImgBgPrimarycolor={homeSecurityData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={homeSecurityData.gridImgBgSecondarycolor}
        gridData={homeSecurityData.gridData}
        approachData={homeSecurityData.approachComponentData}
      />
    </>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo
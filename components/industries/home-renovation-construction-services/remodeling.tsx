import { remodelingData } from "@/data/industries";
import RentalsSection from "@/reusables/indestries/rentalSection";
import React from "react";

export default function Remodeling() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={remodelingData.bgPrimaryColor}
        bgSecondaryColor={remodelingData.bgSecondaryColor}
        componentTitle={remodelingData.componentTitle}
        description1={remodelingData.description1}
        description2={remodelingData.description2}
        testimonial={remodelingData.testimonial}
        authorName={remodelingData.authorName}
        authorPosition={remodelingData.authorPosition}
        gridImgBgPrimarycolor={remodelingData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={remodelingData.gridImgBgSecondarycolor}
        gridData={remodelingData.gridData}
        approachData={remodelingData.approachComponentData}
      />
    </>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo
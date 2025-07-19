import { airbnbRentalsData } from "@/data/industries";
import RentalsSection from "@/reusables/indestries/rentalSection";
import React from "react";

export default function AirbnbRentals() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={airbnbRentalsData.bgPrimaryColor}
        bgSecondaryColor={airbnbRentalsData.bgSecondaryColor}
        componentTitle={airbnbRentalsData.componentTitle}
        description1={airbnbRentalsData.description1}
        description2={airbnbRentalsData.description2}
        testimonial={airbnbRentalsData.testimonial}
        authorName={airbnbRentalsData.authorName}
        authorPosition={airbnbRentalsData.authorPosition}
        gridImgBgPrimarycolor={airbnbRentalsData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={airbnbRentalsData.gridImgBgSecondarycolor}
        gridData={airbnbRentalsData.gridData}
        approachData={airbnbRentalsData.approachComponentData}
      />
    </>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo
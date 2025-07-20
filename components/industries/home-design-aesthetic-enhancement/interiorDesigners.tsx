import { interiorDesignersData } from "@/data/industries";
import RentalsSection from "@/reusables/indestries/rentalSection";
import React from "react";

export default function InteriorDesigner() {
  return (
    <>
      <RentalsSection
        bgPrimaryColor={interiorDesignersData.bgPrimaryColor}
        bgSecondaryColor={interiorDesignersData.bgSecondaryColor}
        componentTitle={interiorDesignersData.componentTitle}
        description1={interiorDesignersData.description1}
        description2={interiorDesignersData.description2}
        testimonial={interiorDesignersData.testimonial}
        authorName={interiorDesignersData.authorName}
        authorPosition={interiorDesignersData.authorPosition}
        gridImgBgPrimarycolor={interiorDesignersData.gridImgBgPrimarycolor}
        gridImgBgSecondarycolor={interiorDesignersData.gridImgBgSecondarycolor}
        gridData={interiorDesignersData.gridData}
        approachData={interiorDesignersData.approachComponentData}
      />
    </>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo
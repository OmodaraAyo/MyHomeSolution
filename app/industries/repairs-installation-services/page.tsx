"use client";
import AppliancesInstallation from "@/components/industries/repairs-installation-services/appliancesInstallation";
import ElectricalServices from "@/components/industries/repairs-installation-services/electricalServices";
import HandyManServices from "@/components/industries/repairs-installation-services/handyManServices";
import HvacMaintenance from "@/components/industries/repairs-installation-services/hvacMaintenance";
import PlubmingServices from "@/components/industries/repairs-installation-services/plubmingServices";
import { rPAIServicesData } from "@/data/industries";
import BusinessOwnerTestimonials from "@/reusables/indestries/businessOwnerTestimonials";
import HeroSection8 from "@/reusables/indestries/heroSection8";
import SuccessStorySection from "@/reusables/successStorySection";
import React from "react";

export default function RepairServices() {
  return (
    <>
      <HeroSection8
        title={rPAIServicesData.title}
        subTitle={rPAIServicesData.subTitle}
        description={rPAIServicesData.description}
      />
      <HandyManServices />
      <PlubmingServices/>
      <ElectricalServices/>
      <HvacMaintenance/>
      <AppliancesInstallation/>
      <BusinessOwnerTestimonials/>
            <SuccessStorySection link={"/schedule-consultation"}/>
    </>
  );
}

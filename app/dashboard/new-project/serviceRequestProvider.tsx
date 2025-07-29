"use client";
import ServiceRequestContext from "@/app/dashboard/new-project/context/serviceRequestContext";
import React, { ReactNode, useState } from "react";
import { ServiceRequestContextForm } from "./types/type";

export default function ServiceRequestProvider({ children,}: { children: ReactNode}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ServiceRequestContextForm>({});
  const totalSteps = [1,2,3,4];

  const goToStep = (step: number) => setStep(step);
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateFormData = (data: Partial<ServiceRequestContextForm>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };
  return (
    <ServiceRequestContext.Provider value={{ step, totalSteps, goToStep, nextStep, prevStep, formData, updateFormData }}>
      {children}
    </ServiceRequestContext.Provider>
  );
}


//created by Omodara Ayodele
//github: OmodaraAyo

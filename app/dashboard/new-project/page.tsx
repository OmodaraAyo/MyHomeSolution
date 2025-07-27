"use client"
import Step1 from "@/components/dashboard/new-project/step1";
import React from "react";
import { useServiceRequest } from "./hooks/useServiceRequestContext";

export default function NewProject() {
  const { step } = useServiceRequest();
  return (
    <section className="flex border flex-col justify-center items-center">
      <h1>Submit New Service Request</h1>
      {step === 1 && <Step1 />}
    </section>
  );
}

"use client";
import Step1 from "@/components/dashboard/new-project/step1";
import React from "react";
import { useServiceRequest } from "./hooks/useServiceRequestContext";

export default function NewProject() {
  const { step, totalSteps } = useServiceRequest();

  return (
    <section className="container mx-auto w-full max-w-screen-sm">
      <div className="flex flex-col p-5">
        <div className="tracking-wide">
          <h1 className="text-2xl font-semibold" style={{ fontFamily: "Sora, system-ui, sans-serifs" }}>
            Submit New Service Request
          </h1>
          <p className="text-base font-normal text-[#8E8E8E] mt-1">
            Easily request new services in just a few steps
          </p>
        </div>

        {/* progress bar */}
        <div className="flex items-center justify-between my-5 overflow-hidden">
          {totalSteps.map((stepNumber, index, steps) => {
            const isActive = step === stepNumber;
            const isCompleted = step > stepNumber;
            const isLast = index === steps.length - 1; 
            return (
              <div key={stepNumber} className="flex items-center">
              <div className={`flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium ${isActive ? "bg-[#D1DCFF] text-[#0A163B]" : "bg-[#FBFBFB] text-[#606060]"}`}>
                {stepNumber}
              </div>
              {!isLast && (
                <div className="w-[9rem] h-0.5 bg-[#E8E8E8] relative mx-2 overflow-hidden">
                  <span className={`block h-full transition-all duration-300 ease-in-out ${ isCompleted ? "bg-[#1C3FAA] w-full" : isActive ? "bg-[#1C3FAA] w-7" : "w-0"}`}></span>
                </div>
              )}
            </div>
            )})}
        </div>

        {/* Step Content */}
        {step === 1 && <Step1 />}
      </div>
    </section>
  );
}

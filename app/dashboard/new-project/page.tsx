"use client";
import Step1 from "@/components/dashboard/new-project/step1";
import React, { useEffect } from "react";
import Step2 from "@/components/dashboard/new-project/step2";
import Step3 from "@/components/dashboard/new-project/step3";
import { useServiceRequestStore } from "./store/useServiceRequestStore";
import Step4 from "@/components/dashboard/new-project/step4";

export default function NewProject() {
  const { step, totalSteps, _hasHydrated, setHasHydrated } = useServiceRequestStore();

  useEffect(() => {
    if (!_hasHydrated) {
      setHasHydrated(true);
    }
  }, [_hasHydrated, setHasHydrated]);

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

        {!_hasHydrated ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1C3FAA]"></div>
          </div>
        ) : (
          <>
            {/* Step Content*/}
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            {step === 4 && <Step4 />}
          </>
        )}
      </div>
    </section>
  );
}


//created by Omodara Ayodele
//github: OmodaraAyo
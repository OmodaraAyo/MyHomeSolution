"use client"

import type React from "react"
import { useServiceRequestStore } from "@/app/dashboard/new-project/store/useServiceRequestStore"
import CustomSelect from "../../../reusables/customSelect"
import { ChevronLeft, Calendar } from "lucide-react"
import { useState } from "react"
import { budgetOptions } from "@/data/dashboard"


export default function Step4() {
  const { formData, updateFormData, prevStep } = useServiceRequestStore()
  const [errors, setErrors] = useState<{
    desiredStartDate?: string
    expectedDelivery?: string
    budgetRange?: string
  }>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation form data
    const newErrors: { desiredStartDate?: string, expectedDelivery?: string, budgetRange?: string } = {}

    if (!formData.desiredStartDate) {
      newErrors.desiredStartDate = "Desired start date is required"
    }
    if (!formData.expectedDelivery) {
      newErrors.expectedDelivery = "Expected delivery date is required"
    }
    if (!formData.budgetRange) {
      newErrors.budgetRange = "Budget range is required"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      alert("Service request submitted successfully!")
    }
  }

  const handleDateChange = (field: string, value: string) => {
    updateFormData({ [field]: value })
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleBudgetChange = (value: string) => {
    updateFormData({ budgetRange: value })
    if (errors.budgetRange) {
      setErrors((prev) => ({ ...prev, budgetRange: undefined }))
    }
  }

  return (
    <section>
      {/* Back Button */}
      <button
        type="button"
        onClick={prevStep}
        className="flex items-center gap-1 text-[#606060] hover:text-[#4A4A4A] mb-6 transition-colors duration-200 bg-[#F3F3F3] px-3 py-1 rounded-full text-[0.86rem] justify-center cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>

      <h2 className="text-lg font-semibold text-[#4A4A4A] mb-5">Timeline & Budget</h2>

      <form onSubmit={handleSubmit} className="flex flex-col w-full text-[#606060] gap-4">
        {/* Date Fields Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Desired Start Date */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-normal">
              Desired Start Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                value={formData.desiredStartDate || ""}
                onChange={(e) => handleDateChange("desiredStartDate", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1C3FAA] focus:border-transparent cursor-pointer
                calendar-indicator-hide"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            {errors.desiredStartDate && <span className="text-red-500 text-sm">{errors.desiredStartDate}</span>}
          </div>

          {/* Expected Delivery */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-normal">
              Expected Delivery <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                value={formData.expectedDelivery || ""}
                onChange={(e) => handleDateChange("expectedDelivery", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1C3FAA] focus:border-transparent cursor-pointer
                calendar-indicator-hide"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            {errors.expectedDelivery && <span className="text-red-500 text-sm">{errors.expectedDelivery}</span>}
          </div>
        </div>

        {/* Budget Range */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-normal">
            Budget Range <span className="text-red-500">*</span>
          </label>
          <CustomSelect
            value={formData.budgetRange || ""}
            onChange={handleBudgetChange}
            options={budgetOptions}
            placeholder="Select your budget range"
          />
          {errors.budgetRange && <span className="text-red-500 text-sm">{errors.budgetRange}</span>}
          <p className="text-sm text-gray-500 mt-1">Not sure about budget? Select a range — we&apos;ll tailor the plan</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#1C3FAA] hover:bg-[#325BDE] text-white px-4 py-3 rounded-lg mt-5 cursor-pointer transition-colors duration-200 font-medium"
        >
          Submit Request
        </button>
      </form>
    </section>
  )
}

//created by Omodara Ayodele
//github: OmodaraAyo

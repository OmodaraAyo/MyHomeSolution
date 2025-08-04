"use client"

import type React from "react"
import CustomSelect from "../../../reusables/customSelect"
import { categoryOptions } from "@/data/dashboard"
import { useState, useEffect } from "react"
import { useServiceRequestStore } from "@/app/dashboard/new-project/store/useServiceRequestStore"

export default function Step1() {
  const { formData, updateFormData, nextStep } = useServiceRequestStore()
  const [showSuggestions, setShowSuggestion] = useState(true)

  useEffect(() => {
    if (formData.serviceCategory) {
      setShowSuggestion(false)
    }
  }, [formData.serviceCategory])
  const [errors, setErrors] = useState<{ serviceCategory?: string; subCategory?: string }>({})

  const handleCategorySelect = (option: string) => {
    updateFormData({ serviceCategory: option })
    setShowSuggestion(false)
    if (errors.serviceCategory) {
      setErrors((prev) => ({ ...prev, serviceCategory: undefined }))
    }
  }

  const handleSubCategorySelect = (option: string) => {
    updateFormData({ subCategory: option })
    if (errors.subCategory) {
      setErrors((prev) => ({ ...prev, subCategory: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form data
    const newErrors: { serviceCategory?: string; subCategory?: string } = {}

    if (!formData.serviceCategory) {
      newErrors.serviceCategory = "Service Category is required"
    }

    if (!formData.subCategory) {
      newErrors.subCategory = "Sub Category is required"
    }

    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      nextStep()
    }
  }

  return (
    <section>
      <h2 className="text-lg font-semibold text-[#4A4A4A] mb-5">Service Category</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-full text-[#606060] gap-2">
        {/* Category Dropdown */}
        <label className="text-lg font-normal">
          Service Category <span className="text-red-500">*</span>
        </label>
        <CustomSelect
          value={formData.serviceCategory || ""}
          onChange={handleCategorySelect}
          options={categoryOptions}
        />
        {errors.serviceCategory && <span className="text-red-500 text-sm mt-1">{errors.serviceCategory}</span>}

        {showSuggestions && (
          <div className="flex gap-3 items-center text-[0.94rem]">
            <h1 className="whitespace-nowrap">Suggestions:</h1>
            <ul className="flex gap-2 flex-wrap">
              {categoryOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleCategorySelect(option)}
                  className="border border-gray-300 px-2 py-1.5 rounded-full text-xs font-normal text-[#606060] cursor-pointer hover:bg-blue-100 transition-all duration-300 ease-in-out"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Sub Category Dropdown */}
        <label className="text-lg font-normal mt-3">
          Sub Category <span className="text-red-500">*</span>
        </label>
        <CustomSelect value={formData.subCategory || ""} onChange={handleSubCategorySelect} options={categoryOptions} />
        {errors.subCategory && <span className="text-red-500 text-sm mt-1">{errors.subCategory}</span>}

        <button
          type="submit"
          className="bg-[#1C3FAA] hover:bg-[#325BDE] text-white px-4 py-3 rounded-lg mt-5 cursor-pointer transition-colors duration-200"
        >
          Continue
        </button>
      </form>
    </section>
  )
}

//created by Omodara Ayodele
//github: OmodaraAyo

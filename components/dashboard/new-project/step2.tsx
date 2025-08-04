"use client";

import type React from "react";
import { useState } from "react";

import CustomSelect from "../../../reusables/customSelect";
import { ChevronLeft } from "lucide-react";
import { industryOptions } from "@/data/dashboard";
import { useServiceRequestStore } from "@/app/dashboard/new-project/store/useServiceRequestStore";

export default function Step2() {
  const { formData, updateFormData, nextStep, prevStep } = useServiceRequestStore();
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});

  const handleInputChange = ( field: "title" | "description", value: string ) => {
    updateFormData({ [field]: value });
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { title?: string; description?: string } = {};

    if (!formData.title) {
      newErrors.title = "Project Title is required";
    }

    if (!formData.description) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      nextStep();
    }
  };

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

      <h2 className="text-lg font-semibold text-[#4A4A4A] mb-5">
        Project Details
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full text-[#606060] gap-4"
      >
        {/* Project Title */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-normal">
            Project Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.title || ""}
            onChange={(e) => handleInputChange("title", e.target.value)}
            placeholder="Enter project name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1C3FAA] focus:border-transparent"
          />
          {errors.title && (
            <span className="text-red-500 text-sm mt-1">{errors.title}</span>
          )}
        </div>

        {/* Business Industry */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-normal">Business Industry</label>
          <CustomSelect
            value={formData.businessIndustry || ""}
            onChange={(option) => updateFormData({ businessIndustry: option })}
            options={industryOptions}
            placeholder="Select your industry"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-normal">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.description || ""}
            onChange={(e) =>
              handleInputChange("description", e.target.value)
            }
            placeholder="Enter your goals, challenges etc."
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-[#1C3FAA] focus:border-transparent"
          />
          {errors.description && (
            <span className="text-red-500 text-sm mt-1">
              {errors.description}
            </span>
          )}
        </div>

        {/* Existing URL */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-normal">Existing URL (if any)</label>
          <input
            type="url"
            value={formData.existingUrl || ""}
            onChange={(e) => updateFormData({ existingUrl: e.target.value })}
            placeholder="Enter existing project link"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1C3FAA] focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="bg-[#1C3FAA] hover:bg-[#325BDE] text-white px-4 py-3 rounded-lg mt-5 cursor-pointer transition-colors duration-200"
        >
          Continue
        </button>
      </form>
    </section>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo

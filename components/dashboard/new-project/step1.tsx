import { useServiceRequest } from "@/app/dashboard/new-project/hooks/useServiceRequestContext";
import CustomSelect from "../../../reusables/customSelect";
import { categoryOptions } from "@/data/dashboard";
import { useState } from "react";

export default function Step1() {
  const { formData, updateFormData, nextStep } = useServiceRequest();
  const [ showSuggestions, setShowSuggestion ] = useState(true);

  const handleCategorySelect = (option: string) => {
    updateFormData({ serviceCategory: option });
    setShowSuggestion(false);
  };

  return (
    <section>
      <h2 className="text-lg font-semibold text-[#4A4A4A] mb-5">Service Category</h2>
      <form onSubmit={(e) => { e.preventDefault(); nextStep()}} className="flex flex-col w-full text-[#606060] gap-2">
        {/* Category Dropdown */}
        <label className="text-lg font-normal">Service Category *</label>
        <CustomSelect value={formData.serviceCategory} onChange={handleCategorySelect} options={categoryOptions}/>
        {showSuggestions && (
          <div className="flex gap-3 items-center text-[0.94rem]">
            <h1 className="whitespace-nowrap">Suggestions:</h1>
            <ul className="flex gap-2 flex-wrap">
              {categoryOptions.map((option, index) => (
                    <li key={index} onClick={() => handleCategorySelect(option)} className="border border-gray-300 px-2 py-1.5 rounded-full text-xs font-normal text-[#606060] cursor-pointer hover:bg-blue-100 transition-all duration-300 ease-in-out">{option}</li>
                ))
              }
            </ul>
          </div>
          )}
   
        {/* Sub Category Dropdown */}
        <label className="text-lg font-normal mt-3">Sub Category *</label>
        <CustomSelect value={formData.subCategory} onChange={(option) => updateFormData({ subCategory: option })} options={categoryOptions}/>

        <button type="submit" className="bg-[#1C3FAA] hover:bg-[#325BDE] text-white px-4 py-3 rounded-lg mt-5 cursor-pointer">Continue</button>
      </form>
    </section>
  );
}

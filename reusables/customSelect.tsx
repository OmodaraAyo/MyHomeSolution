import { useEffect, useRef, useState } from "react";
import { ChevronDown } from 'lucide-react';
import { CustomSelectProps } from "./types/types";

export default function CustomSelect({ value, onChange, options, placeholder= "Select a category"}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
        if(containerRef.current && !containerRef.current.contains(e.target as Node)){
            setIsOpen(false);
        }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [])

  const toggleDropDown = () => setIsOpen((prev) => !prev);
  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  }

  return (
    <div ref={containerRef} className="relative w-full mb-1">
        <button type="button" onClick={toggleDropDown} className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 flex justify-between items-center">
            <span className={value ? "" : "text-gray-400"}>{value || placeholder}</span>
            <ChevronDown className={`w-6 h-6 text-[#787878] transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180": ""}`}/>
        </button>

        {/** Dropdown data */}
        {isOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {
                        options.map((option, index) => (
                            <li key={index} onClick={() => handleSelect(option)} className={`px-4 py-2 cursor-pointer text-gray-700 hover:bg-blue-100 transition duration-300 ease-in-out ${value === option? "bg-blue-50 font-medium": ""}`}>
                                {option}
                            </li>
                        ))
                    }
                </ul>
            )
        }
    </div>
  );
}

//created by Omodara Ayodele
//github: OmodaraAyo
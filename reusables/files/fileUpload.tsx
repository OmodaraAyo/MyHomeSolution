"use client"

import type React from "react"
import { Upload } from "lucide-react"
import { useRef, useCallback } from "react"
import { FileUploadProps } from "../types/types"


export default function FileUpload({ onFilesSelected, accept, dragActive, onDragStateChange }: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (e.type === "dragenter" || e.type === "dragover") {
        onDragStateChange(true)
      } else if (e.type === "dragleave") {
        onDragStateChange(false)
      }
    },
    [onDragStateChange],
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      onDragStateChange(false)

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        onFilesSelected(e.dataTransfer.files)
      }
    },
    [onFilesSelected, onDragStateChange],
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files && files.length > 0) {
        onFilesSelected(files)
      }
    },
    [onFilesSelected],
  )

  const onButtonClick = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }, [])

  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-normal">
        Attach files <span className="text-red-500">*</span>
      </label>

      <input ref={fileInputRef} type="file" multiple onChange={handleChange} accept={accept} className="hidden" />

      <div
        className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors duration-200 cursor-pointer ${
          dragActive ? "border-[#1C3FAA] bg-blue-50" : "border-gray-300 bg-[#F8F9FF]"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <div className="flex flex-col items-center gap-2">
          <Upload className="w-8 h-8 text-gray-400" />
          <p className="text-base font-medium text-gray-600">Drag or drop files</p>
          <p className="text-sm text-gray-500">.pdf, .docx, .jpg, .png, .fig, .zip</p>
        </div>
      </div>
    </div>
  )
}

//created by Omodara Ayodele
//github: OmodaraAyo

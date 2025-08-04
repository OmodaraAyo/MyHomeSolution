"use client"

import type React from "react"
import { ChevronLeft } from "lucide-react"
import { useState, useCallback, useEffect } from "react"
import FileUpload from "@/reusables/files/fileUpload"
import FileList from "@/reusables/files/fileList"
import ImagePreviewModal from "@/reusables/files/imagePreview"
import { useFileUpload } from "@/hooks/useFileUploads"
import { useServiceRequestStore } from "@/app/dashboard/new-project/store/useServiceRequestStore"

export default function Step3() {
  const { formData, updateFormData, nextStep, prevStep } = useServiceRequestStore()
  const [dragActive, setDragActive] = useState(false)
  const [previewModal, setPreviewModal] = useState<{ isOpen: boolean; file: File | null; preview: string | null }>({
    isOpen: false,
    file: null,
    preview: null,
  })

  const { uploadedFiles, filePreviews, processFiles, removeFile, setUploadedFiles, generatePreviews } = useFileUpload()

  // Initialize uploaded files from formData on mount
  useEffect(() => {
    if (formData.attachedFiles && formData.attachedFiles.length > 0) {
      const files = formData.attachedFiles.map(
        (fileInfo) => new File([], fileInfo.name, { type: fileInfo.type }),
      );
      setUploadedFiles(files);
      generatePreviews(files);
    }
  }, [formData.attachedFiles, setUploadedFiles, generatePreviews]);

  const openPreview = useCallback(
    (file: File) => {
      const fileKey = `${file.name}-${file.size}`
      const preview = filePreviews[fileKey]

      if (file.type.startsWith("image/") && preview) {
        setPreviewModal({
          isOpen: true,
          file,
          preview,
        })
      }
    },
    [filePreviews],
  )

  const closePreview = useCallback(() => {
    setPreviewModal({
      isOpen: false,
      file: null,
      preview: null,
    })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (uploadedFiles.length === 0) return

    updateFormData({ attachedFiles: uploadedFiles })
    nextStep()
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

      <h2 className="text-lg font-semibold text-[#4A4A4A] mb-5">Upload Requirements</h2>

      <form onSubmit={handleSubmit} className="flex flex-col w-full text-[#606060] gap-4">
        <FileUpload
          onFilesSelected={processFiles}
          accept=".pdf,.docx,.doc,.jpg,.jpeg,.png,.fig,.zip"
          dragActive={dragActive}
          onDragStateChange={setDragActive}
        />

        <FileList files={uploadedFiles} filePreviews={filePreviews} onPreview={openPreview} onRemove={removeFile} />

        <button
          type="submit"
          disabled={uploadedFiles.length === 0}
          className="bg-[#1C3FAA] hover:bg-[#325BDE] disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg mt-5 cursor-pointer transition-colors duration-200"
        >
          Continue
        </button>
      </form>

      <ImagePreviewModal
        isOpen={previewModal.isOpen}
        file={previewModal.file}
        preview={previewModal.preview}
        onClose={closePreview}
      />
    </section>
  )
}

//created by Omodara Ayodele
//github: OmodaraAyo

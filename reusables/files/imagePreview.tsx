"use client"
import Image from "next/image"
import { X } from "lucide-react"
import { useEffect } from "react"
import { ImagePreviewProps } from "../types/types"

export default function ImagePreviewModal({ isOpen, file, preview, onClose }: ImagePreviewProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen || !preview) return null

  return (
    <div className="fixed inset-0 bg-black/75 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative w-full h-full max-w-7xl bg-white rounded-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white shrink-0">
          <h3 className="text-lg font-medium text-gray-900 truncate pr-4">{file?.name}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image Preview */}
        <div className="flex-1 p-4 flex items-center justify-center min-h-0">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={preview || "/placeholder.svg"}
              alt={file?.name || "Preview"}
              width={800}
              height={600}
              className="object-contain w-full h-full"
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
              unoptimized={true} 
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t bg-gray-50 shrink-0">
          <p className="text-sm text-gray-500">{file && `${(file.size / 1024 / 1024).toFixed(2)} MB`}</p>
          <button
            onClick={onClose}
            className="bg-[#1C3FAA] hover:bg-[#325BDE] text-white px-4 py-1 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

//created by Omodara Ayodele
//github: OmodaraAyo

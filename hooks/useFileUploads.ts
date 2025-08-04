"use client"

import { useState, useCallback } from "react"

export function useFileUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [filePreviews, setFilePreviews] = useState<{ [key: string]: string }>({})

  const generatePreviews = useCallback((files: File[]) => {
    files.forEach((file) => {
      const fileKey = `${file.name}-${file.size}`

      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const target = e.target as FileReader | null
          if (target && target.result) {
            setFilePreviews((prev) => ({
              ...prev,
              [fileKey]: target.result as string,
            }))
          }
        }
        reader.readAsDataURL(file)
      }
    })
  }, [])

  const processFiles = useCallback(
    (files: FileList) => {
      const validTypes = [".pdf", ".docx", ".doc", ".jpg", ".jpeg", ".png", ".fig", ".zip"]

      const validFiles = Array.from(files).filter((file) => {
        const fileExtension = "." + file.name.split(".").pop()?.toLowerCase()
        return validTypes.includes(fileExtension)
      })

      if (validFiles.length > 0) {
        setUploadedFiles((prev) => {
          const newFiles = validFiles.filter(
            (newFile) =>
              !prev.some((existingFile) => existingFile.name === newFile.name && existingFile.size === newFile.size),
          )

          generatePreviews(newFiles)
          return [...prev, ...newFiles]
        })
      }
    },
    [generatePreviews],
  )

  const removeFile = useCallback((index: number) => {
    setUploadedFiles((prev) => {
      const fileToRemove = prev[index]
      const fileKey = `${fileToRemove.name}-${fileToRemove.size}`

      setFilePreviews((prevPreviews) => {
        const newPreviews = { ...prevPreviews }
        delete newPreviews[fileKey]
        return newPreviews
      })

      return prev.filter((_, i) => i !== index)
    })
  }, [])

  return {
    uploadedFiles,
    filePreviews,
    processFiles,
    removeFile,
    setUploadedFiles,
    generatePreviews,
  }
}

//created by Omodara Ayodele
//github: OmodaraAyo

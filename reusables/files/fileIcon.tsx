"use client"

import Image from "next/image"
import { Upload, FileText, Archive } from "lucide-react"
import { FileIconProps } from "../types/types"


export default function FileIcon({ file, filePreviews }: FileIconProps) {
  const fileKey = `${file.name}-${file.size}`

  if (file.type.startsWith("image/") && filePreviews[fileKey]) {
    return (
      <Image
        src={filePreviews[fileKey] || "/placeholder.svg"}
        alt={file.name}
        width={24}
        height={24}
        className="w-6 h-6 rounded object-cover"
        style={{ objectFit: "cover" }}
      />
    )
  }

  if (file.type.startsWith("image/")) {
    return <Upload className="w-4 h-4 text-blue-600" />
  } else if (file.type === "application/pdf") {
    return <FileText className="w-4 h-4 text-red-600" />
  } else if (file.type.includes("zip") || file.type.includes("archive")) {
    return <Archive className="w-4 h-4 text-yellow-600" />
  } else if (file.type.includes("document") || file.type.includes("word")) {
    return <FileText className="w-4 h-4 text-blue-600" />
  } else {
    return <Upload className="w-4 h-4 text-gray-600" />
  }
}

//created by Omodara Ayodele
//github: OmodaraAyo

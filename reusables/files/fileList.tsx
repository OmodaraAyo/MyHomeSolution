"use client"
import { X } from "lucide-react"
import FileIcon from "./fileIcon"
import { FileListProps } from "../types/types"


export default function FileList({ files, filePreviews, onPreview, onRemove }: FileListProps) {
  if (files.length === 0) return null

  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Uploaded Files:</h3>
      <div className="space-y-2">
        {files.map((file, index) => (
          <div
            key={`${file.name}-${file.size}-${index}`}
            onClick={() => onPreview(file)}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
          >
            <div className="flex items-center gap-3">
                <FileIcon file={file} filePreviews={filePreviews} />
              <div>
                <p className="text-sm font-medium text-gray-700">{file.name}</p>
                <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Remove button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(index);
                }}
                className="text-red-500 hover:text-red-700 transition-colors duration-200 z-20"
                title="Remove file"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

//created by Omodara Ayodele
//github: OmodaraAyo

// Converts bytes to human-readable KB, MB, or GB string
function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  if (bytes < 1024 * 1024 * 1024)
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileUploaderProps {
  onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0] || null;
      onFileSelect?.(file);
    },
    [onFileSelect]
  );
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: {
        "application/pdf": [".pdf"],
      },
      maxSize: 10 * 1024 * 1024, // 10 MB
    });

  const file = acceptedFiles.length > 0 ? acceptedFiles[0] : null;

  return (
    <div className="w-full uploader-drag-area">
      <div
        {...getRootProps({
          className:
            "flex flex-col items-center justify-center min-h-[180px] transition-all duration-300 border-2 border-dashed border-border rounded-2xl bg-background hover:border-primary cursor-pointer",
        })}
      >
        <input {...getInputProps()} />
        {file ? (
          <div className="uploader-selected-file flex items-center gap-4 p-4 bg-gray-50 rounded-xl shadow-sm w-full max-w-lg mx-auto">
            <img
              src="/images/pdf.png"
              alt="PDF"
              className="w-12 h-12 rounded-lg border border-gray-200 bg-white"
            />
            <div className="flex flex-col flex-1">
              <span className="text-base truncate max-w-xs font-semibold text-gray-700">
                {file.name}
              </span>
              <span className="text-gray-500 text-sm">
                {formatSize(file.size)}
              </span>
            </div>
            <button
              className="ml-2 p-2 rounded-full hover:bg-gray-200 transition"
              onClick={(e) => {
                e.stopPropagation();
                onFileSelect?.(null);
              }}
              title="Remove file"
            >
              <img src="/icons/cross.svg" alt="remove" className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 w-full">
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-2">
              <img src="/icons/info.svg" alt="upload" className="size-20" />
            </div>
            <p className="text-lg text-gray-500">
              <span className="font-semibold">Click or Drag PDF to Upload</span>
            </p>
            <p className="text-lg text-gray-500">PDF (max 10 MB)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;

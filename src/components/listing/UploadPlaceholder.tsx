"use client";

import { useRef } from "react";

type UploadPlaceholderProps = {
  files: File[];
  onFilesChange: (files: File[]) => void;
};

export function UploadPlaceholder({ files, onFilesChange }: UploadPlaceholderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files;
    if (!selected?.length) return;
    onFilesChange([...files, ...Array.from(selected)]);
    e.target.value = "";
  }

  function removeFile(index: number) {
    onFilesChange(files.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
        Uploads{" "}
        <span className="font-normal text-zinc-500 dark:text-zinc-400">(optional)</span>
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Screenshots, PDFs, or Carfax files. File analysis is not available yet—
        selections are shown for your reference only.
      </p>
      <div
        className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50/50 px-6 py-10 text-center dark:border-zinc-700 dark:bg-zinc-900/30"
        onDragOver={(e) => e.preventDefault()}
      >
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Drag files here or choose from your device
        </p>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          Choose files
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*,.pdf"
          multiple
          className="sr-only"
          onChange={handleFileChange}
          aria-label="Upload screenshots, PDFs, or Carfax files"
        />
      </div>
      {files.length > 0 && (
        <ul className="flex flex-wrap gap-2" aria-label="Selected files">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              <span className="max-w-[200px] truncate">{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-100"
                aria-label={`Remove ${file.name}`}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

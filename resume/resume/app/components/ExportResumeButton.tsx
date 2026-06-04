"use client";

export function ExportResumeButton() {
  return (
    <a
      href="/api/export-resume"
      className="px-4 py-2 rounded bg-black text-white inline-block"
    >
      Export Resume
    </a>
  );
}
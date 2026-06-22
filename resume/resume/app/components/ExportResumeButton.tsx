"use client";

import { useState } from "react";

export function ExportResumeButton() {

  const [loading, setLoading] = useState(false);

  const handleClick = async() => {
    try {
      setLoading(true);

      const response = await fetch("/api/export-resume");

      if (!response.ok) {
        throw new Error("Failed to export resume");
      }

      const blob = await response.blob();

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "Christopher-Provencher-Resume.pdf"
      a.click();

      URL.revokeObjectURL(url);

    } catch (error) {
      
      console.error(error);

    } finally {
      
      setLoading(false);
    
    }

  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="underline cursor-pointer"
    >
      { loading ? "Generating..." : "Download" }
    </button>
  );
}
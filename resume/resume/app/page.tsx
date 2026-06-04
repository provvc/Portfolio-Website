"use client";
import Image from "next/image";
import { cn } from "@/app/lib/utils";
import { dragElement } from "@/app/lib/tabDragger";
import { showElement } from '@/app/lib/tabHider';
import { hideElement } from '@/app/lib/tabHider';
import React, { useEffect } from "react";
import { MacbookScroll } from "@/app/components/ui/macbook-scroll";
import { GlareSpotlightCard } from "@/app/components/ui/GlareSpotlightCard";
import { ExportResumeButton } from "@/app/components/ExportResumeButton";
import { Desktop } from "@/app/components/Desktop";
 
export function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden dark:bg-[#0B0B0F]">
      <MacbookScroll/>
    </div>
  );
}
 
export function DotBackgroundDemo() {

  return (
    <div className="relative flex w-full items-center justify-center bg-white dark:bg-black min-h-screen">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look*/}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl"></p>
      
      <Desktop/>
      
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div>
        {/* <DotBackgroundDemo /> */}
        <Desktop/>
      </div>
      <div>
        {/* <ExportResumeButton />
        <MacbookScrollDemo /> */}
      </div>
    </div>
  );
}

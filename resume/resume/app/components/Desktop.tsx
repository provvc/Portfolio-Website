"use client";

import { useState, useRef, useEffect } from "react";
import { dragElement } from "@/app/lib/tabDragger";
import { prioritizeTab } from "@/app/lib/tabPrioritizer";
import { GlareSpotlightCard } from "./ui/GlareSpotlightCard";
import { LiquidBorderDiv } from "./ui/LiquidBorderDiv";
import { LiquidMetal } from "@paper-design/shaders-react";
import { LiquidLogo } from "./ui/LiquidLogo";
import { resumeInfo } from "@/app/lib/resumeInfo";
import { ResumeModal } from "./ui/ResumeModal";
import { ResumeDoc } from "./ui/ResumeDoc";
import { ExportResumeButton } from "./ExportResumeButton";

import "../globals.css";

type Window = "home" | "projects" | "experience" | "resume" | "interests";

export function Desktop() {

  const [windows, setWindows] = useState({
      home: true,
      projects: false,
      experience: false,
      resume: false,
      interests: false,
    });

  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);

  { /* Controls the tab dragging */ }
  useEffect(() => {
    if (homeRef.current) dragElement(homeRef.current);
    if (projectsRef.current) dragElement(projectsRef.current);
    if (experienceRef.current) dragElement(experienceRef.current);
    if (resumeRef.current) dragElement(resumeRef.current);
    if (interestsRef.current) dragElement(interestsRef.current);
  }, [windows]);


  { /* Controls the z-index of the tabs */ }
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // find closest window
      const windowEl = target.closest(".window") as HTMLElement;

      if (windowEl) {
        prioritizeTab(windowEl);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
    { /* HOME */ }
    {windows.home && (

        <div ref={homeRef} className="tab-bkg rounded-sm shadow-md absolute resize-x resize-y overflow window w-[687px]" id="homediv">
        {/* Header */}
        <div className="flex flex-row gap-100 py-2 px-2 justify-center items-center" id="homedivheader">
          <div className="text-3xl">
            provvc home
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="bg-gradient-to-b from-blue-100 to-blue-300 hover:from-blue-300 hover:to-blue-500 size-[1.5em] text-white cursor-pointer rounded-xs flex items-center justify-center">

              <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12"  
              fill="currentColor" viewBox="0 0 24 24" >
                <path d="M3 11h18v2H3z"></path>
              </svg>

            </div>
            <div className="bg-gradient-to-b from-blue-100 to-blue-300 hover:from-blue-300 hover:to-blue-500 size-[1.5em] text-white cursor-pointer rounded-xs flex items-center justify-center">

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info" viewBox="0 0 16 16">
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
              </svg>

            </div>
            <div className="bg-gradient-to-b from-red-100 to-red-300 hover:from-red-300 hover:to-red-500 size-[1.5em] text-white cursor-pointer rounded-xs flex items-center justify-center" onClick={() => setWindows(prev => ({...prev, home: false}))} id="homeclose">

              <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12"  
              fill="currentColor" viewBox="0 0 24 24" >
                <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
              </svg>

            </div>
          </div>
        </div>
        {/* Navigation */}
        <div className="relative h-[22px] mx-2 rounded-lg">
          <LiquidLogo width="100%" height="100%" />
          <div className="absolute inset-0 flex flex-row gap-2 px-2 mx-2 rounded-xs">
            <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, home: true}))} id="home">Home</a>|
            <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, projects: true}))} id="projects">Projects</a>|
            <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, experience: true}))} id="experience">Experience</a>|
            <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, resume: true}))} id="resume">Resume</a>|
            <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, interests: true}))} id="interests">Interests</a>
          </div>
        </div>
        {/* Body */}
        <div className="bg-white flex flex-col gap-2 px-2 mx-2 rounded-xs border mb-1 h-[400px] w-inherit">
          { /* RESUME START */ }
          <div className="flex flex-col scale-x-20 p-2 mt-2 scale-y-15 origin-top-left self-start border border-black">
          
          <ResumeDoc/>         
          
          </div>
          { /* RESUME END */ }
          <div className="absolute top-90 flex flex-row justify-items-start items-left gap-5">
            <ResumeModal/>
            <ExportResumeButton/>
            {/* <div className="">Download</div> */}
          </div>
        </div>
        {/* Footer */}
        <div className="bg-white flex flex-row gap-2 px-2 mx-2 rounded-xs border mb-4 h-[150px]">
          Footer
        </div>
      </div>
    )};
      

    { /* Experience */ }
    {windows.experience && (
      <div ref={experienceRef} className="chrome-effect w-fit rounded-sm shadow-md absolute resize-x resize-y overflow window" id="experiencediv">
        {/* Header */}
        <div className="flex flex-row gap-100 py-2 px-2 justify-center items-center" id="experiencedivheader">
          <div className="text-3xl">
            provvc experience
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="bg-gray-300 size-[1.5em] text-white cursor-pointer rounded-xs flex items-center justify-center">

              <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12"  
              fill="currentColor" viewBox="0 0 24 24" >
                <path d="M3 11h18v2H3z"></path>
              </svg>

            </div>
            <div className="bg-gray-300 size-[1.5em] text-white cursor-pointer rounded-xs flex items-center justify-center">

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info" viewBox="0 0 16 16">
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
              </svg>

            </div>
            <div className="bg-gradient-to-b from-red-100 to-red-300 hover:from-red-400 hover:to-red-600 size-[1.5em] text-white cursor-pointer rounded-xs flex items-center justify-center" onClick={() => setWindows(prev => ({...prev, experience: false}))} id="experienceclose">

              <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12"  
              fill="currentColor" viewBox="0 0 24 24" >
                <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
              </svg>

            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-gradient-to-b from-white to-gray-300 flex flex-row gap-2 px-2 mx-2 rounded-xs border">
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, home: true}))} id="home">Home</a>|
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, projects: true}))} id="projects">Projects</a>|
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, experience: true}))} id="experience">Experience</a>|
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, resume: true}))} id="resume">Resume</a>|
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, interests: true}))} id="interests">Interests</a>
        </div>
        {/* Body */}
        <div className="bg-white flex flex-row gap-2 px-2 mx-2 rounded-xs border mb-1 h-[400px]">Body</div>
        {/* Footer */}
        <div className="bg-white flex flex-row gap-2 px-2 mx-2 rounded-xs border mb-4 h-[150px]">Footer</div>
      </div>
    )};

    { /* Projects */ }
    {windows.projects && (
      <div ref={projectsRef} className="chrome-effect w-fit rounded-sm shadow-md absolute resize-x resize-y overflow window" id="projectsdiv">
        {/* Header */}
        <div className="flex flex-row gap-100 py-2 px-2 justify-center items-center" id="projectsdivheader">
          <div className="text-3xl">
            provvc projects
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="bg-gray-300 size-[1.5em] text-white cursor-pointer rounded-xs flex items-center justify-center">

              <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12"  
              fill="currentColor" viewBox="0 0 24 24" >
                <path d="M3 11h18v2H3z"></path>
              </svg>

            </div>
            <div className="bg-gray-300 size-[1.5em] text-white cursor-pointer rounded-xs flex items-center justify-center">

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info" viewBox="0 0 16 16">
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
              </svg>

            </div>
            <div className="bg-gradient-to-b from-red-100 to-red-300 hover:from-red-400 hover:to-red-600 size-[1.5em] text-white cursor-pointer rounded-xs flex items-center justify-center" onClick={() => setWindows(prev => ({...prev, projects: false}))} id="projectsclose">

              <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12"  
              fill="currentColor" viewBox="0 0 24 24" >
                <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
              </svg>

            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-gradient-to-b from-white to-gray-300 flex flex-row gap-2 px-2 mx-2 rounded-xs border">
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, home: true}))} id="home">Home</a>|
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, projects: true}))} id="projects">Projects</a>|
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, experience: true}))} id="experience">Experience</a>|
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, resume: true}))} id="resume">Resume</a>|
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, interests: true}))} id="interests">Interests</a>
        </div>
        {/* Body */}
        <div className="bg-white flex flex-row gap-2 px-2 mx-2 rounded-xs border mb-1 h-[400px]">Body</div>
        {/* Footer */}
        <div className="bg-white flex flex-row gap-2 px-2 mx-2 rounded-xs border mb-4 h-[150px]">Footer</div>
      </div>
    )};

    { /* Resume */ }
    {windows.resume && (
      <div ref={resumeRef} className="chrome-effect w-fit rounded-sm shadow-md absolute resize-x resize-y overflow window" id="resumediv">
        {/* Header */}
        <div className="flex flex-row gap-100 py-2 px-2 justify-center items-center" id="resumedivheader">
          <div className="text-3xl">
            provvc resume
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="bg-gray-300 size-[1.5em] text-white cursor-pointer rounded-xs flex items-center justify-center">

              <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12"  
              fill="currentColor" viewBox="0 0 24 24" >
                <path d="M3 11h18v2H3z"></path>
              </svg>

            </div>
            <div className="bg-gray-300 size-[1.5em] text-white cursor-pointer rounded-xs flex items-center justify-center">

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info" viewBox="0 0 16 16">
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
              </svg>

            </div>
            <div className="bg-gradient-to-b from-red-100 to-red-300 hover:from-red-400 hover:to-red-600 size-[1.5em] text-white cursor-pointer rounded-xs flex items-center justify-center" onClick={() => setWindows(prev => ({...prev, resume: false}))} id="resumeclose">

              <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12"  
              fill="currentColor" viewBox="0 0 24 24" >
                <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
              </svg>

            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-gradient-to-b from-white to-gray-300 flex flex-row gap-2 px-2 mx-2 rounded-xs border">
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, home: true}))} id="home">Home</a>|
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, projects: true}))} id="projects">Projects</a>|
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, experience: true}))} id="experience">Experience</a>|
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, resume: true}))} id="resume">Resume</a>|
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, interests: true}))} id="interests">Interests</a>
        </div>
        {/* Body */}
        <div className="bg-white flex flex-row gap-2 px-2 mx-2 rounded-xs border mb-1 h-[400px]">Body</div>
        {/* Footer */}
        <div className="bg-white flex flex-row gap-2 px-2 mx-2 rounded-xs border mb-4 h-[150px]">Footer</div>
      </div>
    )}
      
    { /* Interests */ }
    {windows.interests && (
      <div ref={interestsRef} className="chrome-effect w-fit rounded-sm shadow-md absolute resize-x resize-y overflow window" id="interestsdiv">
        {/* Header */}
        <div className="flex flex-row gap-100 py-2 px-2 justify-center items-center" id="interestsdivheader">
          <div className="text-3xl">
            provvc interests
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="bg-gray-300 size-[1.5em] text-white cursor-pointer rounded-xs flex items-center justify-center">

              <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12"
              fill="currentColor" viewBox="0 0 24 24" >
                <path d="M3 11h18v2H3z"></path>
              </svg>

            </div>
            <div className="bg-gray-300 size-[1.5em] text-white cursor-pointer rounded-xs flex items-center justify-center">

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info" viewBox="0 0 16 16">
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
              </svg>

            </div>
            <div className="bg-gradient-to-b from-red-100 to-red-300 hover:from-red-400 hover:to-red-600 size-[1.5em] text-white cursor-pointer rounded-xs flex items-center justify-center" onClick={() => setWindows(prev => ({...prev, interests: false}))} id="interestsclose">

              <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12"  
              fill="currentColor" viewBox="0 0 24 24" >
                <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
              </svg>

            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-gradient-to-b from-white to-gray-300 flex flex-row gap-2 px-2 mx-2 rounded-xs border">
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, home: true}))} id="home">Home</a>|
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, projects: true}))} id="projects">Projects</a>|
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, experience: true}))} id="experience">Experience</a>|
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, resume: true}))} id="resume">Resume</a>|
          <a className="mr-1 hover:underline cursor-pointer" onClick={() => setWindows(prev => ({...prev, interests: true}))} id="interests">Interests</a>
        </div>
        {/* Body */}
        <div className="bg-white flex flex-row gap-2 px-2 mx-2 rounded-xs border mb-1 h-[400px]">Body</div>
        {/* Footer */}
        <div className="bg-white flex flex-row gap-2 px-2 mx-2 rounded-xs border mb-4 h-[150px]">Footer</div>
      </div>
    )};

    </div>
      
  );
}
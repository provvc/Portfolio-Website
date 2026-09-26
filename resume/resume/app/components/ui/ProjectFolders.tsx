"use client";
import { projectInfo } from "@/app/lib/projectInfo";


export function Folder() {



    return (

      
      projectInfo.projects.map((project) => (
        <div className="flex flex-col gap-4 items-center overflow-hidden">
              <div className="h-[75px] w-[101.25px] bg-blue-300 mt-2 rounded-lg z-1 hover:cursor-pointer shadow-[0_10px_14px_rgba(0,0,0,0.25)]">
                <div className="h-[75px] w-[101.25px] bg-blue-300 relative rounded-md top-[2px] z-3"></div>
                <div className="h-[63.75px] w-[93.75px] bg-white rounded relative top-[-68px] left-[4px] z-5 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.25)]"></div>
                <div className="h-[75px] w-[101.25px] bg-blue-200 relative top-[-170%] rounded-lg z-6 shadow-[0_-3px_6px_-1px_rgba(0,0,0,0.12)]"></div>
                <div className="relative top-[-290%] left-[15%] border-t-[7.5px] border-t-white border-l-[15px] border-l-transparent z-2"></div>
              </div>
              <div>{project.name}</div>
            </div>

      )) 
        
    )

}
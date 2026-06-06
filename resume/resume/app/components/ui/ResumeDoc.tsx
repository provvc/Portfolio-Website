"use client";

import { resumeInfo } from "@/app/lib/resumeInfo";
import { resume } from "react-dom/server";

export function ResumeDoc() {
    return (

        <div className="flex flex-col gap-2">

          {/* HEADER */}
          <div className="center-column">
            <div className="text-xl">{resumeInfo.name}</div>
            <div className="text-sm">{resumeInfo.address}</div>
            <div className="text-sm">{resumeInfo.phone}</div>
          </div>

          {/* SUMMARY */}
          <div className="mt-4">
            <p className="text-sm">{resumeInfo.summary}</p>
          </div>

          {/* EXPERIENCE */}
          <div className="section">
            <div className="text-2xl mb-2 mt-4">Experience</div>

            {resumeInfo.experience.map((job) => (
              <div>
                <div className="row-gap-1 font-extrabold">
                  <div className="text-sm mr-2">{job.company}</div>
                  <div className="text-sm">|</div>
                  <div className="text-sm ml-2 mr-2">{job.title}</div>
                  <div className="text-sm">|</div>
                  <div className="text-sm ml-2">{job.type}</div>
                </div>

                <div>
                  <div className="text-xs mb-4">{job.address}</div>
                </div>

                { job.description.map((t) => (
                    <div className="text-sm mb-2">
                        { t.task }
                    </div>
                ))}

                <div className="mt-2">
                  <div className="text-md">{job.dates}</div>
                </div>
              </div>
            ))}
          </div>

          {/* EDUCATION */}
          <div className="section">
            <div className="text-2xl mt-8">Education</div>
            <div className="mt-2">
            {resumeInfo.education.map((school) => (
              <div className="my-4">
                <div className="row-gap-1 font-extrabold">
                  <div className="text-sm">{school.institution},</div>
                  <div className="text-sm mr-2">{school.location}</div>
                  <div className="text-sm">|</div>
                  <div className="text-sm ml-2">{school.degree}</div>
                </div>
                <div className="my-2">
                {school.awards?.map((award) => (
                  <div className="flex text-sm gap-2">
                    <div className="font-extrabold">{award.awardName}</div>
                    <div>-</div>
                    <div>{award.awardDescription}</div>
                  </div>
                ))}
                </div>
                <div className="mb-6">
                  <div className="text-md">{school.dates}</div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Projects */}
          <div className="section">
            <div className="text-2xl mb-2 mt-4">Projects</div> { /* kind of inconsistent with the margins */ }
            {resumeInfo.projects.map((project) => (
              <div>
                <div className="row-gap-1 font-extrabold">
                  <div className="text-sm">{project.name}</div>
                  <div className="text-sm">|</div>
                  <div className="text-sm">{project.type}</div>
                </div>
                <div className="mt-2 mb-2">
                  <p className="text-xs">{project.context}</p>
                </div>
                <div className="mt-2 mb-2 text-xs font-extrabold">
                  <span className="mr-1">Project Stack:</span>
                  {project.stack.map((item, index) => (
                    <span key={index} className="text-xs mr-1">
                      {item.tool}
                      { index < project.stack.length - 1 ? "," : "" } { /* Need to remove , for the last indexed element */ }
                    </span>
                  ))}
                </div>
                <div className="mt-2 mb-2 text-xs underline font-bold">
                  <p>{project.link}</p>
                </div>
              </div>
            ))}
          </div>

          {/* TECHNICAL SKILLS  */}
          <div className="section mt-8">
            <div className="text-2xl mb-2">Technical Skills & Abilities</div>
            <div className="flex gap-12">
              <div className="flex flex-col gap-1">
                <div className="text-xl">Programming Languages</div>
                <div>
                  {resumeInfo.technicalSkills.programming.map((l) => (
                    <div className="text-sm">{l.language}</div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <div className="text-xl">Developer Tools and Platforms</div>
                <div>
                  {resumeInfo.technicalSkills.tools.map((t) => (
                    <div className="text-sm">{t.tool}</div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="text-xl">Frameworks</div>
                <div>
                  {resumeInfo.technicalSkills.frameworks.map((f) => (
                    <div className="text-sm">{f.framework}</div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          
          {/* SOFT SKILLS */}
          <div className="section mt-8">
            <div className="text-2xl mb-2">Soft Skills & Abilities</div>
            <div className="flex gap-2">
            {Array.from(
              { length: Math.ceil(resumeInfo.softSkills.length / 7) },
              (_, chunkIndex) => (
                <div key={chunkIndex} className="mb-4 w-[265px]">
                  {resumeInfo.softSkills
                    .slice(chunkIndex * 7, chunkIndex * 7 + 7)
                    .map((s, skillIndex) => (
                      <div className="text-sm" key={skillIndex}>
                        {s.skill}
                      </div>
                    ))}
                </div>
              )
            )}
            </div>
          </div>

          { /* BILINGUAL */ }
          <div className="section mt-8">
            <div className="text-2xl">Bilingual</div>
            <div className="flex gap-2">
            {resumeInfo.languages.map((lang, index) => (
              <div className="flex gap-2">
                <div className="text-sm inline">{lang.language}</div>
                <div className="text-sm inline">
                { index < resumeInfo.languages.length - 1 ? "|" : "" } { /* Need to remove | for the last indexed element */ }
                </div>
              </div>
            ))}
            </div>
          </div>

        </div>

    );
}
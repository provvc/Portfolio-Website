"use client";

import { resumeInfo } from "@/app/lib/resumeInfo";

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
          <div>
            <p className="text-md">{resumeInfo.summary}</p>
          </div>

          {/* EXPERIENCE */}
          <div className="section">
            <div className="text-2xl mb-2 mt-8">Experience</div>

            {resumeInfo.experience.map((job) => (
              <div>
                <div className="row-gap-1 font-extrabold">
                  <div className="text-sm mr-2">{job.company}</div>
                  <div className="text-sm">|</div>
                  <div className="text-sm ml-2">{job.title}</div>
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
                  <div className="text-xs">{job.dates}</div>
                </div>
              </div>
            ))}
          </div>

          {/* EDUCATION */}
          <div className="section">
            <div className="text-2xl mb-2 mt-8">Education</div>

            {resumeInfo.education.map((school) => (
              <div className="mb-2">
                <div className="row-gap-1 font-extrabold">
                  <div className="text-sm mr-2">{school.institution}</div>
                  <div className="text-sm">|</div>
                  <div className="text-sm ml-2">{school.degree}</div>
                </div>

                <div>
                  <div className="text-xs">{school.location}</div>
                </div>

                <div className="mt-2">
                  <div className="text-xs">{school.dates}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="section">
            <div className="text-2xl mb-2 mt-8">Projects</div>
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
                      {item.tool}, { /* Need to remove , for the last indexed element */ }
                    </span>
                  ))}
                </div>
                <div className="mt-2 mb-2 text-xs underline font-bold">
                  <p>{project.link}</p>
                </div>
              </div>
            ))}
          </div>

          {/* TECHNICAL SKILLS
          <div className="section">
            <div className="text-lg mb-2">Technical Skills</div>
            {resumeInfo.technicalSkills.map((skill) => (
              <div className="resume-container">
                <div>
                  <h1></h1>
                </div>
              </div>
            ))}
          </div> */}
          
          {/* SOFT SKILLS */}
          <div className="section">
            <div className="text-2xl mb-2">Soft Skills & Abilities</div>
            {resumeInfo.softSkills.map((s) => (
                <div>
                    <div>{s.skill}</div>
                </div>
            ))}
          </div>

          { /* BILINGUAL */ }
          <div className="section">
            <div className="text-2xl">Bilingual</div>
            {resumeInfo.languages.map((lang) => (
              <div className="inline pr-1">
                <div className="text-sm inline pr-1">{lang.language}</div>
                <div className="text-sm inline">|</div> { /* Need to remove | for the last indexed element */ }
              </div>
            ))}
          </div>

        </div>

    );
}
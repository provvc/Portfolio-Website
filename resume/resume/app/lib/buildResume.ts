import { resumeInfo } from "./resumeInfo";

import '../globals.css'

export function buildResumeHTML() {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
</head>
<body>

  <div class="flex flex-col gap-2">

    <!-- HEADER -->
    <div class="flex flex-col justify-center items-center mb-2">
      <div class="text-lg">${resumeInfo.name}</div>
      <div class="text-xs">${resumeInfo.address}</div>
      <div class="text-xs">${resumeInfo.phone}</div>
      <div class="text-xs"><a target="_blank" href=${resumeInfo.websiteLink}>${resumeInfo.websiteTitle}</a></div>
    </div>

    <!-- SUMMARY -->
    <div>
      <p class="text-xs">${resumeInfo.summary}</p>
    </div>

    <!-- EXPERIENCE -->
    <div class="section">
      <div class="text-xl font-semibold mb-2 mt-4">Experience</div>

      ${resumeInfo.experience.map((job) => `
        <div>
          <div class="flex gap-1 font-extrabold">
            <div class="text-xs mr-2">${job.company}</div>
            <div class="text-xs">|</div>
            <div class="text-xs ml-2 mr-2">${job.title}</div>
            <div class="text-xs">|</div>
            <div class="text-xs ml-2">${job.type}</div>
          </div>

          <div>
            <div class="text-xs mb-4">${job.address}</div>
          </div>

          ${job.description.map((t) => `
            <div class="text-xs mb-2">${t.task}</div>
          `).join("")}

          <div class="mt-2">
            <div class="text-sm">${job.dates}</div>
          </div>
        </div>
      `).join("")}
    </div>

    <!-- EDUCATION -->
    <div class="section">
      <div class="text-xl font-semibold mt-4">Education</div>
      <div class="mt-1">
        ${resumeInfo.education.map((school) => `
          <div class="my-4">
            <div class="flex gap-1 font-extrabold">
              <div class="text-xs">${school.institution},</div>
              <div class="text-xs mr-2">${school.location}</div>
              <div class="text-xs">|</div>
              <div class="text-xs ml-2">${school.degree}</div>
            </div>
            <div class="my-2">
              ${(school.awards ?? []).map((award) => `
                <div class="flex text-xs gap-2">
                  <div class="font-extrabold">${award.awardName}</div>
                  <div>-</div>
                  <div>${award.awardDescription}</div>
                </div>
              `).join("")}
            </div>
            <div class="mb-6">
              <div class="text-sm">${school.dates}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- PROJECTS -->
    <div class="section">
      <div class="text-xl font-semibold mb-2 mt-1">Projects</div>
      ${resumeInfo.projects.map((project) => `
        <div>
          <div class="flex gap-2 font-extrabold">
            <div class="text-xs">${project.name}</div>
            <div class="text-xs">|</div>
            <div class="text-xs">${project.type}</div>
          </div>
          <div class="mt-2 mb-2">
            <p class="text-xs">${project.context}</p>
          </div>
          <div class="mt-2 mb-2 text-xs font-extrabold">
            <span class="mr-1">Project Stack:</span>
            ${project.stack.map((item, index) => `
              <span class="text-xs mr-1">${item.tool}${index < project.stack.length - 1 ? "," : ""}</span>
            `).join("")}
          </div>
          <a class="mt-2 mb-2 text-xs underline font-bold block" target="_blank" href=${project.link}>
                  <p>${project.linkTitle}</p>
          </a>
        </div>
      `).join("")}
    </div>

    <!-- TECHNICAL SKILLS -->
    <div class="section mt-4">
            <div class="text-xl font-semibold mb-2 mt-2">Technical Skills & Abilities</div>
            <div class="flex gap-12">
              <div class="flex flex-col gap-1">
                <div class="text-md">Programming Languages</div>
                <div>
                  ${resumeInfo.technicalSkills.programming.map((l) => 
                    `<div class="text-xs">${l.language}</div>`
                  ).join("")}
                </div>
              </div>
              
              <div class="flex flex-col gap-1">
                <div class="text-md">Developer Tools & Platforms</div>
                <div>
                  ${resumeInfo.technicalSkills.tools.map((t) => 
                    `<div class="text-xs">${t.tool}</div>`
                  ).join("")}
                </div>
              </div>

              <div class="flex flex-col gap-1">
                <div class="text-md">Frameworks</div>
                <div>
                  ${resumeInfo.technicalSkills.frameworks.map((f) => 
                    `<div class="text-xs">${f.framework}</div>`
                  ).join("")}
                </div>
              </div>

            </div>
    </div>

    <!-- SOFT SKILLS -->
    <div class="section mt-4">
      <div class="text-xl font-semibold mb-2">Soft Skills & Abilities</div>
      <div class="flex gap-2">
        ${Array.from(
          { length: Math.ceil(resumeInfo.softSkills.length / 7) },
          (_, chunkIndex) => `
            <div class="mb-4" style="width: 225px;">
              ${resumeInfo.softSkills
                .slice(chunkIndex * 7, chunkIndex * 7 + 7)
                .map((s) => `<div class="text-xs">${s.skill}</div>`)
                .join("")}
            </div>
          `
        ).join("")}
      </div>
    </div>

    <!-- BILINGUAL -->
    <div class="section mt-4">
      <div class="text-xl font-semibold">Bilingual</div>
      <div class="flex gap-2">
        ${resumeInfo.languages.map((lang, index) => `
          <div class="flex gap-2">
            <div class="text-xs inline">${lang.language}</div>
            <div class="text-xs inline">${index < resumeInfo.languages.length - 1 ? "|" : ""}</div>
          </div>
        `).join("")}
      </div>
    </div>

  </div>

</body>
</html>
`;
}
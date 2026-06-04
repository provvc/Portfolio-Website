import { resumeInfo } from "./resumeInfo";

export function buildResumeHTML() {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body {
  margin: 0;
  font-family: "Jura", sans-serif;
  background: white;
  font-weight: 300;
}

/* CONTAINER (rounded-lg bg-white grid gap-4 px-6) */
.resume-container {
  background: white;
  border-radius: 0.5rem;
  display: grid;
  gap: 1rem;
}

/* FLEX COLUMN CENTER */
.center-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* TEXT SIZES */
.text-xs {
  font-size: 0.75rem;
}
.text-8 {
  font-size: 8px;
}
.text-7 {
  font-size: 7px;
}
.text-9 {
  font-size: 9px;
}
.text-lg {
  font-size: 1.125rem;
}

/* FONT WEIGHTS */
.font-bold {
  font-weight: bolder;
}

/* SPACING-MARGIN */
.mb-1 {
  margin-bottom: 0.25rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.mr-2 {
  margin-right: 0.5rem;
}

/* SPACING-PADDING */
.pt-2 {
  padding-top: 0.5rem;
}
.pb-2 {
  padding-bottom: 0.5rem;
}
.pl-2 {
  padding-left: 0.5rem;
}
.pr-2 {
  padding-right: 0.5rem;
}

.pr-1 {
  padding-right: 0.25rem;
}

/* FLEX ROW GAP-1 */
.row-gap-1 {
  display: flex;
  gap: 0.25rem;
}

/* PAGE BREAK SAFETY */
.section {
  page-break-inside: avoid;
}

/* LINKS */
a {
  color: black;
  text-decoration: none;
}

.inline {
  display: inline-block;
}
  </style>
</head>

<body>

  <div class="resume-container">
  
            <div class="center-column">
              <div class="text-xs">${resumeInfo.name}</div>
              <div class="text-8">${resumeInfo.address}</div>
              <div class="text-8">${resumeInfo.phone}</div>
            </div>
  
            <div>
              <p class="text-xs">${resumeInfo.summary}</p>
            </div>
  
            <div class="section">
              <div class="text-lg mb-2">Experience</div>
  
              ${resumeInfo.experience.map((job) => `
                <div>
                  <div class="row-gap-1">
                    <div class="text-8 font-bold">${job.company}</div>
                    <div class="text-8">|</div>
                    <div class="text-8 font-bold">${job.title}</div>
                  </div>
  
                  <div>
                    <div class="text-7">${job.address}</div>
                  </div>
  
                  <div class="mt-2">
                    <div class="text-9">${job.dates}</div>
                  </div>
                </div>
              `).join("")}
            </div>
  
            <div class="section">
              <div class="text-lg mb-2">Education</div>
  
              ${resumeInfo.education.map((school) => `
                <div class="mb-2">
                  <div class="row-gap-1">
                    <div class="text-8 font-bold">${school.institution}</div>
                    <div class="text-8">|</div>
                    <div class="text-8 font-bold">${school.degree}</div>
                  </div>
  
                  <div>
                    <div class="text-7">${school.location}</div>
                  </div>
  
                  <div class="mt-2">
                    <div class="text-9">${school.dates}</div>
                  </div>
                </div>
              `).join("")}
            </div>
  
            <div class="section">
              <div class="text-lg mb-2">Projects</div>
              ${resumeInfo.projects.map((project) => `
                <div class="mb-4">
                    <div class="row-gap-1">
                      <div class="text-8 font-bold">${project.name}</div>
                      <div class="text-8">|</div>
                      <div class="text-8 font-bold">${project.context}</div>
                    </div>
                    <div class="text-7 mb-1">${project.learningOutcome}</div>
                    <div class="text-7 mb-1"><span class="font-bold">Project Stack:</span> ${project.stack}</div>
                    <div class="text-7 mb-1"><a href=${project.link} target="_blank">My Contribution Github Repo</a></div>
                </div>
              `).join("")}
            </div>
  
            <div class="section">
              <div class="text-lg mb-2">Technical Skills</div>
            </div>
            
            <div class="section">
              <div class="text-lg mb-2">Soft Skills</div>
            </div>
  
            <div class="section">
              <div class="text-lg">Bilingual</div>
              ${resumeInfo.languages.map((lang) => `
                <div class="inline pr-1">
                  <div class="text-8 inline pr-1">${lang.language}</div>
                  <div class="text-8 inline">|</div>
                </div>
              `).join("")}
            </div>
  
          </div>

</body>
</html>
`;
}
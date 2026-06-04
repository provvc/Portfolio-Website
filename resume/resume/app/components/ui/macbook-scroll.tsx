"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/app/lib/utils";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";
import { resumeInfo } from "@/app/lib/resumeInfo";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex min-h-[200vh] shrink-0 scale-[0.35] transform flex-col items-center justify-start py-0 [perspective:800px] sm:scale-50 md:scale-100 md:py-80"
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="mb-20 text-center text-3xl font-bold text-neutral-800 dark:text-white"
      ></motion.h2>
      {/* Sheet */}
      <Sheet
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
      />
    </div>
  );
};

export const Sheet = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:800px] grid items-center justify-center">
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="absolute inset-0 h-200 w-[40rem] bg-white p-2"
      >
        <div className="resume-container">

          {/* HEADER */}
          <div className="center-column">
            <div className="text-xs">{resumeInfo.name}</div>
            <div className="text-8">{resumeInfo.address}</div>
            <div className="text-8">{resumeInfo.phone}</div>
          </div>

          {/* SUMMARY */}
          <div>
            <p className="text-xs">{resumeInfo.summary}</p>
          </div>

          {/* EXPERIENCE */}
          <div className="section">
            <div className="text-lg mb-2">Experience</div>

            {resumeInfo.experience.map((job) => (
              <div>
                <div className="row-gap-1">
                  <div className="text-8 font-bold">{job.company}</div>
                  <div className="text-8">|</div>
                  <div className="text-8 font-bold">{job.title}</div>
                </div>

                <div>
                  <div className="text-7">{job.address}</div>
                </div>

                <div className="mt-2">
                  <div className="text-9">{job.dates}</div>
                </div>
              </div>
            ))}
          </div>

          {/* EDUCATION */}
          <div className="section">
            <div className="text-lg mb-2">Education</div>

            {resumeInfo.education.map((school) => (
              <div className="mb-2">
                <div className="row-gap-1">
                  <div className="text-8 font-bold">{school.institution}</div>
                  <div className="text-8">|</div>
                  <div className="text-8 font-bold">{school.degree}</div>
                </div>

                <div>
                  <div className="text-7">{school.location}</div>
                </div>

                <div className="mt-2">
                  <div className="text-9">{school.dates}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="section">
            <div className="text-lg mb-2">Projects</div>
            {resumeInfo.projects.map((project) => (
              <div>
                <div className="row-gap-1 font-bold">
                  <div className="text-8 ">{project.name}</div>
                  <div className="text-8">|</div>
                  <div className="text-8">{project.type}</div>
                </div>
                <div className="mt-2 mb-2">
                  <p className="text-7">{project.context}</p>
                </div>
                <div className="mt-2 mb-2 text-7 font-bold">
                  <span className="mr-1">Project Stack:</span>
                  {project.stack.map((item, index) => (
                    <span key={index} className="text-7 mr-1">
                      {item.tool},
                    </span>
                  ))}
                </div>
                <div className="mt-2 mb-2 text-7">
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
            <div className="text-lg mb-2">Soft Skills</div>
          </div>

          { /* BILINGUAL */ }
          <div className="section">
            <div className="text-lg">Bilingual</div>
            {resumeInfo.languages.map((lang) => (
              <div className="inline pr-1">
                <div className="text-8 inline pr-1">{lang.language}</div>
                <div className="text-8 inline">|</div>
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </div>
  );
};

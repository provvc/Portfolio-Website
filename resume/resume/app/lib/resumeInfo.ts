// This file contains my resume information

import { desc } from "motion/react-client";

export const resumeInfo = {
    name: "Christopher Provencher",
    address: "Gatineau, QC, Canada",
    phone: "chrisprov2003@gmail.com",
    summary: "Recent Computer Science graduate seeking employment opportunity in technical or non-technical roles to apply my academic experience within a professional environment and gain valuable work experience.",
    experience: [
        {
            company: "DEPARTMENT OF NATIONAL DEFENSE",
            location: "Nepean, ON",
            title: "IT Technician",
            address: "60 Moodie Dr, Nepean, ON K2H 8G1",
            dates: "May 2023 - August 2023",
            description: [
                { task: "Provided on-site technical support to civilian and military personnel within my designated department facility adn other military sites." },
                { task: "Imaged and reimaged laptops for redistribution within the department, ensuring compliance with departmental IT standards." },
                { task: "Managed serviceable laptop inventory, ensuring adequate inventory levels to support onboarding operations." },
                { task: "Coordinated and scheduled technical support visits on the behalf of the technical support team for civilian and military clients." },
                { task: "Managed, assigned, and documented IT support tickets for timely resolutions and accurate traceability." },
            ]
        },
    ],
    education: [
        {
            institution: "CEGEP Heritage College",
            location: "Gatineau, QC",
            degree: "DEC in Computer Science",
            dates: "August 2022 - May 2026",
        },
        {
            institution: "D'Arcy McGee High School",
            location: "Gatineau, QC",
            degree: "High School Diploma",
            dates: "August 2018 - June 2021",
        }
    ],
    projects: [
        {
            name: "WPM Typing",
            type: "Team-based Development Project",
            context: "Web application designed to provide the Computer Science department of Cegep Heritage College with a fun and competitive environment for improving on their typing speeds, an essential and helpful Computer Science proficiency.",
            learningOutcome: "",
            stack: [
                { tool: "C# ASP .NET Core Framework" },
                { tool: "T-SQL" },
                { tool: "JavaScript" },
                { tool: "HTML" },
                { tool: "CSS" },
                { tool: "Tailwind CSS" },
            ],
            link: "www.linktomygithubproject.com"
        },
        {
            name: "BookMark",
            type: "Team-based Development Project",
            context: "Web application designed for the Cegep Heritage College library as an online catalogue and book suggestion platform for students and staff of the academic institution. Additionally, centralizing all existing online Heritage library services via there integration into the newly developed application.",
            learningOutcome: "",
            stack: [
                { tool: "C# ASP .NET Core Framework" },
                { tool: "T-SQL" },
                { tool: "JavaScript" },
                { tool: "HTML" },
                { tool: "CSS" },
                { tool: "Tailwind CSS" },
            ],
            link: "www.linktomygithubproject.com"
        }
    ],
    technicalSkills: 
    {
            programming: [
                { language: "C#" },
                { language: "Python" },
                { language: "Java" },
                { language: "JavaScript" },
                { language: "PHP" },
                { language: "HTML" },
                { language: "CSS" },
            ],
            frameworks: [
                { framework: "ASP.NET Core MVC" },
                { framework: "Blazor WebAssembly" },
                { framework: "Entity Framework Core" },
                { framework: "NodeJS" },
                { framework: "ReactJS" },
                { framework: "ExpressJS" },
                { framework: "NextJS" },
            ],
            database: [
                { language: "T-SQL" },
                { language: "SQL" },
                { language: "MongoDB" }
            ],
            security: [
                { skill: "nmap" },
                { skill: "Kali Linux" },
                { skill: "Wireshark" },
                { skill: "Burp Suite" },
            ],
            tools: [
                { tool: "Git/GitHub" },
                { tool: "Azure DevOps" },
                { tool: "Visual Studio 2022" },
                { tool: "Visual Studio Code" },
                { tool: "SQL Server Management Studio" },
                { tool: "Eclipse IDE" },
                { tool: "PyCharm" },
                { tool: "PhpStorm" },
                { tool: "Postman" }
            ],
    },
    softSkills: [
        { skill: "Critical thinker" },
        { skill: "Problem solver" },
        { skill: "Strong communicator" },
        { skill: "Autonomous" },
        { skill: "Disciplined" },
        { skill: "Supportive" },
        { skill: "Dependable" },
        { skill: "Attention to detail" },
        { skill: "Takes initiative" },
        { skill: "Adaptable" },
        { skill: "Accountable" },
        { skill: "Reliable" },
        { skill: "Team-Oriented" },
        { skill: "Respectul" },
    ],
    languages: [
        { language: "English" },
        { language: "Francais" }
    ],
};
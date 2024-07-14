import React, { forwardRef } from "react";
import "../styles/Projects.css";
import resume from "../assets/images/resume.png";
import resumess from "../assets/images/resume-builder-ss.png";
import portfolio from "../assets/images/portfolio.png";
import portfolioss from "../assets/images/portfolio-ss.png";
import dwighticon from "../assets/images/dwightBotIcon.png";
import schrutess from "../assets/images/schrute-bot-ss.png";
import ProjectCard from "./ProjectCard";

const Projects = forwardRef((props, ref) => {
  const projectDetails = [
    {
      icon: resume,
      title: "Resume Builder",
      description: "Resume Builder is a web application that allows users to create a professional resume in minutes. Users can add, edit, and remove sections to customize their resume. The application also provides a live preview of the resume as it is being built.",
      details: "The application is built using React, HTML, CSS, and JavaScript. The users can download the resume in PDF format once they are done.",
      screenshot: resumess,
      codeLink: "https://github.com/Jwoll2004/resume-builder",
      demoLink: "https://resume-builder-jwacker.vercel.app/",
    },
    {
      icon: portfolio,
      title: "Portfolio",
      description: "This is my personal portfolio website. It showcases my skills, projects, and profiles on competitive programming platforms (Leetcode, Codeforces).",
      details: `The website is built using React, HTML, CSS, and JavaScript.
                For fetching the profile statistics from Leetcode and Codeforces, I have utilised two APIs:
                <br />
                <span className="api-link">
                  <a href="https://github.com/alfaarghya/alfa-leetcode-api" target="_blank" rel="noreferrer">
                    Leetcode API by Arghya Das
                  </a>
                </span>
                <span className="api-link">
                  <a href="https://codeforces.com/apiHelp" target="_blank" rel="noreferrer">
                    Codeforces API
                  </a>
                </span>
                It also has a dark mode toggle button for better user experience.`,
      screenshot: portfolioss,
      codeLink: "https://github.com/Jwoll2004/portfolio",
      demoLink: "https://portfolio-jwacker.vercel.app/",
    },
    {
      icon: dwighticon,
      title: "Schrute Bot",
      description: "This is an AI chatbot that impersonates Dwight K. Schrute from the famous US TV show, 'The Office', providing engaging user interactions.",
      details: "The website is built using HTML, CSS, and JavaScript along with the React library. It uses Google's Gemini API for the chatbot functionality.",
      screenshot: schrutess,
      codeLink: "https://github.com/Jwoll2004/schrute-bot",
      demoLink: "https://drive.google.com/file/d/11m270i4A86975VlO9u1wMi8oTWthnf32/view?usp=sharing",
    },
  ];

  return (
    <div className="section" ref={ref}>
      <div className="projects-heading">
        <h1>My Projects</h1>
        <a href="https://github.com/Jwoll2004" target="_blank" rel="noreferrer">
          View all projects
        </a>
      </div>
      <div className="vertical-card-container">
        {projectDetails.map((project, index) => (
          <ProjectCard
            key={index}
            icon={project.icon}
            title={project.title}
            description={project.description}
            details={project.details}
            screenshot={project.screenshot}
            codeLink={project.codeLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
});

export default Projects;

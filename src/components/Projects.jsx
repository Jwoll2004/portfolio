import React, { forwardRef } from "react";
import "../styles/Projects.css";
import resume from "../assets/images/resume.png";
import resumess from "../assets/images/resume-builder-ss.png";
import portfolio from "../assets/images/portfolio.png";
import portfolioss from "../assets/images/portfolio-ss.png";
import dwighticon from "../assets/images/dwightBotIcon.png";  
import schrutess from "../assets/images/schrute-bot-ss.png";

const Projects = forwardRef((props, ref) => {
  return (
    <div className="section" ref={ref}>
      <div className="projects-heading">
        <h1>My Projects</h1>
        <a href="https://github.com/Jwoll2004" target="_blank" rel="noreferrer">
          {" "}
          View all projects
        </a>
      </div>
      <div className="vertical-card-container">
        <div className="card">
          <div className="icon-text">
            <img src={resume} alt="Resume Builder" className="icon" />
            <h3>Resume Builder</h3>
          </div>
          <div className="project-details">
            <div className="project-description">
              <p>
                Resume Builder is a web application that allows users to create
                a professional resume in minutes. Users can add, edit, and
                remove sections to customize their resume. The application also
                provides a live preview of the resume as it is being built.
              </p>
              <p>
                The application is built using React, HTML, CSS, and JavaScript.
                The users can download the resume in PDF format once they are
                done.
              </p>
            </div>

            <div className="project-screenshot">
              <img src={resumess} alt="Resume Builder Screenshot" />
            </div>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/Jwoll2004/resume-builder"
              target="_blank"
              rel="noreferrer"
              className="opaque-link"
            >
              Code
            </a>
            <a
              href="https://resume-builder-jwacker.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="outline-link"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="card">
          <div className="icon-text">
            <img src={portfolio} alt="Portfolio" className="icon" />
            <h3>Portfolio</h3>
          </div>
          <div className="project-details">
            <div className="project-description">
              <p>
                This is my personal portfolio website. It showcases my skills,
                projects, and profiles on competitive programming platforms
                (Leetcode, Codeforces).
              </p>
              <p>
                The website is built using React, HTML, CSS, and JavaScript.
                <br />
                For fetching the profile statistics from Leetcode and
                Codeforces, I have utilised two APIs:
                <br />
                <span className="api-link">
                  <a
                    href="https://github.com/alfaarghya/alfa-leetcode-api"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Leetcode API by Arghya Das
                  </a>
                </span>
                <span className="api-link">
                  <a
                    href="https://codeforces.com/apiHelp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Codeforces API
                  </a>
                </span>
                It also has a dark mode toggle button for better user
                experience.
              </p>
            </div>

            <div className="project-screenshot">
              <img src={portfolioss} alt="Portfolio Screenshot" />
            </div>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/Jwoll2004/portfolio"
              target="_blank"
              rel="noreferrer"
              className="opaque-link"
            >
              Code
            </a>
            <a
              href="https://portfolio-jwacker.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="outline-link"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="card">
          <div className="icon-text">
            <img src={dwighticon} alt="Portfolio" className="icon" />
            <h3>Schrute Bot</h3>
          </div>
          <div className="project-details">
            <div className="project-description">
              <p>
              This is an AI chatbot that impersonates Dwight K. Schrute from the famous US TV show, "The Office", providing engaging user interactions. 
              </p>
              <p>
                The website is built using HTML, CSS, and JavaScript along with the React library. It uses Google's Gemini API for the chatbot functionality. 
              </p>
            </div>

            <div className="project-screenshot">
              <img src={schrutess} alt="Portfolio Screenshot" />
            </div>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/Jwoll2004/schrute-bot"
              target="_blank"
              rel="noreferrer"
              className="opaque-link"
            >
              Code
            </a>
            <a
              href="https://drive.google.com/file/d/11m270i4A86975VlO9u1wMi8oTWthnf32/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="outline-link"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;

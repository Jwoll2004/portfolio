import React, { forwardRef } from "react";
import "../styles/Projects.css";
import resume from "../assets/images/resume.png";
import resumess from "../assets/images/resume-builder-ss.png";
import portfolio from "../assets/images/portfolio.png";
import portfolioss from "../assets/images/portfolio-ss.png";

const Projects = forwardRef((props, ref) => {
  return (
    <div className="section" ref={ref}>
      <h1>My Projects</h1>
      <div className="projects card-container">
        <div className="card">
          <div className="icon-text">
            <img src={resume} alt="Resume Builder" className="icon" />
            <h3>Resume Builder</h3>
          </div>
          <div className="project-details">
            <div className="project-description">
              <p>
                Resume Builder is a web application that allows users to create
                a professional resume in minutes. Users can choose from a
                variety of templates and customize the content to suit their
                needs.
              </p>
              <p>
                The application is built using React, HTML, CSS, and JavaScript.
                The resume data is stored in local storage, so users can return
                to their resume at any time.
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
                This is my personal portfolio website. It showcases my technical
                skills, projects, and contact information.
              </p>
              <p>
                The website is built using React, HTML, CSS, and JavaScript. It
                is fully responsive and optimized for mobile devices.
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
			href="https://jwacker.dev" 
			target="_blank" 
			rel="noreferrer"
			className="outline-link"
			>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;

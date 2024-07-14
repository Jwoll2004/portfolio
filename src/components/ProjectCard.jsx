import React from "react";
import PropTypes from "prop-types";
import "../styles/Projects.css";

const ProjectCard = ({ icon, title, description, details, screenshot, codeLink, demoLink }) => {
  return (
    <div className="card">
      <div className="icon-text">
        <img src={icon} alt={title} className="icon" />
        <h3>{title}</h3>
      </div>
      <div className="project-details">
        <div className="project-description">
          <p>{description}</p>
          <p>{details}</p>
        </div>
        <div className="project-screenshot">
          <img src={screenshot} alt={`${title} Screenshot`} />
        </div>
      </div>
      <div className="project-links">
        <a href={codeLink} target="_blank" rel="noreferrer" className="opaque-link">
          Code
        </a>
        <a href={demoLink} target="_blank" rel="noreferrer" className="outline-link">
          Live Demo
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  screenshot: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
};

export default ProjectCard;

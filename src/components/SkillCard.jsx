import React from "react";
import PropTypes from "prop-types";
import "../styles/TechnicalSkills.css";

const SkillCard = ({ icon, title, skills }) => {
  return (
    <div className="card">
      <h3>
        <div className="skill-heading icon-text">
          <img src={icon} alt={title} className="icon" />
          {title}
        </div>
      </h3>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>
            <div className="icon-text">
              <img src={skill.icon} alt={skill.name} className="icon" />
              {skill.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

SkillCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SkillCard;

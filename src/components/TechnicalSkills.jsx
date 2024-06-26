import React from "react";
import "../styles/TechnicalSkills.css";
import proglang from "../assets/images/proglang.png";
import cpp from "../assets/images/cpp.svg";
import python from "../assets/images/python.svg";
import js from "../assets/images/js.svg";
import web from "../assets/images/web.png";
import html from "../assets/images/html.svg";
import css from "../assets/images/css.svg";
import react from "../assets/images/react.svg";
import core from "../assets/images/core.png";
import ds from "../assets/images/structure.png";
import algo from "../assets/images/algo.png";
import os from "../assets/images/os.png";
import dbms from "../assets/images/database.png";
import oop from "../assets/images/oop.png";
import tech from "../assets/images/tech.png";
import git from "../assets/images/git.svg";
import vscode from "../assets/images/vscode.svg";
import mysql from "../assets/images/sql.png";

const TechnicalSkills = () => {
  return (
    <div className="technical-skills">
      <h1>Technical Skills</h1>
      <div className="skills-card-container">
        <div className="skills-card">
          <div className="icon-text">
            <img src={proglang} alt="Programming Languages" className="icon" />
            <h3>Programming Languages</h3>
          </div>
          <ul className="skills-list">
            <li>
              <div className="icon-text">
                <img src={cpp} alt="C++" className="icon" />
                C++
              </div>
            </li>
            <li>
              <div className="icon-text">
                <img src={python} alt="Python" className="icon" />
                Python
              </div>
            </li>
            <li>
              <div className="icon-text">
                <img src={js} alt="Javascript" className="icon" />
                Javascript
              </div>
            </li>
          </ul>
        </div>
        <div className="skills-card">
          <h3>
            <div className="icon-text">
              <img src={web} alt="Web Development" className="icon" />
              Web Development
            </div>
          </h3>
          <ul className="skills-list">
            <li>
              <div className="icon-text">
                <img src={html} alt="HTML" className="icon" />
                HTML
              </div>
            </li>
            <li>
              <div className="icon-text">
                <img src={css} alt="CSS" className="icon" />
                CSS
              </div>
            </li>
            <li>
              <div className="icon-text">
                <img src={react} alt="React" className="icon" />
                React
              </div>
            </li>
          </ul>
        </div>
        <div className="skills-card">
          <h3>
            <div className="icon-text">
              <img src={core} alt="Core Subjects" className="icon" />
              Core Subjects
            </div>
          </h3>
          <ul className="skills-list">
            <li>
              <div className="icon-text">
                <img src={ds} alt="Data Structures" className="icon" />
                Data Structures
              </div>
            </li>
            <li>
              <div className="icon-text">
                <img src={algo} alt="Algorithms" className="icon" />
                Algorithms
              </div>
            </li>
            <li>
              <div className="icon-text">
                <img src={os} alt="Operating Systems" className="icon" />
                Operating Systems
              </div>
            </li>
            <li>
              <div className="icon-text">
                <img src={dbms} alt="DBMS" className="icon" />
                DBMS
              </div>
            </li>
            <li>
              <div className="icon-text">
                <img src={oop} alt="OOP" className="icon" />
                OOP
              </div>
            </li>
          </ul>
        </div>
        <div className="skills-card">
          <h3>
            <div className="icon-text">
              <img src={tech} alt="Tools & Technologies" className="icon" />
              Tools & Technologies
            </div>
          </h3>
          <ul className="skills-list">
            <li>
              <div className="icon-text">
                <img src={git} alt="Git" className="icon" />
                Git
              </div>
            </li>
            <li>
              <div className="icon-text">
                <img src={vscode} alt="VS Code" className="icon" />
                VS Code
              </div>
            </li>
            <li>
              <div className="icon-text">
                <img src={mysql} alt="MySQL" className="icon" />
                MySQL
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;

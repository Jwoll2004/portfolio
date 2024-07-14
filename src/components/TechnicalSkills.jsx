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
import SkillCard from "./SkillCard";

const TechnicalSkills = () => {
  const skillCategories = [
    {
      icon: proglang,
      title: "Programming Languages",
      skills: [
        { icon: cpp, name: "C++" },
        { icon: python, name: "Python" },
        { icon: js, name: "Javascript" },
      ],
    },
    {
      icon: web,
      title: "Web Development",
      skills: [
        { icon: html, name: "HTML" },
        { icon: css, name: "CSS" },
        { icon: react, name: "React" },
      ],
    },
    {
      icon: core,
      title: "Core Subjects",
      skills: [
        { icon: ds, name: "Data Structures" },
        { icon: algo, name: "Algorithms" },
        { icon: os, name: "Operating Systems" },
        { icon: dbms, name: "DBMS" },
        { icon: oop, name: "OOP" },
      ],
    },
    {
      icon: tech,
      title: "Tools & Technologies",
      skills: [
        { icon: git, name: "Git" },
        { icon: vscode, name: "VS Code" },
        { icon: mysql, name: "MySQL" },
      ],
    },
  ];

  return (
    <div className="section">
      <h1>Technical Skills</h1>
      <div className="skills card-container">
        {skillCategories.map((category, index) => (
          <SkillCard
            key={index}
            icon={category.icon}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;

import React, { useRef } from "react";
import "../styles/Hero.css";
import heroImage from '../assets/images/profile.jpg';

function Hero({ projectsRef }) {
  const aboutMeRef = useRef(null);

  const scrollToAboutMe = () => {
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero">
      <div className="header">
        <div className="left-header">
          <a className="header-link transparent-link" onClick={scrollToProjects}>
            My Projects
          </a>
          <a className="header-link transparent-link" onClick={scrollToAboutMe}>
            About Me
          </a>
        </div>

        <span className="header-name">Prajwal Tiwari</span>

        <div className="right-header">
          <a className="header-link opaque-link">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-body">
        <div className="hero-content" ref={aboutMeRef}>
          <div className="hero-title">
            <h1 className="hero-title-name">Prajwal Tiwari</h1>
            <h2 className="hero-title-subtitle">Welcome to my Portfolio</h2>
          </div>
          <div className="hero-description">
            <p className="hero-description-text">
              I am a 3rd year engineering student pursuing Computer Engineering from DTU, 
              with a passion for building web applications.
            </p>
          </div>
          <div className="hero-cta">
            <a href="#projects" className="hero-cta-link opaque-link" onClick={scrollToProjects}>
              My Projects
            </a>
            <a href="https://docs.google.com/document/d/1UGOB68g4iL1_iRASbiw7FtIxn5kNOOVsWckC69iSIiY/edit?usp=sharing" className="hero-cta-link outline-link" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <img src={heroImage} alt="Tanjiro" className="hero-image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

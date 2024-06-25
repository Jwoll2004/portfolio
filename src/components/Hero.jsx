import React from "react";
import "../styles/Hero.css";
import heroImage from '../assets/images/tanjiro.gif'; 

function Hero() {
  return (
    <div className="hero">
      <div className="header">
        <div className="left-header">
          <a href="#" className="header-link transparent-link">
            My Projects
          </a>
          <a href="#" className="header-link transparent-link">
            About Me
          </a>
        </div>

        <span className="header-name">Prajwal Tiwari</span>

        <div className="right-header">
          <a href="#" className="header-link opaque-link">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-body">
        <div className="hero-content">
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
            <a href="#" className="hero-cta-link opaque-link">
              My Projects
            </a>
            <a href="#" className="hero-cta-link outline-link">
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

import React, { useRef, useEffect } from "react";
import "../styles/Hero.css";
import heroImage from "../assets/images/profile.jpg";
import moon from "../assets/images/moon.png";
import sun from "../assets/images/sun.svg";

function Hero({ projectsRef, codingRef, contactRef }) {
  const aboutMeRef = useRef(null);

  const scrollToRefWithOffset = (ref) => {
    const yOffset = -50; // Offset of 50px
    const yPosition =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  const scrollToAboutMe = () => {
    scrollToRefWithOffset(aboutMeRef);
  };

  const scrollToProjects = () => {
    scrollToRefWithOffset(projectsRef);
  };

  const scrollToCoding = () => {
    scrollToRefWithOffset(codingRef);
  };

  const scrollToContact = () => {
    scrollToRefWithOffset(contactRef);
  };

  useEffect(() => {
    const checkbox = document.getElementById("toggle");
    const toggleDarkMode = () => {
      document.body.classList.toggle("dark");
    };

    if (checkbox) {
      checkbox.addEventListener("change", toggleDarkMode);
    }

    return () => {
      if (checkbox) {
        checkbox.removeEventListener("change", toggleDarkMode);
      }
    };
  }, []);

  return (
    <div className="hero">
      <div className="header">
        <div className="left-header">
          <a
            className="header-link transparent-link"
            onClick={scrollToProjects}
          >
            My Projects
          </a>
          <a className="header-link transparent-link" onClick={scrollToAboutMe}>
            About Me
          </a>

          <a className="header-link transparent-link" onClick={scrollToCoding}>
            Coding Stats
          </a>
        </div>

        <span className="header-name">Prajwal Tiwari</span>

        <div className="right-header">
          <div className="light-dark-mode">
            <input type="checkbox" id="toggle" className="checkbox" />
            <label htmlFor="toggle" className="label">
              <img src={moon} className="icon" alt="moon" />
              <img src={sun} className="icon" alt="sun" />
              <span className="ball"></span>
            </label>
          </div>
          <a className="header-link opaque-link" onClick={scrollToContact}>
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
            I am a 3rd year Computer Engineering student at DTU, Delhi. I enjoy coding and web development, with a keen interest in learning new technologies. 
            <br />
            <br />
            I am also a competitive programmer, participating in contests on platforms like Codeforces and Codechef. 
            <br />
            Always open to new opportunities and connections, feel free to reach out! :)
            </p>
          </div>
          <div className="hero-cta">
            <a
              href="#projects"
              className="hero-cta-link opaque-link"
              onClick={scrollToProjects}
            >
              My Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1-DaH3jR1I8n3c06SBI_mHMmlJ34JpFAs/view?usp=sharing"
              className="hero-cta-link outline-link"
              target="_blank"
              rel="noreferrer"
            >
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

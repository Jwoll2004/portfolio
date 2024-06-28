import React, { forwardRef } from "react";
import "../styles/Footer.css";
import linkedin from "../assets/images/linkedinmono.svg";
import instagram from "../assets/images/instagrammono.svg";
import reddit from "../assets/images/redditmono.svg";
import x from "../assets/images/xmono.svg";
import leetcode from "../assets/images/leetcodemono.png";
import codeforces from "../assets/images/codeforcesmono.png";
import github from "../assets/images/githubmono.svg";
import icons8 from "../assets/images/icons8.svg";
import codeforcescolor from "../assets/images/codeforces.svg";
import githubcolor from "../assets/images/githubmono.svg";
import relume from "../assets/images/relume.png";

const Resources = () => {
  return (
    <div className="footer-text footer-columns">
      <p>
        <img src={icons8} alt="icons8" className="icons"/>
        Icons by <a href="https://icons8.com/icons" target="_blank" rel="nopener noreferrer">Icons8</a>
      </p>

      <p>
        <img src={codeforcescolor} alt="codeforces" className="icons" />
        Codeforces API: <a href="https://codeforces.com/apiHelp" target="_blank" rel="nopener noreferrer">Codeforces</a>
      </p>

      <p>
        <img src={githubcolor} alt="github" className="icons monoicons" />
        Leetcode API:{" "}
        <a href="https://github.com/alfaarghya/alfa-leetcode-api" target="_blank" rel="nopener noreferrer">
          @Arghya Das
        </a>
      </p>

      <p>
        <img src={relume} alt="relume" className="icons" />
        Designs inspired from:{" "}
        <a href="https://www.relume.io/react/components" target="_blank" rel="nopener noreferrer">Relume</a>
      </p>
    </div>
  );
};

const Profiles = () => {
  return (
    <div className="footer-text footer-columns">
      <h3>Profiles</h3>
      <div className="footer-columns">
        <a href="https://codeforces.com/profile/jwacker" target="_blank" rel="nopener noreferrer">
          <img src={codeforces} alt="codeforces" className="icons monoicons"/>
          Codeforces
        </a>

        <a href="https://leetcode.com/jwacker19" target="_blank" rel="nopener noreferrer">
          <img src={leetcode} alt="leetcode" className="icons monoicons"/>
          Leetcode
        </a>

        <a href="https://github.com/Jwoll2004" target="_blank" rel="nopener noreferrer">
          <img src={github} alt="github" className="icons monoicons"/>
          Github
        </a>
      </div>
    </div>
  );
};

const Socials = () => {
  return (
    <div className="footer-text">
      <h3>Connect with me</h3>
      <div className="footer-columns">
        <a href="https://www.linkedin.com/in/prajwal-tiwari19/" target="_blank" rel="nopener noreferrer">
          <img src={linkedin} alt="linkedin" className="icons monoicons"/>
          LinkedIn
        </a>

        <a href="https://www.instagram.com/povjwoll/" target="_blank" rel="nopener noreferrer">
          <img src={instagram} alt="instagram" className="icons monoicons"/>
          Instagram
        </a>

        <a href="https://www.reddit.com/user/Impossible-Bunch-732/" target="_blank" rel="nopener noreferrer">
          <img src={reddit} alt="reddit" className="icons monoicons"/>
          Reddit
        </a>

        <a href="https://x.com/PrajwalTiw70591" target="_blank" rel="nopener noreferrer">
          <img src={x} alt="x" className="icons monoicons"/>X
        </a>
      </div>
    </div>
  );
};
const Rights = () => {
  return (
    <div className="footer-text rights">
      <p>© 2024 Prajwal Tiwari. All rights reserved.</p>
    </div>
  );
};

const Footer = forwardRef((props, ref) => {
  return (
    <div className="section footer" ref={ref}>
        <div className="upper-footer">
          <Resources />
		  <Profiles />
          <Socials />
        </div>

        <Rights />
      </div>
  );
});

export default Footer;

import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";



function Footer() {
  return (
    <footer className="footer">
      <p><b>Made with <span style={{color:'red'}}>&#10084; </span>
       by Sakshi</b></p>
       <div className="social-icons">
    <a href="https://www.linkedin.com/in/sakshi-borkar-6277572b0/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://github.com/Saks18" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
  </div>
    </footer>
  );
}

export default Footer;
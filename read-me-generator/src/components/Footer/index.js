import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Footer(props) {
  return (
    <footer className="flex-row px-2 py-2  center">
      <a
        href="https://www.linkedin.com/in/sallam-thabet-93418518a/"
        target="blank"
        rel="noopener noreferrer"
      >
        <li className="logo px-2">
          <FaLinkedin />
        </li>
      </a>
      <a
        href="https://github.com/thabets"
        target="blank"
        rel="noopener noreferrer"
      >
        <li className="logo px-2">
          <FaGithub />
        </li>
      </a>
      <a
        href="https://www.instagram.com/samsamosu/"
        target="blank"
        rel="noopener noreferrer"
      >
        <li className="logo px-2">
          <FaInstagram />
        </li>
      </a>
      <br></br>
      <p>Copyright © Sallam Thabet</p>
    </footer>
  );
}

export default Footer;

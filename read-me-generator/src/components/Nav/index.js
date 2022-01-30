import React from "react";
import { Navigate } from "react-router-dom";

function Nav(props) {
  const { home, setHome } = props;

  return (
    <header
      className="flex-row px-2 py-2 header"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(165, 42, 42, 1), rgba(0, 133, 255, 1))`,
      }}
    >
      <h2>
        <a href="/" className="hbackground">
          Read Me Generator
        </a>
      </h2>
      <nav>
        <ul className="flex-row ">
          <li className="px-2 py-2 ">
            <a
              href="#about"
              className="hbackground"
              onClick={() => Navigate("/about")}
            >
              About
            </a>
          </li>
          <li className="px-2 py-2">
            <a
              href="#readMeGenerator"
              className="hbackground"
              onClick={() => Navigate("/readMeGenerator")}
            >
              Application
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

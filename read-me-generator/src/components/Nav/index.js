import React from "react";
//Utilization of useNavigate for in page navigation
import { useNavigate } from "react-router-dom";

//Navigational Bar function and render
function Nav(props) {
  const navigate = useNavigate();

  return (
    <header
      className="flex-row px-2 py-2 header"
      //Background gradient color image for Nav
      style={{
        backgroundImage: `linear-gradient(to right, rgba(165, 42, 42, 1), rgba(0, 133, 255, 1))`,
      }}
    >
      <h2>
        <button className="hbackground" onClick={() => navigate("/")}>
          Read Me Generator
        </button>
      </h2>
      <nav>
        {/* Navigation Links */}
        <ul className="flex-row ">
          <li className="px-2 py-2 ">
            <button className="hbackground" onClick={() => navigate("/about")}>
              About
            </button>
          </li>
          <li className="px-2 py-2">
            <button
              className="hbackground"
              onClick={() => navigate("/readMeGenerator")}
            >
              Application
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

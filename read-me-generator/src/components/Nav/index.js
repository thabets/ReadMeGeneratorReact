import React from "react";

function Nav(props) {
  const { home, setHome } = props;

  return (
    <header
      className="flex-row px-2 py-2"
      style={"background-image: linear-gradient(to right, red, blue);"}
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
              onClick={() => setHome("about")}
            >
              About
            </a>
          </li>
          <li className="px-2 py-2">
            <a
              href="#portfolio"
              className="hbackground"
              onClick={() => setHome("portfolio")}
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
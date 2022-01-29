import React, { useState } from "react";
import "./App.css";
import About from "./components/About/index";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import ReadMeGenerator from "./components/ReadMeGenerator/index";
import Home from "./components/Home/index";

function App() {
  const [home, setHome] = useState("Home");
  const renderTab = () => {
    switch (home) {
      case "Home":
        return <Home />;
      case "about":
        return <About />;
      case "readMeGenerator":
        return <ReadMeGenerator />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Nav home={home} setHome={setHome}></Nav>
      <main>{renderTab()}</main>
      <Footer home={home} setHome={setHome}></Footer>
    </div>
  );
}

export default App;

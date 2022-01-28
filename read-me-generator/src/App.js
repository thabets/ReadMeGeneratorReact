import React, { useState } from "react";
import "./App.css";
import About from "./components/About/index";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import ReadMeGenerator from "./components/ReadMeGenerator/index";

function App() {
  const [home, setHome] = useState("about");
  const renderTab = () => {
    switch (home) {
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

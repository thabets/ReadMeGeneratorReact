import React, { useState } from "react";
import "./App.css";
import About from "./components/About/index";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import ReadMeGenerator from "./components/ReadMeGenerator/index";
import Home from "./components/Home/index";
import HandleSubmit from "./components/Helpers";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const [home, setHome] = useState("Home");
  

  return (
    <div
      style={{
        
      }}
    >
      <Nav home={home} setHome={setHome}></Nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/readMeGenerator" element={<ReadMeGenerator />} />
          <Route path="/handleSubmit" element={<HandleSubmit />}/>
        </Routes>
      </main>
      <Footer home={home} setHome={setHome}></Footer>
    </div>
  );
}

export default App;

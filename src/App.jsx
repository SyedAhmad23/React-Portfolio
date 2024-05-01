import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <Sidenav />
      <Main />
      <Technologies />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

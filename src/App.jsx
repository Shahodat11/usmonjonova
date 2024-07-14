import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutUs/AboutUs";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <AboutUs />
      <Project />
      <Contact />
    </>
  );
}

export default App;

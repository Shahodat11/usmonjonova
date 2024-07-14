import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutUs/AboutUs";
import Project from "./components/project/Project";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <AboutUs />
      <Project />
    </>
  );
}

export default App;

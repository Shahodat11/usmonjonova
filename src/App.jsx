import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutUs/AboutUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

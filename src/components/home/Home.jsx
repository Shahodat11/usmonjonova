import React from "react";
import img from "../../assets/img.webp";
import Navbar from "../navbar/Navbar";
import "../home/home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home" id="home">
        <div className="container">
          <div className="homee">
            <h1 className="home-h1">SHAHODAT USMONJONOVA</h1>
            <p className="home-p">
              I'm a Result-Oriented Web Developer building and managing Websites
              that leads to the success of the overall product
            </p>
            <NavLink to="/project">
              <button className="home-button">Projects</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import "../project/project.css";
import img1 from "../../assets/lk.png";
import img2 from "../../assets/222.png";

const Project = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="aboutus">
            <h2 className="about-h2">PROJECTS</h2>
            <p className="home-p">
              Here you will find some of the personal and clients projects that
              I created with each project containing its own case study
            </p>
            <div className="nav-link2">
              <div className="nav1">
                <img className="img" src={img1} alt="" />
              </div>
              <div className="nav2">
                <h3 className="project-h3">Nornlight </h3>
                <p className="project-p">
                  Norтlight is one of my most successful projects. It is made
                  using React. Used: Redux Toolkit, SCSS, Swiper, React Router
                  DOM...
                </p>
              </div>
            </div>
            <div className="nav-link2">
              <div className="nav1">
                <img className="img" src={img1} alt="" />
              </div>
              <div className="nav2">
                <h3 className="project-h3">Nornlight </h3>
                <p className="project-p">
                  Norтlight is one of my most successful projects. It is made
                  using React. Used: Redux Toolkit, SCSS, Swiper, React Router
                  DOM...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

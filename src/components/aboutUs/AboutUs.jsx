import React from "react";
import "../aboutUs/about.css";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="aboutus">
          <h2 className="about-h2">ABOUT ME</h2>
          <p className="home-p">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
          <div className="nav-link1">
            <div className="nav1">
              <h3 className="about-h3">Get to know me!</h3>
              <p className="about-p">
                This resonates so deeply with me because I have no desire to
                make pretty things just for the sake of it. Some people love
                that! But it's not for me. I only want to make, design or build
                ideas and products that are real, that matter and have an impact
                in the world.
              </p>
              <p className="about-p">
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me
              </p>
            </div>
            <div className="nav2">
              <h3>My Skills</h3>
              <div className="buttons">
                <button>HTML</button>
                <button>CSS</button>
                <button>JavaScript</button>
                <button>React JS</button>
                <button>SASS</button>
                <button>GitHub</button>
                <button>TypeScript</button>
                <button>Bootstrap</button>
                <button>Next JS</button>
                <button>TailwindCSS</button>
                <button>Redux</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

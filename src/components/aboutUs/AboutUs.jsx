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
                I am a <b>Frontend Web Developer</b>. It resonates very deeply.
                Some people love it! I just want to create, design and build
                ideas and products that matter and impact the world. I
                <b> also </b>
                intend to be among the <b>top 10 IT</b> developers.
              </p>
              <p className="about-p">
                I'm open to <b>Job</b> opportunities where I can contribute,
                learn and grow. If you have a good opportunity that matches my
                skills and <b>experience</b> then don't hesitate to
                <b> contact</b> me)
              </p>
            </div>
            <div className="nav2">
              <h3 className="about-h3">My Skills</h3>
              <div className="buttons">
                <button className="button">HTML</button>
                <button className="button">CSS</button>
                <button className="button">JavaScript</button>
                <button className="button">React JS</button>
                <button className="button">SASS</button>
                <button className="button">GitHub</button>
                <button className="button">TypeScript</button>
                <button className="button">Bootstrap</button>
                <button className="button">Next JS</button>
                <button className="button">TailwindCSS</button>
                <button className="button">Redux</button>
                <button className="button">Versel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

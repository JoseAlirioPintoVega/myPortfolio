import React from "react";
import { BsCloudDownload } from "react-icons/bs";
import "../style/aboutme.css";

const AboutMe = () => {
  const skills = [
    "../../html.png",
    "../../css.png",
    "../../javaScript.png",
    "../../react.png",
    "../../tailwind.png",
    "../../nodejs.png",
    "../../postgresSQL.png",
    "../../git.png",
    "../../gitHub.png",
  ];
  return (
    <div className="container__aboutme" id="Aboutme">
      <h3 className="title__aboutme">About me</h3>
      <div className="subcontainer__aboutme">
        <div className="container-details__Aboutme">
          <h4 className="subtitle__aboutme">
            Apple Developer / Engineering Physicst.
          </h4>
          <p className="description__aboutme">
            I am a programmer specialized in the JavaScript language. For
            several years now, I have been working on web projects that use
            technologies such as React, Node.js, Express, and PostgresSQL, among
            others. I am passionate about software development and I love
            constantly learning new technologies and tools to improve my work
            and stay up-to-date with market trends. In this portfolio, you will
            find some of the projects I have worked on, along with details about
            my experience and skills. I hope you enjoy exploring my work and
            find something that inspires you in your own projects.
          </p>
          <button className="btn__cv">
            <BsCloudDownload /> Dowload CV
          </button>
        </div>
        <div className="skill__aboutme">
          <h4 className="title-skill__aboutme">Skills & Technologies</h4>
          <div className="container-skill__aboutme">
            {skills.map((skill) => (
              <div className="img-skill">
                <img key={skill} src={skill} alt={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import { BsCloudDownload } from "react-icons/bs";
import "../style/aboutme.css";

const AboutMe = () => {
  const skills = [
    "../../public/html.png",
    "../../public/css.png",
    "../../public/javaScript.png",
    "../../public/react.png",
    "../../public/tailwind.png",
    "../../public/nodejs.png",
    "../../public/postgresSQL.png",
    "../../public/git.png",
    "../../public/gitHub.png",
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            perspiciatis suscipit laboriosam, laborum dolore aut quia recusandae
            quis ab tempora natus magnam? Quis corporis soluta ratione
            assumenda, velit est ducimus.
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

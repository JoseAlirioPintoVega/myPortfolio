import React from "react";
import { FaEye } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import "../style/projects.css";

const Projects = () => {
  const proyects = [
    {
      title: "primer Proyecto",
      linkview: "https://bejewelled-alpaca-f4c19e.netlify.app",
      linkgitHub: "",
      img: "../../public/nodejs.png",
    },
    {
      title: "primer Proyecto",
      linkview: "https://bejewelled-alpaca-f4c19e.netlify.app",
      linkgitHub: "",
      img: "../../public/nodejs.png",
    },
    {
      title: "primer Proyecto",
      linkview: "https://bejewelled-alpaca-f4c19e.netlify.app",
      linkgitHub: "",
      img: "../../public/nodejs.png",
    },
    {
      title: "primer Proyecto",
      linkview: "https://bejewelled-alpaca-f4c19e.netlify.app",
      linkgitHub: "",
      img: "../../public/nodejs.png",
    },
    {
      title: "primer Proyecto",
      linkview: "https://bejewelled-alpaca-f4c19e.netlify.app",
      linkgitHub: "",
      img: "../../public/nodejs.png",
    },
    {
      title: "primer Proyecto",
      linkview: "https://bejewelled-alpaca-f4c19e.netlify.app",
      linkgitHub: "",
      img: "../../public/nodejs.png",
    },
  ];
  return (
    <div className="container__projects">
      {proyects.map((project) => (
        <div className="container__project">
          <h4 className="title__project">
            <a href=""> {project.title}</a>
          </h4>
          <div className="container-img">
            <img
              src={project.img}
              alt={`imagen del proyecto ${project.title}`}
            />
          </div>
          <div className="container-view__project">
            <a className="see__project" href="#">
              <FaEye />
            </a>
            <a className="seeCode__project" href="#">
              <AiFillGithub />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

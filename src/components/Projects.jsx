import React from "react";
import { FaEye } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import "../style/projects.css";

const Projects = () => {
  const proyects = [
    {
      title: "Rick and Morty",
      linkview: "https://mellifluous-kulfi-a28333.netlify.app/",
      linkgitHub: "https://github.com/JoseAlirioPintoVega/rickandmorty",
      img: "../../rickandmorty.png",
    },
    {
      title: "Pokedex",
      linkview: "https://vermillion-meringue-c0c1e0.netlify.app/",
      linkgitHub: "https://github.com/JoseAlirioPintoVega/pokemon",
      img: "../../pokedex.png",
    },
    {
      title: "WeatherApp",
      linkview: "https://cozy-duckanoo-f0e1c2.netlify.app/",
      linkgitHub: "https://github.com/JoseAlirioPintoVega/weatherApp",
      img: "../../weatherApp.png",
    },
    {
      title: "bookly",
      linkview: "https://bookly-nocountry.netlify.app/",
      linkgitHub: "https://github.com/No-Country/c9-01-m-csharp-react/tree/dev",
      img: "../../booklypng.png",
    },
    /*  {
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
    }, */
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
            <a className="see__project" href={project.linkview}>
              <FaEye />
            </a>
            <a className="seeCode__project" href={project.linkgitHub}>
              <AiFillGithub />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

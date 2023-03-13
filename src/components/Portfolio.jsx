import React from "react";
import Projects from "./Projects";
import "../style/portfolio.css";

const Portfolio = () => {
  return (
    <div id="Portfolio">
      <h3 className="title__portfolio">Porfolio</h3>
      <p className="text__portfolio">
        here you can see my proyects I have worked on
      </p>
      <div className="container__portfolio">
        <Projects />
      </div>
      <h4 className="link-complete__portfolio">
        <a href="#">All Proyects</a>
      </h4>
    </div>
  );
};

export default Portfolio;

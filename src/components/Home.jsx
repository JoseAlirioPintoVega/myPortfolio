import React from "react";
import "../style/home.css";

const Home = () => {
  return (
    <div id="Home">
      <div className="img-container__home">
        <img src="../../índice.jpg" alt="" />
      </div>
      <div className="container-text__home">
        <h1 className="name">Jose Alirio Pinto</h1>
        <h2 className="title">fullStack Developer</h2>
      </div>
    </div>
  );
};

export default Home;

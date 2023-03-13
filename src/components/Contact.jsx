import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import "../style/contact.css";

const Contact = () => {
  return (
    <div id="Contact">
      <h3 className="title__contact">Contact</h3>
      <h4 className="description__contact">
        Contact me if you want us to work together.
      </h4>
      <div className="container__contact">
        <a href="">
          <AiOutlineMail />
        </a>
        <a href="https://github.com/JoseAlirioPintoVega">
          {" "}
          <BsGithub />
        </a>
        <a href="linkedin.com/in/jose-alirio-pinto-vega-04ba8a252">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;

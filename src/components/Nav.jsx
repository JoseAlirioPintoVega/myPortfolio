import React, { useState } from "react";
import "../style/nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navMenu = document.querySelector(".hamburger");

  return (
    <nav className="container__nav">
      <h5 className="logo">logo</h5>
      <div className="menu__nav">
        <div className="hamburger-menu__nav">
          <GiHamburgerMenu
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <ul className={`navigator__nav ${isOpen && "showMenu"}  `}>
          <li>
            <a
              href="#Home"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a href="#Aboutme" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#Portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

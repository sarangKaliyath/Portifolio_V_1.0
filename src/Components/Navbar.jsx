import React from "react";
import "../Components/Navbar.css";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className="Navbar_container">
      <div>
        <Link to="home" activeClass="active" spy={true} smooth={true}>
          Home
        </Link>
      </div>
      <div>
        <Link to="about" spy={true} smooth={true}>
          About
        </Link>
      </div>
      <div>
        <Link to="projects" spy={true} smooth={true}>
          Projects
        </Link>
      </div>
      <div>
        <Link to="contact_me" spy={true} smooth={true}>
          Contact Me
        </Link>
      </div>
    </div>
  );
};

import React from "react";
import "./Header.css";
import { GoLocation } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import me from "../../images/me.jpg";

const Header: React.FC = () => {
  return (
    <section className="header">
      <h1>Simmone Kelly</h1>
      <div className="header-image_container">
        <img alt="simmone" className="header-image" src={me} />
      </div>
      <div>
        <GoLocation className="header-icon" />
        New York, NY
      </div>
      <p>
        When I realized my Hawgwarts letter was never going to arrive, I decided
        to learn the next best thing.
      </p>
      <nav>
        <p>About Me</p>
        <p>Projects</p>
        <p>Skills</p>
      </nav>
      <h4>Contact Me</h4>
      <div className="header-contactMe">
        <a href="mailto: simmone.kelly@gmail.com">
          <MdOutlineMail className="header-icon" />
        </a>
        <a
          href="https://github.com/simmonekelly"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="header-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/simmonekelly/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="header-icon" />
        </a>
      </div>
    </section>
  );
};

export default Header;

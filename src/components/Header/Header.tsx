import React, { useState } from "react";
import "./Header.scss";
import { GoLocation } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import me from "../../images/me.jpg";

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('about');

  const handleClick = (e: any) => {
    setActiveLink(e.target.id)
    // need to update the active element with the onclick
    //or use react router to determine the location
  };

  return (
    <div className="header">
      <h1>Simmone Kelly</h1>
      <div className="header-image_container">
        <img alt="simmone" className="header-image" src={me} />
      </div>
      <div className="header-location_container">
        <GoLocation className="header-icon" />
        <p>New York, NY</p>
      </div>
      <div className="header-blurb">
        <p>
          When I realized my Hawgwarts letter was never going to arrive, I
          decided to learn the next best thing.
        </p>
      </div>
      <nav>
        <a
          href="#about-me"
          id="about"
          className={activeLink === "about" ? "active" : ""}
          onClick={(e) => handleClick(e)}
        >
          About Me
        </a>
        <a
          href="#skills"
          id="skills"
          className={activeLink === "skills" ? "active" : ""}
          onClick={(e) => handleClick(e)}
        >
          Skills
        </a>
        <a
          href="#projects"
          id="projects"
          className={activeLink === "projects" ? "active" : ""}
          onClick={(e) => handleClick(e)}
        >
          Projects
        </a>
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
    </div>
  );
};

export default Header;

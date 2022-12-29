import React from "react";
import "./Header.css";
import { IoPersonSharp, IoCog } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

type Props = {
  location: {};
};

const Header: React.FC = () => {
  return (
    <section className="header">
      <h2>Simmone Kelly</h2>
      <div>
        <GoLocation className="header-icon" />
        New York, NY
      </div>
      <p>
        When I realized my Hawgwarts letter was never going to arrive, I decided
        to learn the next best thing. multiverse
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

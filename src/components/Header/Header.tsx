import React from "react";
import "./Header.css";
import { IoPersonSharp, IoCog } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import me from "../../images/me.jpg";

type Props = {
  location: {};
};

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
        Everyone fails at who they're supposed to be. The measure of a person is
        how well they succeed at being who they are.
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

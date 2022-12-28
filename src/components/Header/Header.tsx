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
        <GoLocation />
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
        {/* <Link to="/projects">
            className= {props.location.pathname.includes("projects") ? "active": ""}>
            <AiOutlineFundProjectionScreen className="footer_icon" />
            <p>Projects</p>
          </Link> */}
        {/* <Link to="/">
            className= {props.location.pathname === "/" ? "active": ""}>
            <IoPersonSharp className="footer_icon" />
            <p>Profile</p>
          </Link> */}
        {/* <Link to="/skills">
            className= {props.location.pathname.includes("skills") ? "active": ""}>
            <IoCog className="footer_icon" />
            <p>Skills</p>
          </Link> */}
      </nav>
      <div>Contact Me</div>
      <div>
        <a href="mailto: simmone.kelly@gmail.com">
          <MdOutlineMail className="overview_contact-icon" />
        </a>
        <a
          href="https://github.com/simmonekelly"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="overview_contact-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/simmonekelly/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="overview_contact-icon" />
        </a>
      </div>
    </section>
  );
};

export default Header;

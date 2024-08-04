import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import me from "../../images/me.jpg";
import styled from "styled-components";
import { Breakpoint, Colors } from "../../styles/styles";

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleClick = (e: any) => {
    setActiveLink(e.target.id);
    // need to update the active element with the onclick
    //or use react router to determine the location
  };

  return (
    <Container className="header">
      <h1>Simmone Kelly</h1>
      <HeaderImageContainer>
        <HeaderImage alt="simmone" src={me} />
      </HeaderImageContainer>
      <Location>
        <LocationIcon />
        <p>New York, NY</p>
      </Location>
      <HeaderBlurb>
        When I realized my Hawgwarts letter was never going to arrive, I decided
        to learn the next&nbsp;best&nbsp;thing.
      </HeaderBlurb>
      <NavigationContainer>
        <Link
          href="#about-me"
          id="about"
          className={activeLink === "about" ? "active" : ""}
          onClick={(e) => handleClick(e)}
        >
          About Me
        </Link>
        <Link
          href="#skills"
          id="skills"
          className={activeLink === "skills" ? "active" : ""}
          onClick={(e) => handleClick(e)}
        >
          Skills
        </Link>
        <Link
          href="#projects"
          id="projects"
          className={activeLink === "projects" ? "active" : ""}
          onClick={(e) => handleClick(e)}
        >
          Projects
        </Link>
      </NavigationContainer>
      <h4>Contact Me</h4>
      <ContactMeSection>
        <IconLink href="mailto: simmone.kelly@gmail.com">
          <MdOutlineMail className="header-icon" />
        </IconLink>
        <IconLink
          href="https://github.com/simmonekelly"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="header-icon" />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/simmonekelly/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="header-icon" />
        </IconLink>
      </ContactMeSection>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  background-color: ${Colors.ashGrey};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${Breakpoint.tablet}px) {
    width: 30%;
    justify-content: center;
    padding: 0 40px;
    height: 100vh;
  }
`;

const HeaderImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const HeaderImageContainer = styled.div`
  width: 250px;
  height: 250px;
  padding: 20px 0 10px;
`;

const Location = styled.div`
  @media (min-width: ${Breakpoint.tablet}px) {
    padding-bottom: 10px;
  }
`;

const LocationIcon = styled(GoLocation)`
  width: 20px;
  height: 20px;
`;

const HeaderBlurb = styled.p`
  @media (min-width: ${Breakpoint.tablet}px) {
    padding: 20px 0 30px;
  }
`;

const NavigationContainer = styled.nav`
  display: none;
  padding-bottom: 20px;

  @media (min-width: ${Breakpoint.tablet}px) {
    display: block;
  }
`;

const Link = styled.a`
  color: inherit;
  padding: 0 5px;

  &.active {
    color: ${Colors.mountbattenPink};
    font-weight: 800;

    &:hover {
      color: ${Colors.mountbattenPink};
    }
  }

  &:hover {
    color: ${Colors.alabaster};
  }
`;

const IconLink = styled.a`
  color: inherit;
  padding: 0 5px;

  & > svg {
    &:hover {
      fill: ${Colors.alabaster};
    }
  }
`;

const ContactMeSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export default Header;

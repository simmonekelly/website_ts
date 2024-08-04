import React from "react";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import { Breakpoint, Colors, H3, Paragraph } from "../../styles/styles";

type ProjectProps = {
  project: project;
};

type project = {
  name: string;
  description: string;
  github: string;
  link: string;
  tech: string;
};

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <ProjectCardContainer>
      <HeaderContainer>
        <H3>{project.name}</H3>
        <a href={project.github}>
          <StyledIcon />
        </a>
      </HeaderContainer>
      <Paragraph>{project.description}</Paragraph>
      <Paragraph>{project.tech}</Paragraph>
    </ProjectCardContainer>
  );
};

const ProjectCardContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${Colors.isabellene};
  border-radius: 5px;
  padding: 20px;
  border: solid 1px ${Colors.champagnePink};
  box-shadow: 10px 5px 5px ${Colors.mountbattenPink};

  @media (min-width: ${Breakpoint.tablet}px) {
    width: 450px;
    height: 300px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledIcon = styled(FaGithub)`
  height: 25px;
  width: 25px;
`;

export default ProjectCard;

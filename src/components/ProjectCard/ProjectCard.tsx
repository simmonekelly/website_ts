import React from "react";
import "./ProjectCard.scss";
import { FaGithub } from "react-icons/fa";

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
    <div className="projectcard">
      <div className="projectcard_icon-header">
        <h3>{project.name}</h3>
        <a href={project.github}>
          <FaGithub className="projectcard_icon" />
        </a>
      </div>
      <p>{project.description}</p>
      <p>{project.tech}</p>
    </div>
  );
};

export default ProjectCard;

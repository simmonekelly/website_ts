import React from "react";
import "./projectcard.css";
import { FaGithub } from "react-icons/fa";
import ProjectsPage from "../../pages/projects/Page";
//import { HiOutlineExternalLink, HiCode } from "react-icons/hi";

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
  //console.log(project);
  return (
    <div className="projectcard">
      <div className="projectcard_icon-header">
        <h2>{project.name}</h2>
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

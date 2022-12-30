import React from "react";
import { ProjectCard } from "../../components";
import data from "./projectsData.json";
import "./projectspage.css";

const ProjectsPage: React.FC = () => {
  return (
    <div className="main-content_section projects">
      <h2>Recent Projects</h2>
      <div className="projects-container">
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;

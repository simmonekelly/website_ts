import React from "react";
import { ProjectCard } from "../../components";
import data from "./projectsData.json";
import "./ProjectsPage.scss";

const ProjectsPage: React.FC = () => {
  return (
    <section className="main-content_section projects">
      <h2>Recent Projects</h2>
      <div className="projects-container">
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectsPage;

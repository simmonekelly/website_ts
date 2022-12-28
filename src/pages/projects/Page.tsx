import React from "react";
import { ProjectCard } from "../../components";
import data from "./projectsData.json";
import "./projectspage.css";

const ProjectsPage: React.FC = () => {
  //console.log(data);

  return (
    <div className="main-content_section projects">
      <h1>Projects Page</h1>
      <div className="projects-container">
        {data.map((project) => {
          //console.log(project);
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;

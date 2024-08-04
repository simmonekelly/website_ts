import React from "react";
import { ProjectCard } from "../../components";
import data from "./projectsData.json";
import "./ProjectsPage.scss";
import SectionLayout from "../../components/Layout/SectionLayout";

const ProjectsPage: React.FC = () => {
  return (
    <SectionLayout id="projects">
      <h2>Recent Projects</h2>
      <div className="projects-container">
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </SectionLayout>
  );
};

export default ProjectsPage;

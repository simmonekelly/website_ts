import React from "react";
import { ProjectCard } from "../../components";
import data from "./projectsData.json";
import SectionLayout from "../../components/Layout/SectionLayout";
import styled from "styled-components";

const ProjectsPage: React.FC = () => {
  return (
    <SectionLayout id="projects">
      <h2>Recent Projects</h2>
      <ProjectsContainer>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </ProjectsContainer>
    </SectionLayout>
  );
};

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default ProjectsPage;

import React from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "./ProjectCard";
import data from "../../../data/projectsData.json";
import { SectionLayout } from "../../Layout/SectionLayout";
import { SectionHeader } from "../../SectionHeader";
import styled from "styled-components";
import { Breakpoint } from "../../../styles/styles";

type ProjectsProps = {
  showAll?: boolean;
};

export const Projects: React.FC<ProjectsProps> = ({ showAll = false }) => {
  const projects = showAll ? data : data.slice(0, 3);

  return (
    <SectionLayout id="projects">
      <SectionHeader
        title="Projects"
        linkText={showAll ? undefined : "See all projects"}
        linkTo={showAll ? undefined : "/projects"}
      />
      <ProjectsGrid>
        {(projects as Project[]).map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </ProjectsGrid>
    </SectionLayout>
  );
};

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: ${Breakpoint.tablet}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

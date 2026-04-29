import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styled from "styled-components";
import { theme, Breakpoint, H3, Paragraph } from "../../../styles/styles";
import { Tag } from "../../Tag";

export type Project = {
  name: string;
  description: string;
  github: string;
  link: string;
  tech: string[];
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <Thumbnail />
      <CardBody>
        <HeaderRow>
          <H3>{project.name}</H3>
          <IconLinks>
            <IconLink href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={16} />
            </IconLink>
            {project.link && (
              <IconLink href={project.link} target="_blank" rel="noreferrer" aria-label="Live site">
                <FaExternalLinkAlt size={14} />
              </IconLink>
            )}
          </IconLinks>
        </HeaderRow>
        <Description>{project.description}</Description>
        <TagRow>
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </TagRow>
      </CardBody>
    </Card>
  );
};

const Card = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
  overflow: hidden;
`;

const Thumbnail = styled.div`
  height: 120px;
  background: ${theme.colors.border};

  @media (min-width: ${Breakpoint.tablet}px) {
    height: 140px;
  }
`;

const CardBody = styled.div`
  padding: 16px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const IconLinks = styled.div`
  display: flex;
  gap: 8px;
`;

const IconLink = styled.a`
  color: ${theme.colors.mutedText};
  transition: color 200ms ease-in-out;

  &:hover {
    color: ${theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.focusRing};
    outline-offset: 2px;
  }
`;

const Description = styled(Paragraph)`
  color: ${theme.colors.mutedText};
  font-size: 13px;
  margin-bottom: 12px;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export default ProjectCard;

import React from "react";
import styled from "styled-components";
import { H3, H4, Paragraph } from "../../styles/styles";
import Tool from "./Tool";

type ExperienceCardProps = {
  job: Experience;
};

export type Experience = {
  year: string;
  title: string;
  company: string;
  description: string;
  tools: [];
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ job }) => {
  const { year, title, company, description, tools } = job;

  return (
    <CardContainer>
      <H3>{year}</H3>
      <ExperienceDetailsContainer>
        <H4>
          {title}- {company}
        </H4>
        <Paragraph>{description}</Paragraph>
        <ToolsContainer>
          {tools.map((tool, i) => {
            return <Tool tool={tool} key={i} />;
          })}
        </ToolsContainer>
      </ExperienceDetailsContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ExperienceDetailsContainer = styled.div``;

const ToolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default ExperienceCard;

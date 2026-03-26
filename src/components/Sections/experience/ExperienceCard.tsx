import React from "react";
import styled from "styled-components";
import { theme, H3, Paragraph, MutedText } from "../../../styles/styles";
import { Tag } from "../../Tag";

export type Experience = {
  year: string;
  title: string;
  company: string;
  description: string;
  tools: string[];
};

type ExperienceCardProps = {
  job: Experience;
  detailed?: boolean;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ job, detailed = false }) => {
  const { year, title, company, description, tools } = job;

  return (
    <Card>
      <TopRow>
        <H3>{title}</H3>
        <MutedText>{year}</MutedText>
      </TopRow>
      <Company>{company}</Company>
      <Description>{description}</Description>
      {detailed && (
        <TagRow>
          {tools.map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </TagRow>
      )}
    </Card>
  );
};

const Card = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
  padding: 20px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Company = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.primary};
  display: block;
  margin-top: 2px;
  margin-bottom: 8px;
`;

const Description = styled(Paragraph)`
  color: ${theme.colors.mutedText};
  font-size: 14px;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
`;

export default ExperienceCard;

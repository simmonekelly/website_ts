import React from "react";
import styled from "styled-components";
import { theme, Breakpoint, H2, H4, Paragraph } from "../../styles/styles";
import { SectionLayout } from "../Layout/SectionLayout";
import skillsData from "../../data/skillsData.json";

type SkillCategory = {
  category: string;
  skills: string[];
};

export const SkillsOverview: React.FC = () => {
  return (
    <SectionLayout id="skills" variant="alt">
      <H2 style={{ marginBottom: "20px" }}>What's In My Tool Kit</H2>
      <ColumnsContainer>
        {(skillsData as SkillCategory[]).map((cat) => (
          <Column key={cat.category}>
            <H4>{cat.category}</H4>
            <SkillList>
              {cat.skills.map((skill) => (
                <SkillName key={skill}>{skill}</SkillName>
              ))}
            </SkillList>
          </Column>
        ))}
      </ColumnsContainer>
    </SectionLayout>
  );
};

const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${Breakpoint.tablet}px) {
    flex-direction: row;
    gap: 32px;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const SkillList = styled.div`
  margin-top: 8px;
`;

const SkillName = styled(Paragraph)`
  line-height: 2;
`;

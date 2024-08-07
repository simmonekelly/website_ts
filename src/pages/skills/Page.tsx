import React from "react";
import { SkillCard } from "../../components";
import data from "./skillsData.json";
import SectionLayout from "../../components/Layout/SectionLayout";
import styled from "styled-components";
import { Breakpoint, H2 } from "../../styles/styles";

const SkillsPage: React.FC = () => {
  return (
    <SectionLayout id="skills">
      <H2>What's In My Tool Kit</H2>
      <SkillsContainter>
        {data.map((category, i) => {
          return <SkillCard skillCategory={category} key={i} />;
        })}
      </SkillsContainter>
    </SectionLayout>
  );
};

const SkillsContainter = styled.div`
  width: 100%;

  @media (min-width: ${Breakpoint.tablet}px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export default SkillsPage;

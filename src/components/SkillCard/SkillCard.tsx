import React from "react";
import "./SkillCard.scss";
import type { SkillProps } from "./Skill";
import Skill from "./Skill";
import styled from "styled-components";
import { Breakpoint, Colors, H3 } from "../../styles/styles";

type SkillCardProps = {
  skillCategory: SkillType;
};

type SkillType = {
  category: string;
  skill: SkillProps[];
};

const SkillCard: React.FC<SkillCardProps> = ({ skillCategory }) => {
  return (
    <SkillCardContainer>
      <H3>{skillCategory.category}</H3>
      <SkillSection>
        {skillCategory.skill.map((skill) => {
          return <Skill image={skill.image} name={skill.name} />;
        })}
      </SkillSection>
    </SkillCardContainer>
  );
};

const SkillCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.isabellene};
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 5px;
  padding-top: 10px;
  border: solid 1px ${Colors.champagnePink};
  box-shadow: 10px 5px 5px ${Colors.mountbattenPink};
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${Breakpoint.tablet}px) {
    width: 40%;
  }
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export default SkillCard;

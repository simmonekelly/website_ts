import React from "react";
import useSkillIcon from "./useSkillIcon";
import styled from "styled-components";
import { Paragraph } from "../../styles/styles";

export type SkillProps = {
  image: string;
  name: string;
};

const Skill: React.FC<SkillProps> = ({ image, name }) => {
  const skillIcon = useSkillIcon(image);
  return (
    <SkillContainer>
      <Paragraph>{name}</Paragraph>
      {skillIcon}
    </SkillContainer>
  );
};

const SkillContainer = styled.div`
  margin: 10px;
`;

export default Skill;

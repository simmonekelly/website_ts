import React from "react";
import useSkillIcon from "./useSkillIcon";
import styled from "styled-components";

export type SkillProps = {
  image: string;
  name: string;
};

const Skill: React.FC<SkillProps> = ({ image, name }) => {
  const skillIcon = useSkillIcon(image);
  return (
    <SkillContainer>
      <p>{name}</p>
      {skillIcon}
    </SkillContainer>
  );
};

const SkillContainer = styled.div`
  margin: 10px;
`;

export default Skill;

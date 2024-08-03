import React from "react";
import useSkillIcon from "./useSkillIcon";

export type SkillProps = {
  image: string;
  name: string;
};

const Skill: React.FC<SkillProps> = ({ image, name }) => {
  const skillIcon = useSkillIcon(image);
  return (
    <div className="skill">
      <p>{name}</p>
      {skillIcon}
    </div>
  );
};

export default Skill;

import React from "react";

export type SkillProps = {
  image: string;
  name: string;
};

const Skill: React.FC<SkillProps> = ({ image, name }) => {
  return (
    <div>
      <p>{name}</p>
      <p>image</p>
    </div>
  );
};

export default Skill;

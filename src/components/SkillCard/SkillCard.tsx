import React from "react";
import "./SkillCard.scss";
import type { SkillProps } from "./Skill";
import Skill from "./Skill";

type SkillCardProps = {
  skillCategory: SkillType;
};

type SkillType = {
  category: string;
  skill: SkillProps[];
};

const SkillCard: React.FC<SkillCardProps> = ({ skillCategory }) => {

  return (
    <div className="skill-category">
      <h3>{skillCategory.category}</h3>
      <div className="skill-category-container">
        {skillCategory.skill.map((skill) => {
          return <Skill image={skill.image} name={skill.name} />;
        })}
      </div>
    </div>
  );
};

export default SkillCard;

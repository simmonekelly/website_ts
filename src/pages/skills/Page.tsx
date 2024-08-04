import React from "react";
import { SkillCard } from "../../components";
import "./SkillsPage.scss";
import data from "./skillsData.json";
import SectionLayout from "../../components/Layout/SectionLayout";

const SkillsPage: React.FC = () => {
  return (
    <SectionLayout id="skills">
      <h2>What's In My Tool Kit</h2>
      <div className="skill-container">
        {data.map((category, i) => {
          return <SkillCard skillCategory={category} key={i} />;
        })}
      </div>
    </SectionLayout>
  );
};

export default SkillsPage;

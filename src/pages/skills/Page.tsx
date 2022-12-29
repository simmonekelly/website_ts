import React from "react";
import { SkillCard } from "../../components";
import "./SkillsPage.css";
import data from "./skillsData.json";

const SkillsPage: React.FC = () => {
  console.log(data);
  return (
    <div className="main-content_section">
      <h1>What I Play With</h1>
      {data.map((category, i) => {
        return <SkillCard skillCategory={category} key={i} />;
      })}
    </div>
  );
};

export default SkillsPage;

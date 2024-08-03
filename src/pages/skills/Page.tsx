import React from "react";
import { SkillCard } from "../../components";
import "./SkillsPage.scss";
import data from "./skillsData.json";

const SkillsPage: React.FC = () => {
  return (
    <section className="main-content_section" id="skills">
      <h2>What's In My Tool Kit</h2>
      <div className="skill-container">
        {data.map((category, i) => {
          return <SkillCard skillCategory={category} key={i} />;
        })}
      </div>
    </section>
  );
};

export default SkillsPage;

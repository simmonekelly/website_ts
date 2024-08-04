import React from "react";
import data from "./experienceData.json";
import SectionLayout from "../../components/Layout/SectionLayout";
import { H2 } from "../../styles/styles";
import ExperienceCard, { Experience } from "./ExperienceCard";

const ExperiencePage: React.FC = () => {
  return (
    <SectionLayout id="experience">
      <H2>Experience</H2>
      {data.map((job, i) => {
        return <ExperienceCard job={job as Experience} key={i} />;
      })}
    </SectionLayout>
  );
};

export default ExperiencePage;

import React from "react";
import data from "../../../data/experienceData.json";
import { SectionLayout } from "../../Layout/SectionLayout";
import { SectionHeader } from "../../SectionHeader";
import ExperienceCard from "./ExperienceCard";
import type { Experience as ExperienceType } from "./ExperienceCard";
import styled from "styled-components";

type ExperienceProps = {
  showAll?: boolean;
};

export const Experience: React.FC<ExperienceProps> = ({ showAll = false }) => {
  const jobs = showAll ? data : data.slice(0, 2);

  return (
    <SectionLayout id="experience" variant="alt">
      <SectionHeader
        title="Experience"
        linkText={showAll ? undefined : "Full history"}
        linkTo={showAll ? undefined : "/experience"}
      />
      <JobList>
        {(jobs as ExperienceType[]).map((job, i) => (
          <ExperienceCard job={job} key={i} detailed={showAll} />
        ))}
      </JobList>
    </SectionLayout>
  );
};

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

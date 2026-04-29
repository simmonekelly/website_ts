import React from "react";
import { Hero } from "../components/Sections/Hero";
import { SkillsOverview } from "../components/Sections/SkillsOverview";
import { Projects } from "../components/Sections/projects/Projects";
import { Experience } from "../components/Sections/experience/Experience";
import ContactMe from "../components/Sections/ContactMe";

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <SkillsOverview />
      <Projects />
      <Experience />
      <ContactMe />
    </>
  );
};

export default LandingPage;

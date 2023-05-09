import React from "react";
import { SkillCard } from "../../components";
import "./SkillsPage.scss";
import data from "./skillsData.json";

const SkillsPage: React.FC = () => {
  return (
    <section className="main-content_section">
      <h2>What's In My Tool Kit</h2>
      <p>
        I was first introduced to programming back before I knew that learning
        how to create a custom theme for my Mysapce page was the foundations of
        a career as an engineer. I graduated college with a degree in marketing
        and management, and persued a career as an email and digital marketer
        for&nbsp;8&nbsp;years.
      </p>
      <p>
        I have always been facinated with the <i>how</i> of how things are
        built, and the functionality of it all. During the pandemic I decided to
        follow that passion and complete a part time web development bootcamp at{" "}
        <a href="https://brainstation.io/">BrainStation</a> where I successfully
        built multiple single page web apps using vanilla JavaScript as well as
        React. After graduation I transitioned internally at{" "}
        <a href="https://www.onepeloton.com/">Peloton</a> where I now am a
        Software Engineer on our Ecommerce team, on the Membership Software
        squad.
      </p>
      {data.map((category, i) => {
        return <SkillCard skillCategory={category} key={i} />;
      })}
    </section>
  );
};

export default SkillsPage;

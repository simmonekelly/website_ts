import React from "react";
import { SkillCard } from "../../components";
import "./SkillsPage.css";
import data from "./skillsData.json";

const SkillsPage: React.FC = () => {
  console.log(data);
  return (
    <div className="main-content_section">
      <h2>What I Play With</h2>
      <p>
        When I realized my Hawgwarts letter was never going to arrive, I decided
        to learn the next best thing.
      </p>
      <p>
        I was first introduced to programming in the days of MySpace before I
        new you could make a career out of it. In graduated college with a
        degree in marketing and management, and developed a career as an email
        and digital marketer for&nbsp;8&nbsp;years.
      </p>
      <p>
        I have always been facinated with the <i>how</i> behind sites and apps,
        and the functionality of it all. During the pandemic I decided to follow
        that passion and complete a part time web development bootcamp at{" "}
        <a href="https://brainstation.io/">BrainStation</a> where I successfully
        built multiple wingle page web apps using vanilla JavaScript as well as
        React. After graduation I transitioned internally at{" "}
        <a href="https://www.onepeloton.com/">Peloton</a> where I now am a
        Software Engineer on our Ecommerce team, on the Membership Software
        squad.
      </p>
      {data.map((category, i) => {
        return <SkillCard skillCategory={category} key={i} />;
      })}
    </div>
  );
};

export default SkillsPage;

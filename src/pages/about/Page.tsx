import React from "react";
import "./AboutPage.scss";
import SectionLayout from "../../components/Layout/SectionLayout";

const AboutPage: React.FC = () => {
  return (
    <SectionLayout id="about-me">
      <h2>Curiouser and Curiouser</h2>
      <p>We're all mad here</p>
      <div className="aboutMe-columns">
        <div className="aboutMe-columns_column">
          <h3>Who Am I?</h3>
          <p>
            Email marketer turned software engineer, currently frolicking around
            NYC. I like to pick up heavy things and setting them back down in
            the gym, hitting up a local brewery, or blessing my friends with the
            sweet sound of emo throwbacks&nbsp;at karaoke.
          </p>
          <p>
            I was first introduced to programming back when I was just trying to
            have a sweet custome Myspace page, and loved every aspect of it, but
            had no idea you could create a career out of it. I went to college
            and graduated with a degree in marketing and management, and persued
            a career in email and digital marketing for&nbsp;8&nbsp;years.
          </p>
          <p>
            During the pandemic I decided to revist programming, and completed a
            part time web development bootcamp at{" "}
            <a href="https://brainstation.io/">BrainStation</a> where I fell in
            love with all things web development. After graduation I
            transitioned internally at{" "}
            <a href="https://www.onepeloton.com/">Peloton</a> where I now am a
            Software Engineer on our Ecommerce team and have never looked back.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutPage;

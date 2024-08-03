import React from "react";
import "./AboutPage.scss";

const AboutPage: React.FC = () => {
  return (
    <section className="main-content_section" id="about-me">
      <h2>Curiouser and Curiouser</h2>
      <p>We're all mad here</p>
      <div className="aboutMe-columns">
        <div className="aboutMe-columns_column">
          <h3>Who Am I?</h3>
          <p>
            Email marketer turned software engineer, currently frolicking around NYC. 
            I like to pick up heavy things and setting them back down in 
            the gym, hitting up a local brewery, or blessing my friends with 
            the sweet sound of emo throwbacks&nbsp;at karaoke.
          </p>
          {/* <p>
            Always remember:
            <br />
            Never let what matters least
            <br />
            get in the way of what matters&nbsp;most.
          </p> */}
          {/* ^^might want to remove */}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

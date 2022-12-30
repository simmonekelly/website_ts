import React from "react";
import "./aboutPage.css";

const AboutPage: React.FC = () => {
  return (
    <div className="main-content_section">
      {/* <h2>We're All Mad Here</h2> */}
      <h2>Pleased to Meet You Stranger</h2>
      <p>Welcome to the Ending</p>
      <div className="aboutMe-columns">
        <div className="aboutMe-columns_column">
          <h3>Who Am I?</h3>
          <p>
            Email marketer turned software engineer, living my best city girl
            life in NYC. When I'm not building web apps, you can find me picking
            heavy things up and setting them back down in the gym, hitting up a
            local brewery, or blessing my friends with the sweet sound of emo
            throwbacks at karaoke.
          </p>
          <p>
            Always remember:
            <br />
            Never let what matters least get in the way of what
            matters&nbsp;most.
          </p>
        </div>
        <div className="aboutMe-columns_column">image</div>
      </div>
    </div>
  );
};

export default AboutPage;

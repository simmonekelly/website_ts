import React from "react";
import "./aboutPage.css";

const AboutPage: React.FC = () => {
  return (
    <div className="main-content_section">
      <h1>Who Am I?</h1>
      <p>“Who are you?” </p>
      <p>
        I hardly know, just at present—at least I know who I was when I got up
        this morning, but I think I must have been changed several times since
        then.
      </p>
      <div className="aboutMe-columns">
        <div>
          <h2>About Me</h2>
          <p>
            Email marketer turned full stack web developer. When I'm not your
            guy in the chair, you can find me picking up heavy things and
            setting them back down in the gym, grabbing a nice craft beer at a
            local brewery, or living out my best elder emo life singing along
            with a crowd to nostalgic pop punk.
          </p>
          <p>Always remember:</p>
          <p>
            Never let what matters least get in the way of what matters most.
          </p>
          <p>
            “The best way to explain it is to do it.” —Chapter 3, A Caucus-Race
            and a Long Tale
          </p>
        </div>
        <div>
          <h2>Header</h2>
          <p>
            “Who are you?” said the Caterpillar. This was not an encouraging
            opening for a conversation. Alice replied, rather shyly, “I—I hardly
            know, Sir, just at present—at least I know who I was when I got up
            this morning, but I think I must have been changed several times
            since then
          </p>
          <p>
            “The best way to explain it is to do it.” —Chapter 3, A Caucus-Race
            and a Long Tale
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

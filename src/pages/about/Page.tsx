import React from "react";
import SectionLayout from "../../components/Layout/SectionLayout";
import styled from "styled-components";
import {
  Breakpoint,
  Colors,
  H2,
  H3,
  Link,
  Paragraph,
} from "../../styles/styles";

const AboutPage: React.FC = () => {
  return (
    <SectionLayout id="about-me">
      <H2>Curiouser and Curiouser</H2>
      <Paragraph>We're all mad here</Paragraph>
      <AboutMeContainer className="aboutMe-columns">
        <H3>Who Am I?</H3>
        <Paragraph>
          Email marketer turned software engineer, currently frolicking around
          NYC. I like to pick up heavy things and setting them back down in the
          gym, hitting up a local brewery, or blessing my friends with the sweet
          sound of emo throwbacks&nbsp;at karaoke.
        </Paragraph>
        <Paragraph>
          I was first introduced to programming back when I was just trying to
          have a sweet custome Myspace page, and loved every aspect of it, but
          had no idea you could create a career out of it. I went to college and
          graduated with a degree in marketing and management, and pursued a
          career in email and digital marketing for&nbsp;8&nbsp;years.
        </Paragraph>
        <Paragraph>
          During the pandemic I decided to revist programming, and completed a
          part time web development bootcamp at{" "}
          <StyledLink href="https://brainstation.io/">BrainStation</StyledLink>{" "}
          where I fell in love with all things web development. After graduation
          I transitioned internally at{" "}
          <StyledLink href="https://www.onepeloton.com/">Peloton</StyledLink>{" "}
          where I now am a Software Engineer on our Ecommerce team and have
          never looked back.
        </Paragraph>
      </AboutMeContainer>
    </SectionLayout>
  );
};

const AboutMeContainer = styled.div`
  @media (min-width: ${Breakpoint.tablet}px) {
    @include tablet {
      display: flex;
      flex-direction: row;
      text-align: center;
      width: 100%;
    }
  }
`;

const StyledLink = styled(Link)`
  color: ${Colors.mountbattenPink};
  font-weight: 500;

  &:hover {
    color: ${Colors.ashGrey};
  }
`;

export default AboutPage;

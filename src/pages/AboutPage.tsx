import React from "react";
import styled from "styled-components";
import { theme, Breakpoint, H2, Paragraph } from "../styles/styles";
import { SectionLayout } from "../components/Layout/SectionLayout";

const AboutPage: React.FC = () => {
  return (
    <SectionLayout id="about">
      <H2 style={{ marginBottom: "20px" }}>About Me</H2>
      <Content>
        <Paragraph>
          Email marketer turned software engineer, currently frolicking around
          NYC. When I'm not coding, you'll find me lifting heavy things and
          setting them back down in the gym, hitting up a local brewery, or
          blessing my friends with the sweet sound of emo throwbacks at karaoke.
        </Paragraph>
        <Paragraph style={{ marginTop: "16px" }}>
          I was first introduced to programming back when I was just trying to
          have a sweet custom Myspace page. I loved it — but at the time, I
          didn't realize it could be a career. I went on to earn a degree in
          marketing and management, and spent 8 years working in email and
          digital marketing.
        </Paragraph>
        <Paragraph style={{ marginTop: "16px" }}>
          During the pandemic I revisited programming and quickly rediscovered
          how much I enjoyed it. I completed a part time web development
          bootcamp at{" "}
          <StyledLink href="https://brainstation.io/">BrainStation</StyledLink>{" "}
          where I fell in love with all things web development. After
          graduating, I transitioned internally at{" "}
          <StyledLink href="https://www.onepeloton.com/">Peloton</StyledLink>{" "}
          into a Software Engineering role on our Ecommerce team and have never
          looked back.
        </Paragraph>
      </Content>
    </SectionLayout>
  );
};

const Content = styled.div`
  max-width: 600px;
`;

const StyledLink = styled.a`
  color: ${theme.colors.primary};
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.primaryHover};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.focusRing};
    outline-offset: 2px;
  }
`;

export default AboutPage;

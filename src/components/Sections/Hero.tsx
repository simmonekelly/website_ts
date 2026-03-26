import React from "react";
import me from "../../images/me.jpg";
import styled from "styled-components";
import { theme, Breakpoint, H1, Paragraph } from "../../styles/styles";
import { Button } from "../Button";

export const Hero: React.FC = () => {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <TextSide>
          <H1>
            Simmone
            <br />
            Kelly
          </H1>
          <Subtitle>
            Full-Stack Web Developer building things that matter. Based in NYC.
          </Subtitle>
          <ButtonGroup>
            <Button href="/resume.pdf" target="_blank" rel="noreferrer" primary>
              Download Resume
            </Button>
            <Button href="#contact">Contact Me</Button>
          </ButtonGroup>
        </TextSide>
        <PhotoSide>
          <HeroImage src={me} alt="Simmone Kelly" />
        </PhotoSide>
      </HeroContent>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  background: ${theme.colors.background};
  padding: 48px 20px;

  @media (min-width: ${Breakpoint.tablet}px) {
    padding: 64px 32px;
  }
`;

const HeroContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: ${Breakpoint.tablet}px) {
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }
`;

const TextSide = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: ${Breakpoint.tablet}px) {
    text-align: left;
  }
`;

const Subtitle = styled(Paragraph)`
  color: ${theme.colors.mutedText};
  margin-top: 10px;
`;

const ButtonGroup = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 10px;
  justify-content: center;

  @media (min-width: ${Breakpoint.tablet}px) {
    justify-content: flex-start;
  }
`;

const PhotoSide = styled.div`
  flex-shrink: 0;
`;

const HeroImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 16px;
  object-fit: cover;

  @media (min-width: ${Breakpoint.tablet}px) {
    width: 160px;
    height: 160px;
  }
`;

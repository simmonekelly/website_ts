import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import styled from "styled-components";
import { theme, Breakpoint, H2, Paragraph } from "../../styles/styles";
import { SectionLayout } from "../Layout/SectionLayout";

const ContactMe: React.FC = () => {
  return (
    <SectionLayout id="contact">
      <CenteredContent>
        <H2>Let's Connect</H2>
        <Subtitle>Open to opportunities and collaboration.</Subtitle>
        <LinksRow>
          <ContactLink href="mailto:simmone.kelly@gmail.com">
            <MdOutlineMail size={18} />
            Email
          </ContactLink>
          <ContactLink
            href="https://github.com/simmonekelly"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={18} />
            GitHub
          </ContactLink>
          <ContactLink
            href="https://www.linkedin.com/in/simmonekelly/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </ContactLink>
        </LinksRow>
      </CenteredContent>
    </SectionLayout>
  );
};

const CenteredContent = styled.div`
  text-align: center;
`;

const Subtitle = styled(Paragraph)`
  color: ${theme.colors.mutedText};
  margin-top: 8px;
  margin-bottom: 24px;
`;

const LinksRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: 6px;
  font-family: ${theme.fonts.body};
  font-size: 13px;
  color: ${theme.colors.primaryText};
  text-decoration: none;
  transition: all 200ms ease-in-out;

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.focusRing};
    outline-offset: 2px;
  }

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 14px;
  }
`;

export default ContactMe;

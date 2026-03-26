import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import styled from "styled-components";
import { theme, Breakpoint } from "../styles/styles";

export const Footer: React.FC = () => {
  return (
    <FooterBar>
      <FooterContent>
        <Copyright>&copy; {new Date().getFullYear()} Simmone Kelly</Copyright>
        <SocialLinks>
          <SocialLink href="mailto:simmone.kelly@gmail.com" aria-label="Email">
            <MdOutlineMail size={18} />
          </SocialLink>
          <SocialLink
            href="https://github.com/simmonekelly"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/simmonekelly/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterBar>
  );
};

const FooterBar = styled.footer`
  background: ${theme.colors.surface};
  border-top: 1px solid ${theme.colors.border};
  padding: 24px 20px;

  @media (min-width: ${Breakpoint.tablet}px) {
    padding: 24px 32px;
  }
`;

const FooterContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 12px;
  color: ${theme.colors.mutedText};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialLink = styled.a`
  color: ${theme.colors.mutedText};
  transition: color 200ms ease-in-out;

  &:hover {
    color: ${theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.focusRing};
    outline-offset: 2px;
  }
`;

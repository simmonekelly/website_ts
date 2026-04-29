import styled from "styled-components";
import { theme } from "./theme";

export { theme };

export const Breakpoint = theme.breakpoints;

export const H1 = styled.h1`
  font-family: ${theme.fonts.display};
  font-weight: 400;
  font-size: 36px;
  margin: 0;
  line-height: 1.1;
  color: ${theme.colors.primaryText};

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 48px;
  }

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 56px;
  }
`;

export const H2 = styled.h2`
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  line-height: 1.3;
  color: ${theme.colors.primaryText};

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 28px;
  }

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 32px;
  }
`;

export const H3 = styled.h3`
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 16px;
  margin: 0;
  line-height: 1.3;
  color: ${theme.colors.primaryText};

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 18px;
  }

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 20px;
  }
`;

export const H4 = styled.h4`
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 10px;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${theme.colors.primary};

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 11px;
  }
`;

export const Paragraph = styled.p`
  font-family: ${theme.fonts.body};
  font-weight: 400;
  font-size: 14px;
  margin: 0;
  line-height: 1.6;
  color: ${theme.colors.primaryText};

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 15px;
  }

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 16px;
  }
`;

export const MutedText = styled.p`
  font-family: ${theme.fonts.body};
  font-weight: 400;
  font-size: 12px;
  margin: 0;
  line-height: 1.6;
  color: ${theme.colors.mutedText};

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 13px;
  }
`;
